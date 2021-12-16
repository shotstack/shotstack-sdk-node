# ShotstackSdk.Edit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeline** | [**Timeline**](Timeline.md) |  | 
**output** | [**Output**](Output.md) |  | 
**merge** | [**[MergeField]**](MergeField.md) | An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder &#x60;{{NAME}}&#x60; and replace it with the value &#x60;Jane&#x60;.  | [optional] 
**callback** | **String** | An optional webhook callback URL used to receive status notifications when a render completes or fails. See [webhooks](https://shotstack.gitbook.io/docs/guides/architecting-an-application/webhooks) for  more details. | [optional] 
**disk** | **String** | The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.gitbook.io/docs/guides/architecting-an-application/disk-types) for more details. &lt;ul&gt;   &lt;li&gt;&#x60;local&#x60; - optimized for high speed rendering with up to 512MB storage&lt;/li&gt;   &lt;li&gt;&#x60;mount&#x60; - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;local&#39;]



## Enum: DiskEnum


* `local` (value: `"local"`)

* `mount` (value: `"mount"`)




