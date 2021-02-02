const f = x => x + 2;

const res = [];

for (let i = 0; i < 5362; i++) {
 res.push({
    x: i,
    y: f(i)
 });
};

console.log(res);