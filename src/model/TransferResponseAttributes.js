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
 * The TransferResponseAttributes model module.
 * @module model/TransferResponseAttributes
 * @version 0.2.9
 */
var TransferResponseAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransferResponseAttributes</code>.
   * The transfer request attributes inlcudling the user specified ID and status. Returned with [TransferResponseData](#tocs_transferresponsedata).
   * @alias module:model/TransferResponseAttributes
   */
  function TransferResponseAttributes() {
    _classCallCheck(this, TransferResponseAttributes);
    TransferResponseAttributes.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(TransferResponseAttributes, [{
    key: "getId",
    value:
    /**
         * Returns The user provided ID for the asset
         * @return {String}
         */
    function getId() {
      return this.id;
    }

    /**
     * Sets The user provided ID for the asset
     * @param {String} id The user provided ID for the asset
     */
  }, {
    key: "setId",
    value: function setId(id) {
      this['id'] = id;
      return this;
    }
    /**
         * Returns The attributes of the asset transfer including the status.
         * @return {String}
         */
  }, {
    key: "getOwner",
    value: function getOwner() {
      return this.owner;
    }

    /**
     * Sets The attributes of the asset transfer including the status.
     * @param {String} owner The attributes of the asset transfer including the status.
     */
  }, {
    key: "setOwner",
    value: function setOwner(owner) {
      this['owner'] = owner;
      return this;
    }
    /**
         * Returns The status of the asset transfer. <ul>   <li>`queued` - the transfer request has been queued</li>   <li>`failed` - the transfer request failed</li> </ul>
         * @return {module:model/TransferResponseAttributes.StatusEnum}
         */
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.status;
    }

    /**
     * Sets The status of the asset transfer. <ul>   <li>`queued` - the transfer request has been queued</li>   <li>`failed` - the transfer request failed</li> </ul>
     * @param {module:model/TransferResponseAttributes.StatusEnum} status The status of the asset transfer. <ul>   <li>`queued` - the transfer request has been queued</li>   <li>`failed` - the transfer request failed</li> </ul>
     */
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      this['status'] = status;
      return this;
    }
    /**
         * Returns The time the asset transfer was created.
         * @return {String}
         */
  }, {
    key: "getCreated",
    value: function getCreated() {
      return this.created;
    }

    /**
     * Sets The time the asset transfer was created.
     * @param {String} created The time the asset transfer was created.
     */
  }, {
    key: "setCreated",
    value: function setCreated(created) {
      this['created'] = created;
      return this;
    }
  }], [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TransferResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferResponseAttributes} obj Optional instance to populate.
     * @return {module:model/TransferResponseAttributes} The populated <code>TransferResponseAttributes</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransferResponseAttributes();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransferResponseAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransferResponseAttributes</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
        throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['created'] && !(typeof data['created'] === 'string' || data['created'] instanceof String)) {
        throw new Error("Expected the field `created` to be a primitive type in the JSON string but got " + data['created']);
      }
      return true;
    }
  }]);
}();
/**
 * The user provided ID for the asset
 * @member {String} id
 */
TransferResponseAttributes.prototype['id'] = undefined;

/**
 * The attributes of the asset transfer including the status.
 * @member {String} owner
 */
TransferResponseAttributes.prototype['owner'] = undefined;

/**
 * The status of the asset transfer. <ul>   <li>`queued` - the transfer request has been queued</li>   <li>`failed` - the transfer request failed</li> </ul>
 * @member {module:model/TransferResponseAttributes.StatusEnum} status
 */
TransferResponseAttributes.prototype['status'] = undefined;

/**
 * The time the asset transfer was created.
 * @member {String} created
 */
TransferResponseAttributes.prototype['created'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TransferResponseAttributes['StatusEnum'] = {
  /**
   * value: "queued"
   * @const
   */
  "queued": "queued",
  /**
   * value: "failed"
   * @const
   */
  "failed": "failed"
};
var _default = exports["default"] = TransferResponseAttributes;