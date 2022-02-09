export declare const getImageDimensions: (width: number, height: number, baseWidth?: number) => {
    w: number;
    h: number;
    ratio: number;
    landscape: boolean;
};
export declare const getContentDimensions: ({ template, content, baseWidth, }: {
    baseWidth?: number;
    template: {
        width: number;
        height: number;
    };
    content: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}) => {
    x: number;
    y: number;
    h: number;
    w: number;
};
