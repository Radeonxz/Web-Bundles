import getClasses from "./getClasses";

console.log("ran from index.js");
getClasses();

const obj = { a: "foo", b: "bar" };
const newObj = { ...obj, c: "baz" };

console.log("newObj: ", newObj);

console.log(["a", "b", "c"].includes("b"));
