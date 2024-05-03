/**
 * Shotstack
 * Official Node SDK for the Shotstack Cloud Video Editing API
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
 * The Thumbnail model module.
 * @module model/Thumbnail
 * @version 0.2.6
 */
class Thumbnail {
    /**
     * Constructs a new <code>Thumbnail</code>.
     * Generate a thumbnail image for the video or image at a specific point from the timeline.
     * @alias module:model/Thumbnail
     * @param capture {Number} The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
     * @param scale {Number} Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
     */
    constructor(capture, scale) { 
        
        Thumbnail.initialize(this, capture, scale);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, capture, scale) { 
        obj['capture'] = capture;
        obj['scale'] = scale;
    }

    /**
     * Constructs a <code>Thumbnail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Thumbnail} obj Optional instance to populate.
     * @return {module:model/Thumbnail} The populated <code>Thumbnail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Thumbnail();

            if (data.hasOwnProperty('capture')) {
                obj['capture'] = ApiClient.convertToType(data['capture'], 'Number');
            }
            if (data.hasOwnProperty('scale')) {
                obj['scale'] = ApiClient.convertToType(data['scale'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Thumbnail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Thumbnail</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Thumbnail.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
     * @return {Number}
     */
    getCapture() {
        return this.capture;
    }

    /**
     * Sets The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
     * @param {Number} capture The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
     */
    setCapture(capture) {
        this['capture'] = capture;
        return this;
    }
/**
     * Returns Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
     * @return {Number}
     */
    getScale() {
        return this.scale;
    }

    /**
     * Sets Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
     * @param {Number} scale Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
     */
    setScale(scale) {
        this['scale'] = scale;
        return this;
    }

}

Thumbnail.RequiredProperties = ["capture", "scale"];

/**
 * The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
 * @member {Number} capture
 */
Thumbnail.prototype['capture'] = undefined;

/**
 * Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
 * @member {Number} scale
 */
Thumbnail.prototype['scale'] = undefined;






export default Thumbnail;

