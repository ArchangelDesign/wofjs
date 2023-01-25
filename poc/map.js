export class Map {

    constructor(width, height, windowWidth, windowHeight, p5) {
        this.width = width;
        this.height = height;
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.p5 = p5;
    }

    drawRegions() {
        this.drawRegionMesh();
    }

    drawRegionMesh() {
        let regionSize = this.windowWidth / this.width;
        for (let i = 1; i < this.width; i++) {
            this.p5.stroke(0, 0, 0, 255);
            this.p5.strokeWeight(0.1);
            this.p5.line(regionSize * i, 0, regionSize * i, this.windowHeight);
            this.p5.line(0, regionSize * i, this.windowWidth, regionSize * i);
        }
    }
}