
import './p5.js'
import {GameState} from './game-state.js';
import {WofRenderer} from './renderer.js';
import {Soldier} from './soldier.js';
import {Map} from './map.js';

let gameState = new GameState();
let renderer;
let map;

new p5(function (p5) {
    p5.setup = function () {
        let size = Math.min(p5.windowWidth, p5.windowHeight);
        p5.createCanvas(size, size);
        renderer = new WofRenderer(p5);
        map = new Map(20, 20, size, size, p5);
        gameState.addSoldier(new Soldier(5, 5, Soldier.TYPE_SCOUT));
    }

    p5.draw = function () {
        p5.clear();
        p5.background(220);
        map.drawRegions();
        gameState.soldiers.forEach(function (soldier) {
            renderer.soldier(soldier.type, soldier.posX, soldier.posY);
        });
    }
});