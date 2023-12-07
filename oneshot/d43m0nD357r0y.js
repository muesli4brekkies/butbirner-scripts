import { d43m0nD357r0y } from "func.js";
export const main =  (ns)=>( d43m0nD357r0y(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));