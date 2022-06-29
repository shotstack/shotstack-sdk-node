/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file  location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.io/docs/guide/) documentation.  There are two main API's, one for editing and generating assets (Edit API) and one for managing hosted assets (Serve API).  The Edit API base URL is: <b>https://api.shotstack.io/{version}</b>  The Serve API base URL is: <b>https://api.shotstack.io/serve/{version}</b> 
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
    root.ShotstackSdk.Poster = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Poster model module.
   * @module model/Poster
   * @version v1
   */

  /**
   * Constructs a new <code>Poster</code>.
   * Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video.
   * @alias module:model/Poster
   * @class
   * @param capture {Number} The point on the timeline in seconds to capture a single frame to use as the poster image.
   */
  var exports = function(capture) {
    var _this = this;

    _this['capture'] = capture;
  };

  /**
   * Constructs a <code>Poster</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Poster} obj Optional instance to populate.
   * @return {module:model/Poster} The populated <code>Poster</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('capture')) {
        obj['capture'] = ApiClient.convertToType(data['capture'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The point on the timeline in seconds to capture a single frame to use as the poster image.
   * @member {Number} capture
   */
  exports.prototype['capture'] = undefined;


  /**
   * Returns The point on the timeline in seconds to capture a single frame to use as the poster image.
   * @return {Number}
   */
  exports.prototype.getCapture = function() {
    return this['capture'];
  }

  /**
   * Sets The point on the timeline in seconds to capture a single frame to use as the poster image.
   * @param {Number} capture The point on the timeline in seconds to capture a single frame to use as the poster image.
   */
  exports.prototype.setCapture = function(capture) {
    this['capture'] = capture;
    return this;
  }



  return exports;
}));


