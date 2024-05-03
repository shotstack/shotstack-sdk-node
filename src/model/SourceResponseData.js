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
import SourceResponseAttributes from './SourceResponseAttributes';

/**
 * The SourceResponseData model module.
 * @module model/SourceResponseData
 * @version 0.2.6
 */
class SourceResponseData {
    /**
     * Constructs a new <code>SourceResponseData</code>.
     * The type of resource (a source), it&#39;s id and attributes of the source file.
     * @alias module:model/SourceResponseData
     * @param type {String} The type of resource, in this case it is a source.
     * @param id {String} The source file id.
     * @param attributes {module:model/SourceResponseAttributes} 
     */
    constructor(type, id, attributes) { 
        
        SourceResponseData.initialize(this, type, id, attributes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, id, attributes) { 
        obj['type'] = type;
        obj['id'] = id;
        obj['attributes'] = attributes;
    }

    /**
     * Constructs a <code>SourceResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceResponseData} obj Optional instance to populate.
     * @return {module:model/SourceResponseData} The populated <code>SourceResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceResponseData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = SourceResponseAttributes.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SourceResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SourceResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SourceResponseData.RequiredProperties) {
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
        // validate the optional field `attributes`
        if (data['attributes']) { // data not null
          SourceResponseAttributes.validateJSON(data['attributes']);
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
     * Returns The source file id.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The source file id.
     * @param {String} id The source file id.
     */
    setId(id) {
        this['id'] = id;
        return this;
    }
/**
     * @return {module:model/SourceResponseAttributes}
     */
    getAttributes() {
        return this.attributes;
    }

    /**
     * @param {module:model/SourceResponseAttributes} attributes
     */
    setAttributes(attributes) {
        this['attributes'] = attributes;
        return this;
    }

}

SourceResponseData.RequiredProperties = ["type", "id", "attributes"];

/**
 * The type of resource, in this case it is a source.
 * @member {String} type
 */
SourceResponseData.prototype['type'] = undefined;

/**
 * The source file id.
 * @member {String} id
 */
SourceResponseData.prototype['id'] = undefined;

/**
 * @member {module:model/SourceResponseAttributes} attributes
 */
SourceResponseData.prototype['attributes'] = undefined;






export default SourceResponseData;

