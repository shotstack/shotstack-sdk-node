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
import Offset from './Offset';

/**
 * The TitleAsset model module.
 * @module model/TitleAsset
 * @version 0.2.6
 */
class TitleAsset {
    /**
     * Constructs a new <code>TitleAsset</code>.
     * **Notice: The title asset is deprecated, use the [HTML asset](#tocs_htmlasset) instead.**  The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning. 
     * @alias module:model/TitleAsset
     * @param type {String} The type of asset - set to `title` for titles.
     * @param text {String} The title text string - i.e. \"My Title\".
     */
    constructor(type, text) { 
        
        TitleAsset.initialize(this, type, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text) { 
        obj['type'] = type || 'title';
        obj['text'] = text;
    }

    /**
     * Constructs a <code>TitleAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TitleAsset} obj Optional instance to populate.
     * @return {module:model/TitleAsset} The populated <code>TitleAsset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TitleAsset();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('style')) {
                obj['style'] = ApiClient.convertToType(data['style'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('background')) {
                obj['background'] = ApiClient.convertToType(data['background'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = Offset.constructFromObject(data['offset']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TitleAsset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TitleAsset</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TitleAsset.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['style'] && !(typeof data['style'] === 'string' || data['style'] instanceof String)) {
            throw new Error("Expected the field `style` to be a primitive type in the JSON string but got " + data['style']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['size'] && !(typeof data['size'] === 'string' || data['size'] instanceof String)) {
            throw new Error("Expected the field `size` to be a primitive type in the JSON string but got " + data['size']);
        }
        // ensure the json data is a string
        if (data['background'] && !(typeof data['background'] === 'string' || data['background'] instanceof String)) {
            throw new Error("Expected the field `background` to be a primitive type in the JSON string but got " + data['background']);
        }
        // ensure the json data is a string
        if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
            throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
        }
        // validate the optional field `offset`
        if (data['offset']) { // data not null
          Offset.validateJSON(data['offset']);
        }

        return true;
    }

/**
     * Returns The type of asset - set to `title` for titles.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of asset - set to `title` for titles.
     * @param {String} type The type of asset - set to `title` for titles.
     */
    setType(type) {
        this['type'] = type;
        return this;
    }
/**
     * Returns The title text string - i.e. \"My Title\".
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The title text string - i.e. \"My Title\".
     * @param {String} text The title text string - i.e. \"My Title\".
     */
    setText(text) {
        this['text'] = text;
        return this;
    }
/**
     * Returns Uses a preset to apply font properties and styling to the title. <ul>   <li>`minimal`</li>   <li>`blockbuster`</li>   <li>`vogue`</li>   <li>`sketchy`</li>   <li>`skinny`</li>   <li>`chunk`</li>   <li>`chunkLight`</li>   <li>`marker`</li>   <li>`future`</li>   <li>`subtitle`</li> </ul>
     * @return {module:model/TitleAsset.StyleEnum}
     */
    getStyle() {
        return this.style;
    }

    /**
     * Sets Uses a preset to apply font properties and styling to the title. <ul>   <li>`minimal`</li>   <li>`blockbuster`</li>   <li>`vogue`</li>   <li>`sketchy`</li>   <li>`skinny`</li>   <li>`chunk`</li>   <li>`chunkLight`</li>   <li>`marker`</li>   <li>`future`</li>   <li>`subtitle`</li> </ul>
     * @param {module:model/TitleAsset.StyleEnum} style Uses a preset to apply font properties and styling to the title. <ul>   <li>`minimal`</li>   <li>`blockbuster`</li>   <li>`vogue`</li>   <li>`sketchy`</li>   <li>`skinny`</li>   <li>`chunk`</li>   <li>`chunkLight`</li>   <li>`marker`</li>   <li>`future`</li>   <li>`subtitle`</li> </ul>
     */
    setStyle(style) {
        this['style'] = style;
        return this;
    }
/**
     * Returns Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency.
     * @return {String}
     */
    getColor() {
        return this.color;
    }

    /**
     * Sets Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency.
     * @param {String} color Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency.
     */
    setColor(color) {
        this['color'] = color;
        return this;
    }
/**
     * Returns Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>   <li>`xx-small`</li>   <li>`x-small`</li>   <li>`small`</li>   <li>`medium`</li>   <li>`large`</li>   <li>`x-large`</li>   <li>`xx-large`</li> </ul>
     * @return {module:model/TitleAsset.SizeEnum}
     */
    getSize() {
        return this.size;
    }

    /**
     * Sets Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>   <li>`xx-small`</li>   <li>`x-small`</li>   <li>`small`</li>   <li>`medium`</li>   <li>`large`</li>   <li>`x-large`</li>   <li>`xx-large`</li> </ul>
     * @param {module:model/TitleAsset.SizeEnum} size Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>   <li>`xx-small`</li>   <li>`x-small`</li>   <li>`small`</li>   <li>`medium`</li>   <li>`large`</li>   <li>`x-large`</li>   <li>`xx-large`</li> </ul>
     */
    setSize(size) {
        this['size'] = size;
        return this;
    }
/**
     * Returns Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background.
     * @return {String}
     */
    getBackground() {
        return this.background;
    }

    /**
     * Sets Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background.
     * @param {String} background Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background.
     */
    setBackground(background) {
        this['background'] = background;
        return this;
    }
/**
     * Returns Place the title in one of nine predefined positions of the viewport. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
     * @return {module:model/TitleAsset.PositionEnum}
     */
    getPosition() {
        return this.position;
    }

    /**
     * Sets Place the title in one of nine predefined positions of the viewport. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
     * @param {module:model/TitleAsset.PositionEnum} position Place the title in one of nine predefined positions of the viewport. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
     */
    setPosition(position) {
        this['position'] = position;
        return this;
    }
/**
     * @return {module:model/Offset}
     */
    getOffset() {
        return this.offset;
    }

    /**
     * @param {module:model/Offset} offset
     */
    setOffset(offset) {
        this['offset'] = offset;
        return this;
    }

}

TitleAsset.RequiredProperties = ["type", "text"];

/**
 * The type of asset - set to `title` for titles.
 * @member {String} type
 * @default 'title'
 */
TitleAsset.prototype['type'] = 'title';

/**
 * The title text string - i.e. \"My Title\".
 * @member {String} text
 */
TitleAsset.prototype['text'] = undefined;

/**
 * Uses a preset to apply font properties and styling to the title. <ul>   <li>`minimal`</li>   <li>`blockbuster`</li>   <li>`vogue`</li>   <li>`sketchy`</li>   <li>`skinny`</li>   <li>`chunk`</li>   <li>`chunkLight`</li>   <li>`marker`</li>   <li>`future`</li>   <li>`subtitle`</li> </ul>
 * @member {module:model/TitleAsset.StyleEnum} style
 */
TitleAsset.prototype['style'] = undefined;

/**
 * Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency.
 * @member {String} color
 */
TitleAsset.prototype['color'] = undefined;

/**
 * Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>   <li>`xx-small`</li>   <li>`x-small`</li>   <li>`small`</li>   <li>`medium`</li>   <li>`large`</li>   <li>`x-large`</li>   <li>`xx-large`</li> </ul>
 * @member {module:model/TitleAsset.SizeEnum} size
 */
TitleAsset.prototype['size'] = undefined;

/**
 * Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background.
 * @member {String} background
 */
TitleAsset.prototype['background'] = undefined;

/**
 * Place the title in one of nine predefined positions of the viewport. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
 * @member {module:model/TitleAsset.PositionEnum} position
 */
TitleAsset.prototype['position'] = undefined;

/**
 * @member {module:model/Offset} offset
 */
TitleAsset.prototype['offset'] = undefined;





/**
 * Allowed values for the <code>style</code> property.
 * @enum {String}
 * @readonly
 */
TitleAsset['StyleEnum'] = {

    /**
     * value: "minimal"
     * @const
     */
    "minimal": "minimal",

    /**
     * value: "blockbuster"
     * @const
     */
    "blockbuster": "blockbuster",

    /**
     * value: "vogue"
     * @const
     */
    "vogue": "vogue",

    /**
     * value: "sketchy"
     * @const
     */
    "sketchy": "sketchy",

    /**
     * value: "skinny"
     * @const
     */
    "skinny": "skinny",

    /**
     * value: "chunk"
     * @const
     */
    "chunk": "chunk",

    /**
     * value: "chunkLight"
     * @const
     */
    "chunkLight": "chunkLight",

    /**
     * value: "marker"
     * @const
     */
    "marker": "marker",

    /**
     * value: "future"
     * @const
     */
    "future": "future",

    /**
     * value: "subtitle"
     * @const
     */
    "subtitle": "subtitle"
};


/**
 * Allowed values for the <code>size</code> property.
 * @enum {String}
 * @readonly
 */
TitleAsset['SizeEnum'] = {

    /**
     * value: "xx-small"
     * @const
     */
    "xx-small": "xx-small",

    /**
     * value: "x-small"
     * @const
     */
    "x-small": "x-small",

    /**
     * value: "small"
     * @const
     */
    "small": "small",

    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",

    /**
     * value: "large"
     * @const
     */
    "large": "large",

    /**
     * value: "x-large"
     * @const
     */
    "x-large": "x-large",

    /**
     * value: "xx-large"
     * @const
     */
    "xx-large": "xx-large"
};


/**
 * Allowed values for the <code>position</code> property.
 * @enum {String}
 * @readonly
 */
TitleAsset['PositionEnum'] = {

    /**
     * value: "top"
     * @const
     */
    "top": "top",

    /**
     * value: "topRight"
     * @const
     */
    "topRight": "topRight",

    /**
     * value: "right"
     * @const
     */
    "right": "right",

    /**
     * value: "bottomRight"
     * @const
     */
    "bottomRight": "bottomRight",

    /**
     * value: "bottom"
     * @const
     */
    "bottom": "bottom",

    /**
     * value: "bottomLeft"
     * @const
     */
    "bottomLeft": "bottomLeft",

    /**
     * value: "left"
     * @const
     */
    "left": "left",

    /**
     * value: "topLeft"
     * @const
     */
    "topLeft": "topLeft",

    /**
     * value: "center"
     * @const
     */
    "center": "center"
};



export default TitleAsset;

