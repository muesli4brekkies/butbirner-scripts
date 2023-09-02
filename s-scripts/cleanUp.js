/** @param {NS} ns */
export let main = (n)=> {n.ls("home", ".txt").forEach(file => file == "g-scripts/membernames.txt"|| n.rm(file)); n.writePort(n.pid,"")}