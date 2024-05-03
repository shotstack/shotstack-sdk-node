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
import TemplateResponseData from './TemplateResponseData';

/**
 * The TemplateResponse model module.
 * @module model/TemplateResponse
 * @version 0.2.6
 */
class TemplateResponse {
    /**
     * Constructs a new <code>TemplateResponse</code>.
     * The response received after a [template](#create-template) is submitted. The template is saved and a unique template id is returned.
     * @alias module:model/TemplateResponse
     * @param success {Boolean} `true` if successfully created, else `false`.
     * @param message {String} `Created`, `Bad Request` or an error message.
     * @param response {module:model/TemplateResponseData} 
     */
    constructor(success, message, response) { 
        
        TemplateResponse.initialize(this, success, message, response);
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
     * Constructs a <code>TemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateResponse} obj Optional instance to populate.
     * @return {module:model/TemplateResponse} The populated <code>TemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = TemplateResponseData.constructFromObject(data['response']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TemplateResponse.RequiredProperties) {
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
          TemplateResponseData.validateJSON(data['response']);
        }

        return true;
    }

/**
     * Returns `true` if successfully created, else `false`.
     * @return {Boolean}
     */
    getSuccess() {
        return this.success;
    }

    /**
     * Sets `true` if successfully created, else `false`.
     * @param {Boolean} success `true` if successfully created, else `false`.
     */
    setSuccess(success) {
        this['success'] = success;
        return this;
    }
/**
     * Returns `Created`, `Bad Request` or an error message.
     * @return {String}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets `Created`, `Bad Request` or an error message.
     * @param {String} message `Created`, `Bad Request` or an error message.
     */
    setMessage(message) {
        this['message'] = message;
        return this;
    }
/**
     * @return {module:model/TemplateResponseData}
     */
    getResponse() {
        return this.response;
    }

    /**
     * @param {module:model/TemplateResponseData} response
     */
    setResponse(response) {
        this['response'] = response;
        return this;
    }

}

TemplateResponse.RequiredProperties = ["success", "message", "response"];

/**
 * `true` if successfully created, else `false`.
 * @member {Boolean} success
 */
TemplateResponse.prototype['success'] = undefined;

/**
 * `Created`, `Bad Request` or an error message.
 * @member {String} message
 */
TemplateResponse.prototype['message'] = undefined;

/**
 * @member {module:model/TemplateResponseData} response
 */
TemplateResponse.prototype['response'] = undefined;






export default TemplateResponse;

