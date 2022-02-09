import {
  IInvitationTemplateData,
  TemplateLayout,
} from "./../types/template-data";
import _ from "lodash";
import { InvitationTemplateContent } from "../types/template-content";
import { v4 } from "uuid";
import { TemplateContent } from "./TemplateContent";
import { ListenerModal } from "./ListenerModel";

export type InvitationTemplateParams = Pick<
  IInvitationTemplateData,
  "layout" | "height" | "width" | "name"
> & {
  contents?: (Partial<Omit<InvitationTemplateContent, "type">> & {
    type: InvitationTemplateContent["type"];
    label: string;
  })[];
  id?: string;
};

export class InvitationTemplate extends ListenerModal {
  private id: string;
  private name: string;
  protected width: number;
  protected height: number;
  protected layout: TemplateLayout;
  protected contents: TemplateContent[];

  constructor({
    layout,
    width,
    contents = [],
    height,
    id,
    name,
  }: InvitationTemplateParams) {
    super();
    this.height = height;
    this.name = name;
    this.id = id || v4();
    this.width = width;
    this.layout = layout;
    this.contents = [];
    contents.forEach((content: any) => {
      const cont = new TemplateContent(content);
      this.contents.push(cont);
    });
  }

  getLayout() {
    return this.layout;
  }

  setLayout(layout: TemplateLayout) {
    this.layout = layout;
    this.triggerListeners();
  }

  getDimensions() {
    return {
      width: this.width,
      height: this.height,
    };
  }
  updateDimensions(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.triggerListeners();
  }

  getContents = () => {
    return this.contents;
  };

  updateContent = (id: string, content: TemplateContent) => {
    const cId = this.contents.findIndex((f) => f.getId() === id);
    if (cId !== -1) {
      this.contents[cId] = content;
    }
    this.triggerListeners();
  };

  getId = () => this.id;

  addContent = (content: TemplateContent) => {
    this.contents.push(content);
    this.triggerListeners();
  };

  removeContent = (id: string) => {
    _.remove(this.contents, (f, i, a) => f.getId() === id);
    this.triggerListeners();
  };

  getContentById = (id: string) => {
    return this.contents.find((f) => f.getId() === id);
  };

  toJson() {
    return {
      id: this.id,
      name: this.name,
      height: this.height,
      layout: this.layout,
      width: this.width,
      contents: this.contents.map((c) => c.getData()),
    };
  }
}
