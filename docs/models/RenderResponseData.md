# ShotstackSdk.RenderResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of the render task in UUID format. | 
**owner** | **String** | The owner id of the render task. | 
**plan** | **String** | The customer subscription plan. | [optional] 
**status** | **String** | The status of the render task. &lt;ul&gt;   &lt;li&gt;&#x60;queued&#x60; - render is queued waiting to be rendered&lt;/li&gt;   &lt;li&gt;&#x60;fetching&#x60; - assets are being fetched&lt;/li&gt;   &lt;li&gt;&#x60;rendering&#x60; - the asset is being rendered&lt;/li&gt;   &lt;li&gt;&#x60;saving&#x60; - the final asset is being saved to storage&lt;/li&gt;   &lt;li&gt;&#x60;done&#x60; - the asset is ready to be downloaded&lt;/li&gt;   &lt;li&gt;&#x60;failed&#x60; - there was an error rendering the asset&lt;/li&gt; &lt;/ul&gt; | 
**error** | **String** | An error message, only displayed if an error occurred. | [optional] 
**duration** | **Number** | The output video or audio length in seconds. | [optional] 
**renderTime** | **Number** | The time taken to render the asset in milliseconds. | [optional] 
**url** | **String** | The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination. | [optional] 
**poster** | **String** | The URL of the poster image if requested. This will only be available if status is done. | [optional] 
**thumbnail** | **String** | The URL of the thumbnail image if requested. This will only be available if status is done. | [optional] 
**data** | [**Edit**](Edit.md) |  | 
**created** | **String** | The time the render task was initially queued. | 
**updated** | **String** | The time the render status was last updated. | 



## Enum: StatusEnum


* `queued` (value: `"queued"`)

* `fetching` (value: `"fetching"`)

* `rendering` (value: `"rendering"`)

* `saving` (value: `"saving"`)

* `done` (value: `"done"`)

* `failed` (value: `"failed"`)




