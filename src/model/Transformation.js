"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _FlipTransformation = _interopRequireDefault(require("./FlipTransformation"));
var _RotateTransformation = _interopRequireDefault(require("./RotateTransformation"));
var _SkewTransformation = _interopRequireDefault(require("./SkewTransformation"));
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
 * The Transformation model module.
 * @module model/Transformation
 * @version 0.2.9
 */
var Transformation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Transformation</code>.
   * Apply one or more transformations to a clip. Transformations alter the visual properties of a clip and can be combined to create new shapes and effects.
   * @alias module:model/Transformation
   */
  function Transformation() {
    _classCallCheck(this, Transformation);
    Transformation.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Transformation, [{
    key: "getRotate",
    value:
    /**
         * @return {module:model/RotateTransformation}
         */
    function getRotate() {
      return this.rotate;
    }

    /**
     * @param {module:model/RotateTransformation} rotate
     */
  }, {
    key: "setRotate",
    value: function setRotate(rotate) {
      this['rotate'] = rotate;
      return this;
    }
    /**
         * @return {module:model/SkewTransformation}
         */
  }, {
    key: "getSkew",
    value: function getSkew() {
      return this.skew;
    }

    /**
     * @param {module:model/SkewTransformation} skew
     */
  }, {
    key: "setSkew",
    value: function setSkew(skew) {
      this['skew'] = skew;
      return this;
    }
    /**
         * @return {module:model/FlipTransformation}
         */
  }, {
    key: "getFlip",
    value: function getFlip() {
      return this.flip;
    }

    /**
     * @param {module:model/FlipTransformation} flip
     */
  }, {
    key: "setFlip",
    value: function setFlip(flip) {
      this['flip'] = flip;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Transformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transformation} obj Optional instance to populate.
     * @return {module:model/Transformation} The populated <code>Transformation</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Transformation();
        if (data.hasOwnProperty('rotate')) {
          obj['rotate'] = _RotateTransformation["default"].constructFromObject(data['rotate']);
        }
        if (data.hasOwnProperty('skew')) {
          obj['skew'] = _SkewTransformation["default"].constructFromObject(data['skew']);
        }
        if (data.hasOwnProperty('flip')) {
          obj['flip'] = _FlipTransformation["default"].constructFromObject(data['flip']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Transformation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transformation</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `rotate`
      if (data['rotate']) {
        // data not null
        _RotateTransformation["default"].validateJSON(data['rotate']);
      }
      // validate the optional field `skew`
      if (data['skew']) {
        // data not null
        _SkewTransformation["default"].validateJSON(data['skew']);
      }
      // validate the optional field `flip`
      if (data['flip']) {
        // data not null
        _FlipTransformation["default"].validateJSON(data['flip']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:model/RotateTransformation} rotate
 */
Transformation.prototype['rotate'] = undefined;

/**
 * @member {module:model/SkewTransformation} skew
 */
Transformation.prototype['skew'] = undefined;

/**
 * @member {module:model/FlipTransformation} flip
 */
Transformation.prototype['flip'] = undefined;
var _default = exports["default"] = Transformation;