import { Character } from "../methods";
test("levelUp increases level, attack, and defence, and sets health to 100", () => {
    const character = new Character("Hero", 1, 10, 5, 50);
  
    character.levelUp();
  
    expect(character.level).toBe(2);
    expect(character.attack).toBeCloseTo(12); 
    expect(character.defence).toBeCloseTo(6);
    expect(character.health).toBe(100);
  });
  
  test("levelUp throws error if health is 0", () => {
    const deadCharacter = new Character("Dead Hero", 1, 10, 5, 0);
  
    expect(() => deadCharacter.levelUp()).toThrow("Cannot level up a dead character");
  });

