class Character {
  constructor(name, type) {
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!allowedTypes.includes(type)) {
      throw new Error(`Type must be one of: ${allowedTypes.join(', ')}`);
    }

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string with length between 2 and 10 characters');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;  
    this.defence = 0;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Cannot level up a dead character");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) this.health = 0;
    }
  }
}

export default Character;
