"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Edit = _interopRequireDefault(require("./Edit"));
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
 * The TemplateDataResponseData model module.
 * @module model/TemplateDataResponseData
 * @version 0.2.9
 */
var TemplateDataResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDataResponseData</code>.
   * The response data returned with the [TemplateDataResponse](#tocs_templatedataresponse).
   * @alias module:model/TemplateDataResponseData
   * @param id {String} The unique id of the template in UUID format.
   * @param name {String} The template name.
   * @param owner {String} The owner id of the templates.
   * @param template {module:model/Edit} 
   */
  function TemplateDataResponseData(id, name, owner, template) {
    _classCallCheck(this, TemplateDataResponseData);
    TemplateDataResponseData.initialize(this, id, name, owner, template);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(TemplateDataResponseData, [{
    key: "getId",
    value:
    /**
         * Returns The unique id of the template in UUID format.
         * @return {String}
         */
    function getId() {
      return this.id;
    }

    /**
     * Sets The unique id of the template in UUID format.
     * @param {String} id The unique id of the template in UUID format.
     */
  }, {
    key: "setId",
    value: function setId(id) {
      this['id'] = id;
      return this;
    }
    /**
         * Returns The template name.
         * @return {String}
         */
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }

    /**
     * Sets The template name.
     * @param {String} name The template name.
     */
  }, {
    key: "setName",
    value: function setName(name) {
      this['name'] = name;
      return this;
    }
    /**
         * Returns The owner id of the templates.
         * @return {String}
         */
  }, {
    key: "getOwner",
    value: function getOwner() {
      return this.owner;
    }

    /**
     * Sets The owner id of the templates.
     * @param {String} owner The owner id of the templates.
     */
  }, {
    key: "setOwner",
    value: function setOwner(owner) {
      this['owner'] = owner;
      return this;
    }
    /**
         * @return {module:model/Edit}
         */
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.template;
    }

    /**
     * @param {module:model/Edit} template
     */
  }, {
    key: "setTemplate",
    value: function setTemplate(template) {
      this['template'] = template;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, id, name, owner, template) {
      obj['id'] = id;
      obj['name'] = name;
      obj['owner'] = owner;
      obj['template'] = template;
    }

    /**
     * Constructs a <code>TemplateDataResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDataResponseData} obj Optional instance to populate.
     * @return {module:model/TemplateDataResponseData} The populated <code>TemplateDataResponseData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDataResponseData();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }
        if (data.hasOwnProperty('template')) {
          obj['template'] = _Edit["default"].constructFromObject(data['template']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateDataResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateDataResponseData</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(TemplateDataResponseData.RequiredProperties),
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
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
        throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
      }
      // validate the optional field `template`
      if (data['template']) {
        // data not null
        _Edit["default"].validateJSON(data['template']);
      }
      return true;
    }
  }]);
}();
TemplateDataResponseData.RequiredProperties = ["id", "name", "owner", "template"];

/**
 * The unique id of the template in UUID format.
 * @member {String} id
 */
TemplateDataResponseData.prototype['id'] = undefined;

/**
 * The template name.
 * @member {String} name
 */
TemplateDataResponseData.prototype['name'] = undefined;

/**
 * The owner id of the templates.
 * @member {String} owner
 */
TemplateDataResponseData.prototype['owner'] = undefined;

/**
 * @member {module:model/Edit} template
 */
TemplateDataResponseData.prototype['template'] = undefined;
var _default = exports["default"] = TemplateDataResponseData;