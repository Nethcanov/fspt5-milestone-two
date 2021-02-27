const { expect } = require("chai");
const Building = require("../src/classes/building");
const { isClass } = require("./utilities");

let building = null;

describe("Building", () => {
  beforeEach(() => {
    building = new Building();
  });

  describe("Building", () => {
    it("should be a class", () => {
      expect(isClass(Building)).to.be.true;
    });

    it("should have properties named name, constructionYear and year", () => {
      expect(building.hasOwnProperty("name")).to.equal(true);
      expect(building.hasOwnProperty("constructionYear")).to.equal(true);
      expect(building.hasOwnProperty("year")).to.equal(true);
    });
  });

  describe("The getAge method", () => {
    it("should exist on the Building prototype", () => {
      expect(Building.prototype.getAge).to.exist;
    });

    it("should return the age of the building", () => {
      building.constructionYear = 1991;
      expect(building.getAge()).to.equal(30);
    });
  });

  describe("The printInfo method", () => {
    it("should exist on the Building prototype", () => {
      expect(Building.prototype.printInfo).to.exist;
    });

    it("should print the year the building was constructed", () => {
      building.constructionYear = 2018;
      expect(building.printInfo()).to.equal(
        "This building was constructed in 2018."
      );
    });
  });
});
