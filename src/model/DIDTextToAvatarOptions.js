"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
 * The DIDTextToAvatarOptions model module.
 * @module model/DIDTextToAvatarOptions
 * @version 0.2.6
 */
var DIDTextToAvatarOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DIDTextToAvatarOptions</code>.
   * Options for the D-ID text-to-avatar service. Set the text to be converted to an avatar and configure the avatar and background. The output will be generated as an MP4 video file.
   * @alias module:model/DIDTextToAvatarOptions
   * @param type {module:model/DIDTextToAvatarOptions.TypeEnum} The type of asset to generate - set to `text-to-avatar` for text-to-avatar.
   * @param text {String} The text or script that the avatar will narrate.
   * @param avatar {module:model/DIDTextToAvatarOptions.AvatarEnum} The avatar character to generate. Select from the list of available avatars: <ul>   <li>`jack`</li>   <li>`lana`</li>   <li>`lily`</li>   <li>`matt`</li>   <li>`rian`</li> </ul>
   */
  function DIDTextToAvatarOptions(type, text, avatar) {
    _classCallCheck(this, DIDTextToAvatarOptions);
    DIDTextToAvatarOptions.initialize(this, type, text, avatar);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(DIDTextToAvatarOptions, [{
    key: "getType",
    value:
    /**
         * Returns The type of asset to generate - set to `text-to-avatar` for text-to-avatar.
         * @return {module:model/DIDTextToAvatarOptions.TypeEnum}
         */
    function getType() {
      return this.type;
    }

    /**
     * Sets The type of asset to generate - set to `text-to-avatar` for text-to-avatar.
     * @param {module:model/DIDTextToAvatarOptions.TypeEnum} type The type of asset to generate - set to `text-to-avatar` for text-to-avatar.
     */
  }, {
    key: "setType",
    value: function setType(type) {
      this['type'] = type;
      return this;
    }
    /**
         * Returns The text or script that the avatar will narrate.
         * @return {String}
         */
  }, {
    key: "getText",
    value: function getText() {
      return this.text;
    }

    /**
     * Sets The text or script that the avatar will narrate.
     * @param {String} text The text or script that the avatar will narrate.
     */
  }, {
    key: "setText",
    value: function setText(text) {
      this['text'] = text;
      return this;
    }
    /**
         * Returns The avatar character to generate. Select from the list of available avatars: <ul>   <li>`jack`</li>   <li>`lana`</li>   <li>`lily`</li>   <li>`matt`</li>   <li>`rian`</li> </ul>
         * @return {module:model/DIDTextToAvatarOptions.AvatarEnum}
         */
  }, {
    key: "getAvatar",
    value: function getAvatar() {
      return this.avatar;
    }

    /**
     * Sets The avatar character to generate. Select from the list of available avatars: <ul>   <li>`jack`</li>   <li>`lana`</li>   <li>`lily`</li>   <li>`matt`</li>   <li>`rian`</li> </ul>
     * @param {module:model/DIDTextToAvatarOptions.AvatarEnum} avatar The avatar character to generate. Select from the list of available avatars: <ul>   <li>`jack`</li>   <li>`lana`</li>   <li>`lily`</li>   <li>`matt`</li>   <li>`rian`</li> </ul>
     */
  }, {
    key: "setAvatar",
    value: function setAvatar(avatar) {
      this['avatar'] = avatar;
      return this;
    }
    /**
         * Returns The background color of the video.
         * @return {String}
         */
  }, {
    key: "getBackground",
    value: function getBackground() {
      return this.background;
    }

    /**
     * Sets The background color of the video.
     * @param {String} background The background color of the video.
     */
  }, {
    key: "setBackground",
    value: function setBackground(background) {
      this['background'] = background;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, type, text, avatar) {
      obj['type'] = type;
      obj['text'] = text;
      obj['avatar'] = avatar;
    }

    /**
     * Constructs a <code>DIDTextToAvatarOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DIDTextToAvatarOptions} obj Optional instance to populate.
     * @return {module:model/DIDTextToAvatarOptions} The populated <code>DIDTextToAvatarOptions</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DIDTextToAvatarOptions();
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _ApiClient["default"].convertToType(data['avatar'], 'String');
        }
        if (data.hasOwnProperty('background')) {
          obj['background'] = _ApiClient["default"].convertToType(data['background'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DIDTextToAvatarOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DIDTextToAvatarOptions</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(DIDTextToAvatarOptions.RequiredProperties),
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
      if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
        throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
      }
      // ensure the json data is a string
      if (data['avatar'] && !(typeof data['avatar'] === 'string' || data['avatar'] instanceof String)) {
        throw new Error("Expected the field `avatar` to be a primitive type in the JSON string but got " + data['avatar']);
      }
      // ensure the json data is a string
      if (data['background'] && !(typeof data['background'] === 'string' || data['background'] instanceof String)) {
        throw new Error("Expected the field `background` to be a primitive type in the JSON string but got " + data['background']);
      }
      return true;
    }
  }]);
}();
DIDTextToAvatarOptions.RequiredProperties = ["type", "text", "avatar"];

/**
 * The type of asset to generate - set to `text-to-avatar` for text-to-avatar.
 * @member {module:model/DIDTextToAvatarOptions.TypeEnum} type
 */
DIDTextToAvatarOptions.prototype['type'] = undefined;

/**
 * The text or script that the avatar will narrate.
 * @member {String} text
 */
DIDTextToAvatarOptions.prototype['text'] = undefined;

/**
 * The avatar character to generate. Select from the list of available avatars: <ul>   <li>`jack`</li>   <li>`lana`</li>   <li>`lily`</li>   <li>`matt`</li>   <li>`rian`</li> </ul>
 * @member {module:model/DIDTextToAvatarOptions.AvatarEnum} avatar
 */
DIDTextToAvatarOptions.prototype['avatar'] = undefined;

/**
 * The background color of the video.
 * @member {String} background
 */
DIDTextToAvatarOptions.prototype['background'] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DIDTextToAvatarOptions['TypeEnum'] = {
  /**
   * value: "text-to-avatar"
   * @const
   */
  "text-to-avatar": "text-to-avatar"
};

/**
 * Allowed values for the <code>avatar</code> property.
 * @enum {String}
 * @readonly
 */
DIDTextToAvatarOptions['AvatarEnum'] = {
  /**
   * value: "jack"
   * @const
   */
  "jack": "jack",
  /**
   * value: "lana"
   * @const
   */
  "lana": "lana",
  /**
   * value: "lily"
   * @const
   */
  "lily": "lily",
  /**
   * value: "matt"
   * @const
   */
  "matt": "matt",
  /**
   * value: "rian"
   * @const
   */
  "rian": "rian"
};
var _default = exports["default"] = DIDTextToAvatarOptions;