"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OffsetX = _interopRequireDefault(require("./OffsetX"));
var _OffsetY = _interopRequireDefault(require("./OffsetY"));
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
 * The Offset model module.
 * @module model/Offset
 * @version 0.2.9
 */
var Offset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Offset</code>.
   * Offsets the position of an asset horizontally or vertically by a relative distance.
   * @alias module:model/Offset
   */
  function Offset() {
    _classCallCheck(this, Offset);
    Offset.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Offset, [{
    key: "getX",
    value:
    /**
         * @return {module:model/OffsetX}
         */
    function getX() {
      return this.x;
    }

    /**
     * @param {module:model/OffsetX} x
     */
  }, {
    key: "setX",
    value: function setX(x) {
      this['x'] = x;
      return this;
    }
    /**
         * @return {module:model/OffsetY}
         */
  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }

    /**
     * @param {module:model/OffsetY} y
     */
  }, {
    key: "setY",
    value: function setY(y) {
      this['y'] = y;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Offset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Offset} obj Optional instance to populate.
     * @return {module:model/Offset} The populated <code>Offset</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Offset();
        if (data.hasOwnProperty('x')) {
          obj['x'] = _OffsetX["default"].constructFromObject(data['x']);
        }
        if (data.hasOwnProperty('y')) {
          obj['y'] = _OffsetY["default"].constructFromObject(data['y']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Offset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Offset</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `x`
      if (data['x']) {
        // data not null
        _OffsetX["default"].validateJSON(data['x']);
      }
      // validate the optional field `y`
      if (data['y']) {
        // data not null
        _OffsetY["default"].validateJSON(data['y']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:model/OffsetX} x
 */
Offset.prototype['x'] = undefined;

/**
 * @member {module:model/OffsetY} y
 */
Offset.prototype['y'] = undefined;
var _default = exports["default"] = Offset;