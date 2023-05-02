"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./Vehicle");
class Motorcycle extends Vehicle_1.default {
    constructor(motorcycle) {
        super(motorcycle);
        const { category, engineCapacity } = motorcycle;
        this.category = category;
        this.engineCapacity = engineCapacity;
    }
}
exports.default = Motorcycle;
