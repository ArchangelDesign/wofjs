
export class GameState {
    soldiers = new Array(120);

    addSoldier(newSoldier) {
        this.soldiers.push(newSoldier);
    }
}