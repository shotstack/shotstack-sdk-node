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
 * The GeneratedAssetErrorResponseData model module.
 * @module model/GeneratedAssetErrorResponseData
 * @version 0.2.6
 */
class GeneratedAssetErrorResponseData {
    /**
     * Constructs a new <code>GeneratedAssetErrorResponseData</code>.
     * Individual errors returned by the Create API.
     * @alias module:model/GeneratedAssetErrorResponseData
     * @param status {String} The http status code.
     * @param title {String} A short summary of the error.
     * @param detail {String} A detailed description of the error.
     */
    constructor(status, title, detail) { 
        
        GeneratedAssetErrorResponseData.initialize(this, status, title, detail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, title, detail) { 
        obj['status'] = status;
        obj['title'] = title;
        obj['detail'] = detail;
    }

    /**
     * Constructs a <code>GeneratedAssetErrorResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneratedAssetErrorResponseData} obj Optional instance to populate.
     * @return {module:model/GeneratedAssetErrorResponseData} The populated <code>GeneratedAssetErrorResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneratedAssetErrorResponseData();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GeneratedAssetErrorResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GeneratedAssetErrorResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GeneratedAssetErrorResponseData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['detail'] && !(typeof data['detail'] === 'string' || data['detail'] instanceof String)) {
            throw new Error("Expected the field `detail` to be a primitive type in the JSON string but got " + data['detail']);
        }

        return true;
    }

/**
     * Returns The http status code.
     * @return {String}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets The http status code.
     * @param {String} status The http status code.
     */
    setStatus(status) {
        this['status'] = status;
        return this;
    }
/**
     * Returns A short summary of the error.
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * Sets A short summary of the error.
     * @param {String} title A short summary of the error.
     */
    setTitle(title) {
        this['title'] = title;
        return this;
    }
/**
     * Returns A detailed description of the error.
     * @return {String}
     */
    getDetail() {
        return this.detail;
    }

    /**
     * Sets A detailed description of the error.
     * @param {String} detail A detailed description of the error.
     */
    setDetail(detail) {
        this['detail'] = detail;
        return this;
    }

}

GeneratedAssetErrorResponseData.RequiredProperties = ["status", "title", "detail"];

/**
 * The http status code.
 * @member {String} status
 */
GeneratedAssetErrorResponseData.prototype['status'] = undefined;

/**
 * A short summary of the error.
 * @member {String} title
 */
GeneratedAssetErrorResponseData.prototype['title'] = undefined;

/**
 * A detailed description of the error.
 * @member {String} detail
 */
GeneratedAssetErrorResponseData.prototype['detail'] = undefined;






export default GeneratedAssetErrorResponseData;

