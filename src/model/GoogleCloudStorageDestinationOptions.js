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
 * The GoogleCloudStorageDestinationOptions model module.
 * @module model/GoogleCloudStorageDestinationOptions
 * @version 0.2.6
 */
class GoogleCloudStorageDestinationOptions {
    /**
     * Constructs a new <code>GoogleCloudStorageDestinationOptions</code>.
     * Pass additional options to control how files are stored in Google Cloud Storage.
     * @alias module:model/GoogleCloudStorageDestinationOptions
     * @param bucket {String} The bucket name to send files to. The bucket must exist in the Google Cloud Storage account before files can be sent.
     */
    constructor(bucket) { 
        
        GoogleCloudStorageDestinationOptions.initialize(this, bucket);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bucket) { 
        obj['bucket'] = bucket;
    }

    /**
     * Constructs a <code>GoogleCloudStorageDestinationOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoogleCloudStorageDestinationOptions} obj Optional instance to populate.
     * @return {module:model/GoogleCloudStorageDestinationOptions} The populated <code>GoogleCloudStorageDestinationOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoogleCloudStorageDestinationOptions();

            if (data.hasOwnProperty('bucket')) {
                obj['bucket'] = ApiClient.convertToType(data['bucket'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GoogleCloudStorageDestinationOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GoogleCloudStorageDestinationOptions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GoogleCloudStorageDestinationOptions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['bucket'] && !(typeof data['bucket'] === 'string' || data['bucket'] instanceof String)) {
            throw new Error("Expected the field `bucket` to be a primitive type in the JSON string but got " + data['bucket']);
        }
        // ensure the json data is a string
        if (data['prefix'] && !(typeof data['prefix'] === 'string' || data['prefix'] instanceof String)) {
            throw new Error("Expected the field `prefix` to be a primitive type in the JSON string but got " + data['prefix']);
        }
        // ensure the json data is a string
        if (data['filename'] && !(typeof data['filename'] === 'string' || data['filename'] instanceof String)) {
            throw new Error("Expected the field `filename` to be a primitive type in the JSON string but got " + data['filename']);
        }

        return true;
    }

/**
     * Returns The bucket name to send files to. The bucket must exist in the Google Cloud Storage account before files can be sent.
     * @return {String}
     */
    getBucket() {
        return this.bucket;
    }

    /**
     * Sets The bucket name to send files to. The bucket must exist in the Google Cloud Storage account before files can be sent.
     * @param {String} bucket The bucket name to send files to. The bucket must exist in the Google Cloud Storage account before files can be sent.
     */
    setBucket(bucket) {
        this['bucket'] = bucket;
        return this;
    }
/**
     * Returns A prefix for the file being sent. This is typically a folder name, i.e. `videos` or `customerId/videos`.
     * @return {String}
     */
    getPrefix() {
        return this.prefix;
    }

    /**
     * Sets A prefix for the file being sent. This is typically a folder name, i.e. `videos` or `customerId/videos`.
     * @param {String} prefix A prefix for the file being sent. This is typically a folder name, i.e. `videos` or `customerId/videos`.
     */
    setPrefix(prefix) {
        this['prefix'] = prefix;
        return this;
    }
/**
     * Returns Use your own filename instead of the default filenames generated by Shotstack. Note: omit the file extension as this will be appended depending on the output format. Also `-poster.jpg` and `-thumb.jpg` will be appended for poster and thumbnail images.
     * @return {String}
     */
    getFilename() {
        return this.filename;
    }

    /**
     * Sets Use your own filename instead of the default filenames generated by Shotstack. Note: omit the file extension as this will be appended depending on the output format. Also `-poster.jpg` and `-thumb.jpg` will be appended for poster and thumbnail images.
     * @param {String} filename Use your own filename instead of the default filenames generated by Shotstack. Note: omit the file extension as this will be appended depending on the output format. Also `-poster.jpg` and `-thumb.jpg` will be appended for poster and thumbnail images.
     */
    setFilename(filename) {
        this['filename'] = filename;
        return this;
    }

}

GoogleCloudStorageDestinationOptions.RequiredProperties = ["bucket"];

/**
 * The bucket name to send files to. The bucket must exist in the Google Cloud Storage account before files can be sent.
 * @member {String} bucket
 */
GoogleCloudStorageDestinationOptions.prototype['bucket'] = undefined;

/**
 * A prefix for the file being sent. This is typically a folder name, i.e. `videos` or `customerId/videos`.
 * @member {String} prefix
 */
GoogleCloudStorageDestinationOptions.prototype['prefix'] = undefined;

/**
 * Use your own filename instead of the default filenames generated by Shotstack. Note: omit the file extension as this will be appended depending on the output format. Also `-poster.jpg` and `-thumb.jpg` will be appended for poster and thumbnail images.
 * @member {String} filename
 */
GoogleCloudStorageDestinationOptions.prototype['filename'] = undefined;






export default GoogleCloudStorageDestinationOptions;

