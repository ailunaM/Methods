import { Character } from "../basic";

test("throw an error for invalid name", () => {
  expect(() => new Character(1, "Bowman")).toThrow("Incorrect values");
  expect(() => new Character("A", "Bowman")).toThrow("Incorrect values");
  expect(() => new Character("TooLongName", "Bowman")).toThrow(
    "Incorrect values"
  );
});

test("throw an error for invalid type", () => {
  expect(() => new Character("Legolas", "InvalidType")).toThrow(
    "Incorrect values"
  );
});

test("a valid character", () => {
  const char = new Character("legolas", "Bowman");
  expect(char).toEqual({
    name: "legolas",
    type: "Bowman",
    health: 100,
    level: 1,
  });
});
