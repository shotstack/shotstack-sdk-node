"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Destinations = _interopRequireDefault(require("./Destinations"));
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
 * The Transfer model module.
 * @module model/Transfer
 * @version 0.2.9
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