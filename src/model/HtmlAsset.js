"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The HtmlAsset model module.
 * @module model/HtmlAsset
 * @version 0.2.9
 */
var HtmlAsset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HtmlAsset</code>.
   * The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
   * @alias module:model/HtmlAsset
   * @param type {String} The type of asset - set to `html` for HTML.
   * @param html {String} The HTML text string. See list of [supported HTML tags](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-html-tags).
   */
  function HtmlAsset(type, html) {
    _classCallCheck(this, HtmlAsset);
    HtmlAsset.initialize(this, type, html);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(HtmlAsset, [{
    key: "getType",
    value:
    /**
         * Returns The type of asset - set to `html` for HTML.
         * @return {String}
         */
    function getType() {
      return this.type;
    }

    /**
     * Sets The type of asset - set to `html` for HTML.
     * @param {String} type The type of asset - set to `html` for HTML.
     */
  }, {
    key: "setType",
    value: function setType(type) {
      this['type'] = type;
      return this;
    }
    /**
         * Returns The HTML text string. See list of [supported HTML tags](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-html-tags).
         * @return {String}
         */
  }, {
    key: "getHtml",
    value: function getHtml() {
      return this.html;
    }

    /**
     * Sets The HTML text string. See list of [supported HTML tags](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-html-tags).
     * @param {String} html The HTML text string. See list of [supported HTML tags](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-html-tags).
     */
  }, {
    key: "setHtml",
    value: function setHtml(html) {
      this['html'] = html;
      return this;
    }
    /**
         * Returns The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-css-properties).
         * @return {String}
         */
  }, {
    key: "getCss",
    value: function getCss() {
      return this.css;
    }

    /**
     * Sets The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-css-properties).
     * @param {String} css The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-css-properties).
     */
  }, {
    key: "setCss",
    value: function setCss(css) {
      this['css'] = css;
      return this;
    }
    /**
         * Returns Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box.
         * @return {Number}
         */
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }

    /**
     * Sets Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box.
     * @param {Number} width Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box.
     */
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this['width'] = width;
      return this;
    }
    /**
         * Returns Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box.
         * @return {Number}
         */
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }

    /**
     * Sets Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box.
     * @param {Number} height Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box.
     */
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this['height'] = height;
      return this;
    }
    /**
         * Returns Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
         * @return {String}
         */
  }, {
    key: "getBackground",
    value: function getBackground() {
      return this.background;
    }

    /**
     * Sets Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
     * @param {String} background Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
     */
  }, {
    key: "setBackground",
    value: function setBackground(background) {
      this['background'] = background;
      return this;
    }
    /**
         * Returns Place the HTML in one of nine predefined positions within the HTML area. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
         * @return {module:model/HtmlAsset.PositionEnum}
         */
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }

    /**
     * Sets Place the HTML in one of nine predefined positions within the HTML area. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
     * @param {module:model/HtmlAsset.PositionEnum} position Place the HTML in one of nine predefined positions within the HTML area. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
     */
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this['position'] = position;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, type, html) {
      obj['type'] = type || 'html';
      obj['html'] = html;
    }

    /**
     * Constructs a <code>HtmlAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HtmlAsset} obj Optional instance to populate.
     * @return {module:model/HtmlAsset} The populated <code>HtmlAsset</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HtmlAsset();
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }
        if (data.hasOwnProperty('css')) {
          obj['css'] = _ApiClient["default"].convertToType(data['css'], 'String');
        }
        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }
        if (data.hasOwnProperty('background')) {
          obj['background'] = _ApiClient["default"].convertToType(data['background'], 'String');
        }
        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HtmlAsset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HtmlAsset</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(HtmlAsset.RequiredProperties),
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
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // ensure the json data is a string
      if (data['html'] && !(typeof data['html'] === 'string' || data['html'] instanceof String)) {
        throw new Error("Expected the field `html` to be a primitive type in the JSON string but got " + data['html']);
      }
      // ensure the json data is a string
      if (data['css'] && !(typeof data['css'] === 'string' || data['css'] instanceof String)) {
        throw new Error("Expected the field `css` to be a primitive type in the JSON string but got " + data['css']);
      }
      // ensure the json data is a string
      if (data['background'] && !(typeof data['background'] === 'string' || data['background'] instanceof String)) {
        throw new Error("Expected the field `background` to be a primitive type in the JSON string but got " + data['background']);
      }
      // ensure the json data is a string
      if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
        throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
      }
      return true;
    }
  }]);
}();
HtmlAsset.RequiredProperties = ["type", "html"];

/**
 * The type of asset - set to `html` for HTML.
 * @member {String} type
 * @default 'html'
 */
HtmlAsset.prototype['type'] = 'html';

/**
 * The HTML text string. See list of [supported HTML tags](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-html-tags).
 * @member {String} html
 */
HtmlAsset.prototype['html'] = undefined;

/**
 * The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.io/docs/guide/architecting-an-application/html-support/#supported-css-properties).
 * @member {String} css
 */
HtmlAsset.prototype['css'] = undefined;

/**
 * Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box.
 * @member {Number} width
 */
HtmlAsset.prototype['width'] = undefined;

/**
 * Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box.
 * @member {Number} height
 */
HtmlAsset.prototype['height'] = undefined;

/**
 * Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
 * @member {String} background
 */
HtmlAsset.prototype['background'] = undefined;

/**
 * Place the HTML in one of nine predefined positions within the HTML area. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
 * @member {module:model/HtmlAsset.PositionEnum} position
 */
HtmlAsset.prototype['position'] = undefined;

/**
 * Allowed values for the <code>position</code> property.
 * @enum {String}
 * @readonly
 */
HtmlAsset['PositionEnum'] = {
  /**
   * value: "top"
   * @const
   */
  "top": "top",
  /**
   * value: "topRight"
   * @const
   */
  "topRight": "topRight",
  /**
   * value: "right"
   * @const
   */
  "right": "right",
  /**
   * value: "bottomRight"
   * @const
   */
  "bottomRight": "bottomRight",
  /**
   * value: "bottom"
   * @const
   */
  "bottom": "bottom",
  /**
   * value: "bottomLeft"
   * @const
   */
  "bottomLeft": "bottomLeft",
  /**
   * value: "left"
   * @const
   */
  "left": "left",
  /**
   * value: "topLeft"
   * @const
   */
  "topLeft": "topLeft",
  /**
   * value: "center"
   * @const
   */
  "center": "center"
};
var _default = exports["default"] = HtmlAsset;