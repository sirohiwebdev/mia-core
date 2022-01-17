"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationTemplate = void 0;
const lodash_1 = __importDefault(require("lodash"));
const uuid_1 = require("uuid");
const TemplateContent_1 = require("./TemplateContent");
class InvitationTemplate {
    constructor({ layout, width, contents = [], height, id, name, }) {
        this.getContents = () => {
            return this.contents;
        };
        this.updateContent = (id, content) => {
            const cId = this.contents.findIndex((f) => f.getId() === id);
            if (cId !== -1) {
                this.contents[cId] = content;
            }
        };
        this.getId = () => this.id;
        this.addContent = (content) => {
            this.contents.push(content);
        };
        this.removeContent = (id) => {
            lodash_1.default.remove(this.contents, (f, i, a) => f.getId() === id);
        };
        this.getContentById = (id) => {
            return this.contents.find((f) => f.getId() === id);
        };
        this.height = height;
        this.name = name;
        this.id = id || (0, uuid_1.v4)();
        this.width = width;
        this.layout = layout;
        this.contents = [];
        contents.forEach((content) => {
            const cont = new TemplateContent_1.TemplateContent(content);
            this.contents.push(cont);
        });
    }
    toJson() {
        return {
            id: this.id,
            name: this.name,
            height: this.height,
            layout: this.layout,
            width: this.width,
            contents: this.contents.map((c) => c.getData()),
        };
    }
    ;
}
exports.InvitationTemplate = InvitationTemplate;
//# sourceMappingURL=Template.js.map