"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentDimensions = exports.getImageDimensions = void 0;
const lodash_1 = __importDefault(require("lodash"));
const base = 1247;
const getImageDimensions = (width, height, baseWidth = base) => {
    const [landscape, ratio] = [width > height, lodash_1.default.round(width / height, 2)];
    const rW = baseWidth;
    const rH = lodash_1.default.round(rW / ratio, 2);
    return {
        w: lodash_1.default.round(rW, 2),
        h: lodash_1.default.round(rH, 2),
        ratio,
        landscape,
    };
};
exports.getImageDimensions = getImageDimensions;
const getContentDimensions = ({ template, content, baseWidth = base, }) => {
    const tDimensions = (0, exports.getImageDimensions)(template.width, template.height, baseWidth);
    const x1 = (content.x / template.width) * tDimensions.w;
    const y1 = (content.y / template.height) * tDimensions.h;
    const x2 = ((content.x + content.w) / template.width) * tDimensions.w;
    const y2 = ((content.y + content.h) / template.height) * tDimensions.h;
    return {
        x: lodash_1.default.round(x1, 2),
        y: lodash_1.default.round(y1, 2),
        h: lodash_1.default.round(y2 - y1, 2),
        w: lodash_1.default.round(x2 - x1, 2),
    };
};
exports.getContentDimensions = getContentDimensions;
//# sourceMappingURL=image.js.map