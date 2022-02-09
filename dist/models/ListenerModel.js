"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerModal = void 0;
class ListenerModal {
    constructor() {
        this.listeners = [];
    }
    addUpdateListener(...listeners) {
        this.listeners.push(...listeners);
    }
    removeListeners() {
        this.listeners = [];
    }
    triggerListeners() {
        this.listeners.forEach((d) => d());
    }
}
exports.ListenerModal = ListenerModal;
//# sourceMappingURL=ListenerModel.js.map