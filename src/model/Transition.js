/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.io/docs/guide/) documentation.  There are three API's, one for editing and generating assets (Edit API), one for managing hosted assets (Serve API) and one for ingesting and transforming source assets (Ingest API).  Each API has it's own base URL and collection of endpoints. Each API uses the same set of API keys.  **[Edit API](#shotstack-edit)** - [https://api.shotstack.io/edit/{version}](#)<br> Edit videos, images and audio assets in the cloud using a simple JSON schema and templates.  **[Serve API](#shotstack-serve)** - [https://api.shotstack.io/serve/{version}](#)<br> Inspect and manage the hosting of assets generated by the Edit and Ingest APIs.  **[Ingest API](#shotstack-ingest)** - [https://api.shotstack.io/ingest/{version}](#)<br> Ingest (upload, store and transform) source footage, images, audio and fonts to be used by the Edit API.  **[Create API](#shotstack-create)** - [https://api.shotstack.io/create/{version}](#)<br> Generate images, videos, voice overs and text using built in and third party generative AI providers. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Transition model module.
 * @module model/Transition
 * @version 0.2.6
 */
class Transition {
    /**
     * Constructs a new <code>Transition</code>.
     * In and out transitions for a clip - i.e. fade in and fade out
     * @alias module:model/Transition
     */
    constructor() { 
        
        Transition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Transition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transition} obj Optional instance to populate.
     * @return {module:model/Transition} The populated <code>Transition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transition();

            if (data.hasOwnProperty('in')) {
                obj['in'] = ApiClient.convertToType(data['in'], 'String');
            }
            if (data.hasOwnProperty('out')) {
                obj['out'] = ApiClient.convertToType(data['out'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Transition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['in'] && !(typeof data['in'] === 'string' || data['in'] instanceof String)) {
            throw new Error("Expected the field `in` to be a primitive type in the JSON string but got " + data['in']);
        }
        // ensure the json data is a string
        if (data['out'] && !(typeof data['out'] === 'string' || data['out'] instanceof String)) {
            throw new Error("Expected the field `out` to be a primitive type in the JSON string but got " + data['out']);
        }

        return true;
    }

/**
     * Returns The transition in. Available transitions are:   <ul>     <li>`fade` - fade in</li>     <li>`reveal` - reveal from left to right</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade in</li>     <li>`slideRight` - move slightly right and fade in</li>     <li>`slideUp` - move slightly up and fade in</li>     <li>`slideDown` - move slightly down and fade in</li>     <li>`carouselLeft` - slide in from right to left</li>     <li>`carouselRight` - slide in from left to right</li>     <li>`carouselUp` - slide in from bottom to top</li>     <li>`carouselDown` - slide in from top to bottom</li>     <li>`shuffleTopRight` - rotate in from top right</li>     <li>`shuffleRightTop` - rotate in from right top</li>     <li>`shuffleRightBottom` - rotate in from right bottom</li>     <li>`shuffleBottomRight` - rotate in from bottom right</li>     <li>`shuffleBottomLeft` - rotate in from bottom left</li>     <li>`shuffleLeftBottom` - rotate in from left bottom</li>     <li>`shuffleLeftTop` - rotate in from left top</li>     <li>`shuffleTopLeft` - rotate in from top left</li>     <li>`zoom` - fast zoom in</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
     * @return {module:model/Transition.InEnum}
     */
    getIn() {
        return this.in;
    }

    /**
     * Sets The transition in. Available transitions are:   <ul>     <li>`fade` - fade in</li>     <li>`reveal` - reveal from left to right</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade in</li>     <li>`slideRight` - move slightly right and fade in</li>     <li>`slideUp` - move slightly up and fade in</li>     <li>`slideDown` - move slightly down and fade in</li>     <li>`carouselLeft` - slide in from right to left</li>     <li>`carouselRight` - slide in from left to right</li>     <li>`carouselUp` - slide in from bottom to top</li>     <li>`carouselDown` - slide in from top to bottom</li>     <li>`shuffleTopRight` - rotate in from top right</li>     <li>`shuffleRightTop` - rotate in from right top</li>     <li>`shuffleRightBottom` - rotate in from right bottom</li>     <li>`shuffleBottomRight` - rotate in from bottom right</li>     <li>`shuffleBottomLeft` - rotate in from bottom left</li>     <li>`shuffleLeftBottom` - rotate in from left bottom</li>     <li>`shuffleLeftTop` - rotate in from left top</li>     <li>`shuffleTopLeft` - rotate in from top left</li>     <li>`zoom` - fast zoom in</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
     * @param {module:model/Transition.InEnum} _in The transition in. Available transitions are:   <ul>     <li>`fade` - fade in</li>     <li>`reveal` - reveal from left to right</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade in</li>     <li>`slideRight` - move slightly right and fade in</li>     <li>`slideUp` - move slightly up and fade in</li>     <li>`slideDown` - move slightly down and fade in</li>     <li>`carouselLeft` - slide in from right to left</li>     <li>`carouselRight` - slide in from left to right</li>     <li>`carouselUp` - slide in from bottom to top</li>     <li>`carouselDown` - slide in from top to bottom</li>     <li>`shuffleTopRight` - rotate in from top right</li>     <li>`shuffleRightTop` - rotate in from right top</li>     <li>`shuffleRightBottom` - rotate in from right bottom</li>     <li>`shuffleBottomRight` - rotate in from bottom right</li>     <li>`shuffleBottomLeft` - rotate in from bottom left</li>     <li>`shuffleLeftBottom` - rotate in from left bottom</li>     <li>`shuffleLeftTop` - rotate in from left top</li>     <li>`shuffleTopLeft` - rotate in from top left</li>     <li>`zoom` - fast zoom in</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
     */
    setIn(_in) {
        this['in'] = _in;
        return this;
    }
/**
     * Returns The transition out. Available transitions are:   <ul>     <li>`fade` - fade out</li>     <li>`reveal` - reveal from right to left</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade out</li>     <li>`slideRight` - move slightly right and fade out</li>     <li>`slideUp` - move slightly up and fade out</li>     <li>`slideDown` - move slightly down and fade out</li>     <li>`carouselLeft` - slide out from right to left</li>     <li>`carouselRight` - slide out from left to right</li>     <li>`carouselUp` - slide out from bottom to top</li>     <li>`carouselDown` - slide out from top  to bottom</li>     <li>`shuffleTopRight` - rotate out from top right</li>     <li>`shuffleRightTop` - rotate out from right top</li>     <li>`shuffleRightBottom` - rotate out from right bottom</li>     <li>`shuffleBottomRight` - rotate out from bottom right</li>     <li>`shuffleBottomLeft` - rotate out from bottom left</li>     <li>`shuffleLeftBottom` - rotate out from left bottom</li>     <li>`shuffleLeftTop` - rotate out from left top</li>     <li>`shuffleTopLeft` - rotate out from top left</li>     <li>`zoom` - fast zoom out</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
     * @return {module:model/Transition.OutEnum}
     */
    getOut() {
        return this.out;
    }

    /**
     * Sets The transition out. Available transitions are:   <ul>     <li>`fade` - fade out</li>     <li>`reveal` - reveal from right to left</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade out</li>     <li>`slideRight` - move slightly right and fade out</li>     <li>`slideUp` - move slightly up and fade out</li>     <li>`slideDown` - move slightly down and fade out</li>     <li>`carouselLeft` - slide out from right to left</li>     <li>`carouselRight` - slide out from left to right</li>     <li>`carouselUp` - slide out from bottom to top</li>     <li>`carouselDown` - slide out from top  to bottom</li>     <li>`shuffleTopRight` - rotate out from top right</li>     <li>`shuffleRightTop` - rotate out from right top</li>     <li>`shuffleRightBottom` - rotate out from right bottom</li>     <li>`shuffleBottomRight` - rotate out from bottom right</li>     <li>`shuffleBottomLeft` - rotate out from bottom left</li>     <li>`shuffleLeftBottom` - rotate out from left bottom</li>     <li>`shuffleLeftTop` - rotate out from left top</li>     <li>`shuffleTopLeft` - rotate out from top left</li>     <li>`zoom` - fast zoom out</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
     * @param {module:model/Transition.OutEnum} out The transition out. Available transitions are:   <ul>     <li>`fade` - fade out</li>     <li>`reveal` - reveal from right to left</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade out</li>     <li>`slideRight` - move slightly right and fade out</li>     <li>`slideUp` - move slightly up and fade out</li>     <li>`slideDown` - move slightly down and fade out</li>     <li>`carouselLeft` - slide out from right to left</li>     <li>`carouselRight` - slide out from left to right</li>     <li>`carouselUp` - slide out from bottom to top</li>     <li>`carouselDown` - slide out from top  to bottom</li>     <li>`shuffleTopRight` - rotate out from top right</li>     <li>`shuffleRightTop` - rotate out from right top</li>     <li>`shuffleRightBottom` - rotate out from right bottom</li>     <li>`shuffleBottomRight` - rotate out from bottom right</li>     <li>`shuffleBottomLeft` - rotate out from bottom left</li>     <li>`shuffleLeftBottom` - rotate out from left bottom</li>     <li>`shuffleLeftTop` - rotate out from left top</li>     <li>`shuffleTopLeft` - rotate out from top left</li>     <li>`zoom` - fast zoom out</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
     */
    setOut(out) {
        this['out'] = out;
        return this;
    }

}



/**
 * The transition in. Available transitions are:   <ul>     <li>`fade` - fade in</li>     <li>`reveal` - reveal from left to right</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade in</li>     <li>`slideRight` - move slightly right and fade in</li>     <li>`slideUp` - move slightly up and fade in</li>     <li>`slideDown` - move slightly down and fade in</li>     <li>`carouselLeft` - slide in from right to left</li>     <li>`carouselRight` - slide in from left to right</li>     <li>`carouselUp` - slide in from bottom to top</li>     <li>`carouselDown` - slide in from top to bottom</li>     <li>`shuffleTopRight` - rotate in from top right</li>     <li>`shuffleRightTop` - rotate in from right top</li>     <li>`shuffleRightBottom` - rotate in from right bottom</li>     <li>`shuffleBottomRight` - rotate in from bottom right</li>     <li>`shuffleBottomLeft` - rotate in from bottom left</li>     <li>`shuffleLeftBottom` - rotate in from left bottom</li>     <li>`shuffleLeftTop` - rotate in from left top</li>     <li>`shuffleTopLeft` - rotate in from top left</li>     <li>`zoom` - fast zoom in</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
 * @member {module:model/Transition.InEnum} in
 */
Transition.prototype['in'] = undefined;

/**
 * The transition out. Available transitions are:   <ul>     <li>`fade` - fade out</li>     <li>`reveal` - reveal from right to left</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade out</li>     <li>`slideRight` - move slightly right and fade out</li>     <li>`slideUp` - move slightly up and fade out</li>     <li>`slideDown` - move slightly down and fade out</li>     <li>`carouselLeft` - slide out from right to left</li>     <li>`carouselRight` - slide out from left to right</li>     <li>`carouselUp` - slide out from bottom to top</li>     <li>`carouselDown` - slide out from top  to bottom</li>     <li>`shuffleTopRight` - rotate out from top right</li>     <li>`shuffleRightTop` - rotate out from right top</li>     <li>`shuffleRightBottom` - rotate out from right bottom</li>     <li>`shuffleBottomRight` - rotate out from bottom right</li>     <li>`shuffleBottomLeft` - rotate out from bottom left</li>     <li>`shuffleLeftBottom` - rotate out from left bottom</li>     <li>`shuffleLeftTop` - rotate out from left top</li>     <li>`shuffleTopLeft` - rotate out from top left</li>     <li>`zoom` - fast zoom out</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
 * @member {module:model/Transition.OutEnum} out
 */
Transition.prototype['out'] = undefined;





/**
 * Allowed values for the <code>in</code> property.
 * @enum {String}
 * @readonly
 */
Transition['InEnum'] = {

    /**
     * value: "fade"
     * @const
     */
    "fade": "fade",

    /**
     * value: "fadeSlow"
     * @const
     */
    "fadeSlow": "fadeSlow",

    /**
     * value: "fadeFast"
     * @const
     */
    "fadeFast": "fadeFast",

    /**
     * value: "reveal"
     * @const
     */
    "reveal": "reveal",

    /**
     * value: "revealSlow"
     * @const
     */
    "revealSlow": "revealSlow",

    /**
     * value: "revealFast"
     * @const
     */
    "revealFast": "revealFast",

    /**
     * value: "wipeLeft"
     * @const
     */
    "wipeLeft": "wipeLeft",

    /**
     * value: "wipeLeftSlow"
     * @const
     */
    "wipeLeftSlow": "wipeLeftSlow",

    /**
     * value: "wipeLeftFast"
     * @const
     */
    "wipeLeftFast": "wipeLeftFast",

    /**
     * value: "wipeRight"
     * @const
     */
    "wipeRight": "wipeRight",

    /**
     * value: "wipeRightSlow"
     * @const
     */
    "wipeRightSlow": "wipeRightSlow",

    /**
     * value: "wipeRightFast"
     * @const
     */
    "wipeRightFast": "wipeRightFast",

    /**
     * value: "slideLeft"
     * @const
     */
    "slideLeft": "slideLeft",

    /**
     * value: "slideLeftSlow"
     * @const
     */
    "slideLeftSlow": "slideLeftSlow",

    /**
     * value: "slideLeftFast"
     * @const
     */
    "slideLeftFast": "slideLeftFast",

    /**
     * value: "slideRight"
     * @const
     */
    "slideRight": "slideRight",

    /**
     * value: "slideRightSlow"
     * @const
     */
    "slideRightSlow": "slideRightSlow",

    /**
     * value: "slideRightFast"
     * @const
     */
    "slideRightFast": "slideRightFast",

    /**
     * value: "slideUp"
     * @const
     */
    "slideUp": "slideUp",

    /**
     * value: "slideUpSlow"
     * @const
     */
    "slideUpSlow": "slideUpSlow",

    /**
     * value: "slideUpFast"
     * @const
     */
    "slideUpFast": "slideUpFast",

    /**
     * value: "slideDown"
     * @const
     */
    "slideDown": "slideDown",

    /**
     * value: "slideDownSlow"
     * @const
     */
    "slideDownSlow": "slideDownSlow",

    /**
     * value: "slideDownFast"
     * @const
     */
    "slideDownFast": "slideDownFast",

    /**
     * value: "carouselLeft"
     * @const
     */
    "carouselLeft": "carouselLeft",

    /**
     * value: "carouselLeftSlow"
     * @const
     */
    "carouselLeftSlow": "carouselLeftSlow",

    /**
     * value: "carouselLeftFast"
     * @const
     */
    "carouselLeftFast": "carouselLeftFast",

    /**
     * value: "carouselRight"
     * @const
     */
    "carouselRight": "carouselRight",

    /**
     * value: "carouselRightSlow"
     * @const
     */
    "carouselRightSlow": "carouselRightSlow",

    /**
     * value: "carouselRightFast"
     * @const
     */
    "carouselRightFast": "carouselRightFast",

    /**
     * value: "carouselUp"
     * @const
     */
    "carouselUp": "carouselUp",

    /**
     * value: "carouselUpSlow"
     * @const
     */
    "carouselUpSlow": "carouselUpSlow",

    /**
     * value: "carouselUpFast"
     * @const
     */
    "carouselUpFast": "carouselUpFast",

    /**
     * value: "carouselDown"
     * @const
     */
    "carouselDown": "carouselDown",

    /**
     * value: "carouselDownSlow"
     * @const
     */
    "carouselDownSlow": "carouselDownSlow",

    /**
     * value: "carouselDownFast"
     * @const
     */
    "carouselDownFast": "carouselDownFast",

    /**
     * value: "shuffleTopRight"
     * @const
     */
    "shuffleTopRight": "shuffleTopRight",

    /**
     * value: "shuffleTopRightSlow"
     * @const
     */
    "shuffleTopRightSlow": "shuffleTopRightSlow",

    /**
     * value: "shuffleTopRightFast"
     * @const
     */
    "shuffleTopRightFast": "shuffleTopRightFast",

    /**
     * value: "shuffleRightTop"
     * @const
     */
    "shuffleRightTop": "shuffleRightTop",

    /**
     * value: "shuffleRightTopSlow"
     * @const
     */
    "shuffleRightTopSlow": "shuffleRightTopSlow",

    /**
     * value: "shuffleRightTopFast"
     * @const
     */
    "shuffleRightTopFast": "shuffleRightTopFast",

    /**
     * value: "shuffleRightBottom"
     * @const
     */
    "shuffleRightBottom": "shuffleRightBottom",

    /**
     * value: "shuffleRightBottomSlow"
     * @const
     */
    "shuffleRightBottomSlow": "shuffleRightBottomSlow",

    /**
     * value: "shuffleRightBottomFast"
     * @const
     */
    "shuffleRightBottomFast": "shuffleRightBottomFast",

    /**
     * value: "shuffleBottomRight"
     * @const
     */
    "shuffleBottomRight": "shuffleBottomRight",

    /**
     * value: "shuffleBottomRightSlow"
     * @const
     */
    "shuffleBottomRightSlow": "shuffleBottomRightSlow",

    /**
     * value: "shuffleBottomRightFast"
     * @const
     */
    "shuffleBottomRightFast": "shuffleBottomRightFast",

    /**
     * value: "shuffleBottomLeft"
     * @const
     */
    "shuffleBottomLeft": "shuffleBottomLeft",

    /**
     * value: "shuffleBottomLeftSlow"
     * @const
     */
    "shuffleBottomLeftSlow": "shuffleBottomLeftSlow",

    /**
     * value: "shuffleBottomLeftFast"
     * @const
     */
    "shuffleBottomLeftFast": "shuffleBottomLeftFast",

    /**
     * value: "shuffleLeftBottom"
     * @const
     */
    "shuffleLeftBottom": "shuffleLeftBottom",

    /**
     * value: "shuffleLeftBottomSlow"
     * @const
     */
    "shuffleLeftBottomSlow": "shuffleLeftBottomSlow",

    /**
     * value: "shuffleLeftBottomFast"
     * @const
     */
    "shuffleLeftBottomFast": "shuffleLeftBottomFast",

    /**
     * value: "shuffleLeftTop"
     * @const
     */
    "shuffleLeftTop": "shuffleLeftTop",

    /**
     * value: "shuffleLeftTopSlow"
     * @const
     */
    "shuffleLeftTopSlow": "shuffleLeftTopSlow",

    /**
     * value: "shuffleLeftTopFast"
     * @const
     */
    "shuffleLeftTopFast": "shuffleLeftTopFast",

    /**
     * value: "shuffleTopLeft"
     * @const
     */
    "shuffleTopLeft": "shuffleTopLeft",

    /**
     * value: "shuffleTopLeftSlow"
     * @const
     */
    "shuffleTopLeftSlow": "shuffleTopLeftSlow",

    /**
     * value: "shuffleTopLeftFast"
     * @const
     */
    "shuffleTopLeftFast": "shuffleTopLeftFast",

    /**
     * value: "zoom"
     * @const
     */
    "zoom": "zoom"
};


/**
 * Allowed values for the <code>out</code> property.
 * @enum {String}
 * @readonly
 */
Transition['OutEnum'] = {

    /**
     * value: "fade"
     * @const
     */
    "fade": "fade",

    /**
     * value: "fadeSlow"
     * @const
     */
    "fadeSlow": "fadeSlow",

    /**
     * value: "fadeFast"
     * @const
     */
    "fadeFast": "fadeFast",

    /**
     * value: "reveal"
     * @const
     */
    "reveal": "reveal",

    /**
     * value: "revealSlow"
     * @const
     */
    "revealSlow": "revealSlow",

    /**
     * value: "revealFast"
     * @const
     */
    "revealFast": "revealFast",

    /**
     * value: "wipeLeft"
     * @const
     */
    "wipeLeft": "wipeLeft",

    /**
     * value: "wipeLeftSlow"
     * @const
     */
    "wipeLeftSlow": "wipeLeftSlow",

    /**
     * value: "wipeLeftFast"
     * @const
     */
    "wipeLeftFast": "wipeLeftFast",

    /**
     * value: "wipeRight"
     * @const
     */
    "wipeRight": "wipeRight",

    /**
     * value: "wipeRightSlow"
     * @const
     */
    "wipeRightSlow": "wipeRightSlow",

    /**
     * value: "wipeRightFast"
     * @const
     */
    "wipeRightFast": "wipeRightFast",

    /**
     * value: "slideLeft"
     * @const
     */
    "slideLeft": "slideLeft",

    /**
     * value: "slideLeftSlow"
     * @const
     */
    "slideLeftSlow": "slideLeftSlow",

    /**
     * value: "slideLeftFast"
     * @const
     */
    "slideLeftFast": "slideLeftFast",

    /**
     * value: "slideRight"
     * @const
     */
    "slideRight": "slideRight",

    /**
     * value: "slideRightSlow"
     * @const
     */
    "slideRightSlow": "slideRightSlow",

    /**
     * value: "slideRightFast"
     * @const
     */
    "slideRightFast": "slideRightFast",

    /**
     * value: "slideUp"
     * @const
     */
    "slideUp": "slideUp",

    /**
     * value: "slideUpSlow"
     * @const
     */
    "slideUpSlow": "slideUpSlow",

    /**
     * value: "slideUpFast"
     * @const
     */
    "slideUpFast": "slideUpFast",

    /**
     * value: "slideDown"
     * @const
     */
    "slideDown": "slideDown",

    /**
     * value: "slideDownSlow"
     * @const
     */
    "slideDownSlow": "slideDownSlow",

    /**
     * value: "slideDownFast"
     * @const
     */
    "slideDownFast": "slideDownFast",

    /**
     * value: "carouselLeft"
     * @const
     */
    "carouselLeft": "carouselLeft",

    /**
     * value: "carouselLeftSlow"
     * @const
     */
    "carouselLeftSlow": "carouselLeftSlow",

    /**
     * value: "carouselLeftFast"
     * @const
     */
    "carouselLeftFast": "carouselLeftFast",

    /**
     * value: "carouselRight"
     * @const
     */
    "carouselRight": "carouselRight",

    /**
     * value: "carouselRightSlow"
     * @const
     */
    "carouselRightSlow": "carouselRightSlow",

    /**
     * value: "carouselRightFast"
     * @const
     */
    "carouselRightFast": "carouselRightFast",

    /**
     * value: "carouselUp"
     * @const
     */
    "carouselUp": "carouselUp",

    /**
     * value: "carouselUpSlow"
     * @const
     */
    "carouselUpSlow": "carouselUpSlow",

    /**
     * value: "carouselUpFast"
     * @const
     */
    "carouselUpFast": "carouselUpFast",

    /**
     * value: "carouselDown"
     * @const
     */
    "carouselDown": "carouselDown",

    /**
     * value: "carouselDownSlow"
     * @const
     */
    "carouselDownSlow": "carouselDownSlow",

    /**
     * value: "carouselDownFast"
     * @const
     */
    "carouselDownFast": "carouselDownFast",

    /**
     * value: "shuffleTopRight"
     * @const
     */
    "shuffleTopRight": "shuffleTopRight",

    /**
     * value: "shuffleTopRightSlow"
     * @const
     */
    "shuffleTopRightSlow": "shuffleTopRightSlow",

    /**
     * value: "shuffleTopRightFast"
     * @const
     */
    "shuffleTopRightFast": "shuffleTopRightFast",

    /**
     * value: "shuffleRightTop"
     * @const
     */
    "shuffleRightTop": "shuffleRightTop",

    /**
     * value: "shuffleRightTopSlow"
     * @const
     */
    "shuffleRightTopSlow": "shuffleRightTopSlow",

    /**
     * value: "shuffleRightTopFast"
     * @const
     */
    "shuffleRightTopFast": "shuffleRightTopFast",

    /**
     * value: "shuffleRightBottom"
     * @const
     */
    "shuffleRightBottom": "shuffleRightBottom",

    /**
     * value: "shuffleRightBottomSlow"
     * @const
     */
    "shuffleRightBottomSlow": "shuffleRightBottomSlow",

    /**
     * value: "shuffleRightBottomFast"
     * @const
     */
    "shuffleRightBottomFast": "shuffleRightBottomFast",

    /**
     * value: "shuffleBottomRight"
     * @const
     */
    "shuffleBottomRight": "shuffleBottomRight",

    /**
     * value: "shuffleBottomRightSlow"
     * @const
     */
    "shuffleBottomRightSlow": "shuffleBottomRightSlow",

    /**
     * value: "shuffleBottomRightFast"
     * @const
     */
    "shuffleBottomRightFast": "shuffleBottomRightFast",

    /**
     * value: "shuffleBottomLeft"
     * @const
     */
    "shuffleBottomLeft": "shuffleBottomLeft",

    /**
     * value: "shuffleBottomLeftSlow"
     * @const
     */
    "shuffleBottomLeftSlow": "shuffleBottomLeftSlow",

    /**
     * value: "shuffleBottomLeftFast"
     * @const
     */
    "shuffleBottomLeftFast": "shuffleBottomLeftFast",

    /**
     * value: "shuffleLeftBottom"
     * @const
     */
    "shuffleLeftBottom": "shuffleLeftBottom",

    /**
     * value: "shuffleLeftBottomSlow"
     * @const
     */
    "shuffleLeftBottomSlow": "shuffleLeftBottomSlow",

    /**
     * value: "shuffleLeftBottomFast"
     * @const
     */
    "shuffleLeftBottomFast": "shuffleLeftBottomFast",

    /**
     * value: "shuffleLeftTop"
     * @const
     */
    "shuffleLeftTop": "shuffleLeftTop",

    /**
     * value: "shuffleLeftTopSlow"
     * @const
     */
    "shuffleLeftTopSlow": "shuffleLeftTopSlow",

    /**
     * value: "shuffleLeftTopFast"
     * @const
     */
    "shuffleLeftTopFast": "shuffleLeftTopFast",

    /**
     * value: "shuffleTopLeft"
     * @const
     */
    "shuffleTopLeft": "shuffleTopLeft",

    /**
     * value: "shuffleTopLeftSlow"
     * @const
     */
    "shuffleTopLeftSlow": "shuffleTopLeftSlow",

    /**
     * value: "shuffleTopLeftFast"
     * @const
     */
    "shuffleTopLeftFast": "shuffleTopLeftFast",

    /**
     * value: "zoom"
     * @const
     */
    "zoom": "zoom"
};



export default Transition;

