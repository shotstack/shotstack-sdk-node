"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Shotstack
 * Official Node SDK for the Shotstack Cloud Video Editing API
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The GeneratedAssetResponseAttributes model module.
 * @module model/GeneratedAssetResponseAttributes
 * @version 0.2.6
 */
var GeneratedAssetResponseAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneratedAssetResponseAttributes</code>.
   * The id and attributes of the generated asset.
   * @alias module:model/GeneratedAssetResponseAttributes
   * @param owner {String} The owner id of the asset.
   * @param provider {module:model/GeneratedAssetResponseAttributes.ProviderEnum} The native or third party provider that generated the asset, `shotstack`, `elevenlabs`, `heygen` or `d-id`.
   * @param type {module:model/GeneratedAssetResponseAttributes.TypeEnum} The type of service used to generate the asset, `text-to-speech` or `text-to-avatar`.
   * @param status {module:model/GeneratedAssetResponseAttributes.StatusEnum} The status of the asset file generation task. <ul>   <li>`queued` - generation task is queued waiting to be processed</li>   <li>`processing` - the asset is being generated by the provider</li>   <li>`saving` - the asset is being saved to Shotstack</li>   <li>`done` - the asset has been generated and stored</li>   <li>`failed` - there was an error generating the asset</li> </ul>
   * @param created {String} The time the generate asset task was initially queued.
   * @param updated {String} The time the asset status was last updated.
   */
  function GeneratedAssetResponseAttributes(owner, provider, type, status, created, updated) {
    _classCallCheck(this, GeneratedAssetResponseAttributes);
    GeneratedAssetResponseAttributes.initialize(this, owner, provider, type, status, created, updated);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(GeneratedAssetResponseAttributes, [{
    key: "getOwner",
    value:
    /**
         * Returns The owner id of the asset.
         * @return {String}
         */
    function getOwner() {
      return this.owner;
    }

    /**
     * Sets The owner id of the asset.
     * @param {String} owner The owner id of the asset.
     */
  }, {
    key: "setOwner",
    value: function setOwner(owner) {
      this['owner'] = owner;
      return this;
    }
    /**
         * Returns The native or third party provider that generated the asset, `shotstack`, `elevenlabs`, `heygen` or `d-id`.
         * @return {module:model/GeneratedAssetResponseAttributes.ProviderEnum}
         */
  }, {
    key: "getProvider",
    value: function getProvider() {
      return this.provider;
    }

    /**
     * Sets The native or third party provider that generated the asset, `shotstack`, `elevenlabs`, `heygen` or `d-id`.
     * @param {module:model/GeneratedAssetResponseAttributes.ProviderEnum} provider The native or third party provider that generated the asset, `shotstack`, `elevenlabs`, `heygen` or `d-id`.
     */
  }, {
    key: "setProvider",
    value: function setProvider(provider) {
      this['provider'] = provider;
      return this;
    }
    /**
         * Returns The type of service used to generate the asset, `text-to-speech` or `text-to-avatar`.
         * @return {module:model/GeneratedAssetResponseAttributes.TypeEnum}
         */
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }

    /**
     * Sets The type of service used to generate the asset, `text-to-speech` or `text-to-avatar`.
     * @param {module:model/GeneratedAssetResponseAttributes.TypeEnum} type The type of service used to generate the asset, `text-to-speech` or `text-to-avatar`.
     */
  }, {
    key: "setType",
    value: function setType(type) {
      this['type'] = type;
      return this;
    }
    /**
         * Returns The URL of the asset file hosted by Shotstack. The file at the URL can be used by the Edit API. Generated asset file URL's consist of a base URL (AWS bucket), owner id, asset id and extension. The extension varies depending on the type of file generated.
         * @return {String}
         */
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.url;
    }

    /**
     * Sets The URL of the asset file hosted by Shotstack. The file at the URL can be used by the Edit API. Generated asset file URL's consist of a base URL (AWS bucket), owner id, asset id and extension. The extension varies depending on the type of file generated.
     * @param {String} url The URL of the asset file hosted by Shotstack. The file at the URL can be used by the Edit API. Generated asset file URL's consist of a base URL (AWS bucket), owner id, asset id and extension. The extension varies depending on the type of file generated.
     */
  }, {
    key: "setUrl",
    value: function setUrl(url) {
      this['url'] = url;
      return this;
    }
    /**
         * Returns The status of the asset file generation task. <ul>   <li>`queued` - generation task is queued waiting to be processed</li>   <li>`processing` - the asset is being generated by the provider</li>   <li>`saving` - the asset is being saved to Shotstack</li>   <li>`done` - the asset has been generated and stored</li>   <li>`failed` - there was an error generating the asset</li> </ul>
         * @return {module:model/GeneratedAssetResponseAttributes.StatusEnum}
         */
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.status;
    }

    /**
     * Sets The status of the asset file generation task. <ul>   <li>`queued` - generation task is queued waiting to be processed</li>   <li>`processing` - the asset is being generated by the provider</li>   <li>`saving` - the asset is being saved to Shotstack</li>   <li>`done` - the asset has been generated and stored</li>   <li>`failed` - there was an error generating the asset</li> </ul>
     * @param {module:model/GeneratedAssetResponseAttributes.StatusEnum} status The status of the asset file generation task. <ul>   <li>`queued` - generation task is queued waiting to be processed</li>   <li>`processing` - the asset is being generated by the provider</li>   <li>`saving` - the asset is being saved to Shotstack</li>   <li>`done` - the asset has been generated and stored</li>   <li>`failed` - there was an error generating the asset</li> </ul>
     */
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      this['status'] = status;
      return this;
    }
    /**
         * Returns The time the generate asset task was initially queued.
         * @return {String}
         */
  }, {
    key: "getCreated",
    value: function getCreated() {
      return this.created;
    }

    /**
     * Sets The time the generate asset task was initially queued.
     * @param {String} created The time the generate asset task was initially queued.
     */
  }, {
    key: "setCreated",
    value: function setCreated(created) {
      this['created'] = created;
      return this;
    }
    /**
         * Returns The time the asset status was last updated.
         * @return {String}
         */
  }, {
    key: "getUpdated",
    value: function getUpdated() {
      return this.updated;
    }

    /**
     * Sets The time the asset status was last updated.
     * @param {String} updated The time the asset status was last updated.
     */
  }, {
    key: "setUpdated",
    value: function setUpdated(updated) {
      this['updated'] = updated;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, owner, provider, type, status, created, updated) {
      obj['owner'] = owner;
      obj['provider'] = provider;
      obj['type'] = type;
      obj['status'] = status;
      obj['created'] = created;
      obj['updated'] = updated;
    }

    /**
     * Constructs a <code>GeneratedAssetResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneratedAssetResponseAttributes} obj Optional instance to populate.
     * @return {module:model/GeneratedAssetResponseAttributes} The populated <code>GeneratedAssetResponseAttributes</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneratedAssetResponseAttributes();
        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }
        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }
        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GeneratedAssetResponseAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GeneratedAssetResponseAttributes</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GeneratedAssetResponseAttributes.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
        throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
      }
      // ensure the json data is a string
      if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
        throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // ensure the json data is a string
      if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
        throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['created'] && !(typeof data['created'] === 'string' || data['created'] instanceof String)) {
        throw new Error("Expected the field `created` to be a primitive type in the JSON string but got " + data['created']);
      }
      // ensure the json data is a string
      if (data['updated'] && !(typeof data['updated'] === 'string' || data['updated'] instanceof String)) {
        throw new Error("Expected the field `updated` to be a primitive type in the JSON string but got " + data['updated']);
      }
      return true;
    }
  }]);
}();
GeneratedAssetResponseAttributes.RequiredProperties = ["owner", "provider", "type", "status", "created", "updated"];

/**
 * The owner id of the asset.
 * @member {String} owner
 */
GeneratedAssetResponseAttributes.prototype['owner'] = undefined;

/**
 * The native or third party provider that generated the asset, `shotstack`, `elevenlabs`, `heygen` or `d-id`.
 * @member {module:model/GeneratedAssetResponseAttributes.ProviderEnum} provider
 */
GeneratedAssetResponseAttributes.prototype['provider'] = undefined;

/**
 * The type of service used to generate the asset, `text-to-speech` or `text-to-avatar`.
 * @member {module:model/GeneratedAssetResponseAttributes.TypeEnum} type
 */
GeneratedAssetResponseAttributes.prototype['type'] = undefined;

/**
 * The URL of the asset file hosted by Shotstack. The file at the URL can be used by the Edit API. Generated asset file URL's consist of a base URL (AWS bucket), owner id, asset id and extension. The extension varies depending on the type of file generated.
 * @member {String} url
 */
GeneratedAssetResponseAttributes.prototype['url'] = undefined;

/**
 * The status of the asset file generation task. <ul>   <li>`queued` - generation task is queued waiting to be processed</li>   <li>`processing` - the asset is being generated by the provider</li>   <li>`saving` - the asset is being saved to Shotstack</li>   <li>`done` - the asset has been generated and stored</li>   <li>`failed` - there was an error generating the asset</li> </ul>
 * @member {module:model/GeneratedAssetResponseAttributes.StatusEnum} status
 */
GeneratedAssetResponseAttributes.prototype['status'] = undefined;

/**
 * The time the generate asset task was initially queued.
 * @member {String} created
 */
GeneratedAssetResponseAttributes.prototype['created'] = undefined;

/**
 * The time the asset status was last updated.
 * @member {String} updated
 */
GeneratedAssetResponseAttributes.prototype['updated'] = undefined;

/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
GeneratedAssetResponseAttributes['ProviderEnum'] = {
  /**
   * value: "shotstack"
   * @const
   */
  "shotstack": "shotstack",
  /**
   * value: "elevenlabs"
   * @const
   */
  "elevenlabs": "elevenlabs",
  /**
   * value: "heygen"
   * @const
   */
  "heygen": "heygen",
  /**
   * value: "d-id"
   * @const
   */
  "d-id": "d-id"
};

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GeneratedAssetResponseAttributes['TypeEnum'] = {
  /**
   * value: "text-to-speech"
   * @const
   */
  "speech": "text-to-speech",
  /**
   * value: "text-to-avatar"
   * @const
   */
  "avatar": "text-to-avatar"
};

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
GeneratedAssetResponseAttributes['StatusEnum'] = {
  /**
   * value: "queued"
   * @const
   */
  "queued": "queued",
  /**
   * value: "processing"
   * @const
   */
  "processing": "processing",
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
  "failed": "failed"
};
var _default = exports["default"] = GeneratedAssetResponseAttributes;