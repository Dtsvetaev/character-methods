import Character from './Character';
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

test('Bowman instance should have correct properties', () => {
  const bowman = new Bowman('Legolas');
  expect(bowman.name).toBe('Legolas');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('Swordsman instance should have correct properties', () => {
  const swordsman = new Swordsman('Aragorn');
  expect(swordsman.name).toBe('Aragorn');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('Magician instance should have correct properties', () => {
  const magician = new Magician('Gandalf');
  expect(magician.name).toBe('Gandalf');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('Daemon instance should have correct properties', () => {
  const daemon = new Daemon('Azazel');
  expect(daemon.name).toBe('Azazel');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});

test('Undead instance should have correct properties', () => {
  const undead = new Undead('SkullKing');
  expect(undead.name).toBe('SkullKing');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('Zombie instance should have correct properties', () => {
  const zombie = new Zombie('ZombieX');
  expect(zombie.name).toBe('ZombieX');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});

test('should throw error for invalid name length', () => {
  expect(() => new Bowman('A')).toThrow('Name must be a string with length between 2 and 10 characters');
  expect(() => new Swordsman('ThisNameIsTooLong')).toThrow('Name must be a string with length between 2 and 10 characters');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('InvalidName', 'Warrior')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('levelUp increases level and updates attack, defence, and health', () => {
  const character = new Bowman('Legolas');
  character.attack = 25;
  character.defence = 25;

  character.levelUp();

  expect(character.level).toBe(2);
  expect(character.attack).toBeCloseTo(30); // 25 * 1.2
  expect(character.defence).toBeCloseTo(30); // 25 * 1.2
  expect(character.health).toBe(100);
});

test('levelUp throws an error if health is 0', () => {
  const character = new Bowman('Legolas');
  character.health = 0;

  expect(() => character.levelUp()).toThrow('Cannot level up a dead character');
});

test('damage reduces health correctly', () => {
  const character = new Bowman('Legolas');
  character.defence = 50;
  character.health = 100;

  character.damage(20);
  expect(character.health).toBeCloseTo(90); // 100 - (20 * (1 - 0.5))
});

test('damage does not reduce health below 0', () => {
  const character = new Bowman('Legolas');
  character.defence = 10;
  character.health = 10;

  character.damage(100);
  expect(character.health).toBe(0);
});
