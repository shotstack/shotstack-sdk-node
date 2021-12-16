# ShotstackSdk.Soundtrack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**src** | **String** | The URL of the mp3 audio file. The URL must be publicly accessible or include credentials. | 
**effect** | **String** | The effect to apply to the audio file &lt;ul&gt;   &lt;li&gt;&#x60;fadeIn&#x60; - fade volume in only&lt;/li&gt;   &lt;li&gt;&#x60;fadeOut&#x60; - fade volume out only&lt;/li&gt;   &lt;li&gt;&#x60;fadeInFadeOut&#x60; - fade volume in and out&lt;/li&gt; &lt;/ul&gt; | [optional] 
**volume** | **Number** | Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1). | [optional] [default to 1]



## Enum: EffectEnum


* `fadeIn` (value: `"fadeIn"`)

* `fadeOut` (value: `"fadeOut"`)

* `fadeInFadeOut` (value: `"fadeInFadeOut"`)




