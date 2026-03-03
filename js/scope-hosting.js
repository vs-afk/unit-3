/* 
	? Scope & Hoisting
	* JS runs left to right, up and down
	* but that's only when we learn about it

	? Scope
	* blocks of code which have different access rights
	* scope is { }
	* five types
		* global
		* block
		* function
		* module
		* lexical
*/

// ? Global scope

let welcomeToGlobalScope = "This variable can be accessed in any scope"
console.log(welcomeToGlobalScope)

// ? Block Scope

if (true) {
	let blockScopeVariable = "This variable is inside of a block scope"
	console.log(blockScopeVariable)

	console.log(welcomeToGlobalScope)
	// Block scope can access global scope
}

// console.log(blockScopeVariable)
// ReferenceError -- we can't access block scope from global scope

// ? Function Scope

function fxScope() {
	let fxScopeVariable = "This variable is in function scope"
	console.log(fxScopeVariable)
}

fxScope()
// same principle as block scope

// ? Lexical Scope

function outer() {
	let outerVar = "Outer Variable"
	
	function inner() {
		let innerVar = "Inner Variable"
		console.log(outerVar)

		return innerVar
	}

	return inner()
}

console.log(outer()) // outerfx has access to inner fx scope
// this is also called a closure

{{{{{{{{{{{ console.log("whole lotta scope!" )}}}}}}}}}}}

// ? Module Scope
// for import/export

const secretStuff = require("./some-file")
console.log(secretStuff)

/* 
	? Hoisting
	* buckle up buttercup. It's about to get bumpy!
	* left right up down is a lie...
	* JS runs your code twice
		* first time it HOISTS all declarations into memory
		* second time, it initializes values
*/

// console.log(myName) // ReferenceError: Cannot access 'myName' before initialization
let myName = "paul"

console.log(lastName) // shows undefined
var lastName = "Niemczyk"
// This is hoisted

someFunction()
function someFunction() {
	console.log("Hello world")
}
// This is also hoisted

// fxExpression() // ReferenceError Expressions are not hoisted, only declarations
let fxExpression = function() {
	console.log("Expressions yo")
}

// ! BAD DO NOT EVER USE TO YOUR ADVANTAGE !!
