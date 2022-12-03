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
    root.ShotstackSdk.TemplateListResponseItem = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TemplateListResponseItem model module.
   * @module model/TemplateListResponseItem
   * @version v1
   */

  /**
   * Constructs a new <code>TemplateListResponseItem</code>.
   * The individual template item returned with the  [TemplateListResponseData](#tocs_templatelistresponsedata) templates list.
   * @alias module:model/TemplateListResponseItem
   * @class
   * @param id {String} The unique id of the template in UUID format.
   * @param name {String} The template name
   */
  var exports = function(id, name) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>TemplateListResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateListResponseItem} obj Optional instance to populate.
   * @return {module:model/TemplateListResponseItem} The populated <code>TemplateListResponseItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique id of the template in UUID format.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The template name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The time the template was created.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The time the template was last updated.
   * @member {String} updated
   */
  exports.prototype['updated'] = undefined;


  /**
   * Returns The unique id of the template in UUID format.
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The unique id of the template in UUID format.
   * @param {String} id The unique id of the template in UUID format.
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
    return this;
  }


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
   * Returns The time the template was created.
   * @return {String}
   */
  exports.prototype.getCreated = function() {
    return this['created'];
  }

  /**
   * Sets The time the template was created.
   * @param {String} created The time the template was created.
   */
  exports.prototype.setCreated = function(created) {
    this['created'] = created;
    return this;
  }


  /**
   * Returns The time the template was last updated.
   * @return {String}
   */
  exports.prototype.getUpdated = function() {
    return this['updated'];
  }

  /**
   * Sets The time the template was last updated.
   * @param {String} updated The time the template was last updated.
   */
  exports.prototype.setUpdated = function(updated) {
    this['updated'] = updated;
    return this;
  }



  return exports;
}));


