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
 * The UploadResponseAttributes model module.
 * @module model/UploadResponseAttributes
 * @version 0.2.9
 */
var UploadResponseAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UploadResponseAttributes</code>.
   * The id and attributes of the upload file including the signed URL to send the binary file data to.
   * @alias module:model/UploadResponseAttributes
   * @param id {String} The source id.
   * @param url {String} The signed URL to use in a PUT request to send the binary file to.
   * @param expires {String} The time the upload request will expire. The signed URL will expire after one hour. Upload must complete within one hour.
   */
  function UploadResponseAttributes(id, url, expires) {
    _classCallCheck(this, UploadResponseAttributes);
    UploadResponseAttributes.initialize(this, id, url, expires);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(UploadResponseAttributes, [{
    key: "getId",
    value:
    /**
         * Returns The source id.
         * @return {String}
         */
    function getId() {
      return this.id;
    }

    /**
     * Sets The source id.
     * @param {String} id The source id.
     */
  }, {
    key: "setId",
    value: function setId(id) {
      this['id'] = id;
      return this;
    }
    /**
         * Returns The signed URL to use in a PUT request to send the binary file to.
         * @return {String}
         */
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.url;
    }

    /**
     * Sets The signed URL to use in a PUT request to send the binary file to.
     * @param {String} url The signed URL to use in a PUT request to send the binary file to.
     */
  }, {
    key: "setUrl",
    value: function setUrl(url) {
      this['url'] = url;
      return this;
    }
    /**
         * Returns The time the upload request will expire. The signed URL will expire after one hour. Upload must complete within one hour.
         * @return {String}
         */
  }, {
    key: "getExpires",
    value: function getExpires() {
      return this.expires;
    }

    /**
     * Sets The time the upload request will expire. The signed URL will expire after one hour. Upload must complete within one hour.
     * @param {String} expires The time the upload request will expire. The signed URL will expire after one hour. Upload must complete within one hour.
     */
  }, {
    key: "setExpires",
    value: function setExpires(expires) {
      this['expires'] = expires;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, id, url, expires) {
      obj['id'] = id;
      obj['url'] = url;
      obj['expires'] = expires;
    }

    /**
     * Constructs a <code>UploadResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadResponseAttributes} obj Optional instance to populate.
     * @return {module:model/UploadResponseAttributes} The populated <code>UploadResponseAttributes</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UploadResponseAttributes();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
        if (data.hasOwnProperty('expires')) {
          obj['expires'] = _ApiClient["default"].convertToType(data['expires'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadResponseAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadResponseAttributes</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(UploadResponseAttributes.RequiredProperties),
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
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
        throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
      }
      // ensure the json data is a string
      if (data['expires'] && !(typeof data['expires'] === 'string' || data['expires'] instanceof String)) {
        throw new Error("Expected the field `expires` to be a primitive type in the JSON string but got " + data['expires']);
      }
      return true;
    }
  }]);
}();
UploadResponseAttributes.RequiredProperties = ["id", "url", "expires"];

/**
 * The source id.
 * @member {String} id
 */
UploadResponseAttributes.prototype['id'] = undefined;

/**
 * The signed URL to use in a PUT request to send the binary file to.
 * @member {String} url
 */
UploadResponseAttributes.prototype['url'] = undefined;

/**
 * The time the upload request will expire. The signed URL will expire after one hour. Upload must complete within one hour.
 * @member {String} expires
 */
UploadResponseAttributes.prototype['expires'] = undefined;
var _default = exports["default"] = UploadResponseAttributes;