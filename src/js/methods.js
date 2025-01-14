export class Character {
  constructor(name, level = 1, attack = 10, defence = 5, health = 100) {
    this.name = name;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Cannot level up a dead character");
    }
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      const damage = points * (1 - this.defence / 100);
      this.health -= damage;
    }
  }
}

const hero = new Character("hero", 1, 10, 5, 50);
hero.levelUp();
hero.damage(20);
hero.damage(100);