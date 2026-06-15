// ++++=======TypeScript Union Types=======++++++=

// Union types are used when a value can be more than a single type.

// Such as when a property would be string or number.

// Union | (OR)
// Using the | we are saying our parameter is a string or number:

// ExampleGet your own TypeScript Server
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

// Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:

// Example
// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
// }
// In our example we are having an issue invoking toUpperCase() as its a string method and number doesn't have access to it.

let status: "padding" | "success" | "error" | undefined;
status = "padding";
console.log(status);

// +++++++++++Any type+++++++++

let a = {
  userName: "name",
  age: "12",
};
console.log(a);

// Type: any
// The any type is the most flexible type in TypeScript.

// It essentially tells the compiler to skip type checking for a particular variable.

// While this can be useful in certain situations, it should be used sparingly as it bypasses TypeScript's type safety features.

// When to use any:

// When migrating JavaScript code to TypeScript
// When working with dynamic content where the type is unknown
// When you need to opt out of type checking for a specific case
// The example below does not use any and will throw an error:

// Example without anyGet your own TypeScript Server
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// Setting a variable to the special type any disables type checking:

// Example with any
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
// any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able to provide type safety, and tools which rely on type data, such as auto completion, will not work.

// Remember, it should be avoided at "any" cost...

let type: any[] = [
  "10",
  "10",
  {
    num: 10,
  },
  () => {
    console.log(10);
  },
];
console.log(type);
