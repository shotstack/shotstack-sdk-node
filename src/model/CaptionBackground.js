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
 * The CaptionBackground model module.
 * @module model/CaptionBackground
 * @version 0.2.9
 */
var CaptionBackground = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CaptionBackground</code>.
   * Displays a background box behind the caption text.
   * @alias module:model/CaptionBackground
   */
  function CaptionBackground() {
    _classCallCheck(this, CaptionBackground);
    CaptionBackground.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CaptionBackground, [{
    key: "getColor",
    value:
    /**
         * Returns The background color using hexadecimal color notation.
         * @return {String}
         */
    function getColor() {
      return this.color;
    }

    /**
     * Sets The background color using hexadecimal color notation.
     * @param {String} color The background color using hexadecimal color notation.
     */
  }, {
    key: "setColor",
    value: function setColor(color) {
      this['color'] = color;
      return this;
    }
    /**
         * Returns The opacity of the background color.
         * @return {Number}
         */
  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.opacity;
    }

    /**
     * Sets The opacity of the background color.
     * @param {Number} opacity The opacity of the background color.
     */
  }, {
    key: "setOpacity",
    value: function setOpacity(opacity) {
      this['opacity'] = opacity;
      return this;
    }
    /**
         * Returns The padding inside the background box in pixels.
         * @return {Number}
         */
  }, {
    key: "getPadding",
    value: function getPadding() {
      return this.padding;
    }

    /**
     * Sets The padding inside the background box in pixels.
     * @param {Number} padding The padding inside the background box in pixels.
     */
  }, {
    key: "setPadding",
    value: function setPadding(padding) {
      this['padding'] = padding;
      return this;
    }
    /**
         * Returns The border radius of the background box in pixels.
         * @return {Number}
         */
  }, {
    key: "getBorderRadius",
    value: function getBorderRadius() {
      return this.borderRadius;
    }

    /**
     * Sets The border radius of the background box in pixels.
     * @param {Number} borderRadius The border radius of the background box in pixels.
     */
  }, {
    key: "setBorderRadius",
    value: function setBorderRadius(borderRadius) {
      this['borderRadius'] = borderRadius;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CaptionBackground</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CaptionBackground} obj Optional instance to populate.
     * @return {module:model/CaptionBackground} The populated <code>CaptionBackground</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CaptionBackground();
        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }
        if (data.hasOwnProperty('opacity')) {
          obj['opacity'] = _ApiClient["default"].convertToType(data['opacity'], 'Number');
        }
        if (data.hasOwnProperty('padding')) {
          obj['padding'] = _ApiClient["default"].convertToType(data['padding'], 'Number');
        }
        if (data.hasOwnProperty('borderRadius')) {
          obj['borderRadius'] = _ApiClient["default"].convertToType(data['borderRadius'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CaptionBackground</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CaptionBackground</code>.
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
 * The background color using hexadecimal color notation.
 * @member {String} color
 */
CaptionBackground.prototype['color'] = undefined;

/**
 * The opacity of the background color.
 * @member {Number} opacity
 */
CaptionBackground.prototype['opacity'] = undefined;

/**
 * The padding inside the background box in pixels.
 * @member {Number} padding
 */
CaptionBackground.prototype['padding'] = undefined;

/**
 * The border radius of the background box in pixels.
 * @member {Number} borderRadius
 */
CaptionBackground.prototype['borderRadius'] = undefined;
var _default = exports["default"] = CaptionBackground;