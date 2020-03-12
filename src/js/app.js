// TODO: write your code here
import Team from "./team";
import Person from "./person";

const team = new Team();

const char1 = new Person("Willy", "Magician");
const char2 = new Person("Billy", "Daemon");
const char3 = new Person("Dilly", "Swordsman");

team.add(char3);
team.addAll(char1, char2, char3);

for (const hero of team) {
  console.log(hero);
}