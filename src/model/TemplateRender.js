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
import MergeField from './MergeField';

/**
 * The TemplateRender model module.
 * @module model/TemplateRender
 * @version 0.2.6
 */
class TemplateRender {
    /**
     * Constructs a new <code>TemplateRender</code>.
     * Configure the id and optional merge fields to render a template by id.
     * @alias module:model/TemplateRender
     * @param id {String} The id of the template to render in UUID format.
     */
    constructor(id) { 
        
        TemplateRender.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>TemplateRender</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateRender} obj Optional instance to populate.
     * @return {module:model/TemplateRender} The populated <code>TemplateRender</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateRender();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('merge')) {
                obj['merge'] = ApiClient.convertToType(data['merge'], [MergeField]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateRender</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateRender</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TemplateRender.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['merge']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['merge'])) {
                throw new Error("Expected the field `merge` to be an array in the JSON data but got " + data['merge']);
            }
            // validate the optional field `merge` (array)
            for (const item of data['merge']) {
                MergeField.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The id of the template to render in UUID format.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The id of the template to render in UUID format.
     * @param {String} id The id of the template to render in UUID format.
     */
    setId(id) {
        this['id'] = id;
        return this;
    }
/**
     * Returns An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. 
     * @return {Array.<module:model/MergeField>}
     */
    getMerge() {
        return this.merge;
    }

    /**
     * Sets An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. 
     * @param {Array.<module:model/MergeField>} merge An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. 
     */
    setMerge(merge) {
        this['merge'] = merge;
        return this;
    }

}

TemplateRender.RequiredProperties = ["id"];

/**
 * The id of the template to render in UUID format.
 * @member {String} id
 */
TemplateRender.prototype['id'] = undefined;

/**
 * An array of key/value pairs that provides an easy way to create templates with placeholders. The placeholders can be used to find and replace keys with values. For example you can search for the placeholder `{{NAME}}` and replace it with the value `Jane`. 
 * @member {Array.<module:model/MergeField>} merge
 */
TemplateRender.prototype['merge'] = undefined;






export default TemplateRender;

