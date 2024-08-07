"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OpenAiTextGeneratorOptions = _interopRequireDefault(require("./OpenAiTextGeneratorOptions"));
var _OpenAiGeneratedAssetOptions;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
 * The OpenAiGeneratedAssetOptions model module.
 * @module model/OpenAiGeneratedAssetOptions
 * @version 0.2.9
 */
var OpenAiGeneratedAssetOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OpenAiGeneratedAssetOptions</code>.
   * Generate assets using OpenAI provider AI services.  The following AI generation services are available: &lt;ul&gt;   &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_openaitextgeneratoroptions\&quot;&gt;OpenAiTextGeneratorOptions&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;
   * @alias module:model/OpenAiGeneratedAssetOptions
   * @param {(module:model/OpenAiTextGeneratorOptions)} instance The actual instance to initialize OpenAiGeneratedAssetOptions.
   */
  function OpenAiGeneratedAssetOptions() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, OpenAiGeneratedAssetOptions);
    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "OpenAiTextGeneratorOptions") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _OpenAiTextGeneratorOptions["default"].validateJSON(instance); // throw an exception if no match
        // create OpenAiTextGeneratorOptions from JS object
        this.actualInstance = _OpenAiTextGeneratorOptions["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into OpenAiTextGeneratorOptions
      errorMessages.push("Failed to construct OpenAiTextGeneratorOptions: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `OpenAiGeneratedAssetOptions` with oneOf schemas OpenAiTextGeneratorOptions. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `OpenAiGeneratedAssetOptions` with oneOf schemas OpenAiTextGeneratorOptions. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>OpenAiGeneratedAssetOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OpenAiGeneratedAssetOptions} obj Optional instance to populate.
   * @return {module:model/OpenAiGeneratedAssetOptions} The populated <code>OpenAiGeneratedAssetOptions</code> instance.
   */
  return _createClass(OpenAiGeneratedAssetOptions, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>OpenAiTextGeneratorOptions</code>.
     * @return {(module:model/OpenAiTextGeneratorOptions)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>OpenAiTextGeneratorOptions</code>.
     * @param {(module:model/OpenAiTextGeneratorOptions)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = OpenAiGeneratedAssetOptions.constructFromObject(obj).getActualInstance();
    }
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new OpenAiGeneratedAssetOptions(data);
    }
  }]);
}();
/**
 * The type of asset to generate - set to `text-generator` for text generation.
 * @member {module:model/OpenAiGeneratedAssetOptions.TypeEnum} type
 * @default 'text-generator'
 */
_OpenAiGeneratedAssetOptions = OpenAiGeneratedAssetOptions;
/**
 * Create an instance of OpenAiGeneratedAssetOptions from a JSON string.
 * @param {string} json_string JSON string.
 * @return {module:model/OpenAiGeneratedAssetOptions} An instance of OpenAiGeneratedAssetOptions.
 */
_defineProperty(OpenAiGeneratedAssetOptions, "fromJSON", function (json_string) {
  return _OpenAiGeneratedAssetOptions.constructFromObject(JSON.parse(json_string));
});
OpenAiGeneratedAssetOptions.prototype['type'] = 'text-generator';

/**
 * The text prompt to generate text from.
 * @member {String} prompt
 */
OpenAiGeneratedAssetOptions.prototype['prompt'] = undefined;

/**
 * The model to use for generating the text. Select from the list of available models: <ul>   <li>`gpt-3.5-turbo`</li>   <li>`gpt-4`</li> </ul>
 * @member {module:model/OpenAiGeneratedAssetOptions.ModelEnum} model
 */
OpenAiGeneratedAssetOptions.prototype['model'] = undefined;

/**
 * The system prompt to use for generating the text. This is an optional prompt that can be used to provide context or additional information to the model.
 * @member {String} systemPrompt
 */
OpenAiGeneratedAssetOptions.prototype['systemPrompt'] = undefined;
OpenAiGeneratedAssetOptions.OneOf = ["OpenAiTextGeneratorOptions"];
var _default = exports["default"] = OpenAiGeneratedAssetOptions;