"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const a2_1 = require("./a2");
const a_1 = __importDefault(require("./a"));
console.log(a_1.default);
console.log(a2_1.num);
console.log((0, a2_1.isLegal)(20));
