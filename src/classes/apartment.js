/*------------------
NOTE: Do not work on this class until
after you have completed the Building class!

You will be equally evaluated on the
quality of tests you write for this!

1. A class named Apartment has been created, exported, and imported into the test file. 
2. done - Add the proper code so that this class
extends the Building class. Test it!
3. done - Add one additional property (your choice) to Apartment and test it.
4. done -Add one additional method (your choice) to Apartment and test it.
------------------*/

const Building = require("./building");

class Apartment extends Building {
  constructor(name) {
    super(name);
    this.name = name;
    this.bedrooms = 0;
    this.occupants = 0;
  }

  calculateRentalIncome() {
    let income = this.bedrooms * 1000;
    return income;
  }

  checkTenantNumbers() {
    let message = "";
    let vacancies = this.bedrooms * 2 - this.occupants;
    if (this.occupants / this.bedrooms > 2) {
      message = "There are too many tenants.";
    }
    if (this.occupants / this.bedrooms < 2) {
      message = `You have space for ${vacancies} more tenant/s.`;
    }
    return `${message}  The maximum amount of tenants is ${this.bedrooms * 2}.`;
  }
}

module.exports = Apartment;
