# ShotstackSdk.Transition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_in** | **String** | The transition in. Available transitions are:   &lt;ul&gt;     &lt;li&gt;&#x60;fade&#x60; - fade in&lt;/li&gt;     &lt;li&gt;&#x60;reveal&#x60; - reveal from left to right&lt;/li&gt;     &lt;li&gt;&#x60;wipeLeft&#x60; - fade across screen to the left&lt;/li&gt;     &lt;li&gt;&#x60;wipeRight&#x60; - fade across screen to the right&lt;/li&gt;     &lt;li&gt;&#x60;slideLeft&#x60; - move slightly left and fade in&lt;/li&gt;     &lt;li&gt;&#x60;slideRight&#x60; - move slightly right and fade in&lt;/li&gt;     &lt;li&gt;&#x60;slideUp&#x60; - move slightly up and fade in&lt;/li&gt;     &lt;li&gt;&#x60;slideDown&#x60; - move slightly down and fade in&lt;/li&gt;     &lt;li&gt;&#x60;carouselLeft&#x60; - slide in from right to left&lt;/li&gt;     &lt;li&gt;&#x60;carouselRight&#x60; - slide in from left to right&lt;/li&gt;     &lt;li&gt;&#x60;carouselUp&#x60; - slide in from bottom to top&lt;/li&gt;     &lt;li&gt;&#x60;carouselDown&#x60; - slide in from top to bottom&lt;/li&gt;     &lt;li&gt;&#x60;shuffleTopRight&#x60; - rotate in from top right&lt;/li&gt;     &lt;li&gt;&#x60;shuffleRightTop&#x60; - rotate in from right top&lt;/li&gt;     &lt;li&gt;&#x60;shuffleRightBottom&#x60; - rotate in from right bottom&lt;/li&gt;     &lt;li&gt;&#x60;shuffleBottomRight&#x60; - rotate in from bottom right&lt;/li&gt;     &lt;li&gt;&#x60;shuffleBottomLeft&#x60; - rotate in from bottom left&lt;/li&gt;     &lt;li&gt;&#x60;shuffleLeftBottom&#x60; - rotate in from left bottom&lt;/li&gt;     &lt;li&gt;&#x60;shuffleLeftTop&#x60; - rotate in from left top&lt;/li&gt;     &lt;li&gt;&#x60;shuffleTopLeft&#x60; - rotate in from top left&lt;/li&gt;     &lt;li&gt;&#x60;zoom&#x60; - fast zoom in&lt;/li&gt;   &lt;/ul&gt; The transition speed can also be controlled by appending &#x60;Fast&#x60; or &#x60;Slow&#x60; to the transition, e.g. &#x60;fadeFast&#x60; or &#x60;CarouselLeftSlow&#x60;. | [optional] 
**out** | **String** | The transition out. Available transitions are:   &lt;ul&gt;     &lt;li&gt;&#x60;fade&#x60; - fade out&lt;/li&gt;     &lt;li&gt;&#x60;reveal&#x60; - reveal from right to left&lt;/li&gt;     &lt;li&gt;&#x60;wipeLeft&#x60; - fade across screen to the left&lt;/li&gt;     &lt;li&gt;&#x60;wipeRight&#x60; - fade across screen to the right&lt;/li&gt;     &lt;li&gt;&#x60;slideLeft&#x60; - move slightly left and fade out&lt;/li&gt;     &lt;li&gt;&#x60;slideRight&#x60; - move slightly right and fade out&lt;/li&gt;     &lt;li&gt;&#x60;slideUp&#x60; - move slightly up and fade out&lt;/li&gt;     &lt;li&gt;&#x60;slideDown&#x60; - move slightly down and fade out&lt;/li&gt;     &lt;li&gt;&#x60;carouselLeft&#x60; - slide out from right to left&lt;/li&gt;     &lt;li&gt;&#x60;carouselRight&#x60; - slide out from left to right&lt;/li&gt;     &lt;li&gt;&#x60;carouselUp&#x60; - slide out from bottom to top&lt;/li&gt;     &lt;li&gt;&#x60;carouselDown&#x60; - slide out from top  to bottom&lt;/li&gt;     &lt;li&gt;&#x60;shuffleTopRight&#x60; - rotate out from top right&lt;/li&gt;     &lt;li&gt;&#x60;shuffleRightTop&#x60; - rotate out from right top&lt;/li&gt;     &lt;li&gt;&#x60;shuffleRightBottom&#x60; - rotate out from right bottom&lt;/li&gt;     &lt;li&gt;&#x60;shuffleBottomRight&#x60; - rotate out from bottom right&lt;/li&gt;     &lt;li&gt;&#x60;shuffleBottomLeft&#x60; - rotate out from bottom left&lt;/li&gt;     &lt;li&gt;&#x60;shuffleLeftBottom&#x60; - rotate out from left bottom&lt;/li&gt;     &lt;li&gt;&#x60;shuffleLeftTop&#x60; - rotate out from left top&lt;/li&gt;     &lt;li&gt;&#x60;shuffleTopLeft&#x60; - rotate out from top left&lt;/li&gt;     &lt;li&gt;&#x60;zoom&#x60; - fast zoom out&lt;/li&gt;   &lt;/ul&gt; The transition speed can also be controlled by appending &#x60;Fast&#x60; or &#x60;Slow&#x60; to the transition, e.g. &#x60;fadeFast&#x60; or &#x60;CarouselLeftSlow&#x60;. | [optional] 



## Enum: InEnum


* `fade` (value: `"fade"`)

* `fadeSlow` (value: `"fadeSlow"`)

* `fadeFast` (value: `"fadeFast"`)

* `reveal` (value: `"reveal"`)

* `revealSlow` (value: `"revealSlow"`)

* `revealFast` (value: `"revealFast"`)

* `wipeLeft` (value: `"wipeLeft"`)

* `wipeLeftSlow` (value: `"wipeLeftSlow"`)

* `wipeLeftFast` (value: `"wipeLeftFast"`)

* `wipeRight` (value: `"wipeRight"`)

* `wipeRightSlow` (value: `"wipeRightSlow"`)

* `wipeRightFast` (value: `"wipeRightFast"`)

* `slideLeft` (value: `"slideLeft"`)

* `slideLeftSlow` (value: `"slideLeftSlow"`)

* `slideLeftFast` (value: `"slideLeftFast"`)

* `slideRight` (value: `"slideRight"`)

* `slideRightSlow` (value: `"slideRightSlow"`)

* `slideRightFast` (value: `"slideRightFast"`)

* `slideUp` (value: `"slideUp"`)

* `slideUpSlow` (value: `"slideUpSlow"`)

* `slideUpFast` (value: `"slideUpFast"`)

* `slideDown` (value: `"slideDown"`)

* `slideDownSlow` (value: `"slideDownSlow"`)

* `slideDownFast` (value: `"slideDownFast"`)

* `carouselLeft` (value: `"carouselLeft"`)

* `carouselLeftSlow` (value: `"carouselLeftSlow"`)

* `carouselLeftFast` (value: `"carouselLeftFast"`)

* `carouselRight` (value: `"carouselRight"`)

* `carouselRightSlow` (value: `"carouselRightSlow"`)

* `carouselRightFast` (value: `"carouselRightFast"`)

* `carouselUp` (value: `"carouselUp"`)

* `carouselUpSlow` (value: `"carouselUpSlow"`)

* `carouselUpFast` (value: `"carouselUpFast"`)

* `carouselDown` (value: `"carouselDown"`)

* `carouselDownSlow` (value: `"carouselDownSlow"`)

* `carouselDownFast` (value: `"carouselDownFast"`)

* `shuffleTopRight` (value: `"shuffleTopRight"`)

* `shuffleTopRightSlow` (value: `"shuffleTopRightSlow"`)

* `shuffleTopRightFast` (value: `"shuffleTopRightFast"`)

* `shuffleRightTop` (value: `"shuffleRightTop"`)

* `shuffleRightTopSlow` (value: `"shuffleRightTopSlow"`)

* `shuffleRightTopFast` (value: `"shuffleRightTopFast"`)

* `shuffleRightBottom` (value: `"shuffleRightBottom"`)

* `shuffleRightBottomSlow` (value: `"shuffleRightBottomSlow"`)

* `shuffleRightBottomFast` (value: `"shuffleRightBottomFast"`)

* `shuffleBottomRight` (value: `"shuffleBottomRight"`)

* `shuffleBottomRightSlow` (value: `"shuffleBottomRightSlow"`)

* `shuffleBottomRightFast` (value: `"shuffleBottomRightFast"`)

* `shuffleBottomLeft` (value: `"shuffleBottomLeft"`)

* `shuffleBottomLeftSlow` (value: `"shuffleBottomLeftSlow"`)

* `shuffleBottomLeftFast` (value: `"shuffleBottomLeftFast"`)

* `shuffleLeftBottom` (value: `"shuffleLeftBottom"`)

* `shuffleLeftBottomSlow` (value: `"shuffleLeftBottomSlow"`)

* `shuffleLeftBottomFast` (value: `"shuffleLeftBottomFast"`)

* `shuffleLeftTop` (value: `"shuffleLeftTop"`)

* `shuffleLeftTopSlow` (value: `"shuffleLeftTopSlow"`)

* `shuffleLeftTopFast` (value: `"shuffleLeftTopFast"`)

* `shuffleTopLeft` (value: `"shuffleTopLeft"`)

* `shuffleTopLeftSlow` (value: `"shuffleTopLeftSlow"`)

* `shuffleTopLeftFast` (value: `"shuffleTopLeftFast"`)

* `zoom` (value: `"zoom"`)





## Enum: OutEnum


* `fade` (value: `"fade"`)

* `fadeSlow` (value: `"fadeSlow"`)

* `fadeFast` (value: `"fadeFast"`)

* `reveal` (value: `"reveal"`)

* `revealSlow` (value: `"revealSlow"`)

* `revealFast` (value: `"revealFast"`)

* `wipeLeft` (value: `"wipeLeft"`)

* `wipeLeftSlow` (value: `"wipeLeftSlow"`)

* `wipeLeftFast` (value: `"wipeLeftFast"`)

* `wipeRight` (value: `"wipeRight"`)

* `wipeRightSlow` (value: `"wipeRightSlow"`)

* `wipeRightFast` (value: `"wipeRightFast"`)

* `slideLeft` (value: `"slideLeft"`)

* `slideLeftSlow` (value: `"slideLeftSlow"`)

* `slideLeftFast` (value: `"slideLeftFast"`)

* `slideRight` (value: `"slideRight"`)

* `slideRightSlow` (value: `"slideRightSlow"`)

* `slideRightFast` (value: `"slideRightFast"`)

* `slideUp` (value: `"slideUp"`)

* `slideUpSlow` (value: `"slideUpSlow"`)

* `slideUpFast` (value: `"slideUpFast"`)

* `slideDown` (value: `"slideDown"`)

* `slideDownSlow` (value: `"slideDownSlow"`)

* `slideDownFast` (value: `"slideDownFast"`)

* `carouselLeft` (value: `"carouselLeft"`)

* `carouselLeftSlow` (value: `"carouselLeftSlow"`)

* `carouselLeftFast` (value: `"carouselLeftFast"`)

* `carouselRight` (value: `"carouselRight"`)

* `carouselRightSlow` (value: `"carouselRightSlow"`)

* `carouselRightFast` (value: `"carouselRightFast"`)

* `carouselUp` (value: `"carouselUp"`)

* `carouselUpSlow` (value: `"carouselUpSlow"`)

* `carouselUpFast` (value: `"carouselUpFast"`)

* `carouselDown` (value: `"carouselDown"`)

* `carouselDownSlow` (value: `"carouselDownSlow"`)

* `carouselDownFast` (value: `"carouselDownFast"`)

* `shuffleTopRight` (value: `"shuffleTopRight"`)

* `shuffleTopRightSlow` (value: `"shuffleTopRightSlow"`)

* `shuffleTopRightFast` (value: `"shuffleTopRightFast"`)

* `shuffleRightTop` (value: `"shuffleRightTop"`)

* `shuffleRightTopSlow` (value: `"shuffleRightTopSlow"`)

* `shuffleRightTopFast` (value: `"shuffleRightTopFast"`)

* `shuffleRightBottom` (value: `"shuffleRightBottom"`)

* `shuffleRightBottomSlow` (value: `"shuffleRightBottomSlow"`)

* `shuffleRightBottomFast` (value: `"shuffleRightBottomFast"`)

* `shuffleBottomRight` (value: `"shuffleBottomRight"`)

* `shuffleBottomRightSlow` (value: `"shuffleBottomRightSlow"`)

* `shuffleBottomRightFast` (value: `"shuffleBottomRightFast"`)

* `shuffleBottomLeft` (value: `"shuffleBottomLeft"`)

* `shuffleBottomLeftSlow` (value: `"shuffleBottomLeftSlow"`)

* `shuffleBottomLeftFast` (value: `"shuffleBottomLeftFast"`)

* `shuffleLeftBottom` (value: `"shuffleLeftBottom"`)

* `shuffleLeftBottomSlow` (value: `"shuffleLeftBottomSlow"`)

* `shuffleLeftBottomFast` (value: `"shuffleLeftBottomFast"`)

* `shuffleLeftTop` (value: `"shuffleLeftTop"`)

* `shuffleLeftTopSlow` (value: `"shuffleLeftTopSlow"`)

* `shuffleLeftTopFast` (value: `"shuffleLeftTopFast"`)

* `shuffleTopLeft` (value: `"shuffleTopLeft"`)

* `shuffleTopLeftSlow` (value: `"shuffleTopLeftSlow"`)

* `shuffleTopLeftFast` (value: `"shuffleTopLeftFast"`)

* `zoom` (value: `"zoom"`)




