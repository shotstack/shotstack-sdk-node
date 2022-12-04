# Shotstack NodeJS SDK <!-- omit in toc -->

Node SDK for [Shotstack](http://shotstack.io), the cloud video editing API.

Shotstack is a cloud based video editing platform that enables the editing of videos using code.

The platform uses an API and a JSON format for specifying how videos should be edited and what assets and titles should be used.

A server based render farm takes care of rendering the videos allowing multiple videos to be created simultaneously.

For examples of how to use the SDK to create videos using code checkout the Node demo repo: https://github.com/shotstack/node-demos

## Contents <!-- omit in toc -->
- [Using the Node SDK](#using-the-node-sdk)
    - [Installation](#installation)
  - [Video Editing](#video-editing)
    - [Video Editing Example](#video-editing-example)
    - [Status Check Example](#status-check-example)
  - [Video Editing Schemas](#video-editing-schemas)
    - [Edit](#edit)
    - [Timeline](#timeline)
    - [Soundtrack](#soundtrack)
    - [Font](#font)
    - [Track](#track)
    - [Clip](#clip)
    - [VideoAsset](#videoasset)
    - [ImageAsset](#imageasset)
    - [TitleAsset](#titleasset)
    - [HtmlAsset](#htmlasset)
    - [AudioAsset](#audioasset)
    - [LumaAsset](#lumaasset)
    - [Transition](#transition)
    - [Offset](#offset)
    - [Crop](#crop)
    - [Transformation](#transformation)
    - [RotateTransformation](#rotatetransformation)
    - [SkewTransformation](#skewtransformation)
    - [FlipTransformation](#fliptransformation)
    - [MergeField](#mergefield)
  - [Template Schemas](#template-schemas)
    - [Template](#template)
    - [TemplateRender](#templaterender)
  - [Output Schemas](#output-schemas)
    - [Output](#output)
    - [Size](#size)
    - [Range](#range)
    - [Poster](#poster)
    - [Thumbnail](#thumbnail)
  - [Destinations](#destinations)
    - [ShotstackDestination](#shotstackdestination)
    - [MuxDestination](#muxdestination)
    - [MuxDestinationOptions](#muxdestinationoptions)
    - [S3Destination](#s3destination)
    - [S3DestinationOptions](#s3destinationoptions)
  - [Render Response Schemas](#render-response-schemas)
    - [QueuedResponse](#queuedresponse)
    - [QueuedResponseData](#queuedresponsedata)
    - [RenderResponse](#renderresponse)
    - [RenderResponseData](#renderresponsedata)
  - [Inspecting Media](#inspecting-media)
    - [Probe Example](#probe-example)
  - [Probe Schemas](#probe-schemas)
    - [ProbeResponse](#proberesponse)
  - [Managing Assets](#managing-assets)
    - [Assets by Render ID Example](#assets-by-render-id-example)
    - [Assets by Asset ID Example](#assets-by-asset-id-example)
  - [Asset Schemas](#asset-schemas)
    - [AssetResponse](#assetresponse)
    - [AssetRenderResponse](#assetrenderresponse)
    - [AssetResponseData](#assetresponsedata)
    - [AssetResponseAttributes](#assetresponseattributes)
- [API Documentation and Guides](#api-documentation-and-guides)

# Using the Node SDK
### Installation

```bash
npm install shotstack-sdk
```

## Video Editing

The Shotstack SDK enables programmatic video editing via the Edit API `render` endpoint. Prepare JSON edits using the
provided schema classes and `POST` to the API for rendering.
### Video Editing Example

The example below trims the start of a video clip and plays it for 8 seconds. The edit is prepared using the SDK models
and then sent to the API for rendering.

```javascript
const Shotstack = require('shotstack-sdk');

const defaultClient = Shotstack.ApiClient.instance;
defaultClient.basePath = 'https://api.shotstack.io/stage';

const DeveloperKey = defaultClient.authentications['DeveloperKey'];
DeveloperKey.apiKey = 'H7jKyj90kd09lbLOF7J900jNbSWS67X87xs9j0cD'; // use the correct API key

const api = new Shotstack.EditApi();

let videoAsset = new Shotstack.VideoAsset;
videoAsset
    .setSrc('https://s3-ap-southeast-2.amazonaws.com/shotstack-assets/footage/skater.hd.mp4')
    .setTrim(3)

let videoClip = new Shotstack.Clip;
videoClip
    .setAsset(videoAsset)
    .setStart(0)
    .setLength(8);

let track = new Shotstack.Track;
track.setClips([videoClip]);

let timeline = new Shotstack.Timeline;
timeline.setTracks([track]);

let output = new Shotstack.Output;
output
    .setFormat('mp4')
    .setResolution('sd');

let edit = new Shotstack.Edit;
edit
    .setTimeline(timeline)
    .setOutput(output);

api.postRender(edit).then((data) => {
    console.log(data.response.id);
});
```

### Status Check Example

The example request below can be called a few seconds after the render above is posted. It will return the status of 
the render, which can take several seconds to process.

```javascript
const Shotstack = require('shotstack-sdk');

const defaultClient = Shotstack.ApiClient.instance;
defaultClient.basePath = 'https://api.shotstack.io/stage';

const DeveloperKey = defaultClient.authentications['DeveloperKey'];
DeveloperKey.apiKey = 'H7jKyj90kd09lbLOF7J900jNbSWS67X87xs9j0cD'; // use the correct API key

const api = new Shotstack.EditApi();

const id = '75143ec6-4b72-46f8-a67a-fd7284546935'; // use the render id from previous example

api.getRender(id, { data: false, merged: true }).then((data) => {
    if (data.response.status === 'done') {
        console.log(data.response.url);
    }
});
```

## Video Editing Schemas

The following schemas are used to prepare a video edit.

### Edit

An **Edit** defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const edit = new Shotstack.Edit;
edit
  .setTimeline(timeline)
  .setOutput(output)
  .setMerge(merge)
  .setCallback('https://my-server.com/callback.php')
  .setDisk("local");
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setTimeline([Shotstack.Timeline](#timeline)) | A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time. | -
setOutput([Shotstack.Output](#output)) | The output format, render range and type of media to generate. | Y
setMerge([Shotstack.MergeField[]](#mergefield) mergeField) | An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. | -
setCallback(string callback) | An optional webhook callback URL used to receive status notifications when a render completes or fails. See [webhooks](https://shotstack.io/docs/guide/architecting-an-application/webhooks/) for  more details. | -
setDisk(string disk) | **(Deprecated)** The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.io/docs/guide/architecting-an-application/disk-types/) for more details. [default to `local`] <ul><li>`local` - optimized for high speed rendering with up to 512MB storage</li><li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li></ul> | -

-----

### Timeline

A **Timeline** represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const timeline = new Shotstack.Timeline;
timeline
  .setSoundtrack(soundtrack)
  .setBackground('#000000')
  .setFonts(fonts)
  .setTracks(tracks)
  .setCache(true);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setSoundtrack([Shotstack.Soundtrack](#soundtrack) soundtrack) | A music or audio soundtrack file in mp3 format. | -
setBackground(string background) | A hexadecimal value for the timeline background colour. Defaults to `#000000` (black). | -
setFonts([Shotstack.Font[]](#font) fonts) | An array of custom fonts to be downloaded for use by the HTML assets. | -
setTracks([Shotstack.Track[]](#track) tracks) | A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images. | Y
setCache(bool cache) | Disable the caching of ingested source footage and assets. See  [caching](https://shotstack.io/docs/guide/architecting-an-application/caching) for more details. [default to `true`] | -

---

### Soundtrack

A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const soundtrack = new Shotstack.Soundtrack;
soundtrack
  .setSrc('https://s3-ap-southeast-2.amazonaws.com/shotstack-assets/music/disco.mp3')
  .setEffect('fadeIn')
  .setVolume(1);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setSrc(string src) | The URL of the mp3 audio file. The URL must be publicly accessible or include credentials. | Y
setEffect(string effect) | The effect to apply to the audio file <ul><li>`fadeIn` - fade volume in only</li><li>`fadeOut` - fade volume out only</li><li>`fadeInFadeOut` - fade volume in and out</li></ul> | -
setVolume(float volume) | Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to `1`). | -

---

### Font

Download a custom font to use with the HTML asset type, using the font name in the CSS or font tag. See our [custom fonts](https://shotstack.io/learn/html-custom-fonts/) getting started guide for more details.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const font = new Shotstack.Font;
font
  .setSrc('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/fonts/OpenSans-Regular.ttf');
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setSrc(string src) | The URL of the font file. The URL must be publicly accessible or include credentials. | Y

---

### Track

A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const track = new Shotstack.Track;
track
  .setClips(clips);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setClips([Shotstack.Clip[]](#clip) clips) | An array of Clips comprising of TitleClip, ImageClip or VideoClip. | Y

---

### Clip

A **Clip** is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

clip = new Shotstack.Clip;
clip
  .setAsset(asset)
  .setStart(2)
  .setLength(5)
  .setFit('crop')
  .setScale(0)
  .setPosition('center')
  .setOffset(offset)
  .setTransition(transition)
  .setEffect('zoomIn')
  .setFilter('greyscale')
  .setOpacity(1)
  .setTransform(transform);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setAsset(asset) | The type of asset to display for the duration of this Clip. Value must be one of: <ul><li>[Shotstack.VideoAsset](#videoasset)</li><li>[Shotstack.ImageAsset](#imageasset)</li><li>[Shotstack.TitleAsset](#titleasset)</li><li>[Shotstack.HtmlAsset](#htmlasset)</li><li>[Shotstack.AudioAsset](#audioasset)</li><li>[Shotstack.LumaAsset](#lumaasset)</li></ul>  | Y
setStart(float start) | The start position of the Clip on the timeline, in seconds. | Y
setLength(float length) | The length, in seconds, the Clip should play for. | Y
setFit(string fit) | Set how the asset should be scaled to fit the viewport using one of the following options [default to `crop`]: <ul><li>`cover` - stretch the asset to fill the viewport without maintaining the aspect ratio.</li><li>`contain` - fit the entire asset within the viewport while maintaining the original aspect ratio.</li><li>`crop` - scale the asset to fill the viewport while maintaining the aspect ratio. The asset will be cropped if it exceeds the bounds of the viewport.</li><li>`none` - preserves the original asset dimensions and does not apply any scaling.</li></ul>| -
setScale(float scale) | Scale the asset to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale asset to half the size of the viewport. This is useful for picture-in-picture video and  scaling images such as logos and watermarks. | -
setPosition(string position) | Place the asset in one of nine predefined positions of the viewport. This is most effective for when the asset is scaled and you want to position the element to a specific position [default to `center`].<ul><li>`top` - top (center)</li><li>`topRight` - top right</li><li>`right` - right (center)</li><li>`bottomRight` - bottom right</li><li>`bottom` - bottom (center)</li><li>`bottomLeft` - bottom left</li><li>`left` - left (center)</li><li>`topLeft` - top left</li><li>`center` - center</li></ul> | -
setOffset([Shotstack.Offset](#offset) offset) | Offset the location of the asset relative to its position on the viewport. The offset distance is relative to the width of the viewport - for example an x offset of 0.5 will move the asset half the viewport width to the right. | -
setTransition([Shotstack.Transition](#transition) transition) | In and out transitions for a clip - i.e. fade in and fade out | -
setEffect(string effect) | A motion effect to apply to the Clip. <ul><li>`zoomIn` - slow zoom in</li><li>`zoomOut` - slow zoom out</li><li>`slideLeft` - slow slide (pan) left</li><li>`slideRight` - slow slide (pan) right</li><li>`slideUp` - slow slide (pan) up</li><li>`slideDown` - slow slide (pan) down</li></ul> The motion effect speed can also be controlled by appending `Fast` or `Slow` to the effect, e.g. `zoomInFast` or `slideRightSlow`.| -
setFilter(string filter) | A filter effect to apply to the Clip. <ul><li>`boost` - boost contrast and saturation</li><li>`contrast` - increase contrast</li><li>`darken` - darken the scene</li><li>`greyscale` - remove colour</li><li>`lighten` - lighten the scene</li><li>`muted` - reduce saturation and contrast</li><li>`negative` - invert colors</li></ul> | -
setOpacity(float opacity) | Sets the opacity of the Clip where 1 is opaque and 0 is transparent. [default to `1`] | -
setTransform([Shotstack.Transformation](#transformation) transformation) | A transformation lets you modify the visual properties of a clip. Available transformations are [Shotstack.RotateTransformation](#rotatetransformation), [Shotstack.SkewTransformation](#skewtransformation) and [Shotstack.FlipTransformation](#fliptransformation). Transformations can be combined to create interesting new shapes and effects. | -

---

### VideoAsset

The **VideoAsset** is used to create video sequences from video files. The src must be a publicly accessible URL to a video
resource such as an mp4 file.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const videoAsset = new Shotstack.VideoAsset;
videoAsset
  .setSrc('https://shotstack-assets.s3.aws.com/mountain.mp4')
  .setTrim(5)
  .setVolume(0.5)
  .setVolumeEffect('fadeIn')
  .setCrop(crop);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setSrc(string url) | The video source URL. The URL must be publicly accessible or include credentials. | Y
setTrim(float seconds) | The start trim point of the video clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached. | -
setVolume(float level) | Set the volume for the video clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 0). | -
setVolumeEffect(string effect) | The volume effect to apply to the video asset.<ul><li>`fadeIn` - fade volume in only</li><li>`fadeOut` - fade volume out only</li><li>`fadeInFadeOut` - fade volume in and out</li></ul> | -
setCrop([Shotstack.Crop](#crop) crop) | Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e. a left crop of 0.5 will crop half of the asset from the left, a top crop of 0.25 will crop the top by quarter of the asset. | -

---

### ImageAsset

The **ImageAsset** is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const imageAsset = new Shotstack.ImageAsset;
imageAsset
  .setSrc('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/earth.jpg')
  .setCrop(crop);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setSrc(string url) | The image source URL. The URL must be publicly accessible or include credentials. | Y
setCrop([Shotstack.Crop](#crop) crop) | Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e. a left crop of 0.5 will crop half of the asset from the left, a top crop of 0.25 will crop the top by quarter of the asset. | -

---

### TitleAsset

The **TitleAsset** clip type lets you create video titles from a text string and apply styling and positioning.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const titleAsset = new Shotstack.TitleAsset;
titleAsset
  .setText('My Title')
  .setStyle('minimal')
  .setColor('#ffffff')
  .setSize('medium')
  .setBackground('#000000')
  .setPosition('center')
  .setOffset(offset);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setText(string text) | The title text string. | Y
setStyle(string style) | Uses a preset to apply font properties and styling to the title. <ul><li>`minimal`</li><li>`blockbuster`</li><li>`vogue`</li><li>`sketchy`</li><li>`skinny`</li><li>`chunk`</li><li>`chunkLight`</li><li>`marker`</li><li>`future`</li><li>`subtitle`</li></ul> | -
setColor(string color) | Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency [default to `#ffffff`]. | - 
setSize(string zize) | Set the relative size of the text using predefined sizes from xx-small to xx-large [default to 'medium']. <ul><li>`xx-small`</li><li>`x-small`</li><li>`small`</li><li>`medium`</li><li>`large`</li><li>`x-large`</li><li>`xx-large`</li></ul> | -
setBackground(string background) | Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background. | -
setPosition(string position) | Place the title in one of nine predefined positions of the viewport [default to `center`. <ul><li>`top` - top (center)</li><li>`topRight` - top right</li><li>`right` - right (center)</li><li>`bottomRight` - bottom right</li><li>`bottom` - bottom (center)</li><li>`bottomLeft` - bottom left</li><li>`left` - left (center)</li><li>`topLeft` - top left</li><li>`center` - center</li></ul> | -
setOffset([Shotstack.Offset](#offset) offset) | Offset the location of the title relative to its position on the screen. | -

---

### HtmlAsset

The **HtmlAsset** clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const htmlAsset = new Shotstack.HtmlAsset;
htmlAsset
  .setHtml('<p>Hello <b>World</b></p>')
  .setCss('p { color: #ffffff; } b { color: #ffff00; }')
  .setWidth(400)
  .setHeight(200)
  .setBackground('transparent')
  .setPosition('center);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---:
setHtml(string html) | The HTML text string. See list of [supported HTML tags](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-html-tags). | Y
setCss(string css) | The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-css-properties). | -
setWidth(int width) | Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box. | -
setHeight(int height) | Set the height of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box. | -
setBackground(string background) | Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 80% transparency [default to `transparent`]. | - 
setPosition(string position) | Place the HTML in one of nine predefined positions within the HTML area [default to `center`]. <ul><li>`top` - top (center)</li><li>`topRight` - top right</li><li>`right` - right (center)</li><li>`bottomRight` - bottom right</li><li>`bottom` - bottom (center)</li><li>`bottomLeft` - bottom left</li><li>`left` - left (center)</li><li>`topLeft` - top left</li><li>`center` - center</li></ul> | -

---

### AudioAsset

The **AudioAsset** is used to add sound effects and audio at specific intervals on the timeline. The src must be a 
publicly accessible URL to an audio resource such as an mp3 file.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const audioAsset = new Shotstack.AudioAsset;
audioAsset
  .setSrc('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/lit.mp3')
  .setTrim(2)
  .setVolume(0.5)
  .setEffect('fadeInFadeOut');
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setSrc(string url) | The audio source URL. The URL must be publicly accessible or include credentials. | Y
setTrim(float seconds) | The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the trim point. The audio will play until the file ends or the Clip length is reached. | -
setVolume(float level) | Set the volume for the audio clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1). | -
setEffect(string crop) | The effect to apply to the audio asset: <ul><li>`fadeIn` - fade volume in only</li><li>`fadeOut` - fade volume out only</li><li>`fadeInFadeOut` - fade volume in and out</li></ul> | -

---

### LumaAsset

The **LumaAsset** is used to create luma matte masks, transitions and effects between other assets. A luma matte is a grey scale image or animated video where the black areas are transparent and the white areas solid. The luma matte animation should be provided as an mp4 video file. The src must be a publicly accessible URL to the file.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const lumaAsset = new Shotstack.LumaAsset;
lumaAsset
  .setSrc('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/luma-mattes/paint-left.mp4')
  .setTrim(5);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setSrc(string src) | The luma matte source URL. The URL must be publicly accessible or include credentials. | Y
setTrim(float trim) | The start trim point of the luma matte clip, in seconds (defaults to 0). Videos will start from the in trim point. A luma matte video will play until the file ends or the Clip length is reached. | -

---

### Transition

The **Transition** clip type lets you define in and out transitions for a clip - i.e. fade in and fade out

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const transition = new Shotstack.Transition;
transition
  .setIn('fade')
  .setOut('fade');
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setIn(string in) | The transition in. Available transitions are:   <ul><li>`fade` - fade in</li><li>`reveal` - reveal from left to right</li><li>`wipeLeft` - fade across screen to the left</li><li>`wipeRight` - fade across screen to the right</li><li>`slideLeft` - move slightly left and fade in</li><li>`slideRight` - move slightly right and fade in</li><li>`slideUp` - move slightly up and fade in</li><li>`slideDown` - move slightly down and fade in</li><li>`carouselLeft` - slide in from right to left</li><li>`carouselRight` - slide in from left to right</li><li>`carouselUp` - slide in from bottom to top</li><li>`carouselDown` - slide in from top to bottom</li><li>`shuffleTopRight` - rotate in from top right</li><li>`shuffleRightTop` - rotate in from right top</li><li>`shuffleRightBottom` - rotate in from right bottom</li><li>`shuffleBottomRight` - rotate in from bottom right</li><li>`shuffleBottomLeft` - rotate in from bottom left</li><li>`shuffleLeftBottom` - rotate in from left bottom</li><li>`shuffleLeftTop` - rotate in from left top</li><li>`shuffleTopLeft` - rotate in from top left</li><li>`zoom` - fast zoom in</li></ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`. | -
setOut(string out) | The transition out. Available transitions are:   <ul><li>`fade` - fade out</li><li>`reveal` - reveal from right to left</li><li>`wipeLeft` - fade across screen to the left</li><li>`wipeRight` - fade across screen to the right</li><li>`slideLeft` - move slightly left and fade out</li><li>`slideRight` - move slightly right and fade out</li><li>`slideUp` - move slightly up and fade out</li><li>`slideDown` - move slightly down and fade out</li><li>`carouselLeft` - slide out from right to left</li><li>`carouselRight` - slide out from left to right</li><li>`carouselUp` - slide out from bottom to top</li><li>`carouselDown` - slide out from top  to bottom</li><li>`shuffleTopRight` - rotate out from top right</li><li>`shuffleRightTop` - rotate out from right top</li><li>`shuffleRightBottom` - rotate out from right bottom</li><li>`shuffleBottomRight` - rotate out from bottom right</li><li>`shuffleBottomLeft` - rotate out from bottom left</li><li>`shuffleLeftBottom` - rotate out from left bottom</li><li>`shuffleLeftTop` - rotate out from left top</li><li>`shuffleTopLeft` - rotate out from top left</li><li>`zoom` - fast zoom out</li></ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`. | -

---

### Offset

Offsets the position of an asset horizontally or vertically by a relative distance.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const offset = new Shotstack.Offset;
offset
  .setX(0.1)
  .setY(-0.2);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setX(float x) | Offset an asset on the horizontal axis (left or right), range varies from -10 to 10. Positive numbers move the asset right, negative left. For all assets except titles the distance moved is relative to the width  of the viewport - i.e. an X offset of 0.5 will move the asset half the  screen width to the right. [default to `0`] | -
setY(float y) | Offset an asset on the vertical axis (up or down), range varies from -10 to 10. Positive numbers move the asset up, negative down. For all assets except titles the distance moved is relative to the height  of the viewport - i.e. an Y offset of 0.5 will move the asset up half the  screen height. [default to `0`] | -

---

### Crop

Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop of 0.25 will crop the top by quarter of the asset.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const crop = new Shotstack.Crop;
crop
  .setTop(0.15)
  .setBottom(0.15)
  .setLeft(0)
  .setRight(0);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setTop(float top) | Crop from the top of the asset | -
setBottom(float bottom) | Crop from the bottom of the asset | -
setLeft(float left) | Crop from the left of the asset | -
setRight(float right) | Crop from the right of the asset | -

---

### Transformation

Apply one or more transformations to a clip. **Transformations** alter the visual properties of a clip and can be combined to create new shapes and effects.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const transformation = new Shotstack.Transformation;
transformation
  .setRotate(rotate)
  .setSkew(skew)
  .setFlip(flip);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setRotate([Shotstack.RotateTransformation](#rotatetransformation) rotate) | Rotate a clip by the specified angle in degrees. Rotation origin is set based on the clips `position`. | -
setSkew([Shotstack.SkewTransformation](#skewtransformation) skew) | Skew a clip so its edges are sheared at an angle. Use values between 0 and 3. Over 3 the clip will be skewed almost flat. | -
setFlip([Shotstack.FlipTransformation](#fliptransformation) flip) | Flip a clip vertically or horizontally. Acts as a mirror effect of the clip along the selected plane. | -

---

### RotateTransformation

Rotate a clip by the specified angle in degrees. Rotation origin is set based on the clips `position`.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const rotateTransformation = new Shotstack.RotateTransformation;
rotateTransformation
  .setAngle(45);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setAngle(int angle) | The angle to rotate the clip. Can be 0 to 360, or 0 to -360. Using a positive number rotates the clip clockwise, negative numbers counter-clockwise. | -

---

### SkewTransformation

Skew a clip so its edges are sheared at an angle. Use values between 0 and 3. Over 3 the clip will be skewed almost flat.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const skewTransformation = new Shotstack.SkewTransformation;
skewTransformation
  .setX(0.5)
  .setY(0.5);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setX(float x) | Skew the clip along it&#39;s x axis. [default to `0`] | -
setY(float y) | Skew the clip along it&#39;s y axis. [default to `0`] | -

---

### FlipTransformation

Flip a clip vertically or horizontally. Acts as a mirror effect of the clip along the selected plane.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const flipTransformation = new Shotstack.FlipTransformation;
flipTransformation
  .setHorizontal(true)
  .setVertical(true);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setHorizontal(bool horizontal) | Flip a clip horizontally. [default to `false`] | - 
setVertical(bool vertical) | Flip a clip vertically. [default to `false`] | -

---

### MergeField

A merge field consists of a key; `find`, and a `value`; replace. Merge fields can be used to replace placeholders within the JSON edit to create re-usable templates. Placeholders should be a string with double brace delimiters, i.e. `"{{NAME}}"`. A placeholder can be used for any value within the JSON edit.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const mergeField = new Shotstack.MergeField;
mergeField
  .setFind('NAME')
  .setReplace('Jane');
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setFind(string find) | The string to find <u>without</u> delimiters. | Y
setReplace(replace) | The replacement value. The replacement can be any valid JSON type - string, boolean, number, etc... | Y

---

## Template Schemas

The following schemas specify how to use templates to store and render templates. A template lets you save an
[Edit](#edit) that can be rendered by its template ID and optionally include merge fields that are merged with the
template when rendered.

### Template

A template is a saved [Edit](#edit) than can be loaded and re-used.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const template = new Shotstack.Template;
template
  .setName('My Template')
  .setTemplate(edit);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setName(string name) | The template name. | Y
setTemplate([Shotstack.Edit](#edit) edit)) | An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format. | Y

### TemplateRender

Render a template by its id and optional merge fields.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const template = new Shotstack.TemplateRender;
template
  .setId('21e781c0-8232-4418-fec1-cc99f0280c21')
  .setMerge(merge);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setId(string id) | The id of the template to render in UUID format. | Y
setMerge([Shotstack.MergeField[]](#mergefield) mergeField) | An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. | -

---
## Output Schemas

The following schemas specify the output format and settings.
### Output

The output format, render range and type of media to generate.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const output = new Shotstack.Output;
output
  .setFormat('mp4')
  .setResolution('sd')
  .setAspectRatio('16:9')
  .setSize(size)
  .setFps(25)
  .setScaleTo('preview')
  .setQuality('medium')
  .setRepeat(true)
  .setMute(false)
  .setRange(range)
  .setPoster(poster)
  .setThumbnail(thumbnail)
  .setDestination(destination);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setFormat(string format) | The output format and type of media file to generate. <ul><li>`mp4` - mp4 video file</li><li>`gif` - animated gif</li><li>`jpg` - jpg image file</li><li>`png` - png image file</li><li>`bmp` - bmp image file</li><li>`mp3` - mp3 audio file (audio only)</li></ul> | Y
setResolution(string resolution) | The output resolution of the video or image. <ul><li>`preview` - 512px x 288px @ 15fps</li><li>`mobile` - 640px x 360px @ 25fps</li><li>`sd` - 1024px x 576px @ 25fps</li><li>`hd` - 1280px x 720px @ 25fps</li><li>`1080` - 1920px x 1080px @ 25fps</li></ul> | -
setAspectRatio(string aspectRatio) | The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: <ul><li>`16:9` - regular landscape/horizontal aspect ratio (default)</li><li>`9:16` - vertical/portrait aspect ratio</li><li>`1:1` - square aspect ratio</li><li>`4:5` - short vertical/portrait aspect ratio</li><li>`4:3` - legacy TV aspect ratio</li></ul> | -
setSize([Shotstack.Size](#size) size) | Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications. | -
setFps(float fps) | Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. <ul><li>`12` - 12fps</li><li>`15` - 15fps</li><li>`23.976` - 23.976fps</li><li>`24` - 24fps</li><li>`25` - 25fps</li><li>`29.97` - 29.97fps</li><li>`30` - 30fps</li></ul> | - 
setScaleTo(string scaleTo) | Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. <ul><li>`preview` - 512px x 288px @ 15fps</li><li>`mobile` - 640px x 360px @ 25fps</li><li>`sd` - 1024px x 576px @25fps</li><li>`hd` - 1280px x 720px @25fps</li><li>`1080` - 1920px x 1080px @25fps</li></ul> | -
setQuality(string quality) | Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default `medium` provides the most optimized choice for all three  factors. <ul><li>`low` - slightly reduced quality, smaller file size</li><li>`medium` - optimized quality, render speeds and file size</li><li>`high` - slightly increased quality, larger file size</li></ul> | -
setRepeat(bool repeat) | Loop settings for gif files. Set to `true` to loop, `false` to play only once. [default to `true`] | -
setMute(bool mute) | Mute the audio track of the output video. Set to `true` to mute, `false` to un-mute. | -
setRange([Shotstack.Range](#range) range) | Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point. | -
setPoster([Shotstack.Poster](#poster) poster) | Generate a poster image from a specific point on the timeline. | -
setThumbnail([Shotstack.Thumbnail](#thumbnail) thumbnail) | Generate a thumbnail image from a specific point on the timeline. | -
setDestinations([AnyOfShotstackDestination[]](#shotstackdestination) destinations) | A destination is a location where output files can be sent to for serving or hosting. By default all rendered assets are automatically sent to the Shotstack hosting destination. [ShotstackDestination](#shotstackdestination) is currently the only option with plans to add more in the future such as S3, YouTube, Vimeo and Mux. If you do not require hosting you can opt-out using the  `exclude` property. | -

---

### Size

Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const size = new Shotstack.Size;
size
  .setWidth(1200)
  .setHeight(800);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setWidth(int width) | Set a custom width for the video or image file. Value must be divisible by 2. Maximum video width is 1920px, maximum image width is 4096px. | -
setHeight(int height) | Set a custom height for the video or image file. Value must be divisible by 2. Maximum video height is 1920px, maximum image height is 4096px. | -

---

### Range

Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const range = new Shotstack.Range;
range
  .setStart(3)
  .setLength(6);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setStart(float start) | The point on the timeline, in seconds, to start the render from - i.e. start at second 3. | -
setLength(float length) | The length of the portion of the video or audio to render - i.e. render 6 seconds of the video. | -

---

### Poster

Generate a **Poster** image for the video at a specific point from the timeline. The poster image size will match the size of the output video.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const poster = new Shotstack.Poster;
poster
  .setCapture(1);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setCapture(float capture) | The point on the timeline in seconds to capture a single frame to use as the poster image. | Y

---

### Thumbnail

Generate a thumbnail image for the video or image at a specific point from the timeline.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const thumbnail = new Shotstack.Thumbnail;
thumbnail
  .setCapture(1)
  .setScale(0.3);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setCapture(float capture) | The point on the timeline in seconds to capture a single frame to use as the thumbnail image. | Y
setScale(float scale) | Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport. | Y

---

## Destinations

### ShotstackDestination

Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const shotstackDestination = new Shotstack.ShotstackDestination;
shotstackDestination
  .setProvider('shotstack')
  .setExclude(false);
```

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
setProvider(string provider) | The destination to send rendered assets to - set to `shotstack` for Shotstack. | Y
setExclude(bool exclude) | Set to `true` to opt-out from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering. [default to `false`] | -

---

### MuxDestination

Send rendered videos to the [Mux](https://shotstack.io/docs/guide/serving-assets/destinations/mux) video hosting and
streaming service. Mux credentials are required and added via the 
[dashboard](https://dashboard.shotstack.io/integrations/mux), not in the request.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const muxDestination = new Shotstack.MuxDestination;
muxDestination
  .setProvider('mux')
  .setOptions(muxDestinationOptions);
```
#### Methods:

Name | Description | Required
:--- | :--- | :---: 
setProvider(string provider) | The destination to send rendered assets to - set to `mux` for Mux. | Y
setOptions([MuxDestinationOptions](#muxdestinationoptions) options) | Additional Mux configuration and features. | - 

### MuxDestinationOptions

Pass additional options to control how Mux processes video. Currently supports playback policy option.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const muxDestinationOptions = new Shotstack.MuxDestinationOptions;
muxDestinationOptions
  .setPlaybackPolicy(['public']);
```
#### Methods:

Name | Description | Required
:--- | :--- | :---: 
setPlaybackPolicy([string] policy) | Sets the Mux `playback_policy` option. Value is an array of strings - use **public**, **signed**, or both. | -  

### S3Destination

Send rendered videos to an [Amazon S3](https://shotstack.io/docs/guide/serving-assets/destinations/s3) bucket. Send 
files to any region with your own prefix and filename. AWS credentials are required and added via the 
[dashboard](https://dashboard.shotstack.io/integrations/s3), not in the request.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const s3Destination = new Shotstack.S3Destination;
s3Destination
  .setProvider('s3')
  .setOptions(S3DestinationOptions);
```
#### Methods:

Name | Description | Required
:--- | :--- | :---: 
setProvider(string provider) | The destination to send rendered assets to - set to `s3` for S3. | Y
setOptions([S3DestinationOptions](#s3destinationoptions) options) | Additional S3 configuration options. | - 

### S3DestinationOptions

Pass additional options to control how files are stored in S3.

#### Example:

```javascript
const Shotstack = require('shotstack-sdk');

const S3DestinationOptions = new Shotstack.S3DestinationOptions;
S3DestinationOptions
  .setRegion('us-east-1');
  .setBucket('my-bucket');
  .setPrefix('my-renders');
  .setFilename('my-file');
  .setAcl('public-read');
```
#### Methods:

Name | Description | Required
:--- | :--- | :---: 
setRegion(string region) | Choose the region to send the file to. Must be a valid [AWS region](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region) string like `us-east-1` or `ap-southeast-2` | Y
setBucket(string bucket) | The bucket name to send files to. The bucket must exist in the AWS account before files can be sent. | Y
setPrefix(string prefix) | A prefix for the file being sent. This is typically a folder name, i.e. `videos` or `customerId/videos`. | -
setFilename(string filename) | Use your own filename instead of the default render ID filename. Note: omit the file extension as this will be appended depending n the output format. Also `poster.jpg` and `-thumb.jpg` will be appended for poster and thumbnail images. | -
setAcl(string acl) | Sets the S3 Access Control List (acl) permissions. Default is `private`. Must use a valid  S3 [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl). | -


## Render Response Schemas

The following schemas are returned by the render request and status request.

### QueuedResponse

The response received after a [render request](https://shotstack.io/docs/api/#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
getSuccess(): bool | `true` if successfully queued, else `false`. | Y
getMessage(): string | `Created`, `Bad Request` or an error message. | Y
getResponse(): [Shotstack.QueuedResponseData](#queuedresponsedata) | `QueuedResponseData` or an error message. | Y

---

### QueuedResponseData

The **QueuedResponseData** is the response data returned with the [QueuedResponse](#queuedresponse).

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
getMessage(): string | Success response message or error details. | Y
getId(): string | The id of the render task in UUID format. | Y

---

### RenderResponse

The **RenderResponse** is the response received after a [render status request](https://shotstack.io/docs/api/#get-render-status) is submitted. The response includes details about status of a render and the output URL.

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
getSuccess(): bool | `true` if status available, else `false`. | Y
getMessage(): string | `OK` or an error message. | Y
getResponse(): [Shotstack.RenderResponseData](#renderresponsedata) | `RenderResponse` or an error message. | Y

---

### RenderResponseData

The **RenderResponseData** is the response data returned with the [RenderResponse](https://shotstack.io/docs/api/#tocs_renderresponse) request including status and URL.

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
getId(): string | The id of the render task in UUID format. | Y
getOwner(): string | The owner id of the render task. | Y
getPlan(): string | The customer subscription plan. | -
getStatus(): string | The status of the render task. <ul>   <li>`queued` - render is queued waiting to be rendered</li><li>`fetching` - assets are being fetched</li><li>`rendering` - the asset is being rendered</li><li>`saving` - the final asset is being saved to storage</li><li>`done` - the asset is ready to be downloaded</li><li>`failed` - there was an error rendering the asset</li></ul> | Y
getError(): string | An error message, only displayed if an error occurred. | -
getDuration(): float | The output video or audio length in seconds. | -
getRender_time(): float | The time taken to render the asset in milliseconds. | -
getUrl(): string | The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination. | -
getPoster(): string | The URL of the poster image if requested. This will only be available if status is done. | -
getThumbnail(): string | The URL of the thumbnail image if requested. This will only be available if status is done. | -
getData(): [Shotstack.Edit](#edit) | The timeline and output data to be rendered. | Y
getCreated(): string | The time the render task was initially queued. | Y
getUpdated(): string | The time the render status was last updated. | Y

---
## Inspecting Media

The SDK `probe` endpoint can be used to inspect media hosted online. Simply pass the URL of an asset to inspect.
### Probe Example

The example below inspects (probes) a video hosted on GitHub and returns metadata about the file.

```javascript
const Shotstack = require('shotstack-sdk');

const defaultClient = Shotstack.ApiClient.instance;
defaultClient.basePath = 'https://api.shotstack.io/stage';

const DeveloperKey = defaultClient.authentications['DeveloperKey'];
DeveloperKey.apiKey = 'H7jKyj90kd09lbLOF7J900jNbSWS67X87xs9j0cD'; // use the correct API key

const api = new Shotstack.EditApi();

const url = 'https://github.com/shotstack/test-media/raw/main/captioning/scott-ko.mp4';

api.probe(url).then((data) => {
    data.response.metadata.streams.forEach(stream => {
        if (stream.codec_type === 'video') {
            console.log('Example settings for: ' + data.response.metadata.format.filename);
            console.log('Width: ' + stream.width + 'px');
            console.log('Height: ' + stream.height + 'px');
            console.log('Framerate: ' + stream.r_frame_rate + ' fps');
            console.log('Duration: ' + stream.duration + ' secs');
        }
    });
});
```
## Probe Schemas

The following schemas are returned by the probe request.
### ProbeResponse

The **ProbeResponse** is the response returned after a [probe request](https://shotstack.io/docs/api/#inspect-media) is submitted. The probe requests returns data from FFprobe formatted as JSON.

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
getSuccess(): bool | `true` if media successfully read, else `false`. | Y
getMessage(): string | `Created`, `Bad Request` or an error message. | Y
getResponse(): object | The response from FFprobe in JSON format | Y

---

## Managing Assets

By default, all assets generated by the editing API are hosted by Shotstack and served via our CDN. The SDK provides
access to the Serve API to retrieve information about hosted files. Files can also be deleted.

### Assets by Render ID Example

The example below uses a render ID to look up hosted assets associated with the render. Note that multiple assets can be
created for a render, i.e. video, thumb and poster. Each asset has a unique asset ID different to the render ID.

```javascript
const Shotstack = require('shotstack-sdk');

const defaultClient = Shotstack.ApiClient.instance;
defaultClient.basePath = 'https://api.shotstack.io/stage';

const DeveloperKey = defaultClient.authentications['DeveloperKey'];
DeveloperKey.apiKey = 'H7jKyj90kd09lbLOF7J900jNbSWS67X87xs9j0cD'; // use the correct API key

const api = new Shotstack.ServeApi();

const id = '140924c6-077d-4334-a89f-94befcfc0155'; // Use a valid render ID

api.getAssetByRenderId(id).then((assets) => {
    assets.data.forEach((asset) => {
        if (asset.attributes.status === 'ready') {
            console.log('>> Asset CDN URL: ' + asset.attributes.url);
            console.log('>> Asset ID: ' + asset.attributes.id);
            console.log('>> Render ID: ' + asset.attributes.renderId);
        }
    });
});
```

### Assets by Asset ID Example

Every asset has a unique asset ID, the example below looks up an asset by its asset ID.

```javascript
const Shotstack = require('shotstack-sdk');

const defaultClient = Shotstack.ApiClient.instance;
defaultClient.basePath = 'https://api.shotstack.io/stage';

const DeveloperKey = defaultClient.authentications['DeveloperKey'];
DeveloperKey.apiKey = 'H7jKyj90kd09lbLOF7J900jNbSWS67X87xs9j0cD'; // use the correct API key

const api = new Shotstack.ServeApi();

const id = 'ed43eae3-4825-4c03-979d-f7dc47b9997c'; // use a valid asset ID

api.getAsset(id).then((asset) => {
    if (asset.data.attributes.status === 'ready') {
        console.log('>> Asset CDN URL: ' + asset.data.attributes.url);
        console.log('>> Asset ID: ' + asset.data.attributes.id);
        console.log('>> Render ID: ' + asset.data.attributes.renderId);
    }
});
```

## Asset Schemas

The following schemas are returned by requests to the Serve API.
### AssetResponse

The **AssetResponse** is the response returned by the Serve API [get asset](https://shotstack.io/docs/api/#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows  the [json:api](https://jsonapi.org/) specification.

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
getData(): [Shotstack.AssetResponseData](#assetresponsedata) | Returns an asset resource. | -

---

### AssetRenderResponse

The **AssetRenderResponse** is the response returned by the Serve API [get asset by render id](https://shotstack.io/docs/api/#get-asset-by-render-id) request. The response is an array of asset resources, including video, image, audio, thumbnail and poster image. The response follows  the [json:api](https://jsonapi.org/) specification.

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
getData(): [Shotstack.AssetResponseData[]](#assetresponsedata) | Returns an array of asset resources grouped by render id. | -

---

### AssetResponseData

The **AssetResponseData** contains the type of resource (an asset) and attributes of the asset.

#### Methods:

Method | Description | Required
:--- | :--- | :---: 
getType(): string | The type of resource, in this case it is an `asset`. | -
getAttributes(): [Shotstack.AssetResponseAttributes](#assetresponseattributes) | The asset attributes including render id, url, filename, file size, etc... | -

---

### AssetResponseAttributes

The **AssetResponseAttributes** contains the list of asset attributes and their values.

#### Methods:

Method | Description | Required
:--- | :--- | :---:
getId(): string | The unique id of the hosted asset in UUID format. | -
getOwner(): string | The owner id of the render task. | -
getRegion(): string | The region the asset is hosted, currently only `au` (Australia). | -
getRenderId(): string | The original render id that created the asset in UUID format. Multiple assets can share the same render id. | -
getFilename(): string | The asset file name. | -
getUrl(): string | The asset file name. | -
getStatus(): string | The status of the asset. <ul><li>`importing` - the asset is being copied to the hosting service</li><li>`ready` - the asset is ready to be served to users</li><li>`failed` - the asset failed to copy or delete</li><li>`deleted` - the asset has been deleted</li></ul> | -
getCreated(): string | The time the asset was created. | -
getUpdated(): string | The time the asset status was last updated. | -

# API Documentation and Guides

- [Getting Started Guide](https://shotstack.io/docs/guide/getting-started/core-concepts/)
- [API Reference](https://shotstack.io/docs/api/)
- [Examples](https://github.com/shotstack/node-demos)
- [Shotstack Website](https://shotstack.io)
