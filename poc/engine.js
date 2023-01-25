
import './p5.js'
import {GameState} from './game-state.js';
import {WofRenderer} from './renderer.js';
import {Soldier} from './soldier.js';
import {Map} from './map.js';

let gameState = new GameState();
let renderer;
let map;
let canvas;

new p5(function (p5) {

    function onMouseScroll(event) {
        if (event.deltaY > 0) {
            map.zoomOut();
        }
        if (event.deltaY < 0) {
            map.zoomIn();
        }
    }

    p5.setup = function () {
        let windowSize = Math.min(p5.windowWidth, p5.windowHeight);
        canvas = p5.createCanvas(windowSize, windowSize);
        canvas.mouseWheel(onMouseScroll);
        renderer = new WofRenderer(p5);
        map = new Map(20, windowSize, p5);
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