"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateContent = void 0;
const uuid_1 = require("uuid");
class TemplateContent {
    constructor({ type, x, y, w, h, properties, source, label, id, }) {
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.source = undefined;
        this.properties = {};
        this.getId = () => this.id;
        this.getSource = () => this.source;
        this.setSource = (s) => (this.source = s);
        this.updatePosition = (x, y) => {
            this.x = x;
            this.y = y;
        };
        this.updateDimensions = (w, h) => {
            this.w = w;
            this.h = h;
        };
        this.getPosition = () => {
            return [this.x, this.y];
        };
        this.getDimensions = () => {
            return [this.w, this.h];
        };
        this.updateProperties = (properties) => {
            this.properties = Object.assign(Object.assign({}, this.properties), properties);
        };
        this.getProperties = () => {
            return this.properties;
        };
        this.getData = () => {
            const [x, y] = this.getPosition();
            const [w, h] = this.getDimensions();
            const properties = this.getProperties();
            return {
                id: this.id,
                label: this.label,
                x,
                y,
                properties,
                type: this.type,
                source: this.source,
                w,
                h,
            };
        };
        this.id = id || (0, uuid_1.v4)();
        this.type = type;
        this.label = label;
        this.x = x || this.x;
        this.x = y || this.y;
        this.x = w || this.w;
        this.x = h || this.h;
        this.properties = properties || this.properties;
        this.source = source || this.source;
    }
}
exports.TemplateContent = TemplateContent;
//# sourceMappingURL=TemplateContent.js.map