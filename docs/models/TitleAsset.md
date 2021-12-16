# ShotstackSdk.TitleAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of asset - set to &#x60;title&#x60; for titles. | [default to &#39;title&#39;]
**text** | **String** | The title text string - i.e. \&quot;My Title\&quot;. | 
**style** | **String** | Uses a preset to apply font properties and styling to the title. &lt;ul&gt;   &lt;li&gt;&#x60;minimal&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;blockbuster&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;vogue&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;sketchy&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;skinny&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;chunk&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;chunkLight&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;marker&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;future&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;subtitle&#x60;&lt;/li&gt; &lt;/ul&gt; | [optional] 
**color** | **String** | Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency. | [optional] [default to &#39;#ffffff&#39;]
**size** | **String** | Set the relative size of the text using predefined sizes from xx-small to xx-large. &lt;ul&gt;   &lt;li&gt;&#x60;xx-small&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;x-small&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;small&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;medium&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;large&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;x-large&#x60;&lt;/li&gt;   &lt;li&gt;&#x60;xx-large&#x60;&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;medium&#39;]
**background** | **String** | Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background. | [optional] 
**position** | **String** | Place the title in one of nine predefined positions of the viewport. &lt;ul&gt;   &lt;li&gt;&#x60;top&#x60; - top (center)&lt;/li&gt;   &lt;li&gt;&#x60;topRight&#x60; - top right&lt;/li&gt;   &lt;li&gt;&#x60;right&#x60; - right (center)&lt;/li&gt;   &lt;li&gt;&#x60;bottomRight&#x60; - bottom right&lt;/li&gt;   &lt;li&gt;&#x60;bottom&#x60; - bottom (center)&lt;/li&gt;   &lt;li&gt;&#x60;bottomLeft&#x60; - bottom left&lt;/li&gt;   &lt;li&gt;&#x60;left&#x60; - left (center)&lt;/li&gt;   &lt;li&gt;&#x60;topLeft&#x60; - top left&lt;/li&gt;   &lt;li&gt;&#x60;center&#x60; - center&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;center&#39;]
**offset** | [**Offset**](Offset.md) |  | [optional] 



## Enum: StyleEnum


* `minimal` (value: `"minimal"`)

* `blockbuster` (value: `"blockbuster"`)

* `vogue` (value: `"vogue"`)

* `sketchy` (value: `"sketchy"`)

* `skinny` (value: `"skinny"`)

* `chunk` (value: `"chunk"`)

* `chunkLight` (value: `"chunkLight"`)

* `marker` (value: `"marker"`)

* `future` (value: `"future"`)

* `subtitle` (value: `"subtitle"`)





## Enum: SizeEnum


* `xx-small` (value: `"xx-small"`)

* `x-small` (value: `"x-small"`)

* `small` (value: `"small"`)

* `medium` (value: `"medium"`)

* `large` (value: `"large"`)

* `x-large` (value: `"x-large"`)

* `xx-large` (value: `"xx-large"`)





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




