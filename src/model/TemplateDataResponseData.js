/**
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

import ApiClient from '../ApiClient';
import Edit from './Edit';

/**
 * The TemplateDataResponseData model module.
 * @module model/TemplateDataResponseData
 * @version 0.2.6
 */
class TemplateDataResponseData {
    /**
     * Constructs a new <code>TemplateDataResponseData</code>.
     * The response data returned with the [TemplateDataResponse](#tocs_templatedataresponse).
     * @alias module:model/TemplateDataResponseData
     * @param id {String} The unique id of the template in UUID format.
     * @param name {String} The template name.
     * @param owner {String} The owner id of the templates.
     * @param template {module:model/Edit} 
     */
    constructor(id, name, owner, template) { 
        
        TemplateDataResponseData.initialize(this, id, name, owner, template);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, owner, template) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['owner'] = owner;
        obj['template'] = template;
    }

    /**
     * Constructs a <code>TemplateDataResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDataResponseData} obj Optional instance to populate.
     * @return {module:model/TemplateDataResponseData} The populated <code>TemplateDataResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateDataResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = Edit.constructFromObject(data['template']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateDataResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateDataResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TemplateDataResponseData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // validate the optional field `template`
        if (data['template']) { // data not null
          Edit.validateJSON(data['template']);
        }

        return true;
    }

/**
     * Returns The unique id of the template in UUID format.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique id of the template in UUID format.
     * @param {String} id The unique id of the template in UUID format.
     */
    setId(id) {
        this['id'] = id;
        return this;
    }
/**
     * Returns The template name.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets The template name.
     * @param {String} name The template name.
     */
    setName(name) {
        this['name'] = name;
        return this;
    }
/**
     * Returns The owner id of the templates.
     * @return {String}
     */
    getOwner() {
        return this.owner;
    }

    /**
     * Sets The owner id of the templates.
     * @param {String} owner The owner id of the templates.
     */
    setOwner(owner) {
        this['owner'] = owner;
        return this;
    }
/**
     * @return {module:model/Edit}
     */
    getTemplate() {
        return this.template;
    }

    /**
     * @param {module:model/Edit} template
     */
    setTemplate(template) {
        this['template'] = template;
        return this;
    }

}

TemplateDataResponseData.RequiredProperties = ["id", "name", "owner", "template"];

/**
 * The unique id of the template in UUID format.
 * @member {String} id
 */
TemplateDataResponseData.prototype['id'] = undefined;

/**
 * The template name.
 * @member {String} name
 */
TemplateDataResponseData.prototype['name'] = undefined;

/**
 * The owner id of the templates.
 * @member {String} owner
 */
TemplateDataResponseData.prototype['owner'] = undefined;

/**
 * @member {module:model/Edit} template
 */
TemplateDataResponseData.prototype['template'] = undefined;






export default TemplateDataResponseData;

