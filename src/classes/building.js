/*------------------
You will be equally evaluated on the
quality of tests you write for this!

1. Create a class named Building. (already done for you)
2. done - Add two properties (your choice) and test them.
3. done - Add two methods (your choice) and test them.
You should test that they exist and that they work correctly.
You can add as many tests as you see fit.
------------------*/

class Building {
  constructor(name, constructionYear, year) {
    this.name = name;
    this.constructionYear = constructionYear;
    this.year = 2021;
  }

  getAge() {
    let age = this.year - this.constructionYear;
    return age;
  }

  printInfo() {
    return `This building was constructed in ${this.constructionYear}.`;
  }
}

module.exports = Building;
