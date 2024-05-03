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
import TemplateDataResponseData from './TemplateDataResponseData';

/**
 * The TemplateDataResponse model module.
 * @module model/TemplateDataResponse
 * @version 0.2.6
 */
class TemplateDataResponse {
    /**
     * Constructs a new <code>TemplateDataResponse</code>.
     * The template data including the template name and [Edit](#tocs_edit).
     * @alias module:model/TemplateDataResponse
     * @param success {Boolean} `true` if successfully returned, else `false`.
     * @param message {String} `OK`, `Bad Request` or an error message.
     * @param response {module:model/TemplateDataResponseData} 
     */
    constructor(success, message, response) { 
        
        TemplateDataResponse.initialize(this, success, message, response);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, success, message, response) { 
        obj['success'] = success;
        obj['message'] = message;
        obj['response'] = response;
    }

    /**
     * Constructs a <code>TemplateDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDataResponse} obj Optional instance to populate.
     * @return {module:model/TemplateDataResponse} The populated <code>TemplateDataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateDataResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = TemplateDataResponseData.constructFromObject(data['response']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateDataResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateDataResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TemplateDataResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `response`
        if (data['response']) { // data not null
          TemplateDataResponseData.validateJSON(data['response']);
        }

        return true;
    }

/**
     * Returns `true` if successfully returned, else `false`.
     * @return {Boolean}
     */
    getSuccess() {
        return this.success;
    }

    /**
     * Sets `true` if successfully returned, else `false`.
     * @param {Boolean} success `true` if successfully returned, else `false`.
     */
    setSuccess(success) {
        this['success'] = success;
        return this;
    }
/**
     * Returns `OK`, `Bad Request` or an error message.
     * @return {String}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets `OK`, `Bad Request` or an error message.
     * @param {String} message `OK`, `Bad Request` or an error message.
     */
    setMessage(message) {
        this['message'] = message;
        return this;
    }
/**
     * @return {module:model/TemplateDataResponseData}
     */
    getResponse() {
        return this.response;
    }

    /**
     * @param {module:model/TemplateDataResponseData} response
     */
    setResponse(response) {
        this['response'] = response;
        return this;
    }

}

TemplateDataResponse.RequiredProperties = ["success", "message", "response"];

/**
 * `true` if successfully returned, else `false`.
 * @member {Boolean} success
 */
TemplateDataResponse.prototype['success'] = undefined;

/**
 * `OK`, `Bad Request` or an error message.
 * @member {String} message
 */
TemplateDataResponse.prototype['message'] = undefined;

/**
 * @member {module:model/TemplateDataResponseData} response
 */
TemplateDataResponse.prototype['response'] = undefined;






export default TemplateDataResponse;

