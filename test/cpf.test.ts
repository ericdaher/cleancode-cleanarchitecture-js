const cpf = require("../src/cpf");

test("it returns true when cpf is valid", () => {
  expect(cpf.validate("66063316507")).toStrictEqual(true);
  expect(cpf.validate("660.633.165-07")).toStrictEqual(true);
});

test("it returns false when cpf is invalid", () => {
  expect(cpf.validate("dsadsada")).toStrictEqual(false);
  expect(cpf.validate("66063316531")).toStrictEqual(false);
  expect(cpf.validate("66063316531ssss")).toStrictEqual(false);
  expect(cpf.validate("660-16507s")).toStrictEqual(false);
  expect(cpf.validate("66.063..316..50.7")).toStrictEqual(false);
  expect(cpf.validate()).toStrictEqual(false);
});
