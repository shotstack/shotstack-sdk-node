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
import Destinations from './Destinations';
import Outputs from './Outputs';

/**
 * The Source model module.
 * @module model/Source
 * @version 0.2.6
 */
class Source {
    /**
     * Constructs a new <code>Source</code>.
     * The details of the file to be ingested and any transformations to be applied. Once the source file has been ingested, new renditions can be created from it. The renditions are specified in the **outputs** property. A rendition is a new version, generated from the source. This can be used to create new sizes and aspect ratios tht serve different purposes within an application.
     * @alias module:model/Source
     */
    constructor() { 
        
        Source.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Source();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('outputs')) {
                obj['outputs'] = Outputs.constructFromObject(data['outputs']);
            }
            if (data.hasOwnProperty('destinations')) {
                obj['destinations'] = Destinations.constructFromObject(data['destinations']);
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Source</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Source</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `outputs`
        if (data['outputs']) { // data not null
          Outputs.validateJSON(data['outputs']);
        }
        // validate the optional field `destinations`
        if (data['destinations']) { // data not null
          Destinations.validateJSON(data['destinations']);
        }
        // ensure the json data is a string
        if (data['callback'] && !(typeof data['callback'] === 'string' || data['callback'] instanceof String)) {
            throw new Error("Expected the field `callback` to be a primitive type in the JSON string but got " + data['callback']);
        }

        return true;
    }

/**
     * Returns The URL of the file to be ingested. The URL must be publicly accessible or include credentials.
     * @return {String}
     */
    getUrl() {
        return this.url;
    }

    /**
     * Sets The URL of the file to be ingested. The URL must be publicly accessible or include credentials.
     * @param {String} url The URL of the file to be ingested. The URL must be publicly accessible or include credentials.
     */
    setUrl(url) {
        this['url'] = url;
        return this;
    }
/**
     * @return {module:model/Outputs}
     */
    getOutputs() {
        return this.outputs;
    }

    /**
     * @param {module:model/Outputs} outputs
     */
    setOutputs(outputs) {
        this['outputs'] = outputs;
        return this;
    }
/**
     * @return {module:model/Destinations}
     */
    getDestinations() {
        return this.destinations;
    }

    /**
     * @param {module:model/Destinations} destinations
     */
    setDestinations(destinations) {
        this['destinations'] = destinations;
        return this;
    }
/**
     * Returns An optional webhook callback URL used to receive status notifications when sources are uploaded and renditions processed.
     * @return {String}
     */
    getCallback() {
        return this.callback;
    }

    /**
     * Sets An optional webhook callback URL used to receive status notifications when sources are uploaded and renditions processed.
     * @param {String} callback An optional webhook callback URL used to receive status notifications when sources are uploaded and renditions processed.
     */
    setCallback(callback) {
        this['callback'] = callback;
        return this;
    }

}



/**
 * The URL of the file to be ingested. The URL must be publicly accessible or include credentials.
 * @member {String} url
 */
Source.prototype['url'] = undefined;

/**
 * @member {module:model/Outputs} outputs
 */
Source.prototype['outputs'] = undefined;

/**
 * @member {module:model/Destinations} destinations
 */
Source.prototype['destinations'] = undefined;

/**
 * An optional webhook callback URL used to receive status notifications when sources are uploaded and renditions processed.
 * @member {String} callback
 */
Source.prototype['callback'] = undefined;






export default Source;

