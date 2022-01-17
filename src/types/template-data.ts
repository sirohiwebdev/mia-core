import { InvitationTemplateContent } from "./template-content";

export type TemplateLayout = "landscape" | "portrait";
export interface IInvitationTemplateData {
  name: string;
  id: string;
  /**
   * Original width of the template document
   */

  width: number;
  /**
   * Original width of the template document
   */
  height: number;
  layout: TemplateLayout;
  contents: InvitationTemplateContent[];
}
