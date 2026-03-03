/* 
	? JS Loops
	* allow us to run code repeatedly until a stop condition
	* five ways of looping in JS (usually just two)
*/

// ? Most popular loop - for loop
// i = i + 1 can be written as i += 1 or i++

for (let i = 0; i < 10; i++) {
	console.log(i)
}

/* 
	1. set i
	2. check if i <= 10
	3. if true, run code block
	4. increment by 1
	5. rinse and repeat
*/

let carInsurance = "kraftfahrzeug-haftplifchtversicherung"

console.log(carInsurance.length)
for (let i = 0; i < carInsurance.length;  i++) {
	console.log(carInsurance[i])
}

// why undefined?? because <= causes index value to overshoot character value
// * off by one error
console.log(carInsurance[36])
console.log(carInsurance[37])

// * iterator = placeholder value (i)
// * iterable = something we can loop over (carInsurance)

// for (start; stop; step) { code block to execute before step }

// for (let i = 0; ;i++) {
// 	console.log(i)
// }

// infinite loop. it has no stop condition.
// stop using ctrl + c


// ? For in loop

let fountainPenNerd = "the quick brown fox jumps over the lazy dog"

for (i in fountainPenNerd) {
	// it still iterates over the index
	console.log(`Index: ${i} | Letter ${fountainPenNerd[i]}`)
}

// no stop statement needed. It knows when to give up. Handles start and stop by itself.

// ? For of loop
// Gives you the value, not the index

let f1Teams = "Ferrari | Aston Martin | McLaren | RedBull | Mercedes | Alpine"

for (team of f1Teams) {
	console.log(team)
}

/* 
	? Challenge
	* take the f1Teams variable and loop over it
	* if a character does not equal to space or |, concatenate/interpolate it to a variable
	* console log the variable at the end
*/

console.log("---------------------")

let stuff = ""
for (ltr of f1Teams) {
	if (ltr !== " " && ltr !== "|") {
		stuff = stuff + ltr
	}
}
console.log("Output of our challenge:", stuff)

// ? While Loop
// has a continue statement as its only expression
// while(true) { do this until true is no longer true }

let count = 0
while (count <= 10) {
	console.log(count)
	count++
}