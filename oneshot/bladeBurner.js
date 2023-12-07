import { bladeBurner } from "func.js";
export const main =  (ns)=>( bladeBurner(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));