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
import ElevenLabsGeneratedAssetOptions from './ElevenLabsGeneratedAssetOptions';

/**
 * The ElevenLabsGeneratedAsset model module.
 * @module model/ElevenLabsGeneratedAsset
 * @version 0.2.6
 */
class ElevenLabsGeneratedAsset {
    /**
     * Constructs a new <code>ElevenLabsGeneratedAsset</code>.
     * Generate assets using ElevenLabs. ElevenLabs provide a text-to-speech service. The ElevenLabs provider works on a bring-your-own-key basis, credentials are required and must be added via the  [dashboard](https://dashboard.shotstack.io/integrations/elevenlabs), not in the request.
     * @alias module:model/ElevenLabsGeneratedAsset
     * @param provider {module:model/ElevenLabsGeneratedAsset.ProviderEnum} The name of the provider - set to `elevenlabs` for ElevenLabs.
     * @param options {module:model/ElevenLabsGeneratedAssetOptions} 
     */
    constructor(provider, options) { 
        
        ElevenLabsGeneratedAsset.initialize(this, provider, options);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provider, options) { 
        obj['provider'] = provider || 'elevenlabs';
        obj['options'] = options;
    }

    /**
     * Constructs a <code>ElevenLabsGeneratedAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElevenLabsGeneratedAsset} obj Optional instance to populate.
     * @return {module:model/ElevenLabsGeneratedAsset} The populated <code>ElevenLabsGeneratedAsset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ElevenLabsGeneratedAsset();

            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ElevenLabsGeneratedAssetOptions.constructFromObject(data['options']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ElevenLabsGeneratedAsset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ElevenLabsGeneratedAsset</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ElevenLabsGeneratedAsset.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }
        // validate the optional field `options`
        if (data['options']) { // data not null
          ElevenLabsGeneratedAssetOptions.validateJSON(data['options']);
        }

        return true;
    }

/**
     * Returns The name of the provider - set to `elevenlabs` for ElevenLabs.
     * @return {module:model/ElevenLabsGeneratedAsset.ProviderEnum}
     */
    getProvider() {
        return this.provider;
    }

    /**
     * Sets The name of the provider - set to `elevenlabs` for ElevenLabs.
     * @param {module:model/ElevenLabsGeneratedAsset.ProviderEnum} provider The name of the provider - set to `elevenlabs` for ElevenLabs.
     */
    setProvider(provider) {
        this['provider'] = provider;
        return this;
    }
/**
     * @return {module:model/ElevenLabsGeneratedAssetOptions}
     */
    getOptions() {
        return this.options;
    }

    /**
     * @param {module:model/ElevenLabsGeneratedAssetOptions} options
     */
    setOptions(options) {
        this['options'] = options;
        return this;
    }

}

ElevenLabsGeneratedAsset.RequiredProperties = ["provider", "options"];

/**
 * The name of the provider - set to `elevenlabs` for ElevenLabs.
 * @member {module:model/ElevenLabsGeneratedAsset.ProviderEnum} provider
 * @default 'elevenlabs'
 */
ElevenLabsGeneratedAsset.prototype['provider'] = 'elevenlabs';

/**
 * @member {module:model/ElevenLabsGeneratedAssetOptions} options
 */
ElevenLabsGeneratedAsset.prototype['options'] = undefined;





/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
ElevenLabsGeneratedAsset['ProviderEnum'] = {

    /**
     * value: "elevenlabs"
     * @const
     */
    "elevenlabs": "elevenlabs"
};



export default ElevenLabsGeneratedAsset;

