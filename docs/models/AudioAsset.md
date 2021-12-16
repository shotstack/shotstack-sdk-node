# ShotstackSdk.AudioAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of asset - set to &#x60;audio&#x60; for audio assets. | [default to &#39;audio&#39;]
**src** | **String** | The audio source URL. The URL must be publicly accessible or include credentials. | 
**trim** | **Number** | The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the in trim point. The audio will play until the file ends or the Clip length is reached. | [optional] 
**volume** | **Number** | Set the volume for the audio clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1). | [optional] [default to 1]
**effect** | **String** | The effect to apply to the audio asset &lt;ul&gt;   &lt;li&gt;&#x60;fadeIn&#x60; - fade volume in only&lt;/li&gt;   &lt;li&gt;&#x60;fadeOut&#x60; - fade volume out only&lt;/li&gt;   &lt;li&gt;&#x60;fadeInFadeOut&#x60; - fade volume in and out&lt;/li&gt; &lt;/ul&gt; | [optional] 



## Enum: EffectEnum


* `fadeIn` (value: `"fadeIn"`)

* `fadeOut` (value: `"fadeOut"`)

* `fadeInFadeOut` (value: `"fadeInFadeOut"`)




