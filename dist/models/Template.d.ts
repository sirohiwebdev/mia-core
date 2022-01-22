import { IInvitationTemplateData, TemplateLayout } from "./../types/template-data";
import { InvitationTemplateContent } from "../types/template-content";
import { TemplateContent } from "./TemplateContent";
import { ListenerModal } from "./ListenerModel";
export declare type InvitationTemplateParams = Pick<IInvitationTemplateData, "layout" | "height" | "width" | "name"> & {
    contents?: (Partial<Omit<InvitationTemplateContent, "type">> & {
        type: InvitationTemplateContent["type"];
        label: string;
    })[];
    id?: string;
};
export declare class InvitationTemplate extends ListenerModal {
    private id;
    private name;
    protected width: number;
    protected height: number;
    protected layout: TemplateLayout;
    protected contents: TemplateContent[];
    constructor({ layout, width, contents, height, id, name, }: InvitationTemplateParams);
    getContents: () => TemplateContent[];
    updateContent: (id: string, content: TemplateContent) => void;
    getId: () => string;
    addContent: (content: TemplateContent) => void;
    removeContent: (id: string) => void;
    getContentById: (id: string) => TemplateContent;
    toJson(): {
        id: string;
        name: string;
        height: number;
        layout: TemplateLayout;
        width: number;
        contents: InvitationTemplateContent[];
    };
}
