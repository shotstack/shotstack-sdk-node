"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DIDGeneratedAssetOptions = _interopRequireDefault(require("./DIDGeneratedAssetOptions"));
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
 * The DIDGeneratedAsset model module.
 * @module model/DIDGeneratedAsset
 * @version 0.2.9
 */
var DIDGeneratedAsset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DIDGeneratedAsset</code>.
   * Generate assets using D-ID. D-ID provide a text-to-avatar service. The D-ID provider works on a bring-your-own-key basis, credentials are required and must be added via the  [dashboard](https://dashboard.shotstack.io/integrations/d-id), not in the request.
   * @alias module:model/DIDGeneratedAsset
   * @param provider {module:model/DIDGeneratedAsset.ProviderEnum} The name of the provider - set to `d-id` for D-ID.
   * @param options {module:model/DIDGeneratedAssetOptions} 
   */
  function DIDGeneratedAsset(provider, options) {
    _classCallCheck(this, DIDGeneratedAsset);
    DIDGeneratedAsset.initialize(this, provider, options);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(DIDGeneratedAsset, [{
    key: "getProvider",
    value:
    /**
         * Returns The name of the provider - set to `d-id` for D-ID.
         * @return {module:model/DIDGeneratedAsset.ProviderEnum}
         */
    function getProvider() {
      return this.provider;
    }

    /**
     * Sets The name of the provider - set to `d-id` for D-ID.
     * @param {module:model/DIDGeneratedAsset.ProviderEnum} provider The name of the provider - set to `d-id` for D-ID.
     */
  }, {
    key: "setProvider",
    value: function setProvider(provider) {
      this['provider'] = provider;
      return this;
    }
    /**
         * @return {module:model/DIDGeneratedAssetOptions}
         */
  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.options;
    }

    /**
     * @param {module:model/DIDGeneratedAssetOptions} options
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
      obj['provider'] = provider || 'd-id';
      obj['options'] = options;
    }

    /**
     * Constructs a <code>DIDGeneratedAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DIDGeneratedAsset} obj Optional instance to populate.
     * @return {module:model/DIDGeneratedAsset} The populated <code>DIDGeneratedAsset</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DIDGeneratedAsset();
        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }
        if (data.hasOwnProperty('options')) {
          obj['options'] = _DIDGeneratedAssetOptions["default"].constructFromObject(data['options']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DIDGeneratedAsset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DIDGeneratedAsset</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(DIDGeneratedAsset.RequiredProperties),
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
        _DIDGeneratedAssetOptions["default"].validateJSON(data['options']);
      }
      return true;
    }
  }]);
}();
DIDGeneratedAsset.RequiredProperties = ["provider", "options"];

/**
 * The name of the provider - set to `d-id` for D-ID.
 * @member {module:model/DIDGeneratedAsset.ProviderEnum} provider
 * @default 'd-id'
 */
DIDGeneratedAsset.prototype['provider'] = 'd-id';

/**
 * @member {module:model/DIDGeneratedAssetOptions} options
 */
DIDGeneratedAsset.prototype['options'] = undefined;

/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
DIDGeneratedAsset['ProviderEnum'] = {
  /**
   * value: "d-id"
   * @const
   */
  "d-id": "d-id"
};
var _default = exports["default"] = DIDGeneratedAsset;