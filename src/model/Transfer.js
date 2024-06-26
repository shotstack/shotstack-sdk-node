"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Destinations = _interopRequireDefault(require("./Destinations"));
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
 * The Transfer model module.
 * @module model/Transfer
 * @version 0.2.6
 */
var Transfer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Transfer</code>.
   * The asset URL to fetch and transfer to a destination.
   * @alias module:model/Transfer
   * @param url {String} The file URL to fetch and transfer.
   * @param id {String} An identifier for the asset which must be provided by the client. The identifier does not need to be unique.
   * @param destinations {Array.<module:model/Destinations>} Specify the storage locations and hosting services to send the file to.
   */
  function Transfer(url, id, destinations) {
    _classCallCheck(this, Transfer);
    Transfer.initialize(this, url, id, destinations);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Transfer, [{
    key: "getUrl",
    value:
    /**
         * Returns The file URL to fetch and transfer.
         * @return {String}
         */
    function getUrl() {
      return this.url;
    }

    /**
     * Sets The file URL to fetch and transfer.
     * @param {String} url The file URL to fetch and transfer.
     */
  }, {
    key: "setUrl",
    value: function setUrl(url) {
      this['url'] = url;
      return this;
    }
    /**
         * Returns An identifier for the asset which must be provided by the client. The identifier does not need to be unique.
         * @return {String}
         */
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }

    /**
     * Sets An identifier for the asset which must be provided by the client. The identifier does not need to be unique.
     * @param {String} id An identifier for the asset which must be provided by the client. The identifier does not need to be unique.
     */
  }, {
    key: "setId",
    value: function setId(id) {
      this['id'] = id;
      return this;
    }
    /**
         * Returns Specify the storage locations and hosting services to send the file to.
         * @return {Array.<module:model/Destinations>}
         */
  }, {
    key: "getDestinations",
    value: function getDestinations() {
      return this.destinations;
    }

    /**
     * Sets Specify the storage locations and hosting services to send the file to.
     * @param {Array.<module:model/Destinations>} destinations Specify the storage locations and hosting services to send the file to.
     */
  }, {
    key: "setDestinations",
    value: function setDestinations(destinations) {
      this['destinations'] = destinations;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj, url, id, destinations) {
      obj['url'] = url;
      obj['id'] = id;
      obj['destinations'] = destinations;
    }

    /**
     * Constructs a <code>Transfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transfer} obj Optional instance to populate.
     * @return {module:model/Transfer} The populated <code>Transfer</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Transfer();
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('destinations')) {
          obj['destinations'] = _ApiClient["default"].convertToType(data['destinations'], [_Destinations["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Transfer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transfer</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Transfer.RequiredProperties),
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
      if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
        throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      if (data['destinations']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['destinations'])) {
          throw new Error("Expected the field `destinations` to be an array in the JSON data but got " + data['destinations']);
        }
        // validate the optional field `destinations` (array)
        var _iterator2 = _createForOfIteratorHelper(data['destinations']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _Destinations["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      return true;
    }
  }]);
}();
Transfer.RequiredProperties = ["url", "id", "destinations"];

/**
 * The file URL to fetch and transfer.
 * @member {String} url
 */
Transfer.prototype['url'] = undefined;

/**
 * An identifier for the asset which must be provided by the client. The identifier does not need to be unique.
 * @member {String} id
 */
Transfer.prototype['id'] = undefined;

/**
 * Specify the storage locations and hosting services to send the file to.
 * @member {Array.<module:model/Destinations>} destinations
 */
Transfer.prototype['destinations'] = undefined;
var _default = exports["default"] = Transfer;