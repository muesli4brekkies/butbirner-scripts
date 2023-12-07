import { stan } from "func.js";
export const main = async (ns)=>(await stan(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));