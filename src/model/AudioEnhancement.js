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
import DolbyEnhancement from './DolbyEnhancement';
import DolbyEnhancementOptions from './DolbyEnhancementOptions';

/**
 * The AudioEnhancement model module.
 * @module model/AudioEnhancement
 * @version 0.2.6
 */
class AudioEnhancement {
    /**
     * Constructs a new <code>AudioEnhancement</code>.
     * An audio enhancement that can be applied to the audio content of a rendition. The following providers are available: &lt;ul&gt;   &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_dolbyenhancement\&quot;&gt;DolbyEnhancement&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;
     * @alias module:model/AudioEnhancement
     * @param {(module:model/DolbyEnhancement)} instance The actual instance to initialize AudioEnhancement.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "DolbyEnhancement") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                DolbyEnhancement.validateJSON(instance); // throw an exception if no match
                // create DolbyEnhancement from JS object
                this.actualInstance = DolbyEnhancement.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into DolbyEnhancement
            errorMessages.push("Failed to construct DolbyEnhancement: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `AudioEnhancement` with oneOf schemas DolbyEnhancement. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `AudioEnhancement` with oneOf schemas DolbyEnhancement. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>AudioEnhancement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AudioEnhancement} obj Optional instance to populate.
     * @return {module:model/AudioEnhancement} The populated <code>AudioEnhancement</code> instance.
     */
    static constructFromObject(data, obj) {
        return new AudioEnhancement(data);
    }

    /**
     * Gets the actual instance, which can be <code>DolbyEnhancement</code>.
     * @return {(module:model/DolbyEnhancement)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>DolbyEnhancement</code>.
     * @param {(module:model/DolbyEnhancement)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = AudioEnhancement.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of AudioEnhancement from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/AudioEnhancement} An instance of AudioEnhancement.
     */
    static fromJSON = function(json_string){
        return AudioEnhancement.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The enhancement provider to use - set to `dolby` for Dolby.
 * @member {String} provider
 * @default 'dolby'
 */
AudioEnhancement.prototype['provider'] = 'dolby';

/**
 * @member {module:model/DolbyEnhancementOptions} options
 */
AudioEnhancement.prototype['options'] = undefined;


AudioEnhancement.OneOf = ["DolbyEnhancement"];

export default AudioEnhancement;

