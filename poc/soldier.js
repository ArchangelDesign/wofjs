export class Soldier {
    static TYPE_SCOUT = 1;

    constructor(posX, posY, type) {
        this.posX = posX;
        this.posY = posY;
        this.type = type;
        this.hp = 100;
    }
}