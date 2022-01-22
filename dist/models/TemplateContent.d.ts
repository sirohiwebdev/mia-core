import { InvitationTemplateContent } from "../types/template-content";
import { ListenerModal } from "./ListenerModel";
export declare class TemplateContent extends ListenerModal {
    private id;
    private type;
    private x;
    private y;
    private w;
    private h;
    private source?;
    private label;
    private properties;
    constructor({ type, x, y, w, h, properties, source, label, id, }: Partial<Omit<InvitationTemplateContent, "type" | "label">> & {
        type: InvitationTemplateContent["type"];
        label: string;
    });
    getId: () => string;
    getSource: () => string;
    setSource: (s: string) => void;
    updatePosition: (x: number, y: number) => void;
    updateDimensions: (w: number, h: number) => void;
    getPosition: () => [number, number];
    getDimensions: () => [number, number];
    updateProperties: (properties: Partial<InvitationTemplateContent["properties"]>) => void;
    getProperties: () => InvitationTemplateContent["properties"];
    getData: () => InvitationTemplateContent;
}
