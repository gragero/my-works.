const name = "abohgag";
const requireage = 25;
let age = 30;
const student = true
let a = 20;
let b = 50;
const total = a * b;
agee = 21;
const agents = ["youssef", "abohgag", "jamela", "deen"]
const Agentslist = ["aze", "abohgag", "haywan", "deen"]

let power = [1200, 98000, 1000, 100000]
for (let i = 1; i <= 5; i++) {
	console.log(`the number is: LOOP ${i}`)
}

function greetname(name) {
	return `welcome ${name}. FULL Access.`;
}

function calcpowerdifference(lev1, lev2) {
	return Math.abs(lev1 - lev2);
}

if (age >= 25 || student === true) {
	console.log(`FULL Access.`)
} else if (age >= 18) {
	console.log(`Access Granted (standard): age check passed.`)
} else {
	console.log(`Access Denied: Trainee Only.`)
}

console.log ("yooo whtraaap");
console.log (`he is ${name} and he is now ${age} registered ${student}`);
console.log (`the balance is: ${total}`)
console.log (`her brother is: ${agee}`)
for (const agents of Agentslist) {
	console.log(`Agent ${agents} in now Active.`)
}
console.log(power[3])

let math = calcpowerdifference(power[1], power[2])

console.log(greetname("abohgag"));
console.log(`po.dif: ${math}`)