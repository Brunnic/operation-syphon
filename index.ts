import fs from "fs";

let file = fs.readFileSync("data.csv", "utf-8");
const data = file.split("\r\n");
const lignes = [];
for (let i of data) {
    lignes.push(i);
}

const realData = [];
for(let i of lignes) {
    const found = i.match(/[\w.+\-]+@gmail\.com/gmi);
    if(found) {
        realData.push(found[0]);
    }
}

const f = fs.createWriteStream("data.txt");
f.on("error", (err) => { throw err });
realData.forEach((d) => {
    f.write(`${d}\n`);
});
f.end();