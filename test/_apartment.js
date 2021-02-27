const { expect } = require("chai");
const Apartment = require("../src/classes/apartment");
const { isClass } = require("./utilities");

let apartment = null;

describe("Apartment", () => {
  beforeEach(() => {
    apartment = new Apartment();
  });
  describe("Apartment", () => {
    it("should be a class", () => {
      expect(isClass(Apartment)).to.be.true;
    });

    it("shouldhave properties named name, bedrooms, occupants", () => {
      expect(apartment.hasOwnProperty("name")).to.equal(true);
      expect(apartment.hasOwnProperty("bedrooms")).to.equal(true);
      expect(apartment.hasOwnProperty("occupants")).to.equal(true);
    });
  });

  describe("The calculateRentalIncome method", () => {
    it("should exist on the Apartment prototype", () => {
      expect(Apartment.prototype.calculateRentalIncome).to.exist;
    });

    it("should calculate the rental income according to number of bedrooms", () => {
      apartment.bedrooms = 4;
      expect(apartment.calculateRentalIncome()).to.equal(4000);
    });
  });

  describe("The checkTenantNumbers method", () => {
    it("should exist on the Apartment prototype", () => {
      expect(Apartment.prototype.checkTenantNumbers).to.exist;
    });

    it("should return a message about the number of tenants   ", () => {
      apartment.bedrooms = 4;
      apartment.occupants = 9;
      expect(apartment.checkTenantNumbers()).to.equal(
        "There are too many tenants.  The maximum amount of tenants is 8."
      );
      apartment.bedrooms = 3;
      apartment.occupants = 5;
      expect(apartment.checkTenantNumbers()).to.equal(
        "You have space for 1 more tenant/s.  The maximum amount of tenants is 6."
      );
    });
  });
});
