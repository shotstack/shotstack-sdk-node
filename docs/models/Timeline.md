# ShotstackSdk.Timeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**soundtrack** | [**Soundtrack**](Soundtrack.md) |  | [optional] 
**background** | **String** | A hexadecimal value for the timeline background colour. Defaults to #000000 (black). | [optional] [default to &#39;#000000&#39;]
**fonts** | [**[Font]**](Font.md) | An array of custom fonts to be downloaded for use by the HTML assets. | [optional] 
**tracks** | [**[Track]**](Track.md) | A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images. | 
**cache** | **Boolean** | Disable the caching of ingested source footage and assets. See  [caching](https://shotstack.gitbook.io/docs/guides/architecting-an-application/caching) for more details. | [optional] [default to true]


