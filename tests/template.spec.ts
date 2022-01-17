import { expect } from "chai";
import { TemplateContent } from "../src/models/TemplateContent";
import {
  InvitationImageTemplate,
  InvitationImageTemplateParams,
} from "./../src/models/ImageTemplate";

describe("Template", () => {
  const templateData: InvitationImageTemplateParams = {
    name: "BabyShower",
    id: "test-id",
    width: 1200,
    height: 1600,
    layout: "portrait",
    contents: [
      {
        id: "af3f26a9-54bc-4ca0-b962-f644dd66b513",
        properties: {},
        x: 20,
        y: 20,
        w: 200,
        h: 300,
        label: "Baby Name",
        type: "text",
        source: "Bella",
      },
    ],
    image: "baby-shower.png",
  };

  const imageTemplate = new InvitationImageTemplate(templateData);

  it("should give correct data", () => {
    const d = imageTemplate.getContents();
    d[0].updateProperties({ fontSize: 3 });
    expect(imageTemplate.getContents()[0].getProperties()).to.deep.equal({
      fontSize: 3,
    });

    imageTemplate.removeContent("af3f26a9-54bc-4ca0-b962-f644dd66b513");
    expect(imageTemplate.getContents().length).equal(0);
    const cont = new TemplateContent({
      id: "af3f26a9-54bc-4ca0-b962",
      properties: {},
      x: 20,
      y: 20,
      w: 200,
      h: 300,
      label: "Venue",
      type: "text",
      source: "Cannaught Place, New Delhi",
    });

    imageTemplate.addContent(cont);

    console.dir(imageTemplate.toJson(), { depth: 30 });
    expect(imageTemplate.getContents().length).equal(1);
  });
});
