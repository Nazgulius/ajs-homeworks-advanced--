import Team from "./Team";

console.log('Работает');

const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}

let team = new Team();

team.addCharector(char);
team.addCharector(char);

const iterator = team.teamChars();  

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

 