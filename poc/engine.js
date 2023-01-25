
import './p5.js'
import {GameState} from './game-state.js';
import {WofRenderer} from './renderer.js';
import {Soldier} from './soldier.js';

let gameState = new GameState();
let renderer;

new p5(function (p5) {
    p5.setup = function () {
        p5.createCanvas(400, 400);
        renderer = new WofRenderer(p5);
        gameState.addSoldier(new Soldier(5, 20, Soldier.TYPE_SCOUT));
    }

    p5.draw = function () {
        p5.clear();
        p5.background(220);
        gameState.soldiers.forEach(function (soldier) {
            renderer.soldier(soldier.type, soldier.posX, soldier.posY);
        });
        p5.ellipse(50,50,80,80);
    }
});