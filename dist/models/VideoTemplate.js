"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationVideoTemplate = void 0;
const Template_1 = require("./Template");
class InvitationVideoTemplate extends Template_1.InvitationTemplate {
    constructor(props) {
        super(props);
        this.getImage = () => this.video;
        this.setImage = (video) => {
            this.video = video;
            this.triggerListeners();
        };
        this.video = props.video;
    }
    toJson() {
        const s = super.toJson();
        return Object.assign(Object.assign({}, s), { video: this.video });
    }
}
exports.InvitationVideoTemplate = InvitationVideoTemplate;
//# sourceMappingURL=VideoTemplate.js.map