/* 
	? Logic and Conditionals
	* conditionals allow you to check for a... condition
	* this condition must always be truthy
	* the condition is called the expression
	* we can chain multiple conditions using logic gates
	* if a condition isn't truthy, it will be skipped
	* if we have multiple chained expressions, once one is met, we leave
*/

// ? If Conditional

// if (expression) { do something in this code block }

let temp = 36

if (temp > 70) {
	console.log("Summer weather")
}

// ? Else Conditional

// chains to if and executes something if expression fails

if (temp > 70) {
	console.log("Summer weather")
} else {
	console.log("The value is not 70")
}

// ? Else If Conditional
// allows us to add multiple expressions

let color = "potato"

if (color === "blue") {
	console.log("Paul's favorite")
} else if (color === "green") {
	console.log("Stuart's favorite")
} else if (color === "purple") {
	console.log("Rus' favorite")
} else {
	console.log("Whatever you put isn't a color we support")
}

/* 
	? Logic Operators
	* used to consolidate multiple expresions into one
	* AND
		* denoted by &&
		* both sides must be true for expression to resolve to true
	* OR
		* denoted ||
		* one side must be true for expression to resolve to true
	* NOT
		* denoted by != or !==
		* flips the expression
*/

color = "blue"
temp = 95

if (color === "blue" && temp >= 70) {
	console.log("Clear summer day")
}

if (color === "purple" || temp > 90) {
	console.log("Sounds like a tornado is brewin'")
}

let isTeacher = true

if (isTeacher === true) {
	console.log("isTeacher variable clearly has a truthy value")
}

if (isTeacher) {
	console.log("isTeacher variable clearly has a truthy value")
}

console.log("------------", isTeacher)

if (!isTeacher) {
	console.log("This person sure isn't a teacher!")
}

if (isTeacher !== true) {
	console.log("This person sure isn't a teacher!")
}

/* 
	? Ternaries
	* a different way of writing conditionals
	* expression based (no return)
	* always need an else, no exceptions
	* commonly used for quick checks
	
	? Syntax:

	conditional ? truthy code block : falsey code block
*/

let f1Team = "Petronas"

if (f1Team === "Petronas") {
	console.log("Toto Wolff")
}

f1Team === "Petronas" ? console.log("Toto Wolff") : null

// ? Chain ternaries? Yes, but for the love of all that's holy DONT!

f1Team === "Petronas" ? console.log("Toto Wolff")
	: f1Team === "Red Bull" ? console.log("Christian Horner")
	: f1Team === "Aston Martin" ? console.log("Adrian Newey")
	: console.log("This person isn't a team principal for any team")


/* 
	? Switch Statements
	* a way to execute multiple expressions with or without stop
*/

let teamPrincpal = "Fred Vasseur"

switch(teamPrincpal) {
	// what we're comparing against
	case "Guenther Steiner":
		// condition to run
		console.log("Damn it Gene")
		break // stops other cases from evaluating
	case "Fred Vasseur":
		console.log("Ferrari")
		break
	case "Zac Brown":
		console.log("The tattoo man")
		break
	default:
		console.log("Don't know this team principal")
}