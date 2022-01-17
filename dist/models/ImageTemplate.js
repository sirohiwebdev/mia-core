"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationImageTemplate = void 0;
const Template_1 = require("./Template");
class InvitationImageTemplate extends Template_1.InvitationTemplate {
    constructor(props) {
        super(props);
        this.getImage = () => this.image;
        this.image = props.image;
    }
    toJson() {
        const s = super.toJson();
        return Object.assign(Object.assign({}, s), { image: this.image });
    }
    ;
}
exports.InvitationImageTemplate = InvitationImageTemplate;
//# sourceMappingURL=ImageTemplate.js.map