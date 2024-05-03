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
import Crop from './Crop';

/**
 * The VideoAsset model module.
 * @module model/VideoAsset
 * @version 0.2.6
 */
class VideoAsset {
    /**
     * Constructs a new <code>VideoAsset</code>.
     * The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
     * @alias module:model/VideoAsset
     * @param type {String} The type of asset - set to `video` for videos.
     * @param src {String} The video source URL. The URL must be publicly accessible or include credentials.
     */
    constructor(type, src) { 
        
        VideoAsset.initialize(this, type, src);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, src) { 
        obj['type'] = type || 'video';
        obj['src'] = src;
    }

    /**
     * Constructs a <code>VideoAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoAsset} obj Optional instance to populate.
     * @return {module:model/VideoAsset} The populated <code>VideoAsset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoAsset();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('src')) {
                obj['src'] = ApiClient.convertToType(data['src'], 'String');
            }
            if (data.hasOwnProperty('trim')) {
                obj['trim'] = ApiClient.convertToType(data['trim'], 'Number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('volumeEffect')) {
                obj['volumeEffect'] = ApiClient.convertToType(data['volumeEffect'], 'String');
            }
            if (data.hasOwnProperty('speed')) {
                obj['speed'] = ApiClient.convertToType(data['speed'], 'Number');
            }
            if (data.hasOwnProperty('crop')) {
                obj['crop'] = Crop.constructFromObject(data['crop']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VideoAsset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VideoAsset</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VideoAsset.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['src'] && !(typeof data['src'] === 'string' || data['src'] instanceof String)) {
            throw new Error("Expected the field `src` to be a primitive type in the JSON string but got " + data['src']);
        }
        // ensure the json data is a string
        if (data['volumeEffect'] && !(typeof data['volumeEffect'] === 'string' || data['volumeEffect'] instanceof String)) {
            throw new Error("Expected the field `volumeEffect` to be a primitive type in the JSON string but got " + data['volumeEffect']);
        }
        // validate the optional field `crop`
        if (data['crop']) { // data not null
          Crop.validateJSON(data['crop']);
        }

        return true;
    }

/**
     * Returns The type of asset - set to `video` for videos.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of asset - set to `video` for videos.
     * @param {String} type The type of asset - set to `video` for videos.
     */
    setType(type) {
        this['type'] = type;
        return this;
    }
/**
     * Returns The video source URL. The URL must be publicly accessible or include credentials.
     * @return {String}
     */
    getSrc() {
        return this.src;
    }

    /**
     * Sets The video source URL. The URL must be publicly accessible or include credentials.
     * @param {String} src The video source URL. The URL must be publicly accessible or include credentials.
     */
    setSrc(src) {
        this['src'] = src;
        return this;
    }
/**
     * Returns The start trim point of the video clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached.
     * @return {Number}
     */
    getTrim() {
        return this.trim;
    }

    /**
     * Sets The start trim point of the video clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached.
     * @param {Number} trim The start trim point of the video clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached.
     */
    setTrim(trim) {
        this['trim'] = trim;
        return this;
    }
/**
     * Returns Set the volume for the video clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
     * @return {Number}
     */
    getVolume() {
        return this.volume;
    }

    /**
     * Sets Set the volume for the video clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
     * @param {Number} volume Set the volume for the video clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
     */
    setVolume(volume) {
        this['volume'] = volume;
        return this;
    }
/**
     * Returns The volume effect to apply to the video asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
     * @return {module:model/VideoAsset.VolumeEffectEnum}
     */
    getVolumeEffect() {
        return this.volumeEffect;
    }

    /**
     * Sets The volume effect to apply to the video asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
     * @param {module:model/VideoAsset.VolumeEffectEnum} volumeEffect The volume effect to apply to the video asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
     */
    setVolumeEffect(volumeEffect) {
        this['volumeEffect'] = volumeEffect;
        return this;
    }
/**
     * Returns Adjust the playback speed of the video clip between 0 (paused) and 10 (10x normal speed) where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire video (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire video (i.e. original length / 2).
     * minimum: 0
     * maximum: 10
     * @return {Number}
     */
    getSpeed() {
        return this.speed;
    }

    /**
     * Sets Adjust the playback speed of the video clip between 0 (paused) and 10 (10x normal speed) where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire video (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire video (i.e. original length / 2).
     * @param {Number} speed Adjust the playback speed of the video clip between 0 (paused) and 10 (10x normal speed) where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire video (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire video (i.e. original length / 2).
     */
    setSpeed(speed) {
        this['speed'] = speed;
        return this;
    }
/**
     * @return {module:model/Crop}
     */
    getCrop() {
        return this.crop;
    }

    /**
     * @param {module:model/Crop} crop
     */
    setCrop(crop) {
        this['crop'] = crop;
        return this;
    }

}

VideoAsset.RequiredProperties = ["type", "src"];

/**
 * The type of asset - set to `video` for videos.
 * @member {String} type
 * @default 'video'
 */
VideoAsset.prototype['type'] = 'video';

/**
 * The video source URL. The URL must be publicly accessible or include credentials.
 * @member {String} src
 */
VideoAsset.prototype['src'] = undefined;

/**
 * The start trim point of the video clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached.
 * @member {Number} trim
 */
VideoAsset.prototype['trim'] = undefined;

/**
 * Set the volume for the video clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
 * @member {Number} volume
 */
VideoAsset.prototype['volume'] = undefined;

/**
 * The volume effect to apply to the video asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
 * @member {module:model/VideoAsset.VolumeEffectEnum} volumeEffect
 */
VideoAsset.prototype['volumeEffect'] = undefined;

/**
 * Adjust the playback speed of the video clip between 0 (paused) and 10 (10x normal speed) where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire video (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire video (i.e. original length / 2).
 * @member {Number} speed
 */
VideoAsset.prototype['speed'] = undefined;

/**
 * @member {module:model/Crop} crop
 */
VideoAsset.prototype['crop'] = undefined;





/**
 * Allowed values for the <code>volumeEffect</code> property.
 * @enum {String}
 * @readonly
 */
VideoAsset['VolumeEffectEnum'] = {

    /**
     * value: "fadeIn"
     * @const
     */
    "fadeIn": "fadeIn",

    /**
     * value: "fadeOut"
     * @const
     */
    "fadeOut": "fadeOut",

    /**
     * value: "fadeInFadeOut"
     * @const
     */
    "fadeInFadeOut": "fadeInFadeOut"
};



export default VideoAsset;

