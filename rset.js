import {sGet, writeLaunchers}from "func.js";
/** @param {ns} ns */
export function main(n) { (n.ps().forEach(s => n.closeTail(s.pid)), sGet(n).forEach(s => n.killall(s, 1)), !n.args.length && (writeLaunchers(n),n.run("gvnr.js"))) };