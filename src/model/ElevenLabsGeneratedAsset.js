"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ElevenLabsGeneratedAssetOptions = _interopRequireDefault(require("./ElevenLabsGeneratedAssetOptions"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
 * The ElevenLabsGeneratedAsset model module.
 * @module model/ElevenLabsGeneratedAsset
 * @version 0.2.9
 */
var ElevenLabsGeneratedAsset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ElevenLabsGeneratedAsset</code>.
   * Generate assets using ElevenLabs. ElevenLabs provide a text-to-speech service. The ElevenLabs provider works on a bring-your-own-key basis, credentials are required and must be added via the  [dashboard](https://dashboard.shotstack.io/integrations/elevenlabs), not in the request.
   * @alias module:model/ElevenLabsGeneratedAsset
   * @param provider {module:model/ElevenLabsGeneratedAsset.ProviderEnum} The name of the provider - set to `elevenlabs` for ElevenLabs.
   * @param options {module:model/ElevenLabsGeneratedAssetOptions} 
   */
  function ElevenLabsGeneratedAsset(provider, options) {
    _classCallCheck(this, ElevenLabsGeneratedAsset);
    ElevenLabsGeneratedAsset.initialize(this, provider, options);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ElevenLabsGeneratedAsset, [{
    key: "getProvider",
    value:
    /**
         * Returns The name of the provider - set to `elevenlabs` for ElevenLabs.
         * @return {module:model/ElevenLabsGeneratedAsset.ProviderEnum}
         */
    function getProvider() {
      return this.provider;
    }

    /**
     * Sets The name of the provider - set to `elevenlabs` for ElevenLabs.
     * @param {module:model/ElevenLabsGeneratedAsset.ProviderEnum} provider The name of the provider - set to `elevenlabs` for ElevenLabs.
     */
  }, {
    key: "setProvider",
    value: function setProvider(provider) {
      this['provider'] = provider;
      return this;
    }
    /**
         * @return {module:model/ElevenLabsGeneratedAssetOptions}
         */
  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.options;
    }

    /**
     * @param {module:model/ElevenLabsGeneratedAssetOptions} options
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
      obj['provider'] = provider || 'elevenlabs';
      obj['options'] = options;
    }

    /**
     * Constructs a <code>ElevenLabsGeneratedAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElevenLabsGeneratedAsset} obj Optional instance to populate.
     * @return {module:model/ElevenLabsGeneratedAsset} The populated <code>ElevenLabsGeneratedAsset</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ElevenLabsGeneratedAsset();
        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }
        if (data.hasOwnProperty('options')) {
          obj['options'] = _ElevenLabsGeneratedAssetOptions["default"].constructFromObject(data['options']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ElevenLabsGeneratedAsset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ElevenLabsGeneratedAsset</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ElevenLabsGeneratedAsset.RequiredProperties),
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
        _ElevenLabsGeneratedAssetOptions["default"].validateJSON(data['options']);
      }
      return true;
    }
  }]);
}();
ElevenLabsGeneratedAsset.RequiredProperties = ["provider", "options"];

/**
 * The name of the provider - set to `elevenlabs` for ElevenLabs.
 * @member {module:model/ElevenLabsGeneratedAsset.ProviderEnum} provider
 * @default 'elevenlabs'
 */
ElevenLabsGeneratedAsset.prototype['provider'] = 'elevenlabs';

/**
 * @member {module:model/ElevenLabsGeneratedAssetOptions} options
 */
ElevenLabsGeneratedAsset.prototype['options'] = undefined;

/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
ElevenLabsGeneratedAsset['ProviderEnum'] = {
  /**
   * value: "elevenlabs"
   * @const
   */
  "elevenlabs": "elevenlabs"
};
var _default = exports["default"] = ElevenLabsGeneratedAsset;