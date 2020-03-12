export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error("character is added to the party");
    }
    this.members.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => this.members.add(hero));
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    let index = 0;
    const heroes = this.toArray();

    return {
      next() {
        return {
          done: !(index in heroes),
          value: heroes[index++],
        };
      },
    };
  }
}