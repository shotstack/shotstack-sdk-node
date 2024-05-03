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
import GoogleDriveDestinationOptions from './GoogleDriveDestinationOptions';

/**
 * The GoogleDriveDestination model module.
 * @module model/GoogleDriveDestination
 * @version 0.2.6
 */
class GoogleDriveDestination {
    /**
     * Constructs a new <code>GoogleDriveDestination</code>.
     * Send rendered videos and assets to the [Google Drive](https://shotstack.io/docs/guide/serving-assets/destinations/google-drive/) cloud storage service. Google Drive uses OAuth and you must authenticate and link your Google account via  [dashboard](https://dashboard.shotstack.io/integrations/google-drive), not in the request.
     * @alias module:model/GoogleDriveDestination
     * @param provider {String} The destination to send assets to - set to `google-drive` for Google Drive.
     * @param options {module:model/GoogleDriveDestinationOptions} 
     */
    constructor(provider, options) { 
        
        GoogleDriveDestination.initialize(this, provider, options);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provider, options) { 
        obj['provider'] = provider || 'google-drive';
        obj['options'] = options;
    }

    /**
     * Constructs a <code>GoogleDriveDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoogleDriveDestination} obj Optional instance to populate.
     * @return {module:model/GoogleDriveDestination} The populated <code>GoogleDriveDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoogleDriveDestination();

            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = GoogleDriveDestinationOptions.constructFromObject(data['options']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GoogleDriveDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GoogleDriveDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GoogleDriveDestination.RequiredProperties) {
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
          GoogleDriveDestinationOptions.validateJSON(data['options']);
        }

        return true;
    }

/**
     * Returns The destination to send assets to - set to `google-drive` for Google Drive.
     * @return {String}
     */
    getProvider() {
        return this.provider;
    }

    /**
     * Sets The destination to send assets to - set to `google-drive` for Google Drive.
     * @param {String} provider The destination to send assets to - set to `google-drive` for Google Drive.
     */
    setProvider(provider) {
        this['provider'] = provider;
        return this;
    }
/**
     * @return {module:model/GoogleDriveDestinationOptions}
     */
    getOptions() {
        return this.options;
    }

    /**
     * @param {module:model/GoogleDriveDestinationOptions} options
     */
    setOptions(options) {
        this['options'] = options;
        return this;
    }

}

GoogleDriveDestination.RequiredProperties = ["provider", "options"];

/**
 * The destination to send assets to - set to `google-drive` for Google Drive.
 * @member {String} provider
 * @default 'google-drive'
 */
GoogleDriveDestination.prototype['provider'] = 'google-drive';

/**
 * @member {module:model/GoogleDriveDestinationOptions} options
 */
GoogleDriveDestination.prototype['options'] = undefined;






export default GoogleDriveDestination;

