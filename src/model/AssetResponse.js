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
import AssetResponseData from './AssetResponseData';

/**
 * The AssetResponse model module.
 * @module model/AssetResponse
 * @version 0.2.6
 */
class AssetResponse {
    /**
     * Constructs a new <code>AssetResponse</code>.
     * The response returned by the Serve API [get asset](#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows the [json:api](https://jsonapi.org/) specification.
     * @alias module:model/AssetResponse
     * @param data {module:model/AssetResponseData} 
     */
    constructor(data) { 
        
        AssetResponse.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>AssetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetResponse} obj Optional instance to populate.
     * @return {module:model/AssetResponse} The populated <code>AssetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = AssetResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssetResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          AssetResponseData.validateJSON(data['data']);
        }

        return true;
    }

/**
     * @return {module:model/AssetResponseData}
     */
    getData() {
        return this.data;
    }

    /**
     * @param {module:model/AssetResponseData} data
     */
    setData(data) {
        this['data'] = data;
        return this;
    }

}

AssetResponse.RequiredProperties = ["data"];

/**
 * @member {module:model/AssetResponseData} data
 */
AssetResponse.prototype['data'] = undefined;






export default AssetResponse;

