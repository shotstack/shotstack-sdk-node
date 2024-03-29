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
    define(['ApiClient', 'model/Edit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Edit'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.Template = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Edit);
  }
}(this, function(ApiClient, Edit) {
  'use strict';



  /**
   * The Template model module.
   * @module model/Template
   * @version v1
   */

  /**
   * Constructs a new <code>Template</code>.
   * A template is a saved [Edit](#tocs_edit) than can be loaded and re-used.
   * @alias module:model/Template
   * @class
   * @param name {String} The template name
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>Template</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Template} obj Optional instance to populate.
   * @return {module:model/Template} The populated <code>Template</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = Edit.constructFromObject(data['template']);
      }
    }
    return obj;
  }

  /**
   * The template name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Edit} template
   */
  exports.prototype['template'] = undefined;


  /**
   * Returns The template name
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets The template name
   * @param {String} name The template name
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
    return this;
  }


  /**
   * @return {module:model/Edit}
   */
  exports.prototype.getTemplate = function() {
    return this['template'];
  }

  /**
   * @param {module:model/Edit} template
   */
  exports.prototype.setTemplate = function(template) {
    this['template'] = template;
    return this;
  }



  return exports;
}));


