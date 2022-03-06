export interface InvitationTemplateContent {
    id: string;
    type: "image" | "icon" | "text" | "caricature";
    x: number;
    y: number;
    w: number;
    h: number;
    source?: string;
    label: string;
    properties: {
        shadow?: number;
        fontSize?: number;
        fontFamily?: string;
        fontWeight?: number | string;
        fontStyle?: string;
        color?: string;
        backgroundColor?: string;
        textAlign?: string;
    };
}
