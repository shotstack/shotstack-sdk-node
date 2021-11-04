/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file  location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.gitbook.io/docs/guides/getting-started) documentation. There are two main API's, one for editing and generating assets (Edit API) and one for managing hosted assets (Serve API).  The Edit API base URL is: <b>https://api.shotstack.io/{version}</b>  The Serve API base URL is: <b>https://api.shotstack.io/serve/{version}</b>
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0
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
    root.ShotstackSdk.SkewTransformation = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SkewTransformation model module.
   * @module model/SkewTransformation
   * @version v1
   */

  /**
   * Constructs a new <code>SkewTransformation</code>.
   * Skew a clip so its edges are sheared at an angle. Use values between 0 and 3. Over 3 the clip will be skewed almost flat.
   * @alias module:model/SkewTransformation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SkewTransformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkewTransformation} obj Optional instance to populate.
   * @return {module:model/SkewTransformation} The populated <code>SkewTransformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('x')) {
        obj['x'] = ApiClient.convertToType(data['x'], 'Number');
      }
      if (data.hasOwnProperty('y')) {
        obj['y'] = ApiClient.convertToType(data['y'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Skew the clip along it's x axis.
   * @member {Number} x
   * @default 0
   */
  exports.prototype['x'] = 0;
  /**
   * Skew the clip along it's y axis.
   * @member {Number} y
   * @default 0
   */
  exports.prototype['y'] = 0;


  /**
   * Returns Skew the clip along it's x axis.
   * @return {Number}
   */
  exports.prototype.getX = function() {
    return this['x'];
  }

  /**
   * Sets Skew the clip along it's x axis.
   * @param {Number} x Skew the clip along it's x axis.
   */
  exports.prototype.setX = function(x) {
    this['x'] = x;
    return this;
  }


  /**
   * Returns Skew the clip along it's y axis.
   * @return {Number}
   */
  exports.prototype.getY = function() {
    return this['y'];
  }

  /**
   * Sets Skew the clip along it's y axis.
   * @param {Number} y Skew the clip along it's y axis.
   */
  exports.prototype.setY = function(y) {
    this['y'] = y;
    return this;
  }



  return exports;
}));

