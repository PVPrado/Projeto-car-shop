"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(vehicle) {
        const { id, model, year, color, status, buyValue } = vehicle;
        this.id = id;
        this.model = model;
        this.year = year;
        this.color = color;
        this.status = status || false;
        this.buyValue = buyValue;
    }
}
exports.default = Vehicle;
