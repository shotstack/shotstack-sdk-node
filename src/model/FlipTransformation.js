"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
 * The FlipTransformation model module.
 * @module model/FlipTransformation
 * @version 0.2.6
 */
var FlipTransformation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FlipTransformation</code>.
   * Flip a clip vertically or horizontally. Acts as a mirror effect of the clip along the selected plane.
   * @alias module:model/FlipTransformation
   */
  function FlipTransformation() {
    _classCallCheck(this, FlipTransformation);
    FlipTransformation.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(FlipTransformation, [{
    key: "getHorizontal",
    value:
    /**
         * Returns Flip a clip horizontally.
         * @return {Boolean}
         */
    function getHorizontal() {
      return this.horizontal;
    }

    /**
     * Sets Flip a clip horizontally.
     * @param {Boolean} horizontal Flip a clip horizontally.
     */
  }, {
    key: "setHorizontal",
    value: function setHorizontal(horizontal) {
      this['horizontal'] = horizontal;
      return this;
    }
    /**
         * Returns Flip a clip vertically.
         * @return {Boolean}
         */
  }, {
    key: "getVertical",
    value: function getVertical() {
      return this.vertical;
    }

    /**
     * Sets Flip a clip vertically.
     * @param {Boolean} vertical Flip a clip vertically.
     */
  }, {
    key: "setVertical",
    value: function setVertical(vertical) {
      this['vertical'] = vertical;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>FlipTransformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FlipTransformation} obj Optional instance to populate.
     * @return {module:model/FlipTransformation} The populated <code>FlipTransformation</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FlipTransformation();
        if (data.hasOwnProperty('horizontal')) {
          obj['horizontal'] = _ApiClient["default"].convertToType(data['horizontal'], 'Boolean');
        }
        if (data.hasOwnProperty('vertical')) {
          obj['vertical'] = _ApiClient["default"].convertToType(data['vertical'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FlipTransformation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FlipTransformation</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
}();
/**
 * Flip a clip horizontally.
 * @member {Boolean} horizontal
 */
FlipTransformation.prototype['horizontal'] = undefined;

/**
 * Flip a clip vertically.
 * @member {Boolean} vertical
 */
FlipTransformation.prototype['vertical'] = undefined;
var _default = exports["default"] = FlipTransformation;