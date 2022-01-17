import { InvitationTemplateContent } from "./template-content";
export declare type TemplateLayout = "landscape" | "portrait";
export interface IInvitationTemplateData {
    name: string;
    id: string;
    width: number;
    height: number;
    layout: TemplateLayout;
    contents: InvitationTemplateContent[];
}
