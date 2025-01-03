// 최소공배수

const [A, B] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = Math.floor((A * B) / gcd(A, B));

console.log(lcm);