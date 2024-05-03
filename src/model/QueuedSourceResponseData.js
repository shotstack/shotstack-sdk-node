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
 * The QueuedSourceResponseData model module.
 * @module model/QueuedSourceResponseData
 * @version 0.2.6
 */
class QueuedSourceResponseData {
    /**
     * Constructs a new <code>QueuedSourceResponseData</code>.
     * The type of resource (a source) and the newly created source id. Returned with [QueuedSourceResponse](#tocs_queuedsourceresponse).
     * @alias module:model/QueuedSourceResponseData
     * @param type {String} The type of resource, in this case it is a source.
     * @param id {String} The source id.
     */
    constructor(type, id) { 
        
        QueuedSourceResponseData.initialize(this, type, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, id) { 
        obj['type'] = type;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>QueuedSourceResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueuedSourceResponseData} obj Optional instance to populate.
     * @return {module:model/QueuedSourceResponseData} The populated <code>QueuedSourceResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueuedSourceResponseData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueuedSourceResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueuedSourceResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QueuedSourceResponseData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }

/**
     * Returns The type of resource, in this case it is a source.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of resource, in this case it is a source.
     * @param {String} type The type of resource, in this case it is a source.
     */
    setType(type) {
        this['type'] = type;
        return this;
    }
/**
     * Returns The source id.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The source id.
     * @param {String} id The source id.
     */
    setId(id) {
        this['id'] = id;
        return this;
    }

}

QueuedSourceResponseData.RequiredProperties = ["type", "id"];

/**
 * The type of resource, in this case it is a source.
 * @member {String} type
 */
QueuedSourceResponseData.prototype['type'] = undefined;

/**
 * The source id.
 * @member {String} id
 */
QueuedSourceResponseData.prototype['id'] = undefined;






export default QueuedSourceResponseData;

