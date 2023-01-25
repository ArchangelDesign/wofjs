export class Map {

    zoom = 1;
    offsetX = 0;
    offsetY = 0;

    constructor(size, windowSize, p5) {
        this.size = size;
        this.windowSize = windowSize;
        this.p5 = p5;
        this.regionSize = this.windowSize / this.size;
    }

    drawRegions() {
        this.drawRegionMesh();
    }

    drawRegionMesh() {
        for (let i = 1; i < this.size; i++) {
            this.p5.stroke(0, 0, 0, 255);
            this.p5.strokeWeight(0.1);
            this.p5.line(this.getRegionSize() * i, 0, this.getRegionSize() * i, this.windowSize);
            this.p5.line(0, this.getRegionSize() * i, this.windowSize, this.getRegionSize() * i);
        }
    }

    getRegionSize() {
        return this.regionSize * this.zoom;
    }

    getMapCoordinates(realX, realY) {

    }

    zoomIn() {
        this.zoom = Math.min(4, this.zoom + 0.1);
    }

    zoomOut() {
        this.zoom = Math.max(1, this.zoom - 0.1);
    }
}