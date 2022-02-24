// import "core-js";
// import "core-js/modules/es.Object.values";

// import "core-js/modules/es.promise";
import "regenerator-runtime/runtime";

import includesExm from "./includes";

includesExm(["a", "b", "c"], "b");

const objFoo = {
  foo: 1,
  bar: 3,
  baz: 2
};

const objBar = {
  ...objFoo,
  fooBar: 6,
  barBaz: 4
};

console.log("Spread operators: ", objBar);

console.log("Object.values: ", Object.values(objBar)); // polyfills

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result); // expected output: "resolved"
}

asyncCall();
