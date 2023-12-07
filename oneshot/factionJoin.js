import { factionJoin } from "func.js";
export const main =  (ns)=>( factionJoin(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));