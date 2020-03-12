import Character from "../person";

const creat1 = {
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
  name: "Willy",
  type: "Bowman",
};

const creat2 = {
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
  name: "Billy",
  type: "Swordsman",
};

const creat3 = {
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
  name: "Tilly",
  type: "Magician",
};

const creat4 = {
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
  name: "Tally",
  type: "Undead",
};

const creat5 = {
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
  name: "Bally",
  type: "Zombie",
};

const creat6 = {
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
  name: "Wally",
  type: "Daemon",
};

describe("Character", () => {
  test.each([
    ["Willy", "Bowman", creat1],
    ["Billy", "Swordsman", creat2],
    ["Tilly", "Magician", creat3],
    ["Tally", "Undead", creat4],
    ["Bally", "Zombie", creat5],
    ["Wally", "Daemon", creat6],
  ])("creat new character %s (%s)", (name, type, expected) => {
    const hero = new Character(name, type);
    expect(hero).toEqual(expected);
  });

  test.each([
    ["1", "Bowman"],
    ["qwertyuiop123", "Swordsman"],
  ])("error name - %s", (name, type) => {
    expect(() => new Character(name, type)).toThrowError(new Error("Invalid name"));
  });

  test("error type", () => {
    expect(() => new Character("spearman", "Zombi")).toThrowError(new Error("Invalid type"));
  });
});