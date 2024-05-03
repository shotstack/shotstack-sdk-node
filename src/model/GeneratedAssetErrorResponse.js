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
import GeneratedAssetErrorResponseData from './GeneratedAssetErrorResponseData';

/**
 * The GeneratedAssetErrorResponse model module.
 * @module model/GeneratedAssetErrorResponse
 * @version 0.2.6
 */
class GeneratedAssetErrorResponse {
    /**
     * Constructs a new <code>GeneratedAssetErrorResponse</code>.
     * Error response data for validation and other errors returned by the Create API.
     * @alias module:model/GeneratedAssetErrorResponse
     * @param errors {Array.<module:model/GeneratedAssetErrorResponseData>} An array of errors.
     */
    constructor(errors) { 
        
        GeneratedAssetErrorResponse.initialize(this, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errors) { 
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>GeneratedAssetErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneratedAssetErrorResponse} obj Optional instance to populate.
     * @return {module:model/GeneratedAssetErrorResponse} The populated <code>GeneratedAssetErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneratedAssetErrorResponse();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [GeneratedAssetErrorResponseData]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GeneratedAssetErrorResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GeneratedAssetErrorResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GeneratedAssetErrorResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                GeneratedAssetErrorResponseData.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of errors.
     * @return {Array.<module:model/GeneratedAssetErrorResponseData>}
     */
    getErrors() {
        return this.errors;
    }

    /**
     * Sets An array of errors.
     * @param {Array.<module:model/GeneratedAssetErrorResponseData>} errors An array of errors.
     */
    setErrors(errors) {
        this['errors'] = errors;
        return this;
    }

}

GeneratedAssetErrorResponse.RequiredProperties = ["errors"];

/**
 * An array of errors.
 * @member {Array.<module:model/GeneratedAssetErrorResponseData>} errors
 */
GeneratedAssetErrorResponse.prototype['errors'] = undefined;






export default GeneratedAssetErrorResponse;

