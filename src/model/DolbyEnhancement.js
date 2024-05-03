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
import DolbyEnhancementOptions from './DolbyEnhancementOptions';

/**
 * The DolbyEnhancement model module.
 * @module model/DolbyEnhancement
 * @version 0.2.6
 */
class DolbyEnhancement {
    /**
     * Constructs a new <code>DolbyEnhancement</code>.
     * Dolby.io audio enhancement provider. Credentials are required and must be added via the  [dashboard](https://dashboard.shotstack.io/integrations/dolby), not in the request.
     * @alias module:model/DolbyEnhancement
     * @param provider {String} The enhancement provider to use - set to `dolby` for Dolby.
     * @param options {module:model/DolbyEnhancementOptions} 
     */
    constructor(provider, options) { 
        
        DolbyEnhancement.initialize(this, provider, options);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provider, options) { 
        obj['provider'] = provider || 'dolby';
        obj['options'] = options;
    }

    /**
     * Constructs a <code>DolbyEnhancement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DolbyEnhancement} obj Optional instance to populate.
     * @return {module:model/DolbyEnhancement} The populated <code>DolbyEnhancement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DolbyEnhancement();

            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = DolbyEnhancementOptions.constructFromObject(data['options']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DolbyEnhancement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DolbyEnhancement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DolbyEnhancement.RequiredProperties) {
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
          DolbyEnhancementOptions.validateJSON(data['options']);
        }

        return true;
    }

/**
     * Returns The enhancement provider to use - set to `dolby` for Dolby.
     * @return {String}
     */
    getProvider() {
        return this.provider;
    }

    /**
     * Sets The enhancement provider to use - set to `dolby` for Dolby.
     * @param {String} provider The enhancement provider to use - set to `dolby` for Dolby.
     */
    setProvider(provider) {
        this['provider'] = provider;
        return this;
    }
/**
     * @return {module:model/DolbyEnhancementOptions}
     */
    getOptions() {
        return this.options;
    }

    /**
     * @param {module:model/DolbyEnhancementOptions} options
     */
    setOptions(options) {
        this['options'] = options;
        return this;
    }

}

DolbyEnhancement.RequiredProperties = ["provider", "options"];

/**
 * The enhancement provider to use - set to `dolby` for Dolby.
 * @member {String} provider
 * @default 'dolby'
 */
DolbyEnhancement.prototype['provider'] = 'dolby';

/**
 * @member {module:model/DolbyEnhancementOptions} options
 */
DolbyEnhancement.prototype['options'] = undefined;






export default DolbyEnhancement;

