# ShotstackSdk.Clip

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**OneOfVideoAssetImageAssetTitleAssetHtmlAssetAudioAssetLumaAsset**](OneOfVideoAssetImageAssetTitleAssetHtmlAssetAudioAssetLumaAsset.md) | The type of asset to display for the duration of this Clip. Value must be one of:   &lt;ul&gt;     &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_videoasset\&quot;&gt;VideoAsset&lt;/a&gt;&lt;/li&gt;     &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_imageasset\&quot;&gt;ImageAsset&lt;/a&gt;&lt;/li&gt;     &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_titleasset\&quot;&gt;TitleAsset&lt;/a&gt;&lt;/li&gt;     &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_htmlasset\&quot;&gt;HtmlAsset&lt;/a&gt;&lt;/li&gt;     &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_audioasset\&quot;&gt;AudioAsset&lt;/a&gt;&lt;/li&gt;     &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_lumaasset\&quot;&gt;LumaAsset&lt;/a&gt;&lt;/li&gt;   &lt;/ul&gt; | 
**start** | **Number** | The start position of the Clip on the timeline, in seconds. | 
**length** | **Number** | The length, in seconds, the Clip should play for. | 
**fit** | **String** | Set how the asset should be scaled to fit the viewport using one of the following options:    &lt;ul&gt;     &lt;li&gt;&#x60;cover&#x60; - stretch the asset to fill the viewport without maintaining the aspect ratio.&lt;/li&gt;     &lt;li&gt;&#x60;contain&#x60; - fit the entire asset within the viewport while maintaining the original aspect ratio.&lt;/li&gt;     &lt;li&gt;&#x60;crop&#x60; - scale the asset to fill the viewport while maintaining the aspect ratio. The asset will be cropped if it exceeds the bounds of the viewport.&lt;/li&gt;     &lt;li&gt;&#x60;none&#x60; - preserves the original asset dimensions and does not apply any scaling.&lt;/li&gt;   &lt;/ul&gt; | [optional] [default to &#39;crop&#39;]
**scale** | **Number** | Scale the asset to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale asset to half the size of the viewport. This is useful for picture-in-picture video and  scaling images such as logos and watermarks. | [optional] 
**position** | **String** | Place the asset in one of nine predefined positions of the viewport. This is most effective for when the asset is scaled and you want to position the element to a specific position. &lt;ul&gt;   &lt;li&gt;&#x60;top&#x60; - top (center)&lt;/li&gt;   &lt;li&gt;&#x60;topRight&#x60; - top right&lt;/li&gt;   &lt;li&gt;&#x60;right&#x60; - right (center)&lt;/li&gt;   &lt;li&gt;&#x60;bottomRight&#x60; - bottom right&lt;/li&gt;   &lt;li&gt;&#x60;bottom&#x60; - bottom (center)&lt;/li&gt;   &lt;li&gt;&#x60;bottomLeft&#x60; - bottom left&lt;/li&gt;   &lt;li&gt;&#x60;left&#x60; - left (center)&lt;/li&gt;   &lt;li&gt;&#x60;topLeft&#x60; - top left&lt;/li&gt;   &lt;li&gt;&#x60;center&#x60; - center&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;center&#39;]
**offset** | [**Offset**](Offset.md) |  | [optional] 
**transition** | [**Transition**](Transition.md) |  | [optional] 
**effect** | **String** | A motion effect to apply to the Clip. &lt;ul&gt;   &lt;li&gt;&#x60;zoomIn&#x60; - slow zoom in&lt;/li&gt;   &lt;li&gt;&#x60;zoomOut&#x60; - slow zoom out&lt;/li&gt;   &lt;li&gt;&#x60;slideLeft&#x60; - slow slide (pan) left&lt;/li&gt;   &lt;li&gt;&#x60;slideRight&#x60; - slow slide (pan) right&lt;/li&gt;   &lt;li&gt;&#x60;slideUp&#x60; - slow slide (pan) up&lt;/li&gt;   &lt;li&gt;&#x60;slideDown&#x60; - slow slide (pan) down&lt;/li&gt; &lt;/ul&gt; | [optional] 
**filter** | **String** | A filter effect to apply to the Clip. &lt;ul&gt;   &lt;li&gt;&#x60;boost&#x60; - boost contrast and saturation&lt;/li&gt;   &lt;li&gt;&#x60;contrast&#x60; - increase contrast&lt;/li&gt;   &lt;li&gt;&#x60;darken&#x60; - darken the scene&lt;/li&gt;   &lt;li&gt;&#x60;greyscale&#x60; - remove colour&lt;/li&gt;   &lt;li&gt;&#x60;lighten&#x60; - lighten the scene&lt;/li&gt;   &lt;li&gt;&#x60;muted&#x60; - reduce saturation and contrast&lt;/li&gt;   &lt;li&gt;&#x60;invert&#x60; - invert colors&lt;/li&gt; &lt;/ul&gt; | [optional] 
**opacity** | **Number** | Sets the opacity of the Clip where 1 is opaque and 0 is transparent. | [optional] [default to 1]
**transform** | [**Transformation**](Transformation.md) |  | [optional] 



## Enum: FitEnum


* `cover` (value: `"cover"`)

* `contain` (value: `"contain"`)

* `crop` (value: `"crop"`)

* `none` (value: `"none"`)





## Enum: PositionEnum


* `top` (value: `"top"`)

* `topRight` (value: `"topRight"`)

* `right` (value: `"right"`)

* `bottomRight` (value: `"bottomRight"`)

* `bottom` (value: `"bottom"`)

* `bottomLeft` (value: `"bottomLeft"`)

* `left` (value: `"left"`)

* `topLeft` (value: `"topLeft"`)

* `center` (value: `"center"`)





## Enum: EffectEnum


* `zoomIn` (value: `"zoomIn"`)

* `zoomOut` (value: `"zoomOut"`)

* `slideLeft` (value: `"slideLeft"`)

* `slideRight` (value: `"slideRight"`)

* `slideUp` (value: `"slideUp"`)

* `slideDown` (value: `"slideDown"`)





## Enum: FilterEnum


* `boost` (value: `"boost"`)

* `contrast` (value: `"contrast"`)

* `darken` (value: `"darken"`)

* `greyscale` (value: `"greyscale"`)

* `lighten` (value: `"lighten"`)

* `muted` (value: `"muted"`)

* `negative` (value: `"negative"`)




