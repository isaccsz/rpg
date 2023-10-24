class Enemy {
    constructor(name, img, hp, damage) {
      this.enemy_name = name;
      this.enemy_img = document.createElement('img');
      this.enemy_img.src = img
      this.enemy_img.className = "enemy"
      this.enemy_hp = hp;
      this.enemy_damage = damage;
    }
  
    receiveDamage(damageTaken) {
      this.enemy_hp -= damageTaken;
    }
  
}

export {Enemy}