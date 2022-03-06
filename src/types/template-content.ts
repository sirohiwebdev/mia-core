export interface InvitationTemplateContent {
  id: string;
  /**
   * @private
   * Type of the content placed on the template
   */
  type: "image" | "icon" | "text" | "caricature";
  /**
   * X coordinate of the content respect to the template
   */
  x: number;
  /**
   * Y coordinate of the content with respect to the template
   */
  y: number;
  /**
   * Width of the content
   */
  w: number;
  /**
   * Height of the content
   */
  h: number;
  /**
   * Source image/icon path
   */
  source?: string;
  label: string;
  properties: {
    shadow?: number;

    fontSize?: number;
    /**
     * fontFamily of the content text
     */
    fontFamily?: string;
    /**
     * Font weight for the text content
     */
    fontWeight?: number | string;
    /**
     * Font style for text content
     */
    fontStyle?: string;
    /**
     * Color for text content
     */
    color?: string;
    /**
     * Color or background for the content
     */
    backgroundColor?: string;

    textAlign?: string;
  };
}
