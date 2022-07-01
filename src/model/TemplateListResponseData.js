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
    define(['ApiClient', 'model/TemplateListResponseItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplateListResponseItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.TemplateListResponseData = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.TemplateListResponseItem);
  }
}(this, function(ApiClient, TemplateListResponseItem) {
  'use strict';



  /**
   * The TemplateListResponseData model module.
   * @module model/TemplateListResponseData
   * @version v1
   */

  /**
   * Constructs a new <code>TemplateListResponseData</code>.
   * The response data returned with the [TemplateListResponse](#tocs_templatelistresponse).
   * @alias module:model/TemplateListResponseData
   * @class
   * @param owner {String} The owner id of the templates.
   * @param templates {Array.<module:model/TemplateListResponseItem>} The list of templates.
   */
  var exports = function(owner, templates) {
    var _this = this;

    _this['owner'] = owner;
    _this['templates'] = templates;
  };

  /**
   * Constructs a <code>TemplateListResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateListResponseData} obj Optional instance to populate.
   * @return {module:model/TemplateListResponseData} The populated <code>TemplateListResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('templates')) {
        obj['templates'] = ApiClient.convertToType(data['templates'], [TemplateListResponseItem]);
      }
    }
    return obj;
  }

  /**
   * The owner id of the templates.
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The list of templates.
   * @member {Array.<module:model/TemplateListResponseItem>} templates
   */
  exports.prototype['templates'] = undefined;


  /**
   * Returns The owner id of the templates.
   * @return {String}
   */
  exports.prototype.getOwner = function() {
    return this['owner'];
  }

  /**
   * Sets The owner id of the templates.
   * @param {String} owner The owner id of the templates.
   */
  exports.prototype.setOwner = function(owner) {
    this['owner'] = owner;
    return this;
  }


  /**
   * Returns The list of templates.
   * @return {Array.<module:model/TemplateListResponseItem>}
   */
  exports.prototype.getTemplates = function() {
    return this['templates'];
  }

  /**
   * Sets The list of templates.
   * @param {Array.<module:model/TemplateListResponseItem>} templates The list of templates.
   */
  exports.prototype.setTemplates = function(templates) {
    this['templates'] = templates;
    return this;
  }



  return exports;
}));


