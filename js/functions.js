/* 
	? Functions
	* blocks of reusable code
	* allow us to maintain DRY (do not repeat yourself)
	* function will take some things
	* and spit some thing out
	* things we take are called parameter(s)
	* thing we spit out is called a return
	* we can return only ONE thing
	* functions need to be called in order to run
	* if no return provided, it's undefined
*/

// function declaration
function defineCohort() {
	return "fullstack10";
}

// defineCohort() // function call or function initilization

let result = defineCohort();
console.log("LOOK HERE", result);

function verifyVowel(ltr) {
	if (ltr === "a" || ltr === "e" || ltr === "o") {
		return true;
	} else {
		return false;
	}
}

console.log(verifyVowel("a"), verifyVowel("c"), verifyVowel("o"));
// function calls with string arguments passed thru the parameter

// ? Function Expression
// function within a variable

let removeVowels = function (str) {
	let result = ""
	for (ltr of str) {
		if (ltr !== "a" && ltr !== "e" && ltr !== "o") {
			result += ltr
		}
	}
	return result
}

console.log(removeVowels("gary paul"))

// ? Concise Body Arrow Function Expressions
// a way to write function concisely (like a ternary)

// syntax: variable = (param) => expression
let addNums = (num1, num2) => num1 + num2

// Why do we return instead of console logging?
let resultOfAddition = addNums(5, 7)
let age = 27
console.log(resultOfAddition + age)
// Now try to change 54 to console log and see what happens

// ? Block Body Arrow Function Expressions
// a way to write concisely but you have blocks instead of expressions

let sendEmail = (email, body) => {
	return `${email} \n ${body}`
}

console.log(sendEmail("paul@email.com", "We've been trying to contact you regarding your expired car warranty"))