
import {Soldier} from './soldier.js';

export class WofRenderer {
    constructor(p5) {
        this.p5 = p5;
    }

    soldier(type, x, y) {
        let c;
        switch (type) {
            case Soldier.TYPE_SCOUT:
                c = this.p5.color(255, 204, 0, 128);
                break;
            default:
                c = this.p5.color(100, 120, 80);
        }
        this.p5.fill(c);
        this.p5.noStroke();
        this.p5.rect(x, y, 50, 50);
    }
}