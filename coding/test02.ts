function welcomeFunction(userName: string) {
  const value = "Welcome to typescript learning";
  // const returnvalue = "Hello! " + userName + " " + value;
  const returnvalue = `Hello! ${userName} ${value}`;
  return returnvalue;
}

function learning01(name: string, completedClass: string = "NA") {
  return `${name}  ${completedClass} day class completed`;
}

const value = welcomeFunction("Sridevi");
console.log(value);

const day = learning01(value, "2nd");
console.log(day);
