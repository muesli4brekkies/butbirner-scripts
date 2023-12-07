const ascii = {
	l: [`    ___`, ` __/_,  \`.  .-"""-.`, ` \\_,  | \\-'  /   )\`-')`, `  "") \`"\`    \  ((\`"\``, ` ___Y  ,    .'7 /|`, `(_,___/...-\` (_/_/         `,],
	r: [`                 ___`, `      .-"""-.  .\` ,_\\__`, ` ('-\`(   \\  '-/ |   ,_/   `, `   \`"\`))       \`"\` (""`, `      |\\ 4'.    ,  Y___`, `      \\_\\_) \`-...\\___,_)`,]
}
const win = eval("window")
const doc = eval("document")
const rn = Math.random
const tget = (ns) => ns.getRunningScript().tailProperties ?? ns.exit()
const names = ["Wickes", "Updog", "Mikasa", "Snuffles", "Boris", "Gnasher", "Doug", "Chester"]
const bark = (ns, bark) => { ns.printRaw(React.createElement("h2", { style: { color: "#ffffff" } }, bark)); }


/** @param {NS} ns */
function checkBounds(ns,t) {
	let returnval = {x:0,y:0},
	x = t.x,
		y = t.y,
		w = t.width,
		h = t.height,
		otherprogs = ns.ps().map(p => ns.getRunningScript(p.pid)?.tailProperties).filter(p => p);
	otherprogs.forEach(prog => {
		if (prog.x > x + w) returnval.x - 50;
		if (prog.x + prog.width < x) returnval.x + 50;
	}
	);
	return returnval;
}


function zoomieCalc(d, val) {
	if (d > 500) val = 1.2;
	if (d > 7000) val = 0.5;  // Slow down
	if (d > 15000) val = 0.2;
	if (d > 15000) val = 0; // Go to sleep
	return val ?? 2; // Excited mode!
}

function poopCheck(ns, timestamp, happiness) {
	if (timestamp + 60000 < +(new Date())) return happiness;
	return happiness - ns.ps().filter(p => p.filename === "poop.js").length
}


function step(ns, zoomievalue, target, bool = 1, randbool = true) {
	let screenratio = win.innerHeight / win.innerWidth,
		x = tget(ns).x,
		y = tget(ns).y;
	if (target.x > x) { x += (rn() * zoomievalue) * 2 * (10 * zoomievalue); }
	else if (target.x < x) { x -= (rn() * zoomievalue) * 2 * (10 * zoomievalue) }
	if (rn() - 0.5 > 0) bool = -1
	if (zoomievalue && randbool) {
		x += 3 * rn() * bool;
		y += 3 * rn() * bool * screenratio;
	}
	let boundsadjust = checkBounds(ns,tget(ns))
	x += boundsadjust.x;
	return { dx: x, dy: win.innerHeight - 200 };
}

async function portHandle(ns, barkval, happiness) {
	if (ns.peek(ns.pid) === "NULL PORT DATA") return { bark: undefined, happiness: happiness };
	ns.clearPort(ns.pid)
	barkval = { bark: "*WAGS\nTAIL*", time: 1500 }
	happiness += 1000;
	return { bark: barkval, happiness: happiness };
}


function poop(ns, x, y, pooppid) {
	ns.write("poop.js", `export async function main(ns) {ns.disableLog("ALL");ns.atExit(() => ns.closeTail(ns.pid));ns.printRaw(React.createElement("h2", {}, "💩"));while(1) {ns.getRunningScript().tailProperties ?? ns.exit(); await ns.sleep(10000)}}`, "w")
	pooppid = ns.run("poop.js")
	ns.tail(pooppid)
	ns.resizeTail(150, 100, pooppid)
	ns.moveTail(x, y, pooppid)
}

/** @param {NS} ns */
export async function main(ns, prevposx, prevposy) {
	ns.tprint("poop")
	let zcount = 0;
	let ticker = 0;
	let happiness = 10000;
	let timestamp = +(new Date());
	const remnam = names.filter(name => !ns.ps().map(prog => ns.getRunningScript(prog.pid).title).includes(name))
	ns.setTitle(ns.args[0] ?? remnam[Math.round(Math.random() * remnam.length - 1)])
	ns.getRunningScript("petter.js") ?? ns.run("petter.js")
	ns.disableLog('ALL')
	let pos = { x: undefined, y: undefined }
	win.addEventListener('mousemove', (event) => {
		pos = { x: event.clientX - 100, y: event.clientY - 50 };
	});
	ns.tail()
	while (true) {
		ns.clearLog();
		let x = tget(ns).x
		let y = tget(ns).y - 50
		let delay = 100
		let zoomievalue = zoomieCalc(ticker);
		let asciidir = ascii.l
		if (pos.x > x) asciidir = ascii.r;
		let dvar = step(ns, zoomievalue, pos);
		let porthandlereturn = await portHandle(ns, delay, happiness)
		let barkval = porthandlereturn?.bark;
		happiness = porthandlereturn?.happiness;
		if (rn() * 100 > (100 - (2 * zoomievalue)) && !!zoomievalue) {
			barkval = { bark: '"BARK"', time: 500 };
			if (pos.x < x + 100 && pos.y < y + 100 && pos.x > x - 100 && pos.y > y - 100) barkval = { bark: "*LICKS\nCURSOR*", time: 700 };
			delay += 600
		}
		happiness = poopCheck(ns, timestamp, happiness)
		if (!zoomievalue) {
			delay += 1000
			zcount > 3 ? zcount = 1 : zcount++;
			ns.print("z".repeat(zcount))
		} else {
			ns.print(`happiness: ${Math.round(happiness / 1000)}`)
		}
		if (zoomievalue && rn() * 500 < 1) poop(ns, x, y + 150);
		barkval === undefined ? asciidir.forEach(line => ns.print(line)) : bark(ns, barkval.bark)
		ns.resizeTail(250, 200)
		ns.moveTail(dvar.dx, dvar.dy);
		barkval == undefined ? await ns.sleep(delay) : await ns.sleep(barkval.time)
		barkval == undefined ? ticker += 100 : ticker += barkval.time
		if (pos.x !== prevposx && pos.y !== prevposy) ticker = 0;
		prevposx = pos.x, prevposy = pos.y;
		if (timestamp + 60000 < +(new Date())) timestamp = +(new Date())
		ns.atExit((pid = ns.pid) => ns.closeTail(pid))
	}
}