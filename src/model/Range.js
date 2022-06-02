/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file  location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.io/docs/guide/) documentation. There are two main API's, one for editing and generating assets (Edit API) and one for managing hosted assets (Serve API).  The Edit API base URL is: <b>https://api.shotstack.io/{version}</b>  The Serve API base URL is: <b>https://api.shotstack.io/serve/{version}</b>
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.Range = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Range model module.
   * @module model/Range
   * @version v1
   */

  /**
   * Constructs a new <code>Range</code>.
   * Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as &#x60;jpg&#x60; will output a single frame image at the range &#x60;start&#x60; point.
   * @alias module:model/Range
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Range</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Range} obj Optional instance to populate.
   * @return {module:model/Range} The populated <code>Range</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The point on the timeline, in seconds, to start the render from - i.e. start at second 3.
   * @member {Number} start
   */
  exports.prototype['start'] = undefined;
  /**
   * The length of the portion of the video or audio to render - i.e. render 6 seconds of the video.
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;


  /**
   * Returns The point on the timeline, in seconds, to start the render from - i.e. start at second 3.
   * minimum: 0
   * @return {Number}
   */
  exports.prototype.getStart = function() {
    return this['start'];
  }

  /**
   * Sets The point on the timeline, in seconds, to start the render from - i.e. start at second 3.
   * @param {Number} start The point on the timeline, in seconds, to start the render from - i.e. start at second 3.
   */
  exports.prototype.setStart = function(start) {
    this['start'] = start;
    return this;
  }


  /**
   * Returns The length of the portion of the video or audio to render - i.e. render 6 seconds of the video.
   * minimum: 0
   * @return {Number}
   */
  exports.prototype.getLength = function() {
    return this['length'];
  }

  /**
   * Sets The length of the portion of the video or audio to render - i.e. render 6 seconds of the video.
   * @param {Number} length The length of the portion of the video or audio to render - i.e. render 6 seconds of the video.
   */
  exports.prototype.setLength = function(length) {
    this['length'] = length;
    return this;
  }



  return exports;
}));


