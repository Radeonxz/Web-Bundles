const constantFoo: number = 5;

console.log(constantFoo);

const objFoo = {
  first: {
    second: {
      third: "foo"
    }
  }
};

function funcFoo(arg: any) {
  console.log(
    "arg is: ",
    arg && arg.first && arg.first.second && arg.first.second.third
  );
  console.log("arg is: ", arg?.first?.second?.third);
}

funcFoo(objFoo);
funcFoo(0); // 0 undefined
