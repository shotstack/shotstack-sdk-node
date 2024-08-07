"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AudioAssetVolume = _interopRequireDefault(require("./AudioAssetVolume"));
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
 * The AudioAsset model module.
 * @module model/AudioAsset
 * @version 0.2.9
 */
var AudioAsset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AudioAsset</code>.
   * The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file.
   * @alias module:model/AudioAsset
   * @param type {String} The type of asset - set to `audio` for audio assets.
   * @param src {String} The audio source URL. The URL must be publicly accessible or include credentials.
   */
  function AudioAsset(type, src) {
    _classCallCheck(this, AudioAsset);
    AudioAsset.initialize(this, type, src);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(AudioAsset, [{
    key: "getType",
    value:
    /**
         * Returns The type of asset - set to `audio` for audio assets.
         * @return {String}
         */
    function getType() {
      return this.type;
    }

    /**
     * Sets The type of asset - set to `audio` for audio assets.
     * @param {String} type The type of asset - set to `audio` for audio assets.
     */
  }, {
    key: "setType",
    value: function setType(type) {
      this['type'] = type;
      return this;
    }
    /**
         * Returns The audio source URL. The URL must be publicly accessible or include credentials.
         * @return {String}
         */
  }, {
    key: "getSrc",
    value: function getSrc() {
      return this.src;
    }

    /**
     * Sets The audio source URL. The URL must be publicly accessible or include credentials.
     * @param {String} src The audio source URL. The URL must be publicly accessible or include credentials.
     */
  }, {
    key: "setSrc",
    value: function setSrc(src) {
      this['src'] = src;
      return this;
    }
    /**
         * Returns The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the in trim point. The audio will play until the file ends or the Clip length is reached.
         * @return {Number}
         */
  }, {
    key: "getTrim",
    value: function getTrim() {
      return this.trim;
    }

    /**
     * Sets The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the in trim point. The audio will play until the file ends or the Clip length is reached.
     * @param {Number} trim The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the in trim point. The audio will play until the file ends or the Clip length is reached.
     */
  }, {
    key: "setTrim",
    value: function setTrim(trim) {
      this['trim'] = trim;
      return this;
    }
    /**
         * @return {module:model/AudioAssetVolume}
         */
  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.volume;
    }

    /**
     * @param {module:model/AudioAssetVolume} volume
     */
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      this['volume'] = volume;
      return this;
    }
    /**
         * Returns Adjust the playback speed of the audio clip between 0 (paused) and 10 (10x normal speed), where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire audio (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire audio (i.e. original length / 2).
         * minimum: 0
         * maximum: 10
         * @return {Number}
         */
  }, {
    key: "getSpeed",
    value: function getSpeed() {
      return this.speed;
    }

    /**
     * Sets Adjust the playback speed of the audio clip between 0 (paused) and 10 (10x normal speed), where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire audio (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire audio (i.e. original length / 2).
     * @param {Number} speed Adjust the playback speed of the audio clip between 0 (paused) and 10 (10x normal speed), where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire audio (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire audio (i.e. original length / 2).
     */
  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      this['speed'] = speed;
      return this;
    }
    /**
         * Returns The effect to apply to the audio asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
         * @return {module:model/AudioAsset.EffectEnum}
         */
  }, {
    key: "getEffect",
    value: function getEffect() {
      return this.effect;
    }

    /**
     * Sets The effect to apply to the audio asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
     * @param {module:model/AudioAsset.EffectEnum} effect The effect to apply to the audio asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
     */
  }, {
    key: "setEffect",
    value: function setEffect(effect) {
      this['effect'] = effect;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, type, src) {
      obj['type'] = type || 'audio';
      obj['src'] = src;
    }

    /**
     * Constructs a <code>AudioAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AudioAsset} obj Optional instance to populate.
     * @return {module:model/AudioAsset} The populated <code>AudioAsset</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AudioAsset();
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('src')) {
          obj['src'] = _ApiClient["default"].convertToType(data['src'], 'String');
        }
        if (data.hasOwnProperty('trim')) {
          obj['trim'] = _ApiClient["default"].convertToType(data['trim'], 'Number');
        }
        if (data.hasOwnProperty('volume')) {
          obj['volume'] = _AudioAssetVolume["default"].constructFromObject(data['volume']);
        }
        if (data.hasOwnProperty('speed')) {
          obj['speed'] = _ApiClient["default"].convertToType(data['speed'], 'Number');
        }
        if (data.hasOwnProperty('effect')) {
          obj['effect'] = _ApiClient["default"].convertToType(data['effect'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AudioAsset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AudioAsset</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(AudioAsset.RequiredProperties),
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
      if (data['src'] && !(typeof data['src'] === 'string' || data['src'] instanceof String)) {
        throw new Error("Expected the field `src` to be a primitive type in the JSON string but got " + data['src']);
      }
      // validate the optional field `volume`
      if (data['volume']) {
        // data not null
        _AudioAssetVolume["default"].validateJSON(data['volume']);
      }
      // ensure the json data is a string
      if (data['effect'] && !(typeof data['effect'] === 'string' || data['effect'] instanceof String)) {
        throw new Error("Expected the field `effect` to be a primitive type in the JSON string but got " + data['effect']);
      }
      return true;
    }
  }]);
}();
AudioAsset.RequiredProperties = ["type", "src"];

/**
 * The type of asset - set to `audio` for audio assets.
 * @member {String} type
 * @default 'audio'
 */
AudioAsset.prototype['type'] = 'audio';

/**
 * The audio source URL. The URL must be publicly accessible or include credentials.
 * @member {String} src
 */
AudioAsset.prototype['src'] = undefined;

/**
 * The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the in trim point. The audio will play until the file ends or the Clip length is reached.
 * @member {Number} trim
 */
AudioAsset.prototype['trim'] = undefined;

/**
 * @member {module:model/AudioAssetVolume} volume
 */
AudioAsset.prototype['volume'] = undefined;

/**
 * Adjust the playback speed of the audio clip between 0 (paused) and 10 (10x normal speed), where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire audio (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire audio (i.e. original length / 2).
 * @member {Number} speed
 */
AudioAsset.prototype['speed'] = undefined;

/**
 * The effect to apply to the audio asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
 * @member {module:model/AudioAsset.EffectEnum} effect
 */
AudioAsset.prototype['effect'] = undefined;

/**
 * Allowed values for the <code>effect</code> property.
 * @enum {String}
 * @readonly
 */
AudioAsset['EffectEnum'] = {
  /**
   * value: "fadeIn"
   * @const
   */
  "fadeIn": "fadeIn",
  /**
   * value: "fadeOut"
   * @const
   */
  "fadeOut": "fadeOut",
  /**
   * value: "fadeInFadeOut"
   * @const
   */
  "fadeInFadeOut": "fadeInFadeOut"
};
var _default = exports["default"] = AudioAsset;