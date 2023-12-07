import { factWork } from "func.js";
export const main =  (ns)=>( factWork(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));