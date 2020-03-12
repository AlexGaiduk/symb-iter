import Team from "../team";
import Person from "../person";

const char1 = new Person("Willy", "Magician");
const char2 = new Person("Billy", "Daemon");
const char3 = new Person("Dilly", "Swordsman");

describe("team", () => {
  it("add one Person to party", () => {
    const expected = new Set([char1]);

    const team = new Team();
    team.add(char1);
    expect(team.members).toEqual(expected);
  });

  it("error", () => {
    const result = () => {
      const team = new Team();
      team.add(char1);
      team.add(char1);
    };

    expect(result).toThrow(new Error("Person is added to the party"));
  });

  it("add all Persons to party", () => {
    const expected = new Set([char1, char2, char3]);

    const team = new Team();
    team.addAll(char1, char2, char3);
    expect(team.members).toEqual(expected);
  });

  it("add all Persons to party", () => {
    const expected = [...(new Set([char1, char2, char3]))];

    const team = new Team();
    team.addAll(char1, char2, char3);
    const result = team.toArray();

    expect(result).toEqual(expected);
  });
});