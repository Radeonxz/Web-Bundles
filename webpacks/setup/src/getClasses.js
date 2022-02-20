import { constantFoo } from "./constantFoo";
import { constantBar } from "./constantBar";

function getClasses() {
  console.log("constantFoo: ", constantFoo);
  console.log("constantBar: ", constantBar);
}

export default getClasses;
