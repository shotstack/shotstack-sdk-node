# ShotstackSdk.HtmlAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of asset - set to &#x60;html&#x60; for HTML. | [default to &#39;html&#39;]
**html** | **String** | The HTML text string. See list of [supported HTML tags](https://shotstack.gitbook.io/docs/guides/architecting-an-application/html-support#supported-html-tags). | 
**css** | **String** | The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.gitbook.io/docs/guides/architecting-an-application/html-support#supported-html-tags). | [optional] 
**width** | **Number** | Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box. | [optional] 
**height** | **Number** | Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box. | [optional] 
**background** | **String** | Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency. | [optional] [default to &#39;transparent&#39;]
**position** | **String** | Place the HTML in one of nine predefined positions within the HTML area. &lt;ul&gt;   &lt;li&gt;&#x60;top&#x60; - top (center)&lt;/li&gt;   &lt;li&gt;&#x60;topRight&#x60; - top right&lt;/li&gt;   &lt;li&gt;&#x60;right&#x60; - right (center)&lt;/li&gt;   &lt;li&gt;&#x60;bottomRight&#x60; - bottom right&lt;/li&gt;   &lt;li&gt;&#x60;bottom&#x60; - bottom (center)&lt;/li&gt;   &lt;li&gt;&#x60;bottomLeft&#x60; - bottom left&lt;/li&gt;   &lt;li&gt;&#x60;left&#x60; - left (center)&lt;/li&gt;   &lt;li&gt;&#x60;topLeft&#x60; - top left&lt;/li&gt;   &lt;li&gt;&#x60;center&#x60; - center&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;center&#39;]



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




