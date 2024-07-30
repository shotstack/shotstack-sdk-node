"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VimeoDestinationPrivacyOptions = _interopRequireDefault(require("./VimeoDestinationPrivacyOptions"));
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
 * The VimeoDestinationOptions model module.
 * @module model/VimeoDestinationOptions
 * @version 0.2.9
 */
var VimeoDestinationOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VimeoDestinationOptions</code>.
   * Pass additional options to control how Vimeo publishes video, including name, description and privacy settings.
   * @alias module:model/VimeoDestinationOptions
   */
  function VimeoDestinationOptions() {
    _classCallCheck(this, VimeoDestinationOptions);
    VimeoDestinationOptions.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(VimeoDestinationOptions, [{
    key: "getName",
    value:
    /**
         * Returns A name or title for the video that will be displayed on the Vimeo website.
         * @return {String}
         */
    function getName() {
      return this.name;
    }

    /**
     * Sets A name or title for the video that will be displayed on the Vimeo website.
     * @param {String} name A name or title for the video that will be displayed on the Vimeo website.
     */
  }, {
    key: "setName",
    value: function setName(name) {
      this['name'] = name;
      return this;
    }
    /**
         * Returns A description of the video that will be displayed on the Vimeo website.
         * @return {String}
         */
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }

    /**
     * Sets A description of the video that will be displayed on the Vimeo website.
     * @param {String} description A description of the video that will be displayed on the Vimeo website.
     */
  }, {
    key: "setDescription",
    value: function setDescription(description) {
      this['description'] = description;
      return this;
    }
    /**
         * @return {module:model/VimeoDestinationPrivacyOptions}
         */
  }, {
    key: "getPrivacy",
    value: function getPrivacy() {
      return this.privacy;
    }

    /**
     * @param {module:model/VimeoDestinationPrivacyOptions} privacy
     */
  }, {
    key: "setPrivacy",
    value: function setPrivacy(privacy) {
      this['privacy'] = privacy;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VimeoDestinationOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VimeoDestinationOptions} obj Optional instance to populate.
     * @return {module:model/VimeoDestinationOptions} The populated <code>VimeoDestinationOptions</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VimeoDestinationOptions();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('privacy')) {
          obj['privacy'] = _VimeoDestinationPrivacyOptions["default"].constructFromObject(data['privacy']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VimeoDestinationOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VimeoDestinationOptions</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // validate the optional field `privacy`
      if (data['privacy']) {
        // data not null
        _VimeoDestinationPrivacyOptions["default"].validateJSON(data['privacy']);
      }
      return true;
    }
  }]);
}();
/**
 * A name or title for the video that will be displayed on the Vimeo website.
 * @member {String} name
 */
VimeoDestinationOptions.prototype['name'] = undefined;

/**
 * A description of the video that will be displayed on the Vimeo website.
 * @member {String} description
 */
VimeoDestinationOptions.prototype['description'] = undefined;

/**
 * @member {module:model/VimeoDestinationPrivacyOptions} privacy
 */
VimeoDestinationOptions.prototype['privacy'] = undefined;
var _default = exports["default"] = VimeoDestinationOptions;