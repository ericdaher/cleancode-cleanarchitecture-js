const cpf = require("../src/cpf");

test("it returns true when cpf is valid", () => {
  expect(cpf.validate("66063316507")).toBe(true);
  expect(cpf.validate("660.633.165-07")).toBe(true);
});

test("it returns false when cpf is invalid", () => {
  expect(cpf.validate("dsadsada")).toBe(false);
  expect(cpf.validate("66063316531")).toBe(false);
  expect(cpf.validate("66063316531ssss")).toBe(false);
  expect(cpf.validate("660-16507s")).toBe(false);
  expect(cpf.validate("66.063..316..50.7")).toBe(false);
  expect(cpf.validate()).toBe(false);
});
