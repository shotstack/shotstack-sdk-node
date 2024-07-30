"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
 * The ChromaKey model module.
 * @module model/ChromaKey
 * @version 0.2.9
 */
var ChromaKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChromaKey</code>.
   * Chroma key, commonly known as green screen, is a technique that replaces a specific color in a video with a different background image or video, enabling seamless integration of diverse environments.
   * @alias module:model/ChromaKey
   */
  function ChromaKey() {
    _classCallCheck(this, ChromaKey);
    ChromaKey.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ChromaKey, [{
    key: "getColor",
    value:
    /**
         * Returns The chroma key color as a hex value. For a green screen, use a green hex value.
         * @return {String}
         */
    function getColor() {
      return this.color;
    }

    /**
     * Sets The chroma key color as a hex value. For a green screen, use a green hex value.
     * @param {String} color The chroma key color as a hex value. For a green screen, use a green hex value.
     */
  }, {
    key: "setColor",
    value: function setColor(color) {
      this['color'] = color;
      return this;
    }
    /**
         * Returns Pixels within this distance from the key color are eliminated by setting their alpha values to zero.
         * minimum: 0
         * maximum: 250
         * @return {Number}
         */
  }, {
    key: "getThreshold",
    value: function getThreshold() {
      return this.threshold;
    }

    /**
     * Sets Pixels within this distance from the key color are eliminated by setting their alpha values to zero.
     * @param {Number} threshold Pixels within this distance from the key color are eliminated by setting their alpha values to zero.
     */
  }, {
    key: "setThreshold",
    value: function setThreshold(threshold) {
      this['threshold'] = threshold;
      return this;
    }
    /**
         * Returns Pixels within the halo distance from the threshold boundary are given an increasing alpha value based on their distance from the threshold.
         * minimum: 0
         * maximum: 250
         * @return {Number}
         */
  }, {
    key: "getHalo",
    value: function getHalo() {
      return this.halo;
    }

    /**
     * Sets Pixels within the halo distance from the threshold boundary are given an increasing alpha value based on their distance from the threshold.
     * @param {Number} halo Pixels within the halo distance from the threshold boundary are given an increasing alpha value based on their distance from the threshold.
     */
  }, {
    key: "setHalo",
    value: function setHalo(halo) {
      this['halo'] = halo;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ChromaKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChromaKey} obj Optional instance to populate.
     * @return {module:model/ChromaKey} The populated <code>ChromaKey</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChromaKey();
        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }
        if (data.hasOwnProperty('threshold')) {
          obj['threshold'] = _ApiClient["default"].convertToType(data['threshold'], 'Number');
        }
        if (data.hasOwnProperty('halo')) {
          obj['halo'] = _ApiClient["default"].convertToType(data['halo'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChromaKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChromaKey</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
        throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
      }
      return true;
    }
  }]);
}();
/**
 * The chroma key color as a hex value. For a green screen, use a green hex value.
 * @member {String} color
 */
ChromaKey.prototype['color'] = undefined;

/**
 * Pixels within this distance from the key color are eliminated by setting their alpha values to zero.
 * @member {Number} threshold
 */
ChromaKey.prototype['threshold'] = undefined;

/**
 * Pixels within the halo distance from the threshold boundary are given an increasing alpha value based on their distance from the threshold.
 * @member {Number} halo
 */
ChromaKey.prototype['halo'] = undefined;
var _default = exports["default"] = ChromaKey;