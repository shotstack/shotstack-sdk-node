"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _MuxDestinationOptions = _interopRequireDefault(require("./MuxDestinationOptions"));
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
 * The MuxDestination model module.
 * @module model/MuxDestination
 * @version 0.2.9
 */
var MuxDestination = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MuxDestination</code>.
   * Send videos to the [Mux](https://shotstack.io/docs/guide/serving-assets/destinations/mux/) video hosting and streaming service. Mux credentials are required and added via the [dashboard](https://dashboard.shotstack.io/integrations/mux), not in the request.
   * @alias module:model/MuxDestination
   * @param provider {String} The destination to send video to - set to `mux` for Mux.
   */
  function MuxDestination(provider) {
    _classCallCheck(this, MuxDestination);
    MuxDestination.initialize(this, provider);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(MuxDestination, [{
    key: "getProvider",
    value:
    /**
         * Returns The destination to send video to - set to `mux` for Mux.
         * @return {String}
         */
    function getProvider() {
      return this.provider;
    }

    /**
     * Sets The destination to send video to - set to `mux` for Mux.
     * @param {String} provider The destination to send video to - set to `mux` for Mux.
     */
  }, {
    key: "setProvider",
    value: function setProvider(provider) {
      this['provider'] = provider;
      return this;
    }
    /**
         * @return {module:model/MuxDestinationOptions}
         */
  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.options;
    }

    /**
     * @param {module:model/MuxDestinationOptions} options
     */
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this['options'] = options;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, provider) {
      obj['provider'] = provider || 'mux';
    }

    /**
     * Constructs a <code>MuxDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MuxDestination} obj Optional instance to populate.
     * @return {module:model/MuxDestination} The populated <code>MuxDestination</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MuxDestination();
        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }
        if (data.hasOwnProperty('options')) {
          obj['options'] = _MuxDestinationOptions["default"].constructFromObject(data['options']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MuxDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MuxDestination</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(MuxDestination.RequiredProperties),
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
        _MuxDestinationOptions["default"].validateJSON(data['options']);
      }
      return true;
    }
  }]);
}();
MuxDestination.RequiredProperties = ["provider"];

/**
 * The destination to send video to - set to `mux` for Mux.
 * @member {String} provider
 * @default 'mux'
 */
MuxDestination.prototype['provider'] = 'mux';

/**
 * @member {module:model/MuxDestinationOptions} options
 */
MuxDestination.prototype['options'] = undefined;
var _default = exports["default"] = MuxDestination;