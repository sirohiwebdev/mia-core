import { v4 } from "uuid";
import { InvitationTemplateContent } from "../types/template-content";

export class TemplateContent {
  private id: string;
  private type: "image" | "icon" | "text";
  private x: number = 0;
  private y: number = 0;
  private w: number = 0;
  private h: number = 0;
  private source?: string | undefined = undefined;
  private label: string;
  private properties: InvitationTemplateContent["properties"] = {};

  constructor({
    type,
    x,
    y,
    w,
    h,
    properties,
    source,
    label,
    id,
  }: Partial<Omit<InvitationTemplateContent, "type" | "label">> & {
    type: InvitationTemplateContent["type"];
    label: string;
  }) {
    this.id = id || v4();
    this.type = type;
    this.label = label;
    this.x = x || this.x;
    this.x = y || this.y;
    this.x = w || this.w;
    this.x = h || this.h;
    this.properties = properties || this.properties;
    this.source = source || this.source;
  }

  getId = () => this.id;

  getSource = () => this.source;
  setSource = (s: string) => (this.source = s);

  /**
   * Update position of the content
   * @param {number}x
   * @param {number}y
   */
  updatePosition = (x: number, y: number) => {
    this.x = x;
    this.y = y;
  };

  /**
   * Update the dimensions of the content
   * @param {number} w
   * @param {number} h
   */
  updateDimensions = (w: number, h: number) => {
    this.w = w;
    this.h = h;
  };

  /**
   *
   * @returns {[number,number]} [x, y]
   */
  getPosition = (): [number, number] => {
    return [this.x, this.y];
  };

  /**
   *
   * @returns {[number, number]} [w,h]
   */
  getDimensions = (): [number, number] => {
    return [this.w, this.h];
  };

  updateProperties = (
    properties: Partial<InvitationTemplateContent["properties"]>
  ) => {
    this.properties = {
      ...this.properties,
      ...properties,
    };
  };

  getProperties = (): InvitationTemplateContent["properties"] => {
    return this.properties;
  };

  getData = (): InvitationTemplateContent => {
    const [x, y] = this.getPosition();
    const [w, h] = this.getDimensions();
    const properties = this.getProperties();

    return {
      id: this.id,
      label: this.label,
      x,
      y,
      properties,
      type: this.type,
      source: this.source,
      w,
      h,
    };
  };
}
