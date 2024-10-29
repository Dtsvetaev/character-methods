import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const bowman = new Bowman('Рома');
const swordsman = new Swordsman('Коля');
const magician = new Magician('Вася');
const daemon = new Daemon('Петя');
const undead = new Undead('Гоша');
const zombie = new Zombie('Маша');

bowman.levelUp();
swordsman.damage(10);
magician.levelUp();
daemon.damage(15);
undead.levelUp();
zombie.damage(20);

const gameContainer = document.getElementById('game-container');

if (gameContainer) {
  gameContainer.innerHTML = `
    <p>Bowman: ${bowman.name}, Health: ${bowman.health}, Level: ${bowman.level}, Attack: ${bowman.attack.toFixed(1)}, Defense: ${bowman.defence.toFixed(1)}</p>
    <p>Swordsman: ${swordsman.name}, Health: ${swordsman.health}, Level: ${swordsman.level}, Attack: ${swordsman.attack.toFixed(1)}, Defense: ${swordsman.defence.toFixed(1)}</p>
    <p>Magician: ${magician.name}, Health: ${magician.health}, Level: ${magician.level}, Attack: ${magician.attack.toFixed(1)}, Defense: ${magician.defence.toFixed(1)}</p>
    <p>Daemon: ${daemon.name}, Health: ${daemon.health}, Level: ${daemon.level}, Attack: ${daemon.attack.toFixed(1)}, Defense: ${daemon.defence.toFixed(1)}</p>
    <p>Undead: ${undead.name}, Health: ${undead.health}, Level: ${undead.level}, Attack: ${undead.attack.toFixed(1)}, Defense: ${undead.defence.toFixed(1)}</p>
    <p>Zombie: ${zombie.name}, Health: ${zombie.health}, Level: ${zombie.level}, Attack: ${zombie.attack.toFixed(1)}, Defense: ${zombie.defence.toFixed(1)}</p>
  `;
} else {
  console.error("Element with id 'game-container' not found");
}

