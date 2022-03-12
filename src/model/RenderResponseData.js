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
    define(['ApiClient', 'model/Edit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Edit'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.RenderResponseData = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Edit);
  }
}(this, function(ApiClient, Edit) {
  'use strict';



  /**
   * The RenderResponseData model module.
   * @module model/RenderResponseData
   * @version v1
   */

  /**
   * Constructs a new <code>RenderResponseData</code>.
   * The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
   * @alias module:model/RenderResponseData
   * @class
   * @param id {String} The id of the render task in UUID format.
   * @param owner {String} The owner id of the render task.
   * @param status {module:model/RenderResponseData.StatusEnum} The status of the render task. <ul>   <li>`queued` - render is queued waiting to be rendered</li>   <li>`fetching` - assets are being fetched</li>   <li>`rendering` - the asset is being rendered</li>   <li>`saving` - the final asset is being saved to storage</li>   <li>`done` - the asset is ready to be downloaded</li>   <li>`failed` - there was an error rendering the asset</li> </ul>
   * @param data {module:model/Edit} 
   * @param created {String} The time the render task was initially queued.
   * @param updated {String} The time the render status was last updated.
   */
  var exports = function(id, owner, status, data, created, updated) {
    var _this = this;

    _this['id'] = id;
    _this['owner'] = owner;
    _this['status'] = status;
    _this['data'] = data;
    _this['created'] = created;
    _this['updated'] = updated;
  };

  /**
   * Constructs a <code>RenderResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenderResponseData} obj Optional instance to populate.
   * @return {module:model/RenderResponseData} The populated <code>RenderResponseData</code> instance.
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
      if (data.hasOwnProperty('plan')) {
        obj['plan'] = ApiClient.convertToType(data['plan'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('renderTime')) {
        obj['renderTime'] = ApiClient.convertToType(data['renderTime'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('poster')) {
        obj['poster'] = ApiClient.convertToType(data['poster'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = Edit.constructFromObject(data['data']);
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
   * The id of the render task in UUID format.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The owner id of the render task.
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The customer subscription plan.
   * @member {String} plan
   */
  exports.prototype['plan'] = undefined;
  /**
   * The status of the render task. <ul>   <li>`queued` - render is queued waiting to be rendered</li>   <li>`fetching` - assets are being fetched</li>   <li>`rendering` - the asset is being rendered</li>   <li>`saving` - the final asset is being saved to storage</li>   <li>`done` - the asset is ready to be downloaded</li>   <li>`failed` - there was an error rendering the asset</li> </ul>
   * @member {module:model/RenderResponseData.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * An error message, only displayed if an error occurred.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * The output video or audio length in seconds.
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * The time taken to render the asset in milliseconds.
   * @member {Number} renderTime
   */
  exports.prototype['renderTime'] = undefined;
  /**
   * The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The URL of the poster image if requested. This will only be available if status is done.
   * @member {String} poster
   */
  exports.prototype['poster'] = undefined;
  /**
   * The URL of the thumbnail image if requested. This will only be available if status is done.
   * @member {String} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * @member {module:model/Edit} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The time the render task was initially queued.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The time the render status was last updated.
   * @member {String} updated
   */
  exports.prototype['updated'] = undefined;


  /**
   * Returns The id of the render task in UUID format.
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The id of the render task in UUID format.
   * @param {String} id The id of the render task in UUID format.
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
   * Returns The customer subscription plan.
   * @return {String}
   */
  exports.prototype.getPlan = function() {
    return this['plan'];
  }

  /**
   * Sets The customer subscription plan.
   * @param {String} plan The customer subscription plan.
   */
  exports.prototype.setPlan = function(plan) {
    this['plan'] = plan;
    return this;
  }


  /**
   * Returns The status of the render task. <ul>   <li>`queued` - render is queued waiting to be rendered</li>   <li>`fetching` - assets are being fetched</li>   <li>`rendering` - the asset is being rendered</li>   <li>`saving` - the final asset is being saved to storage</li>   <li>`done` - the asset is ready to be downloaded</li>   <li>`failed` - there was an error rendering the asset</li> </ul>
   * @return {module:model/RenderResponseData.StatusEnum}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets The status of the render task. <ul>   <li>`queued` - render is queued waiting to be rendered</li>   <li>`fetching` - assets are being fetched</li>   <li>`rendering` - the asset is being rendered</li>   <li>`saving` - the final asset is being saved to storage</li>   <li>`done` - the asset is ready to be downloaded</li>   <li>`failed` - there was an error rendering the asset</li> </ul>
   * @param {module:model/RenderResponseData.StatusEnum} status The status of the render task. <ul>   <li>`queued` - render is queued waiting to be rendered</li>   <li>`fetching` - assets are being fetched</li>   <li>`rendering` - the asset is being rendered</li>   <li>`saving` - the final asset is being saved to storage</li>   <li>`done` - the asset is ready to be downloaded</li>   <li>`failed` - there was an error rendering the asset</li> </ul>
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
    return this;
  }


  /**
   * Returns An error message, only displayed if an error occurred.
   * @return {String}
   */
  exports.prototype.getError = function() {
    return this['error'];
  }

  /**
   * Sets An error message, only displayed if an error occurred.
   * @param {String} error An error message, only displayed if an error occurred.
   */
  exports.prototype.setError = function(error) {
    this['error'] = error;
    return this;
  }


  /**
   * Returns The output video or audio length in seconds.
   * @return {Number}
   */
  exports.prototype.getDuration = function() {
    return this['duration'];
  }

  /**
   * Sets The output video or audio length in seconds.
   * @param {Number} duration The output video or audio length in seconds.
   */
  exports.prototype.setDuration = function(duration) {
    this['duration'] = duration;
    return this;
  }


  /**
   * Returns The time taken to render the asset in milliseconds.
   * @return {Number}
   */
  exports.prototype.getRenderTime = function() {
    return this['renderTime'];
  }

  /**
   * Sets The time taken to render the asset in milliseconds.
   * @param {Number} renderTime The time taken to render the asset in milliseconds.
   */
  exports.prototype.setRenderTime = function(renderTime) {
    this['renderTime'] = renderTime;
    return this;
  }


  /**
   * Returns The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination.
   * @return {String}
   */
  exports.prototype.getUrl = function() {
    return this['url'];
  }

  /**
   * Sets The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination.
   * @param {String} url The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination.
   */
  exports.prototype.setUrl = function(url) {
    this['url'] = url;
    return this;
  }


  /**
   * Returns The URL of the poster image if requested. This will only be available if status is done.
   * @return {String}
   */
  exports.prototype.getPoster = function() {
    return this['poster'];
  }

  /**
   * Sets The URL of the poster image if requested. This will only be available if status is done.
   * @param {String} poster The URL of the poster image if requested. This will only be available if status is done.
   */
  exports.prototype.setPoster = function(poster) {
    this['poster'] = poster;
    return this;
  }


  /**
   * Returns The URL of the thumbnail image if requested. This will only be available if status is done.
   * @return {String}
   */
  exports.prototype.getThumbnail = function() {
    return this['thumbnail'];
  }

  /**
   * Sets The URL of the thumbnail image if requested. This will only be available if status is done.
   * @param {String} thumbnail The URL of the thumbnail image if requested. This will only be available if status is done.
   */
  exports.prototype.setThumbnail = function(thumbnail) {
    this['thumbnail'] = thumbnail;
    return this;
  }


  /**
   * @return {module:model/Edit}
   */
  exports.prototype.getData = function() {
    return this['data'];
  }

  /**
   * @param {module:model/Edit} data
   */
  exports.prototype.setData = function(data) {
    this['data'] = data;
    return this;
  }


  /**
   * Returns The time the render task was initially queued.
   * @return {String}
   */
  exports.prototype.getCreated = function() {
    return this['created'];
  }

  /**
   * Sets The time the render task was initially queued.
   * @param {String} created The time the render task was initially queued.
   */
  exports.prototype.setCreated = function(created) {
    this['created'] = created;
    return this;
  }


  /**
   * Returns The time the render status was last updated.
   * @return {String}
   */
  exports.prototype.getUpdated = function() {
    return this['updated'];
  }

  /**
   * Sets The time the render status was last updated.
   * @param {String} updated The time the render status was last updated.
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
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "fetching"
     * @const
     */
    "fetching": "fetching",
    /**
     * value: "rendering"
     * @const
     */
    "rendering": "rendering",
    /**
     * value: "saving"
     * @const
     */
    "saving": "saving",
    /**
     * value: "done"
     * @const
     */
    "done": "done",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed"  };


  return exports;
}));


