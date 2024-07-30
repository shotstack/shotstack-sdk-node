"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ElevenLabsTextToSpeechOptions = _interopRequireDefault(require("./ElevenLabsTextToSpeechOptions"));
var _ElevenLabsGeneratedAssetOptions;
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
 * The ElevenLabsGeneratedAssetOptions model module.
 * @module model/ElevenLabsGeneratedAssetOptions
 * @version 0.2.9
 */
var ElevenLabsGeneratedAssetOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ElevenLabsGeneratedAssetOptions</code>.
   * Generate assets using the third party ElevenLabs provider AI services.  The following AI generation services are available: &lt;ul&gt;   &lt;li&gt;&lt;a href&#x3D;\&quot;#tocs_elevenlabstexttospeechoptions\&quot;&gt;ElevenLabsTextToSpeechOptions&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;
   * @alias module:model/ElevenLabsGeneratedAssetOptions
   * @param {(module:model/ElevenLabsTextToSpeechOptions)} instance The actual instance to initialize ElevenLabsGeneratedAssetOptions.
   */
  function ElevenLabsGeneratedAssetOptions() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ElevenLabsGeneratedAssetOptions);
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
      if (typeof instance === "ElevenLabsTextToSpeechOptions") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ElevenLabsTextToSpeechOptions["default"].validateJSON(instance); // throw an exception if no match
        // create ElevenLabsTextToSpeechOptions from JS object
        this.actualInstance = _ElevenLabsTextToSpeechOptions["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ElevenLabsTextToSpeechOptions
      errorMessages.push("Failed to construct ElevenLabsTextToSpeechOptions: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ElevenLabsGeneratedAssetOptions` with oneOf schemas ElevenLabsTextToSpeechOptions. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ElevenLabsGeneratedAssetOptions` with oneOf schemas ElevenLabsTextToSpeechOptions. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ElevenLabsGeneratedAssetOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ElevenLabsGeneratedAssetOptions} obj Optional instance to populate.
   * @return {module:model/ElevenLabsGeneratedAssetOptions} The populated <code>ElevenLabsGeneratedAssetOptions</code> instance.
   */
  return _createClass(ElevenLabsGeneratedAssetOptions, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ElevenLabsTextToSpeechOptions</code>.
     * @return {(module:model/ElevenLabsTextToSpeechOptions)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ElevenLabsTextToSpeechOptions</code>.
     * @param {(module:model/ElevenLabsTextToSpeechOptions)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ElevenLabsGeneratedAssetOptions.constructFromObject(obj).getActualInstance();
    }
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ElevenLabsGeneratedAssetOptions(data);
    }
  }]);
}();
/**
 * The type of asset to generate - set to `text-to-speech` for text-to-speech.
 * @member {module:model/ElevenLabsGeneratedAssetOptions.TypeEnum} type
 */
_ElevenLabsGeneratedAssetOptions = ElevenLabsGeneratedAssetOptions;
/**
 * Create an instance of ElevenLabsGeneratedAssetOptions from a JSON string.
 * @param {string} json_string JSON string.
 * @return {module:model/ElevenLabsGeneratedAssetOptions} An instance of ElevenLabsGeneratedAssetOptions.
 */
_defineProperty(ElevenLabsGeneratedAssetOptions, "fromJSON", function (json_string) {
  return _ElevenLabsGeneratedAssetOptions.constructFromObject(JSON.parse(json_string));
});
ElevenLabsGeneratedAssetOptions.prototype['type'] = undefined;

/**
 * The text to convert to speech.
 * @member {String} text
 */
ElevenLabsGeneratedAssetOptions.prototype['text'] = undefined;

/**
 * The voice to use for the text-to-speech conversion. Select a voice from the list of available voices: <ul>   <li>`Adam`</li>   <li>`Antoni`</li>   <li>`Arnold`</li>   <li>`Bella`</li>   <li>`Domi`</li>   <li>`Elli`</li>   <li>`Josh`</li>   <li>`Rachel`</li>   <li>`Sam`</li> </ul>
 * @member {module:model/ElevenLabsGeneratedAssetOptions.VoiceEnum} voice
 */
ElevenLabsGeneratedAssetOptions.prototype['voice'] = undefined;
ElevenLabsGeneratedAssetOptions.OneOf = ["ElevenLabsTextToSpeechOptions"];
var _default = exports["default"] = ElevenLabsGeneratedAssetOptions;