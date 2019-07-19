console.log('Fighters game');
class Fighter {
    constructor ({name, damage, hp, agility}) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._agility = agility;
        this._wins = 0;
        this._loses = 0;
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getHp(){
        return this._hp;
    }
    getAgility() {
        return this._agility;
    } 
    attack(fighter) {
        let ability = 101;
        const hit = Math.floor(Math.random() * ability);
        let chance = ability - this._agility;        
        if (chance > hit) {
            fighter.dealDamage(this._damage);
            console.log(`${this._name} make ${this._damage} damage to ${fighter._name}`);    
        } else {
            console.log(`${this._name} attack missed`);    
        }        
    }
    dealDamage(damage) {        
        if (this._hp < 0) {
            this._hp = 0;
        } else {
            this._hp -= damage;
        }
    }
    heal(a) {
        let health = 100;
        let healed = this._hp + a; 
        if (healed > health) {
            this._hp = health;
        } else {
            this._hp += a;
        }
    }
    logCombatHistory() {
        return `Name: ${this._name}, Wins ${this._wins}, Loses ${this._loses}`;
    }
    addWins() {
        this._wins += 1;
    }
    addLoss(){
        this._loses += 1;
    }

}
const firstFighter = new Fighter({name: 'Sub-Zero', damage: 20, hp: 100, agility: 55});
const secondFighter = new Fighter({name: 'Kung Lao', damage: 20, hp: 100, agility: 25});

function battle (firstFighter, secondFighter) {
    while (firstFighter._hp > 0 && secondFighter._hp > 0) {
        if(firstFighter._hp > 0 || secondFighter._hp > 0) {
            firstFighter.attack(secondFighter);
        } 
        if(firstFighter._hp > 0 || secondFighter._hp > 0) {
            secondFighter.attack(firstFighter);
        }
        if(firstFighter._hp === 0) {
            console.log(`${firstFighter._name} dead and can not fight!`);
        } 
        if(secondFighter._hp === 0) {
            console.log(`${secondFighter._name} dead and can not fight!`);
        }
    }

    if (firstFighter._hp > 0) {
        firstFighter.addWins();
    } else {
        firstFighter.addLoss();
    }

    if(secondFighter._hp > 0) {
        secondFighter.addWins();
    } else {
        secondFighter.addLoss();
    }

}
