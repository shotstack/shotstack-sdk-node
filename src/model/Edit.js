"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _MergeField = _interopRequireDefault(require("./MergeField"));
var _Output = _interopRequireDefault(require("./Output"));
var _Timeline = _interopRequireDefault(require("./Timeline"));
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
 * The Edit model module.
 * @module model/Edit
 * @version 0.2.9
 */
var Edit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Edit</code>.
   * An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
   * @alias module:model/Edit
   * @param timeline {module:model/Timeline} 
   * @param output {module:model/Output} 
   */
  function Edit(timeline, output) {
    _classCallCheck(this, Edit);
    Edit.initialize(this, timeline, output);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Edit, [{
    key: "getTimeline",
    value:
    /**
         * @return {module:model/Timeline}
         */
    function getTimeline() {
      return this.timeline;
    }

    /**
     * @param {module:model/Timeline} timeline
     */
  }, {
    key: "setTimeline",
    value: function setTimeline(timeline) {
      this['timeline'] = timeline;
      return this;
    }
    /**
         * @return {module:model/Output}
         */
  }, {
    key: "getOutput",
    value: function getOutput() {
      return this.output;
    }

    /**
     * @param {module:model/Output} output
     */
  }, {
    key: "setOutput",
    value: function setOutput(output) {
      this['output'] = output;
      return this;
    }
    /**
         * Returns An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. 
         * @return {Array.<module:model/MergeField>}
         */
  }, {
    key: "getMerge",
    value: function getMerge() {
      return this.merge;
    }

    /**
     * Sets An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. 
     * @param {Array.<module:model/MergeField>} merge An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. 
     */
  }, {
    key: "setMerge",
    value: function setMerge(merge) {
      this['merge'] = merge;
      return this;
    }
    /**
         * Returns An optional webhook callback URL used to receive status notifications when a render completes or fails. Notifications are also sent when a rendered video is sent to an output  [destination](https://shotstack.io/docs/guide/serving-assets/destinations/). See [webhooks](https://shotstack.io/docs/guide/architecting-an-application/webhooks/) for more details.
         * @return {String}
         */
  }, {
    key: "getCallback",
    value: function getCallback() {
      return this.callback;
    }

    /**
     * Sets An optional webhook callback URL used to receive status notifications when a render completes or fails. Notifications are also sent when a rendered video is sent to an output  [destination](https://shotstack.io/docs/guide/serving-assets/destinations/). See [webhooks](https://shotstack.io/docs/guide/architecting-an-application/webhooks/) for more details.
     * @param {String} callback An optional webhook callback URL used to receive status notifications when a render completes or fails. Notifications are also sent when a rendered video is sent to an output  [destination](https://shotstack.io/docs/guide/serving-assets/destinations/). See [webhooks](https://shotstack.io/docs/guide/architecting-an-application/webhooks/) for more details.
     */
  }, {
    key: "setCallback",
    value: function setCallback(callback) {
      this['callback'] = callback;
      return this;
    }
    /**
         * Returns **Notice: This option is now deprecated and will be removed. Disk types are handled automatically. Setting a disk type has no effect.**  The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.io/docs/guide/architecting-an-application/disk-types/) for more details. <ul>   <li>`local` - optimized for high speed rendering with up to 512MB storage</li>   <li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li> </ul> 
         * @return {module:model/Edit.DiskEnum}
         */
  }, {
    key: "getDisk",
    value: function getDisk() {
      return this.disk;
    }

    /**
     * Sets **Notice: This option is now deprecated and will be removed. Disk types are handled automatically. Setting a disk type has no effect.**  The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.io/docs/guide/architecting-an-application/disk-types/) for more details. <ul>   <li>`local` - optimized for high speed rendering with up to 512MB storage</li>   <li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li> </ul> 
     * @param {module:model/Edit.DiskEnum} disk **Notice: This option is now deprecated and will be removed. Disk types are handled automatically. Setting a disk type has no effect.**  The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.io/docs/guide/architecting-an-application/disk-types/) for more details. <ul>   <li>`local` - optimized for high speed rendering with up to 512MB storage</li>   <li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li> </ul> 
     */
  }, {
    key: "setDisk",
    value: function setDisk(disk) {
      this['disk'] = disk;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, timeline, output) {
      obj['timeline'] = timeline;
      obj['output'] = output;
    }

    /**
     * Constructs a <code>Edit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Edit} obj Optional instance to populate.
     * @return {module:model/Edit} The populated <code>Edit</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Edit();
        if (data.hasOwnProperty('timeline')) {
          obj['timeline'] = _Timeline["default"].constructFromObject(data['timeline']);
        }
        if (data.hasOwnProperty('output')) {
          obj['output'] = _Output["default"].constructFromObject(data['output']);
        }
        if (data.hasOwnProperty('merge')) {
          obj['merge'] = _ApiClient["default"].convertToType(data['merge'], [_MergeField["default"]]);
        }
        if (data.hasOwnProperty('callback')) {
          obj['callback'] = _ApiClient["default"].convertToType(data['callback'], 'String');
        }
        if (data.hasOwnProperty('disk')) {
          obj['disk'] = _ApiClient["default"].convertToType(data['disk'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Edit</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Edit</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Edit.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `timeline`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['timeline']) {
        // data not null
        _Timeline["default"].validateJSON(data['timeline']);
      }
      // validate the optional field `output`
      if (data['output']) {
        // data not null
        _Output["default"].validateJSON(data['output']);
      }
      if (data['merge']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['merge'])) {
          throw new Error("Expected the field `merge` to be an array in the JSON data but got " + data['merge']);
        }
        // validate the optional field `merge` (array)
        var _iterator2 = _createForOfIteratorHelper(data['merge']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _MergeField["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['callback'] && !(typeof data['callback'] === 'string' || data['callback'] instanceof String)) {
        throw new Error("Expected the field `callback` to be a primitive type in the JSON string but got " + data['callback']);
      }
      // ensure the json data is a string
      if (data['disk'] && !(typeof data['disk'] === 'string' || data['disk'] instanceof String)) {
        throw new Error("Expected the field `disk` to be a primitive type in the JSON string but got " + data['disk']);
      }
      return true;
    }
  }]);
}();
Edit.RequiredProperties = ["timeline", "output"];

/**
 * @member {module:model/Timeline} timeline
 */
Edit.prototype['timeline'] = undefined;

/**
 * @member {module:model/Output} output
 */
Edit.prototype['output'] = undefined;

/**
 * An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. 
 * @member {Array.<module:model/MergeField>} merge
 */
Edit.prototype['merge'] = undefined;

/**
 * An optional webhook callback URL used to receive status notifications when a render completes or fails. Notifications are also sent when a rendered video is sent to an output  [destination](https://shotstack.io/docs/guide/serving-assets/destinations/). See [webhooks](https://shotstack.io/docs/guide/architecting-an-application/webhooks/) for more details.
 * @member {String} callback
 */
Edit.prototype['callback'] = undefined;

/**
 * **Notice: This option is now deprecated and will be removed. Disk types are handled automatically. Setting a disk type has no effect.**  The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.io/docs/guide/architecting-an-application/disk-types/) for more details. <ul>   <li>`local` - optimized for high speed rendering with up to 512MB storage</li>   <li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li> </ul> 
 * @member {module:model/Edit.DiskEnum} disk
 */
Edit.prototype['disk'] = undefined;

/**
 * Allowed values for the <code>disk</code> property.
 * @enum {String}
 * @readonly
 */
Edit['DiskEnum'] = {
  /**
   * value: "local"
   * @const
   */
  "local": "local",
  /**
   * value: "mount"
   * @const
   */
  "mount": "mount"
};
var _default = exports["default"] = Edit;