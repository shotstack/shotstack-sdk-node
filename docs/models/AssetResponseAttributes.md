# ShotstackSdk.AssetResponseAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique id of the hosted asset in UUID format. | [optional] 
**owner** | **String** | The owner id of the render task. | [optional] 
**region** | **String** | The region the asset is hosted, currently only &#x60;au&#x60; (Australia). | [optional] 
**renderId** | **String** | The original render id that created the asset in UUID format. Multiple assets can share the same render id. | [optional] 
**filename** | **String** | The asset file name. | [optional] 
**url** | **String** | The asset file name. | [optional] 
**status** | **String** | The status of the asset. &lt;ul&gt;   &lt;li&gt;&#x60;importing&#x60; - the asset is being copied to the hosting service&lt;/li&gt;   &lt;li&gt;&#x60;ready&#x60; - the asset is ready to be served to users&lt;/li&gt;   &lt;li&gt;&#x60;failed&#x60; - the asset failed to copy or delete&lt;/li&gt;   &lt;li&gt;&#x60;deleted&#x60; - the asset has been deleted&lt;/li&gt; &lt;/ul&gt; | [optional] 
**created** | **String** | The time the asset was created. | [optional] 
**updated** | **String** | The time the asset status was last updated. | [optional] 



## Enum: StatusEnum


* `importing` (value: `"importing"`)

* `ready` (value: `"ready"`)

* `failed` (value: `"failed"`)

* `deleted` (value: `"deleted"`)




