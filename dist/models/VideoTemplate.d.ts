import { InvitationTemplateContent } from "../types/template-content";
import { InvitationTemplate, InvitationTemplateParams } from "./Template";
export interface VideoTemplateContent extends InvitationTemplateContent {
    start: number;
    end: number;
}
export interface InvitationVideoTemplateParams extends InvitationTemplateParams {
    video: string;
    contents: VideoTemplateContent[];
}
export declare class InvitationVideoTemplate extends InvitationTemplate {
    private video;
    constructor(props: InvitationVideoTemplateParams);
    getImage: () => string;
    setImage: (video: string) => void;
    toJson(): {
        video: string;
        id: string;
        name: string;
        height: number;
        layout: import("..").TemplateLayout;
        width: number;
        contents: InvitationTemplateContent[];
    };
}
