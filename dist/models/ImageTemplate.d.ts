import { InvitationTemplate, InvitationTemplateParams } from "./Template";
export interface InvitationImageTemplateParams extends InvitationTemplateParams {
    image: string;
}
export declare class InvitationImageTemplate extends InvitationTemplate {
    private image;
    constructor(props: InvitationImageTemplateParams);
    getImage: () => string;
    toJson(): {
        image: string;
        id: string;
        name: string;
        height: number;
        layout: import("..").TemplateLayout;
        width: number;
        contents: import("..").InvitationTemplateContent[];
    };
}
