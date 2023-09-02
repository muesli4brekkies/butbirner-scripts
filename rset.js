// rset.js ~ ReSET
/** @param {ns} ns */
export function playSound() {
	const audio = new Audio();
	audio.src = "https://www.winhistory.de/more/winstart/ogg/win98.ogg" 
	audio.play()
} 
const scriptKill = (n, a = (s, p) => n.scan(s).forEach(v => v != p ? a(v, s) : n.killall(s))) => a("n00dles")
const tailManip = (n, p) => { n.tail(p); n.moveTail(1650, 0, p); n.resizeTail(975, 1550, p) }
const corpTailManip = (n, p) => { n.tail(p); n.moveTail(1600, 35, p); n.resizeTail(300, 200, p) }

/** @param {ns} ns */
export async function main(n) {
//n.ui.clearTerminal()
	const gvnr = "gvnr.js"
	const corp = "corp.js"
	for (let prog of n.ps()) n.closeTail(prog.pid)
	switch (n.args[0]) {
		case undefined:
			n.tprint("No args passed. Restarting scripts home and globally")
			scriptKill(n)
			const corprunpid = n.run(corp)
			const runpid = n.run(gvnr);
			//playSound();
			tailManip(n, runpid)
			await n.getPortHandle(runpid).nextWrite()
			corprunpid && corpTailManip(n, corprunpid)
			break;

		case "-k":
			n.tprint("-k passed. Killing all scripts home and globally")
			//n.killall("home", true)
			scriptKill(n)
			break;

		case "-w":
			n.tprint("-w passed. Resetting tail windows only")
			tailManip(n,  n.getRunningScript(gvnr).pid)
			n.getRunningScript(corp) && corpTailManip(n,  n.getRunningScript(corp).pid)
			break;
	}
}