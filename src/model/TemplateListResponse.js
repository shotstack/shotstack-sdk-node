"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TemplateListResponseData = _interopRequireDefault(require("./TemplateListResponseData"));
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
 * The TemplateListResponse model module.
 * @module model/TemplateListResponse
 * @version 0.2.9
 */
var TemplateListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateListResponse</code>.
   * A list of previously saved templates.
   * @alias module:model/TemplateListResponse
   * @param success {Boolean} `true` if successfully returned, else `false`.
   * @param message {String} `OK`, `Bad Request` or an error message.
   * @param response {module:model/TemplateListResponseData} 
   */
  function TemplateListResponse(success, message, response) {
    _classCallCheck(this, TemplateListResponse);
    TemplateListResponse.initialize(this, success, message, response);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(TemplateListResponse, [{
    key: "getSuccess",
    value:
    /**
         * Returns `true` if successfully returned, else `false`.
         * @return {Boolean}
         */
    function getSuccess() {
      return this.success;
    }

    /**
     * Sets `true` if successfully returned, else `false`.
     * @param {Boolean} success `true` if successfully returned, else `false`.
     */
  }, {
    key: "setSuccess",
    value: function setSuccess(success) {
      this['success'] = success;
      return this;
    }
    /**
         * Returns `OK`, `Bad Request` or an error message.
         * @return {String}
         */
  }, {
    key: "getMessage",
    value: function getMessage() {
      return this.message;
    }

    /**
     * Sets `OK`, `Bad Request` or an error message.
     * @param {String} message `OK`, `Bad Request` or an error message.
     */
  }, {
    key: "setMessage",
    value: function setMessage(message) {
      this['message'] = message;
      return this;
    }
    /**
         * @return {module:model/TemplateListResponseData}
         */
  }, {
    key: "getResponse",
    value: function getResponse() {
      return this.response;
    }

    /**
     * @param {module:model/TemplateListResponseData} response
     */
  }, {
    key: "setResponse",
    value: function setResponse(response) {
      this['response'] = response;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, success, message, response) {
      obj['success'] = success;
      obj['message'] = message;
      obj['response'] = response;
    }

    /**
     * Constructs a <code>TemplateListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateListResponse} obj Optional instance to populate.
     * @return {module:model/TemplateListResponse} The populated <code>TemplateListResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateListResponse();
        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }
        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
        if (data.hasOwnProperty('response')) {
          obj['response'] = _TemplateListResponseData["default"].constructFromObject(data['response']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateListResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(TemplateListResponse.RequiredProperties),
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
      if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
        throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
      }
      // validate the optional field `response`
      if (data['response']) {
        // data not null
        _TemplateListResponseData["default"].validateJSON(data['response']);
      }
      return true;
    }
  }]);
}();
TemplateListResponse.RequiredProperties = ["success", "message", "response"];

/**
 * `true` if successfully returned, else `false`.
 * @member {Boolean} success
 */
TemplateListResponse.prototype['success'] = undefined;

/**
 * `OK`, `Bad Request` or an error message.
 * @member {String} message
 */
TemplateListResponse.prototype['message'] = undefined;

/**
 * @member {module:model/TemplateListResponseData} response
 */
TemplateListResponse.prototype['response'] = undefined;
var _default = exports["default"] = TemplateListResponse;