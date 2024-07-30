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
 * The VimeoDestinationPrivacyOptions model module.
 * @module model/VimeoDestinationPrivacyOptions
 * @version 0.2.9
 */
var VimeoDestinationPrivacyOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VimeoDestinationPrivacyOptions</code>.
   * Options to control the visibility of videos and privacy features.
   * @alias module:model/VimeoDestinationPrivacyOptions
   */
  function VimeoDestinationPrivacyOptions() {
    _classCallCheck(this, VimeoDestinationPrivacyOptions);
    VimeoDestinationPrivacyOptions.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(VimeoDestinationPrivacyOptions, [{
    key: "getView",
    value:
    /**
         * Returns Set who can view the videos. Available options are: <ul>   <li>`anybody` - Anyone can view the video.</li>   <li>`nobody` - Only the video owner can view the video.</li>   <li>`contacts` - Only contacts can view the video.</li>   <li>`password` - A password is required to view the video.</li>   <li>`unlisted` - The video is not listed on Vimeo.</li> </ul>
         * @return {module:model/VimeoDestinationPrivacyOptions.ViewEnum}
         */
    function getView() {
      return this.view;
    }

    /**
     * Sets Set who can view the videos. Available options are: <ul>   <li>`anybody` - Anyone can view the video.</li>   <li>`nobody` - Only the video owner can view the video.</li>   <li>`contacts` - Only contacts can view the video.</li>   <li>`password` - A password is required to view the video.</li>   <li>`unlisted` - The video is not listed on Vimeo.</li> </ul>
     * @param {module:model/VimeoDestinationPrivacyOptions.ViewEnum} view Set who can view the videos. Available options are: <ul>   <li>`anybody` - Anyone can view the video.</li>   <li>`nobody` - Only the video owner can view the video.</li>   <li>`contacts` - Only contacts can view the video.</li>   <li>`password` - A password is required to view the video.</li>   <li>`unlisted` - The video is not listed on Vimeo.</li> </ul>
     */
  }, {
    key: "setView",
    value: function setView(view) {
      this['view'] = view;
      return this;
    }
    /**
         * Returns Set who can embed the video. Available options are: <ul>   <li>`public` - Anyone can embed the video.</li>   <li>`private` - Only the video owner can embed the video.</li>   <li>`whitelist` - Only whitelisted domains can embed the video.</li> </ul>
         * @return {module:model/VimeoDestinationPrivacyOptions.EmbedEnum}
         */
  }, {
    key: "getEmbed",
    value: function getEmbed() {
      return this.embed;
    }

    /**
     * Sets Set who can embed the video. Available options are: <ul>   <li>`public` - Anyone can embed the video.</li>   <li>`private` - Only the video owner can embed the video.</li>   <li>`whitelist` - Only whitelisted domains can embed the video.</li> </ul>
     * @param {module:model/VimeoDestinationPrivacyOptions.EmbedEnum} embed Set who can embed the video. Available options are: <ul>   <li>`public` - Anyone can embed the video.</li>   <li>`private` - Only the video owner can embed the video.</li>   <li>`whitelist` - Only whitelisted domains can embed the video.</li> </ul>
     */
  }, {
    key: "setEmbed",
    value: function setEmbed(embed) {
      this['embed'] = embed;
      return this;
    }
    /**
         * Returns Set who can comment on the video. Available options are: <ul>   <li>`anybody` - Anyone can comment on the video.</li>   <li>`nobody` - Only the video owner can comment on the video.</li>   <li>`contacts` - Only contacts can comment on the video.</li> </ul>
         * @return {module:model/VimeoDestinationPrivacyOptions.CommentsEnum}
         */
  }, {
    key: "getComments",
    value: function getComments() {
      return this.comments;
    }

    /**
     * Sets Set who can comment on the video. Available options are: <ul>   <li>`anybody` - Anyone can comment on the video.</li>   <li>`nobody` - Only the video owner can comment on the video.</li>   <li>`contacts` - Only contacts can comment on the video.</li> </ul>
     * @param {module:model/VimeoDestinationPrivacyOptions.CommentsEnum} comments Set who can comment on the video. Available options are: <ul>   <li>`anybody` - Anyone can comment on the video.</li>   <li>`nobody` - Only the video owner can comment on the video.</li>   <li>`contacts` - Only contacts can comment on the video.</li> </ul>
     */
  }, {
    key: "setComments",
    value: function setComments(comments) {
      this['comments'] = comments;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VimeoDestinationPrivacyOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VimeoDestinationPrivacyOptions} obj Optional instance to populate.
     * @return {module:model/VimeoDestinationPrivacyOptions} The populated <code>VimeoDestinationPrivacyOptions</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VimeoDestinationPrivacyOptions();
        if (data.hasOwnProperty('view')) {
          obj['view'] = _ApiClient["default"].convertToType(data['view'], 'String');
        }
        if (data.hasOwnProperty('embed')) {
          obj['embed'] = _ApiClient["default"].convertToType(data['embed'], 'String');
        }
        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VimeoDestinationPrivacyOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VimeoDestinationPrivacyOptions</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['view'] && !(typeof data['view'] === 'string' || data['view'] instanceof String)) {
        throw new Error("Expected the field `view` to be a primitive type in the JSON string but got " + data['view']);
      }
      // ensure the json data is a string
      if (data['embed'] && !(typeof data['embed'] === 'string' || data['embed'] instanceof String)) {
        throw new Error("Expected the field `embed` to be a primitive type in the JSON string but got " + data['embed']);
      }
      // ensure the json data is a string
      if (data['comments'] && !(typeof data['comments'] === 'string' || data['comments'] instanceof String)) {
        throw new Error("Expected the field `comments` to be a primitive type in the JSON string but got " + data['comments']);
      }
      return true;
    }
  }]);
}();
/**
 * Set who can view the videos. Available options are: <ul>   <li>`anybody` - Anyone can view the video.</li>   <li>`nobody` - Only the video owner can view the video.</li>   <li>`contacts` - Only contacts can view the video.</li>   <li>`password` - A password is required to view the video.</li>   <li>`unlisted` - The video is not listed on Vimeo.</li> </ul>
 * @member {module:model/VimeoDestinationPrivacyOptions.ViewEnum} view
 */
VimeoDestinationPrivacyOptions.prototype['view'] = undefined;

/**
 * Set who can embed the video. Available options are: <ul>   <li>`public` - Anyone can embed the video.</li>   <li>`private` - Only the video owner can embed the video.</li>   <li>`whitelist` - Only whitelisted domains can embed the video.</li> </ul>
 * @member {module:model/VimeoDestinationPrivacyOptions.EmbedEnum} embed
 */
VimeoDestinationPrivacyOptions.prototype['embed'] = undefined;

/**
 * Set who can comment on the video. Available options are: <ul>   <li>`anybody` - Anyone can comment on the video.</li>   <li>`nobody` - Only the video owner can comment on the video.</li>   <li>`contacts` - Only contacts can comment on the video.</li> </ul>
 * @member {module:model/VimeoDestinationPrivacyOptions.CommentsEnum} comments
 */
VimeoDestinationPrivacyOptions.prototype['comments'] = undefined;

/**
 * Allowed values for the <code>view</code> property.
 * @enum {String}
 * @readonly
 */
VimeoDestinationPrivacyOptions['ViewEnum'] = {
  /**
   * value: "anybody"
   * @const
   */
  "anybody": "anybody",
  /**
   * value: "nobody"
   * @const
   */
  "nobody": "nobody",
  /**
   * value: "contacts"
   * @const
   */
  "contacts": "contacts",
  /**
   * value: "password"
   * @const
   */
  "password": "password",
  /**
   * value: "unlisted"
   * @const
   */
  "unlisted": "unlisted"
};

/**
 * Allowed values for the <code>embed</code> property.
 * @enum {String}
 * @readonly
 */
VimeoDestinationPrivacyOptions['EmbedEnum'] = {
  /**
   * value: "public"
   * @const
   */
  "public": "public",
  /**
   * value: "private"
   * @const
   */
  "private": "private",
  /**
   * value: "whitelist"
   * @const
   */
  "whitelist": "whitelist"
};

/**
 * Allowed values for the <code>comments</code> property.
 * @enum {String}
 * @readonly
 */
VimeoDestinationPrivacyOptions['CommentsEnum'] = {
  /**
   * value: "anybody"
   * @const
   */
  "anybody": "anybody",
  /**
   * value: "nobody"
   * @const
   */
  "nobody": "nobody",
  /**
   * value: "contacts"
   * @const
   */
  "contacts": "contacts"
};
var _default = exports["default"] = VimeoDestinationPrivacyOptions;