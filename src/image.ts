import _ from "lodash";
const base = 1247;

export const getImageDimensions = (
  width: number,
  height: number,
  baseWidth: number = base
) => {
  const [landscape, ratio] = [width > height, _.round(width / height, 2)];

  const rW = baseWidth;
  const rH = _.round(rW / ratio, 2);
  return {
    w: _.round(rW, 2),
    h: _.round(rH, 2),
    ratio,
    landscape,
  };
};

export const getContentDimensions = ({
  template,
  content,
  baseWidth = base,
}: {
  baseWidth?: number;
  template: { width: number; height: number };
  content: { x: number; y: number; w: number; h: number };
}) => {
  const tDimensions = getImageDimensions(
    template.width,
    template.height,
    baseWidth
  );

  const x1 = (content.x / template.width) * tDimensions.w;
  const y1 = (content.y / template.height) * tDimensions.h;
  const x2 = ((content.x + content.w) / template.width) * tDimensions.w;
  const y2 = ((content.y + content.h) / template.height) * tDimensions.h;

  return {
    x: _.round(x1, 2),
    y: _.round(y1, 2),
    h: _.round(y2 - y1, 2),
    w: _.round(x2 - x1, 2),
  };
};
