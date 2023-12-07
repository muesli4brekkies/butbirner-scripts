import { rset } from "func.js"
/** @param {ns} ns */
export const main =  (ns)=>( rset(ns), ns.atExit(() => ns.writePort(ns.pid, "")));
