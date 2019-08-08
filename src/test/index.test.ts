import * as generate from "../index";

describe("Credit Card Tests", () => {
  const brands = ["master", "visa16", "amex", "diners", "discover", "enroute", "jcb", "voyager", "hiper", "aura"];

  for (const brand of brands) {
    describe(`${brand} Brand Tests`, () => {
      for (const withPoints of [true, false]) {
        test(`Should Generate ${brand} Credit Card ${withPoints ? "With" : "Without"} Points`, async () => {
          const creditCard = await generate.creditCard(brand as generate.Brand, withPoints);

          expect(creditCard).toHaveProperty("number");
          expect(creditCard).toHaveProperty("expirationDate");
          expect(creditCard).toHaveProperty("cvv");
        });
      }
    });
  }
});
