"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OpenAiGeneratedAssetOptions = _interopRequireDefault(require("./OpenAiGeneratedAssetOptions"));
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
 * The OpenAiGeneratedAsset model module.
 * @module model/OpenAiGeneratedAsset
 * @version 0.2.6
 */
var OpenAiGeneratedAsset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OpenAiGeneratedAsset</code>.
   * Generate assets using OpenAI. OpenAI provide a text generation service using ChatGPT 3.5 and 4. The OpenAI provider works on a bring-your-own-key basis, credentials are required and must be added via the [dashboard](https://dashboard.shotstack.io/integrations/openai), not in the request.
   * @alias module:model/OpenAiGeneratedAsset
   * @param provider {module:model/OpenAiGeneratedAsset.ProviderEnum} The name of the provider - set to `openai` for OpenAI.
   * @param options {module:model/OpenAiGeneratedAssetOptions} 
   */
  function OpenAiGeneratedAsset(provider, options) {
    _classCallCheck(this, OpenAiGeneratedAsset);
    OpenAiGeneratedAsset.initialize(this, provider, options);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(OpenAiGeneratedAsset, [{
    key: "getProvider",
    value:
    /**
         * Returns The name of the provider - set to `openai` for OpenAI.
         * @return {module:model/OpenAiGeneratedAsset.ProviderEnum}
         */
    function getProvider() {
      return this.provider;
    }

    /**
     * Sets The name of the provider - set to `openai` for OpenAI.
     * @param {module:model/OpenAiGeneratedAsset.ProviderEnum} provider The name of the provider - set to `openai` for OpenAI.
     */
  }, {
    key: "setProvider",
    value: function setProvider(provider) {
      this['provider'] = provider;
      return this;
    }
    /**
         * @return {module:model/OpenAiGeneratedAssetOptions}
         */
  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.options;
    }

    /**
     * @param {module:model/OpenAiGeneratedAssetOptions} options
     */
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this['options'] = options;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, provider, options) {
      obj['provider'] = provider || 'openai';
      obj['options'] = options;
    }

    /**
     * Constructs a <code>OpenAiGeneratedAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OpenAiGeneratedAsset} obj Optional instance to populate.
     * @return {module:model/OpenAiGeneratedAsset} The populated <code>OpenAiGeneratedAsset</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OpenAiGeneratedAsset();
        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }
        if (data.hasOwnProperty('options')) {
          obj['options'] = _OpenAiGeneratedAssetOptions["default"].constructFromObject(data['options']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OpenAiGeneratedAsset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OpenAiGeneratedAsset</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(OpenAiGeneratedAsset.RequiredProperties),
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
      if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
        throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
      }
      // validate the optional field `options`
      if (data['options']) {
        // data not null
        _OpenAiGeneratedAssetOptions["default"].validateJSON(data['options']);
      }
      return true;
    }
  }]);
}();
OpenAiGeneratedAsset.RequiredProperties = ["provider", "options"];

/**
 * The name of the provider - set to `openai` for OpenAI.
 * @member {module:model/OpenAiGeneratedAsset.ProviderEnum} provider
 * @default 'openai'
 */
OpenAiGeneratedAsset.prototype['provider'] = 'openai';

/**
 * @member {module:model/OpenAiGeneratedAssetOptions} options
 */
OpenAiGeneratedAsset.prototype['options'] = undefined;

/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
OpenAiGeneratedAsset['ProviderEnum'] = {
  /**
   * value: "openai"
   * @const
   */
  "openai": "openai"
};
var _default = exports["default"] = OpenAiGeneratedAsset;