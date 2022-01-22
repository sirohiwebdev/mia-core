import { expect } from "chai";
import { ListenerModal } from "../src/models/ListenerModel";
describe("Template", () => {
  const listnerModel = new ListenerModal();

  let called = 0;

  const listner1 = () => {
    called++;
  };

  it("should be able to add listeners", () => {
    listnerModel.addUpdateListener(listner1);
  });

  it("should be able to all listeners", () => {
    listnerModel.triggerListeners();
  });

  it("should be able to remove listeners", () => {
    listnerModel.removeListeners();
    listnerModel.triggerListeners();
    expect(called).to.equal(1);
  });
});
