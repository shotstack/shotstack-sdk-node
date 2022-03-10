/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file  location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.gitbook.io/docs/guides/getting-started) documentation. There are two main API's, one for editing and generating assets (Edit API) and one for managing hosted assets (Serve API).  The Edit API base URL is: <b>https://api.shotstack.io/{version}</b>  The Serve API base URL is: <b>https://api.shotstack.io/serve/{version}</b>
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
    define(['ApiClient', 'model/RenderResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RenderResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.RenderResponse = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.RenderResponseData);
  }
}(this, function(ApiClient, RenderResponseData) {
  'use strict';



  /**
   * The RenderResponse model module.
   * @module model/RenderResponse
   * @version v1
   */

  /**
   * Constructs a new <code>RenderResponse</code>.
   * The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
   * @alias module:model/RenderResponse
   * @class
   * @param success {Boolean} `true` if status available, else `false`.
   * @param message {String} `OK` or an error message.
   * @param response {module:model/RenderResponseData} 
   */
  var exports = function(success, message, response) {
    var _this = this;

    _this['success'] = success;
    _this['message'] = message;
    _this['response'] = response;
  };

  /**
   * Constructs a <code>RenderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenderResponse} obj Optional instance to populate.
   * @return {module:model/RenderResponse} The populated <code>RenderResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = RenderResponseData.constructFromObject(data['response']);
      }
    }
    return obj;
  }

  /**
   * `true` if status available, else `false`.
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * `OK` or an error message.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/RenderResponseData} response
   */
  exports.prototype['response'] = undefined;


  /**
   * Returns `true` if status available, else `false`.
   * @return {Boolean}
   */
  exports.prototype.getSuccess = function() {
    return this['success'];
  }

  /**
   * Sets `true` if status available, else `false`.
   * @param {Boolean} success `true` if status available, else `false`.
   */
  exports.prototype.setSuccess = function(success) {
    this['success'] = success;
    return this;
  }


  /**
   * Returns `OK` or an error message.
   * @return {String}
   */
  exports.prototype.getMessage = function() {
    return this['message'];
  }

  /**
   * Sets `OK` or an error message.
   * @param {String} message `OK` or an error message.
   */
  exports.prototype.setMessage = function(message) {
    this['message'] = message;
    return this;
  }


  /**
   * @return {module:model/RenderResponseData}
   */
  exports.prototype.getResponse = function() {
    return this['response'];
  }

  /**
   * @param {module:model/RenderResponseData} response
   */
  exports.prototype.setResponse = function(response) {
    this['response'] = response;
    return this;
  }



  return exports;
}));


