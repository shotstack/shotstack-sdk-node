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
 * The TemplateResponseData model module.
 * @module model/TemplateResponseData
 * @version 0.2.6
 */
class TemplateResponseData {
    /**
     * Constructs a new <code>TemplateResponseData</code>.
     * The response data returned with the [TemplateResponse](#tocs_templateresponse).
     * @alias module:model/TemplateResponseData
     * @param message {String} Success response message or error details.
     * @param id {String} The unique id of the template in UUID format.
     */
    constructor(message, id) { 
        
        TemplateResponseData.initialize(this, message, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, id) { 
        obj['message'] = message;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>TemplateResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateResponseData} obj Optional instance to populate.
     * @return {module:model/TemplateResponseData} The populated <code>TemplateResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateResponseData();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TemplateResponseData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }

/**
     * Returns Success response message or error details.
     * @return {String}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets Success response message or error details.
     * @param {String} message Success response message or error details.
     */
    setMessage(message) {
        this['message'] = message;
        return this;
    }
/**
     * Returns The unique id of the template in UUID format.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique id of the template in UUID format.
     * @param {String} id The unique id of the template in UUID format.
     */
    setId(id) {
        this['id'] = id;
        return this;
    }

}

TemplateResponseData.RequiredProperties = ["message", "id"];

/**
 * Success response message or error details.
 * @member {String} message
 */
TemplateResponseData.prototype['message'] = undefined;

/**
 * The unique id of the template in UUID format.
 * @member {String} id
 */
TemplateResponseData.prototype['id'] = undefined;






export default TemplateResponseData;

