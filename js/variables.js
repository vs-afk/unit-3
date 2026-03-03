console.log("Hello World");

// ? JavaScript
/*
 * Founded by Brandon Eich in 1995
 * runs in the browser, otherwise known as client-side language
 * functional, interpreted, object-oriented (kinda), prototype-based language
 * imperative in instructions
 */

/* 
	? console.log()
	* allows us to present to the terminal what our app is doing
	* allwos us to see the output without returning anything yet
*/

5 + 7; // this runs but isn't yet visible
console.log(5 + 7); // this runs and is visible to us in the console

/* 
	? Variable
	* building block of most programming languages
	* allows us to store data in the memory and retrieve it
	* denoted by let, var, or const
	* can start with anything but numbers or characters not $ or _
*/

// keyword identifier IS value
// variable declaration = variable initilization
let cohortName = "fullstack10";
console.log(cohortName);

// variables can also be reassigned
cohortName = "fullstack-10";
console.log(cohortName);

/* 
	JavaScript runs top > bottom > left > right
*/

var aVARiable = "value of a VARiable";
console.log(aVARiable);
// ! old way DO NOT USE!!! can cause issues with hoisting

const isTeacher = true;
console.log(isTeacher);

// isTeacher = false
console.log(isTeacher);
// TypeError because we cannot reassign a value of const

/* 
	? Variable Nomeclature (JS)
	* lowercase (anything)
	* snake-case (file names)
	* camelCase (variables)
	* PascalCase (classes and new object instances)

	! NOTE - these are just guidelines. They will differ between jobs, places, developers, and so on...

	* lookup the concept of style guide
*/