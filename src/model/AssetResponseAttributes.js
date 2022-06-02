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
    root.ShotstackSdk.AssetResponseAttributes = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AssetResponseAttributes model module.
   * @module model/AssetResponseAttributes
   * @version v1
   */

  /**
   * Constructs a new <code>AssetResponseAttributes</code>.
   * The list of asset attributes and their values.
   * @alias module:model/AssetResponseAttributes
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AssetResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetResponseAttributes} obj Optional instance to populate.
   * @return {module:model/AssetResponseAttributes} The populated <code>AssetResponseAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('renderId')) {
        obj['renderId'] = ApiClient.convertToType(data['renderId'], 'String');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
   * The unique id of the hosted asset in UUID format.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The owner id of the render task.
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The region the asset is hosted, currently only `au` (Australia).
   * @member {String} region
   */
  exports.prototype['region'] = undefined;
  /**
   * The original render id that created the asset in UUID format. Multiple assets can share the same render id.
   * @member {String} renderId
   */
  exports.prototype['renderId'] = undefined;
  /**
   * The asset file name.
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * The asset file name.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The status of the asset. <ul>   <li>`importing` - the asset is being copied to the hosting service</li>   <li>`ready` - the asset is ready to be served to users</li>   <li>`failed` - the asset failed to copy or delete</li>   <li>`deleted` - the asset has been deleted</li> </ul>
   * @member {module:model/AssetResponseAttributes.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The time the asset was created.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The time the asset status was last updated.
   * @member {String} updated
   */
  exports.prototype['updated'] = undefined;


  /**
   * Returns The unique id of the hosted asset in UUID format.
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The unique id of the hosted asset in UUID format.
   * @param {String} id The unique id of the hosted asset in UUID format.
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
    return this;
  }


  /**
   * Returns The owner id of the render task.
   * @return {String}
   */
  exports.prototype.getOwner = function() {
    return this['owner'];
  }

  /**
   * Sets The owner id of the render task.
   * @param {String} owner The owner id of the render task.
   */
  exports.prototype.setOwner = function(owner) {
    this['owner'] = owner;
    return this;
  }


  /**
   * Returns The region the asset is hosted, currently only `au` (Australia).
   * @return {String}
   */
  exports.prototype.getRegion = function() {
    return this['region'];
  }

  /**
   * Sets The region the asset is hosted, currently only `au` (Australia).
   * @param {String} region The region the asset is hosted, currently only `au` (Australia).
   */
  exports.prototype.setRegion = function(region) {
    this['region'] = region;
    return this;
  }


  /**
   * Returns The original render id that created the asset in UUID format. Multiple assets can share the same render id.
   * @return {String}
   */
  exports.prototype.getRenderId = function() {
    return this['renderId'];
  }

  /**
   * Sets The original render id that created the asset in UUID format. Multiple assets can share the same render id.
   * @param {String} renderId The original render id that created the asset in UUID format. Multiple assets can share the same render id.
   */
  exports.prototype.setRenderId = function(renderId) {
    this['renderId'] = renderId;
    return this;
  }


  /**
   * Returns The asset file name.
   * @return {String}
   */
  exports.prototype.getFilename = function() {
    return this['filename'];
  }

  /**
   * Sets The asset file name.
   * @param {String} filename The asset file name.
   */
  exports.prototype.setFilename = function(filename) {
    this['filename'] = filename;
    return this;
  }


  /**
   * Returns The asset file name.
   * @return {String}
   */
  exports.prototype.getUrl = function() {
    return this['url'];
  }

  /**
   * Sets The asset file name.
   * @param {String} url The asset file name.
   */
  exports.prototype.setUrl = function(url) {
    this['url'] = url;
    return this;
  }


  /**
   * Returns The status of the asset. <ul>   <li>`importing` - the asset is being copied to the hosting service</li>   <li>`ready` - the asset is ready to be served to users</li>   <li>`failed` - the asset failed to copy or delete</li>   <li>`deleted` - the asset has been deleted</li> </ul>
   * @return {module:model/AssetResponseAttributes.StatusEnum}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets The status of the asset. <ul>   <li>`importing` - the asset is being copied to the hosting service</li>   <li>`ready` - the asset is ready to be served to users</li>   <li>`failed` - the asset failed to copy or delete</li>   <li>`deleted` - the asset has been deleted</li> </ul>
   * @param {module:model/AssetResponseAttributes.StatusEnum} status The status of the asset. <ul>   <li>`importing` - the asset is being copied to the hosting service</li>   <li>`ready` - the asset is ready to be served to users</li>   <li>`failed` - the asset failed to copy or delete</li>   <li>`deleted` - the asset has been deleted</li> </ul>
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
    return this;
  }


  /**
   * Returns The time the asset was created.
   * @return {String}
   */
  exports.prototype.getCreated = function() {
    return this['created'];
  }

  /**
   * Sets The time the asset was created.
   * @param {String} created The time the asset was created.
   */
  exports.prototype.setCreated = function(created) {
    this['created'] = created;
    return this;
  }


  /**
   * Returns The time the asset status was last updated.
   * @return {String}
   */
  exports.prototype.getUpdated = function() {
    return this['updated'];
  }

  /**
   * Sets The time the asset status was last updated.
   * @param {String} updated The time the asset status was last updated.
   */
  exports.prototype.setUpdated = function(updated) {
    this['updated'] = updated;
    return this;
  }


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "importing"
     * @const
     */
    "importing": "importing",
    /**
     * value: "ready"
     * @const
     */
    "ready": "ready",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"  };


  return exports;
}));


