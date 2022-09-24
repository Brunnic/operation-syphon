"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let file = fs_1.default.readFileSync("data.csv", "utf-8");
const data = file.split("\r\n");
const lignes = [];
for (let i of data) {
    lignes.push(i);
}
const realData = [];
for (let i of lignes) {
    const found = i.match(/[\w.+\-]+@gmail\.com/gmi);
    if (found) {
        realData.push(found[0]);
    }
}
const f = fs_1.default.createWriteStream("data.txt");
f.on("error", (err) => { throw err; });
realData.forEach((d) => {
    f.write(`${d}\n`);
});
f.end();
