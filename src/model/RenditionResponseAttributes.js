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
import Rendition from './Rendition';

/**
 * The RenditionResponseAttributes model module.
 * @module model/RenditionResponseAttributes
 * @version 0.2.6
 */
class RenditionResponseAttributes {
    /**
     * Constructs a new <code>RenditionResponseAttributes</code>.
     * The id and attributes of the generated rendition file.
     * @alias module:model/RenditionResponseAttributes
     * @param id {String} The rendition id.
     */
    constructor(id) { 
        
        RenditionResponseAttributes.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>RenditionResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenditionResponseAttributes} obj Optional instance to populate.
     * @return {module:model/RenditionResponseAttributes} The populated <code>RenditionResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenditionResponseAttributes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('executionTime')) {
                obj['executionTime'] = ApiClient.convertToType(data['executionTime'], 'Number');
            }
            if (data.hasOwnProperty('transformation')) {
                obj['transformation'] = Rendition.constructFromObject(data['transformation']);
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('fps')) {
                obj['fps'] = ApiClient.convertToType(data['fps'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenditionResponseAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenditionResponseAttributes</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RenditionResponseAttributes.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `transformation`
        if (data['transformation']) { // data not null
          Rendition.validateJSON(data['transformation']);
        }

        return true;
    }

/**
     * Returns The rendition id.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The rendition id.
     * @param {String} id The rendition id.
     */
    setId(id) {
        this['id'] = id;
        return this;
    }
/**
     * Returns The status of the rendition transformation task. <ul>   <li>`waiting` - rendition task is waiting for source file to become available</li>   <li>`queued` - rendition task is queued waiting to be processed</li>   <li>`processing` - the rendition is being processed</li>   <li>`ready` - the rendition is ready to be downloaded</li>   <li>`failed` - there was an error creating the rendition</li>   <li>`deleted` - the rendition has been deleted</li> </ul>
     * @return {module:model/RenditionResponseAttributes.StatusEnum}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets The status of the rendition transformation task. <ul>   <li>`waiting` - rendition task is waiting for source file to become available</li>   <li>`queued` - rendition task is queued waiting to be processed</li>   <li>`processing` - the rendition is being processed</li>   <li>`ready` - the rendition is ready to be downloaded</li>   <li>`failed` - there was an error creating the rendition</li>   <li>`deleted` - the rendition has been deleted</li> </ul>
     * @param {module:model/RenditionResponseAttributes.StatusEnum} status The status of the rendition transformation task. <ul>   <li>`waiting` - rendition task is waiting for source file to become available</li>   <li>`queued` - rendition task is queued waiting to be processed</li>   <li>`processing` - the rendition is being processed</li>   <li>`ready` - the rendition is ready to be downloaded</li>   <li>`failed` - there was an error creating the rendition</li>   <li>`deleted` - the rendition has been deleted</li> </ul>
     */
    setStatus(status) {
        this['status'] = status;
        return this;
    }
/**
     * Returns The URL of the rendition file hosted by Shotstack. The file at the URL can be used by the Edit API. Source file URL's consist of a base URL (AWS bucket), owner id, source id and a file name with the rendition id and extension.
     * @return {String}
     */
    getUrl() {
        return this.url;
    }

    /**
     * Sets The URL of the rendition file hosted by Shotstack. The file at the URL can be used by the Edit API. Source file URL's consist of a base URL (AWS bucket), owner id, source id and a file name with the rendition id and extension.
     * @param {String} url The URL of the rendition file hosted by Shotstack. The file at the URL can be used by the Edit API. Source file URL's consist of a base URL (AWS bucket), owner id, source id and a file name with the rendition id and extension.
     */
    setUrl(url) {
        this['url'] = url;
        return this;
    }
/**
     * Returns The time in milliseconds it took to process the rendition.
     * @return {Number}
     */
    getExecutionTime() {
        return this.executionTime;
    }

    /**
     * Sets The time in milliseconds it took to process the rendition.
     * @param {Number} executionTime The time in milliseconds it took to process the rendition.
     */
    setExecutionTime(executionTime) {
        this['executionTime'] = executionTime;
        return this;
    }
/**
     * @return {module:model/Rendition}
     */
    getTransformation() {
        return this.transformation;
    }

    /**
     * @param {module:model/Rendition} transformation
     */
    setTransformation(transformation) {
        this['transformation'] = transformation;
        return this;
    }
/**
     * Returns The width in pixels of the ingested source file, if a video or image.
     * @return {Number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * Sets The width in pixels of the ingested source file, if a video or image.
     * @param {Number} width The width in pixels of the ingested source file, if a video or image.
     */
    setWidth(width) {
        this['width'] = width;
        return this;
    }
/**
     * Returns The height in pixels of the ingested source file, if a video or image.
     * @return {Number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * Sets The height in pixels of the ingested source file, if a video or image.
     * @param {Number} height The height in pixels of the ingested source file, if a video or image.
     */
    setHeight(height) {
        this['height'] = height;
        return this;
    }
/**
     * Returns The duration in seconds of the ingested source file, if a video or audio file.
     * @return {Number}
     */
    getDuration() {
        return this.duration;
    }

    /**
     * Sets The duration in seconds of the ingested source file, if a video or audio file.
     * @param {Number} duration The duration in seconds of the ingested source file, if a video or audio file.
     */
    setDuration(duration) {
        this['duration'] = duration;
        return this;
    }
/**
     * Returns The frame rate in frames per second of the source file, if a video file.
     * @return {Number}
     */
    getFps() {
        return this.fps;
    }

    /**
     * Sets The frame rate in frames per second of the source file, if a video file.
     * @param {Number} fps The frame rate in frames per second of the source file, if a video file.
     */
    setFps(fps) {
        this['fps'] = fps;
        return this;
    }

}

RenditionResponseAttributes.RequiredProperties = ["id"];

/**
 * The rendition id.
 * @member {String} id
 */
RenditionResponseAttributes.prototype['id'] = undefined;

/**
 * The status of the rendition transformation task. <ul>   <li>`waiting` - rendition task is waiting for source file to become available</li>   <li>`queued` - rendition task is queued waiting to be processed</li>   <li>`processing` - the rendition is being processed</li>   <li>`ready` - the rendition is ready to be downloaded</li>   <li>`failed` - there was an error creating the rendition</li>   <li>`deleted` - the rendition has been deleted</li> </ul>
 * @member {module:model/RenditionResponseAttributes.StatusEnum} status
 */
RenditionResponseAttributes.prototype['status'] = undefined;

/**
 * The URL of the rendition file hosted by Shotstack. The file at the URL can be used by the Edit API. Source file URL's consist of a base URL (AWS bucket), owner id, source id and a file name with the rendition id and extension.
 * @member {String} url
 */
RenditionResponseAttributes.prototype['url'] = undefined;

/**
 * The time in milliseconds it took to process the rendition.
 * @member {Number} executionTime
 */
RenditionResponseAttributes.prototype['executionTime'] = undefined;

/**
 * @member {module:model/Rendition} transformation
 */
RenditionResponseAttributes.prototype['transformation'] = undefined;

/**
 * The width in pixels of the ingested source file, if a video or image.
 * @member {Number} width
 */
RenditionResponseAttributes.prototype['width'] = undefined;

/**
 * The height in pixels of the ingested source file, if a video or image.
 * @member {Number} height
 */
RenditionResponseAttributes.prototype['height'] = undefined;

/**
 * The duration in seconds of the ingested source file, if a video or audio file.
 * @member {Number} duration
 */
RenditionResponseAttributes.prototype['duration'] = undefined;

/**
 * The frame rate in frames per second of the source file, if a video file.
 * @member {Number} fps
 */
RenditionResponseAttributes.prototype['fps'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
RenditionResponseAttributes['StatusEnum'] = {

    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",

    /**
     * value: "importing"
     * @const
     */
    "importing": "importing",

    /**
     * value: "ready"
     * @const
     */
    "ready": "ready",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",

    /**
     * value: "overwritten"
     * @const
     */
    "overwritten": "overwritten"
};



export default RenditionResponseAttributes;

