import { InvitationTemplate, InvitationTemplateParams } from "./Template";

export interface InvitationImageTemplateParams
  extends InvitationTemplateParams {
  image: string;
}
export class InvitationImageTemplate extends InvitationTemplate {
  private image: string;

  constructor(props: InvitationImageTemplateParams) {
    super(props);
    this.image = props.image;
  }

  getImage = () => this.image;
  setImage = (image: string) => {
    this.image = image;
    this.triggerListeners();
  };
  toJson() {
    const s = super.toJson();
    return {
      ...s,
      image: this.image,
    };
  }
}
