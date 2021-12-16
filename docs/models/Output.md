# ShotstackSdk.Output

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | The output format and type of media file to generate. &lt;ul&gt;   &lt;li&gt;&#x60;mp4&#x60; - mp4 video file&lt;/li&gt;   &lt;li&gt;&#x60;gif&#x60; - animated gif&lt;/li&gt;   &lt;li&gt;&#x60;jpg&#x60; - jpg image file&lt;/li&gt;   &lt;li&gt;&#x60;png&#x60; - png image file&lt;/li&gt;   &lt;li&gt;&#x60;bmp&#x60; - bmp image file&lt;/li&gt;   &lt;li&gt;&#x60;mp3&#x60; - mp3 audio file (audio only)&lt;/li&gt; &lt;/ul&gt; | 
**resolution** | **String** | The output resolution of the video or image. &lt;ul&gt;   &lt;li&gt;&#x60;preview&#x60; - 512px x 288px @ 15fps&lt;/li&gt;   &lt;li&gt;&#x60;mobile&#x60; - 640px x 360px @ 25fps&lt;/li&gt;   &lt;li&gt;&#x60;sd&#x60; - 1024px x 576px @ 25fps&lt;/li&gt;   &lt;li&gt;&#x60;hd&#x60; - 1280px x 720px @ 25fps&lt;/li&gt;   &lt;li&gt;&#x60;1080&#x60; - 1920px x 1080px @ 25fps&lt;/li&gt; &lt;/ul&gt; | [optional] 
**aspectRatio** | **String** | The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: &lt;ul&gt;   &lt;li&gt;&#x60;16:9&#x60; - regular landscape/horizontal aspect ratio (default)&lt;/li&gt;   &lt;li&gt;&#x60;9:16&#x60; - vertical/portrait aspect ratio&lt;/li&gt;   &lt;li&gt;&#x60;1:1&#x60; - square aspect ratio&lt;/li&gt;   &lt;li&gt;&#x60;4:5&#x60; - short vertical/portrait aspect ratio&lt;/li&gt;   &lt;li&gt;&#x60;4:3&#x60; - legacy TV aspect ratio&lt;/li&gt; &lt;/ul&gt; | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**fps** | **Number** | Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. &lt;ul&gt;   &lt;li&gt;&#x60;12&#x60; - 12fps&lt;/li&gt;   &lt;li&gt;&#x60;15&#x60; - 15fps&lt;/li&gt;   &lt;li&gt;&#x60;24&#x60; - 24fps&lt;/li&gt;   &lt;li&gt;&#x60;25&#x60; - 25fps&lt;/li&gt;   &lt;li&gt;&#x60;30&#x60; - 30fps&lt;/li&gt; &lt;/ul&gt; | [optional] [default to FpsEnum.25]
**scaleTo** | **String** | Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. &lt;ul&gt;   &lt;li&gt;&#x60;preview&#x60; - 512px x 288px @ 15fps&lt;/li&gt;   &lt;li&gt;&#x60;mobile&#x60; - 640px x 360px @ 25fps&lt;/li&gt;   &lt;li&gt;&#x60;sd&#x60; - 1024px x 576px @25fps&lt;/li&gt;   &lt;li&gt;&#x60;hd&#x60; - 1280px x 720px @25fps&lt;/li&gt;   &lt;li&gt;&#x60;1080&#x60; - 1920px x 1080px @25fps&lt;/li&gt; &lt;/ul&gt; | [optional] 
**quality** | **String** | Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default &#x60;medium&#x60; provides the most optimized choice for all three  factors. &lt;ul&gt;   &lt;li&gt;&#x60;low&#x60; - slightly reduced quality, smaller file size&lt;/li&gt;   &lt;li&gt;&#x60;medium&#x60; - optimized quality, render speeds and file size&lt;/li&gt;   &lt;li&gt;&#x60;high&#x60; - slightly increased quality, larger file size&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;medium&#39;]
**repeat** | **Boolean** | Loop settings for gif files. Set to &#x60;true&#x60; to loop, &#x60;false&#x60; to play only once. | [optional] [default to true]
**range** | [**Range**](Range.md) |  | [optional] 
**poster** | [**Poster**](Poster.md) |  | [optional] 
**thumbnail** | [**Thumbnail**](Thumbnail.md) |  | [optional] 
**destinations** | [**[AnyOfShotstackDestination]**](AnyOfShotstackDestination.md) | A destination is a location where output files can be sent to for serving or hosting. By default all rendered assets are automatically sent to the Shotstack hosting destination. [DestinationShotstack](/#tocs_shotstackdestination) is currently the only option with plans to add more in the future such as S3, YouTube, Vimeo and Mux. If you do not require hosting you can opt-out using the  &#x60;exclude&#x60; property. | [optional] 



## Enum: FormatEnum


* `mp4` (value: `"mp4"`)

* `gif` (value: `"gif"`)

* `mp3` (value: `"mp3"`)

* `jpg` (value: `"jpg"`)

* `png` (value: `"png"`)

* `bmp` (value: `"bmp"`)





## Enum: ResolutionEnum


* `preview` (value: `"preview"`)

* `mobile` (value: `"mobile"`)

* `sd` (value: `"sd"`)

* `hd` (value: `"hd"`)

* `1080` (value: `"1080"`)





## Enum: AspectRatioEnum


* `16:9` (value: `"16:9"`)

* `9:16` (value: `"9:16"`)

* `1:1` (value: `"1:1"`)

* `4:5` (value: `"4:5"`)

* `4:3` (value: `"4:3"`)





## Enum: FpsEnum


* `12` (value: `12`)

* `15` (value: `15`)

* `24` (value: `24`)

* `25` (value: `25`)

* `30` (value: `30`)





## Enum: ScaleToEnum


* `preview` (value: `"preview"`)

* `mobile` (value: `"mobile"`)

* `sd` (value: `"sd"`)

* `hd` (value: `"hd"`)

* `1080` (value: `"1080"`)





## Enum: QualityEnum


* `low` (value: `"low"`)

* `medium` (value: `"medium"`)

* `high` (value: `"high"`)




