import { InvitationTemplateContent } from "types/template-content";
import { InvitationTemplate, InvitationTemplateParams } from "./Template";

export interface VideoTemplateContent extends InvitationTemplateContent {
  start: number;
  end: number;
}

export interface InvitationVideoTemplateParams
  extends InvitationTemplateParams {
  video: string;
  contents: VideoTemplateContent[];
}

export class InvitationVideoTemplate extends InvitationTemplate {
  private video: string;

  constructor(props: InvitationVideoTemplateParams) {
    super(props);
    this.video = props.video;
  }

  getImage = () => this.video;
  setImage = (video: string) => {
    this.video = video;
    this.triggerListeners();
  };

  toJson() {
    const s = super.toJson();
    return {
      ...s,
      video: this.video,
    };
  }
}
