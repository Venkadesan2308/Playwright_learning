//=============1 Class================
let userName: string = "John Doe";
let userAge: number = 30;
let isAdmin: boolean = false;

const userdeatils: string[] = ["Name:", "Phone:", "Email:"];
const testValues: string[] = ["test", "test2", "test3"];
const numberValues: number[] = [1, 2, 3, 4, 5];

type teams = "it" | "manager" | "admin" | 123 | true; // custom type for team names

interface userDetails {
  name: string;
  phone: string;
  email: string;
  age: number;
  sex: "female" | "male" | "other";
  team: teams;
}

const user: userDetails = {
  name: "John Doe",
  phone: "123-456-7890",
  email: "",
  age: 30,
  sex: "male",
  team: "manager",
};
//==================2 Class =================

// function is also called as method in java.
// function functionname(){} syntax

/** normal function
 *
 */
function getUser() {
  const a = 10;
  const b = 10;
  console.log(a + b);
}
/** arg function
 *
 */
export function calc(aValue: number, bValue: number) {
  const a = aValue;
  const b = bValue;
  console.log(a + b);
}
calc(10, 30);

/** return type function
 * it return some values we need to store one value
 * @example const value = welcomeFunction("values")
 */
function welcomeFunction(userName: string) {
  const value = "Welcome to typescript learning";
  // const returnvalue = "Hello! " + userName + " " + value;
  const returnvalue = `Hello! ${userName} ${value}`;
  return returnvalue;
}
const value = welcomeFunction("Venki");
console.log(value);

// " string" + variable + "string";
// `string ${variable} string`;

/**
 * Optional param function
 */
function learning(name: string, completedClass?: string) {
  let crtValue;

  // if (completedClass === undefined) {
  //   crtValue = "";
  // } else {
  //   crtValue = completedClass;
  // }

  // if (!completedClass) {
  //   crtValue = "";
  // } else {
  //   crtValue = completedClass;
  // }

  // if (completedClass) {
  //   crtValue = completedClass;
  // } else {
  //   crtValue = "";
  // }

  // Ternary operator.

  // crtValue = completedClass ? "1" : "NA"; ( its same line if else condition)
  // crtValue = completedClass ? completedClass : "NA";
  crtValue = completedClass ?? "NA";
  return `${name}  ${crtValue} day completed`;
}
const day = learning("Venki");
console.log(day);
/**
 *
 * @param Simplify the options method without conditions
 * @returns
 */
function learning01(name: string, completedClass: string = "NA") {
  return `${name}  ${completedClass} day completed`;
}
const day01 = learning01("Venki");
console.log(day01);
