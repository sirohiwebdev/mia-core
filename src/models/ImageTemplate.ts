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
  toJson(){
    const s = super.toJson();

    return {
      ...s,
      image: this.image,
    };
  };
}
