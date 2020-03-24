const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});
    /*-------------   getFullName Test------------*/
describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

/*-------------   makeHalfPrice Test------------*/
describe("utils.makeHalfPrice", () => {
  test("returns the price with a 50% discount applied", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
});

/*-------------   countBook Test------------*/
describe("utils.countBook", () => {
  test("returns the total number of books in the array", () => {
    expect(utils.countBook([ , , , ])).toBe(3);
  });
});

/*-------------   isInStock Test------------*/
describe("utils.isInStock", () => {

  /*---- In Stock Test ----*/
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
  
    expect(utils.isInStock(book)).toBe(true);
  });
 /*---- Not In Stock Test ----*/
  test("returns false if the title is not in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 0
    };
  
    expect(utils.isInStock(book)).toBe(false);
  });
});

/*-------------   getTotalOrderPrice Test------------*/
describe("utils.getTotalOrderPrice", () => {
  test("returns the total amount of a quantity of book add 20% VAT", () => {
    expect(utils.getTotalOrderPrice(10,3)).toBe(36);
  });
});



