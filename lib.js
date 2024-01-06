// lib.js
export const CNST = {
	NFG: "NeuroFlux Governor",
	TRP: "The Red Pill",
	GANG_NAME: "Slum Snakes",
	MEMBER_NAMES: [
		"Tony Harrison",
		"Kathy Rindhoops",
		"Jimmy Lazers",
		"Naboo the Enigma",
		"Helen Back",
		"Tubular Tony",
		"Stabby Clarkson",
		"Carl",
		"Poops Mcghee",
		"Hairy Dan",
		"Will Barrow",
		"Barry Three-Nips",
		"Markkus",
		"Patricia O'Violence",
		"Pat O'Cake",
		"Ray Fridgerator",
		"Sammy the Squid",
		"Slanty Bob (one leg)",
		"Bastard Man",
		"Man-Spider",
		"Non-Bio Bruce",
		"Rockhead Rumple",
		"Joey Tagliatelle",
		"Johnny Segment",
	],
	LOOP_FUNCTIONS: [/*"stan",*/ "runGang", "prsm"],
	ONESHOT_FUNCTIONS: [
		"clean",
		"ownedAugs",
		"availableAugs",
		"hacknetShindigs",
		"pServ",
		"murderate",
		"factionJoin",
		"factWork",
		"d43m0nD357r0y",
		"ramUp",
		"coresUp",
		"darkwebShopping",
		"buyTOR",
		"backdoor",
		"graft",
		//"stonks",
		"donate",
		"installAugs",
		"buyAugs",
		"cityAugs",
		"persuade",
		"steves",
		"bladeBurner",
	],
	STANDALONE_FUNCTIONS: ["bd", "gvnr", "neofetch"],
	STANDALONE_SCRIPTS: ["solveallcontracts.js"],
	WIN: eval("window"),
	DOC: eval("document"),
	HOOK0: eval("document").getElementById('overview-extra-hook-0'),
	HOOK1: eval("document").getElementById('overview-extra-hook-1'),
};


export function main(n) {
	(
		n.ps().forEach(s => n.closeTail(s.pid)),
		sGet(n).forEach(s => n.killall(s, 1)),
		!n.args.length && (writeLaunchers(n), n.run("gvnr.js"))
	)
};

/**
 * @param {NS} ns The ns object
 * @param {string} path String of ns function to run, eg "gang.getMemberNames" or "getPlayer"
 * @param {array} params Parameters to run function with, eg ["n00dles",{ramOverride:10}]
 * @param {string} props properties to access, eg ".skills.hacking". Include the preceding "." or "?.""
 * @return {Promise<Any>} Whatever the passed function returns
 */
export async function Run(ns, path, params, props) {
	const runstring = `await ns.${path}(${(params || []).map(JSON.stringify)})${props ?? ""}`;
	ns.write(`run/${ns.pid}.js`, `export async function main(ns) { const val = JSON.stringify(${runstring}); ns.atExit(()=>ns.writePort(ns.pid,val||0)) }`, "w");
	const run_pid = ns.run(`run/${ns.pid}.js`, { ramOverride: 1.6 + ns.getFunctionRamCost(path) });
	!run_pid && ns.tprintf(`${util.ansi.r}!! ${path} DID NOT RUN !!`);
	await ns.getPortHandle(run_pid).nextWrite();
	return JSON.parse(ns.readPort(run_pid));
};

export const util = {

	/** 
	* @param {NS} ns The ns object
	* @param {string} text Text to colour
	* @param {string} extra_style Extra CSS style, eg "font-size:100px; font-weight:bold;"
	* @param {Number} timeout Number of ms to run the rainbow effect for
	* @return {Promise<Any>} Whatever the passed function returns
	*/
	lmaocat: async function (element_id, extra_style, timeout = 10000) {
		await new Promise(r => setTimeout(r, 100)); // wait a moment to make sure the react element has loaded
		const PI = Math.PI;
		const element = CNST.DOC.getElementById(element_id);
		const text = element.innerText;
		const col_offset = 50; // restricts the bottom of the colour range. Makes things brighter / more pastel
		const rand_theta = () => Math.random() * PI;
		const calc_sin = (i, angle, theta) => (Math.abs(Math.cos((theta + angle) * i)) * (255 - col_offset) << 0) + col_offset;
		const gen_rgb = (i, l) => `color:rgb(${calc_sin(i, 0, l.thetas.r)},${(calc_sin(i, (2 * PI) / 3, l.thetas.g))},${(calc_sin(i, (4 * PI) / 3, l.thetas.b))}`;
		const print_map = [...text].map(l => ({
			letter: l,
			thetas: {
				r: rand_theta(),
				g: rand_theta(),
				b: rand_theta(),
			},
		}));
		await loop(print_map, timeout);

		async function loop(print_map, timeout, i = 1) {
			try { CNST.DOC.getElementById(element_id).innerHTML = print_map.map(l => `<span style="${extra_style}${gen_rgb(i, l)}">${l.letter}</span>`).join("") } catch { };
			await new Promise(r => setTimeout(r, 50));
			if (timeout > 0) {
				await loop(print_map, timeout - 50, i + 0.05)
			}
		}
	},

	rgbCol: (r, g, b, fg = true) => `\u001b[${fg ? "3" : "4"}8;2;${r};${g};${b}m`,

	ansi: {
		r: "\x1b[31m", // red
		g: "\x1b[32m", // green
		b: "\x1b[34m", // blue
		c: "\x1b[36m", // cyan
		m: "\x1b[35m", // Magenta
		y: "\x1b[33m", // Yellow
		k: "\x1b[30m", // key(black)
		w: "\x1b[37m", // white
		d: "\x1b[0m",  // default
		bl: "\x1b[2m", // bold
	},

	getIndexArray: n => [...Array(n).keys()],

	tickString: (t, l = 30, e = true) => t % l ? '#'.repeat(t / 5 % (l / 5)) + ` |/-\\`[t % 5] : "#exec#",

	digiClock: (r = Date.now(), c = (t, d = 60, v = r / t % d | 0) => v <= 9 ? "0" + v : v) => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3),

	ramFormat: ram => (ram < 1e3) ? ram.toFixed(2) + "GB" : (ram < 1e6) ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB",

	slp: async t => await new Promise(r => setTimeout(r, t)),
}

function getFreeRam(ns, server) {
	return ns.getServerMaxRam(server) - ns.getServerUsedRam(server)
}

export async function is_Busy(ns) {
	return (await Run(ns, "singularity.getCurrentWork", "", "?.type") == "GRAFTING" ||
		await Run(ns, "bladeburner.inBladeburner") && !!(await Run(ns, "bladeburner.getCurrentAction", "", ".name")));
}


function sGet(ns, m = new Set(["home"])) {
	return (m.forEach(h => ns.scan(h).map(s => m.add(s))), [...m])
}

function readyFiley(ns, file, data = ns.read(file)) {
	return JSON.parse(!!data ? data : "[]")
}

function peekyPorty(ns, script, data = ns.peek(ns.getRunningScript(script)?.pid ?? ns.pid)) {
	return JSON.parse(data == "NULL PORT DATA" ? "[]" : data)
}

function getCurrentNode(ns) {
	return `${ns.getResetInfo().currentNode}.${1 + ns.singularity.getOwnedSourceFiles().reduce((a, sf) => sf.n == ns.getResetInfo().currentNode ? sf.lvl : a, 0)}`
}

export function clean(ns) {
	ns.ls("home", "run/").forEach(s => ns.rm(s))
}

export async function buyTOR(ns) {
	await Run(ns, "singularity.purchaseTor")
}

export async function ramUp(ns) {
	(await Run(ns, "singularity.upgradeHomeRam") && (ns.tprintf(util.ansi.g + "Upgraded home ram")) || ramUp(ns))
}

export async function coresUp(ns) {
	(await Run(ns, "singularity.upgradeHomeCores") && (ns.tprintf(util.ansi.g + "Upgraded home cores")) || coresUp(ns))
}

export function factionJoin(n, s = n.singularity) {
	s.checkFactionInvitations().forEach(f => (s.joinFaction(f), n.tprintf(`${util.ansi.m}Joined ${f}`)))
}

export function darkwebShopping(n) {
	["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].map(p=>n.singularity.purchaseProgram(`${p}.exe`))
}

export async function murderate(ns, s = ns.singularity) {
	!await is_Busy(ns) && (await Run(ns, "getPlayer", [], ".numPeopleKilled") < 30) && (await Run(ns, "singularity.stopAction"), await Run(ns, "singularity.commitCrime", ["Homicide", 0]));
}

export async function bd(n, target, s = n.singularity) {
	await (async (h, w = (t, r = []) => t == h ? r : w(n.scan(t)[0], [t, ...r])) => (s.connect(h), w(target).map(s.connect), n.tprintf(`${util.ansi.y}Backdoor started on ${target}`), await s.installBackdoor(), s.connect(h), n.tprintf(`${util.ansi.g}Backdoor complete on ${target}`)))("home")
}

export function persuade(n, a = (s, p) => n.scan(s).forEach(v => v != p ? a(v, s) : [n.brutessh, n.ftpcrack, n.relaysmtp, n.sqlinject, n.httpworm, n.nuke].forEach(p => { try { p(s) } catch { } }))) { a("home") };

export async function d43m0nD357r0y(ns, s = ns.singularity, date = new Date(), wd = "w0r1d_d43m0n") {
	(
		sGet(ns).includes(wd)
		&& await Run(ns, "getHackingLevel") > await Run(ns, "getServerRequiredHackingLevel", [wd])
		&& (
			["installCounter.txt", "installAugsReason.txt", "installAugsLog.txt"].map(f => ns.rm(`temp/${f}`)),
			ns.write("report/nodeLog.txt", `${getCurrentNode(ns)} completed  - ${date.toLocaleTimeString()} ${date.toLocaleDateString()}\n`),
			await Run(ns, "singularity.destroyW0r1dD43m0n", [12, "rset.js"])
		)
	)
}

/** @param {NS} ns */
export function pServ(ns) {
	(
		(
			ns.purchaseServer("#", 8)
			|| sGet(ns).some(s => ns.upgradePurchasedServer(s, ns.getServerMaxRam(s) * 2))
		)
		&& pServ(ns)
	)
}

function prettyLogs(ns) {
	const getCash = ns.getServerMoneyAvailable;
	const getMaxMoney = ns.getServerMaxMoney;
	const getSecLvl = ns.getServerSecurityLevel;
	const getSecMin = ns.getServerMinSecurityLevel;
	const printLogLine = line => ns.print(" " + line.join(" | "));
	const percColour = perc => (
		`${(perc < 33
			? util.ansi.r
			: perc < 66
				? util.ansi.y
				: perc < 85
					? util.ansi.c
					: util.ansi.g)}${perc.padStart(6, " ")}%${util.ansi.d}`
	);
	const secColour = sec => (
		`${(sec < 0
			? util.ansi.g
			: sec < 66
				? util.ansi.y
				: util.ansi.r)}${("" + sec).padStart(3, " ")}${util.ansi.d}`
	);
	const main_list = sGet(ns);
	const access_list = main_list.filter(s => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel());
	const funded_list = access_list.filter(getMaxMoney);
	const funded_count = main_list.reduce((a, s) => a + !!getMaxMoney(s), 0);
	const total_max_ram = access_list.reduce((a, s) => a + ns.getServerMaxRam(s), 0);
	const total_free_ram = access_list.reduce((a, s) => a + getFreeRam(ns, s), 0);
	const bought_augs = readyFiley(ns, "temp/boughtAugs.txt");
	const bought_augs_sans_nfg = bought_augs.reduce((acc, aug) => acc + (aug != CNST.NFG), 0);
	const num_nfg = bought_augs.reduce((acc, aug) => acc + (aug == CNST.NFG), 0);
	const num_other_augs = readyFiley(ns, "temp/installedAugs.txt").reduce((acc, aug) => acc + (aug != CNST.NFG), 0);
	const aug_info = bought_augs.filter(a => a != CNST.NFG).map(aug => ` ·${aug}`).concat(num_nfg ? [(` ·NeuroFlux Governor x${num_nfg}\n`)] : null).join("\n");
	(
		ns.resizeTail(800, 1000),
		ns.moveTail(CNST.WIN.innerWidth - 1150, 0),
		ns.clearLog(),
		[...funded_list.map(server => [
			Math.ceil(getSecLvl(server)).toString().padStart(3, " "),
			secColour(Math.floor(getSecLvl(server) - (getSecMin(server) + 3))),
			ns.formatNumber(getCash(server)).toString().padStart(8, " "),
			ns.formatNumber(getMaxMoney(server)).toString().padStart(8, " "),
			percColour((getCash(server) / getMaxMoney(server) * 100).toFixed(2)),
			util.digiClock(ns.getWeakenTime(server)),
			server == peekyPorty(ns, "loop/prsm.js") ? `${server} ${util.ansi.w}---${util.ansi.y}Δ<` : server
		]), ["sec", " Δ ", "  \$cur  ", "  \$max  ", "   %   ", "  ~ete  ", ` Target ~ ${funded_list.length}/${funded_count}`]]
			.forEach(printLogLine),
		ns.print([
			"",
			` home - ${util.ramFormat(getFreeRam(ns, "home"))}/${util.ramFormat(ns.getServerMaxRam("home"))}`,
			` network - ${util.ramFormat(total_free_ram)}/${util.ramFormat(total_max_ram)}`,
			` threads - ${ns.formatNumber(Math.floor(total_free_ram / ns.getScriptRam("weaken.js")))}/${ns.formatNumber(Math.floor(total_max_ram / ns.getScriptRam("weaken.js")))} threads`,
			"",
			` bought augs x ${bought_augs_sans_nfg}, ${num_other_augs}/100 installed`,
			`${aug_info}`,
			` ${ns.read("temp/installAugsReason.txt")}`,
		].join("\n"))
	)
};

function prettyOverview(ns, timer) {
	const bar = "<>".repeat(8);
	const prsm_target = peekyPorty(ns, "loop/prsm.js");
	const gang_info = peekyPorty(ns, "loop/runGang.js");
	const hacknet_info = readyFiley(ns, "temp/hacknet_info.txt");
	const date = Number(new Date());
	const last_aug_time = Number(ns.read("temp/lastAugTime.txt")) || date;
	const overview_array = [
		[`bitnode:`, `${getCurrentNode(ns)}`],
		[`pserv:`, `${sGet(ns).filter(s => s.startsWith("#")).length}/${ns.getPurchasedServerLimit()}`],
		[`w_d lvl:`, `${Math.round(3000 * ns.getBitNodeMultipliers().WorldDaemonDifficulty)}`],
		[`city:`, `${ns.getPlayer().city}`],
		[`karma:`, `${ns.formatNumber(ns.heart.break())}`],
		[bar, bar],
		[`target:`, `${prsm_target}`],
		[`\$/s:`, `\$${ns.formatNumber(ns.getScriptIncome("loop/prsm.js"))}`],
		[`\$ total:`, `${ns.formatNumber(ns.getMoneySources().sinceInstall.hacking)}`],
		[`xp/s:`, `${ns.formatNumber(ns.getTotalScriptExpGain())}`],
		[`scripts:`, `${sGet(ns).flatMap(s => ns.ps(s)).length}`],
		[bar, bar],
		[`hN Servers:`, `${hacknet_info.num}`],
		[`hashes/Max:`, `${hacknet_info.hashes}`],
		[`hashes/s:`, `${ns.formatNumber(hacknet_info.prod)}`],
		[`profit:`, `\$${ns.formatNumber(hacknet_info.profit)}`],
		[bar, bar],
		[`status:`, `${gang_info?.cycle ?? "~"}`],
		[`members:`, `${gang_info?.memnum ?? "~"}`],
		[`power:`, `${ns.formatNumber(gang_info?.power ?? 0, 2)}/${ns.formatNumber(gang_info?.nextpower ?? 0, 2)}`],
		[`territory:`, `${ns.formatNumber(gang_info?.territory ?? 0 * 100) ?? "~"}%`],
		[`warfare?:`, `${gang_info?.tw ?? "~"}`],
		[`profit:`, `\$${ns.formatNumber(ns.getMoneySources().sinceStart.gang ?? 0)}`],
		[bar, bar],
		[`${util.tickString(timer)}`, `cycle #${Math.floor(timer / 30)}`],
		[`gvnr uptime:`, `${util.digiClock(timer * 1000)}`],
		[`t+ Augbuy:`, `${!!(date - last_aug_time) ? util.digiClock(date - last_aug_time) : "N/A"}`],
		[`t+ Install:`, `${util.digiClock(date - ns.getResetInfo().lastAugReset)}`],
		[`t+ Bitnode:`, `${util.digiClock(date - ns.getResetInfo().lastNodeReset)}`]];
	(
		CNST.HOOK0.innerText = overview_array.reduce((a, l) => `${a}\n${l[0]}`, ""),
		CNST.HOOK1.innerText = overview_array.reduce((a, l) => `${a}\n${l[1]}`, "")
	)
};

/** @param {NS} ns */
async function runScripts(ns, is_first_start) {
	(
		await [
			"solveallcontracts.js",
			...CNST.ONESHOT_FUNCTIONS.map(s => `oneshot/${s}.js`),
		]
			.reduce(async (a, script) => (
				await a,
				is_first_start && ns.tprintf(`${util.ansi.y}starting ${script}`),
				await (async runpid => (
					!!runpid
						? (await ns.getPortHandle(runpid).nextWrite(), (is_first_start && (await util.slp(70 * Math.random()), ns.tprintf(`${util.ansi.g}${script} passed init`))))
						: (ns.tprintf(`${util.ansi.r}!! ${script} DID NOT RUN !!`), await 0)))(ns.run(script)),
				await 0
			)),
		CNST.LOOP_FUNCTIONS.map(s => `loop/${s}.js`).forEach(script => !ns.isRunning(script) && ns.run(script)),
		(
			is_first_start
			&& (
				ns.print(`${util.ansi.m} Welcome to gnvr.js!`),
				ns.tprintf(`${util.ansi.g}*** Startup Complete ***`),
				await util.slp(1000), ns.run("neofetch.js")
			)
		)
	)
}

/** @param {NS} ns */
export async function gvnr(ns) {
	const refresh_delay = 1;
	const runLoop = async (is_first_start, timer) => (
		prettyLogs(ns),
		prettyOverview(ns, timer),
		timer % 30 == 0 && await runScripts(ns, is_first_start),
		await util.slp(refresh_delay * 1000),
		await runLoop(false, timer + refresh_delay)
	);
	(
		ns.tail(),
		ns.disableLog('ALL'),
		ns.tprintf(`${util.ansi.m}** ./gvnr.js **`),
		ns.atExit(() => ns.closeTail(), CNST.HOOK0.innerText = "", CNST.HOOK1.innerText = ""), // Clears the overview on exit to prevent stale data
		await runLoop(true, 0)
	)
}

/** @param {NS} ns */
export function writeLaunchers(ns) {
	const writeFile = (type, func) => ns.write(`${type}/${func}.js`, `import { ${func} } from "lib.js"; export const main = async ns =>(await ${func}(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));`, "w");
	(
		["oneshot", "loop"].forEach(dir => ns.ls("home", dir).forEach(s => ns.rm(s))),
		CNST.STANDALONE_FUNCTIONS.forEach(func => writeFile("", func)),
		CNST.LOOP_FUNCTIONS.forEach(func => writeFile("loop", func)),
		CNST.ONESHOT_FUNCTIONS.forEach(func => writeFile("oneshot", func))
	)
}

export async function graft(ns, g = ns.grafting) {
	!await is_Busy(ns) && ns.singularity.travelToCity("New Tokyo") &&
		[
			"QLink",
			"ECorp HVMind Implant",
			"Xanipher",
			"OmniTek InfoLoad",
			"nickofolas Congruity Implant",
		]
			.some(aug => g.graftAugmentation(aug) && ns.write("temp/workReport.txt", `grafting ${aug}`, "w"));
}

/** @param {NS} ns */
export async function factWork(ns, s = ns.singularity) {
	const available_augs = JSON.parse(ns.read("temp/availableAugs.txt"));
	const target_faction = available_augs.reduce((a, aug) => (
		!available_augs.includes(CNST.TRP)
		&& aug.fact.name != CNST.GANG_NAME
		&& aug.repdelta > a.repdelta)
		? aug
		: a, { fact: { name: "Daedalus" }, repdelta: 0 }
	).fact.name;
	(
		!await is_Busy(ns)
		&& !!target_faction
		&& (
			s.stopAction(),
			["field", "security", "hacking"].some(job => s.workForFaction(target_faction, job, 0))
		)
	)
}

/** @param {NS} ns */
export async function donate(ns, s = ns.singularity) {
	const availableAugs = JSON.parse(ns.read("temp/availableAugs.txt"));
	const rep_multi = await Run(ns, "getBitNodeMultipliers", "", ".RepToDonateToFaction");
	const nfginfo = JSON.parse(ns.read("temp/nfgInfo.txt"));
	const donatefaction = "The Black Hand";
	(
		// Donate to TBH to grind NF Governor
		s.getFactionFavor(donatefaction) >= 150 * rep_multi
		&& s.getFactionRep(donatefaction) < nfginfo.rep // If we need the rep
		&& s.donateToFaction(donatefaction, Math.max(nfginfo.cost, 100e9)) // try to donate
		&& ns.tprintf(`${util.ansi.m}Donated \$${ns.formatNumber(Math.max(nfginfo.cost, 100e9))} to ${donatefaction} (grinding NFG)`), // print
		// Donate to factions for augs
		availableAugs.forEach(aug =>
			aug.fact.name != CNST.GANG_NAME // don't donate to gang
			&& s.getFactionFavor(aug.fact.name) > 150 * rep_multi
			&& aug.repdelta > 0 // If we  need the rep
			&& s.donateToFaction(aug.fact.name, 100e9) // try to donate
			&& ns.tprintf(`${util.ansi.m}Donated \$100B to ${aug.fact.name}`) // print
		)
	)
}

/** @param {NS} ns */
export async function installAugs(ns) {
	const date = new Date();
	const timestamp = Date().slice(4,24);
	const augs_array = JSON.parse(ns.read("temp/availableAugs.txt")).filter(aug => aug.fact.name != CNST.GANG_NAME);
	const bought_augs = JSON.parse(ns.read("temp/boughtAugs.txt"));
	const time_since_last_aug = date - (ns.read("temp/lastAugTime.txt") ?? date);
	const lowest_price = augs_array.reduce((a, b) => a.aug != CNST.TRP && a?.price < b?.price ? a : b, Infinity)?.price ?? 0;
	const favour_log = aug => `increased ${aug.fact.name} favour by ${Math.floor(aug.favdelta)} to ${Math.floor(aug.favdelta + aug.fav)} - ${timestamp}}`;
	const timeout_log = `timeout - \$${ns.formatNumber(ns.getServerMoneyAvailable("home"))}/\$${ns.formatNumber(lowest_price)}, multi x${Math.floor(ns.read("temp/priceRatio.txt"))} - ${timestamp}`;
	const writeLog = log => (ns.write("temp/installAugsReason.txt", `installAugs #${(1 + +ns.read("temp/installCounter.txt"))}: ${log}`, "w"), true);
	const fav_to_donate = 150 * await Run(ns, "getBitNodeMultipliers", [], ".RepToDonateToFaction");
	const checkFavour = () => augs_array.some(aug => aug.fact.fav < fav_to_donate && (aug.fact.favdelta >= 50 || aug.fact.favdelta + aug.fact.fav > fav_to_donate) && writeLog(favour_log(aug)));
	const checkTimeout = () => (time_since_last_aug > 1800000 && lowest_price > ns.getServerMoneyAvailable("home")) ? (writeLog(timeout_log)) : false;
	const hasTRP = () => bought_augs.includes(CNST.TRP) && writeLog("installed The Red Pill");
	(
		(hasTRP() && await Run(ns, "singularity.softReset", ["rset.js"])), // if have TRP then install
		!await is_Busy(ns) // if not busy
		&& !!bought_augs.length // and augs available
		&& (checkTimeout() || checkFavour()) // and (timed out or can hit favour breakpoint)
		&& ( // then install
			ns.write("temp/installCounter.txt", 1 + +ns.read("temp/installCounter.txt"), "w"),
			ns.write("report/installAugsLog.txt", ns.read("temp/installAugsReason.txt") + "\n", "a"),
			await Run(ns, "singularity.installAugmentations", ["rset.js"])
		)
	)
}

/** @param {NS} ns */
export function buyAugs(ns, s = ns.singularity) {
	const timeStamp = () => ns.write("temp/lastAugTime.txt", Date.now(), "w");
	const termPrint = (aug) => ns.tprintf(`${util.ansi.m}Purchased ${util.ansi.c}${aug.aug}${util.ansi.m} from ${aug.fact.name} for \$${ns.formatNumber(aug.price)}`);
	const termPrintNFG = (faction) => ns.tprintf(`${util.ansi.m}Purchased ${util.ansi.c}${CNST.NFG}${util.ansi.m} from ${faction} for \$${ns.formatNumber(s.getAugmentationPrice(CNST.NFG))}`);
	const availableAugs = JSON.parse(ns.read("temp/availableAugs.txt"));
	(
		ns.getPlayer().factions.forEach(f => f != CNST.GANG_NAME && s.purchaseAugmentation(f, CNST.NFG) && (timeStamp(), termPrintNFG(f))),
		availableAugs.forEach(aug => (s.purchaseAugmentation(aug.fact.name, aug.aug)) && (timeStamp(), termPrint(aug)))
	)
}

/** @param {NS} ns */
export async function cityAugs(ns, s = ns.singularity, skill = ns.getPlayer().skills) {
	const companies = {
		ck: "Clarke Incorporated",
		ba: "Bachman & Associates",
		bi: "Blade Industries",
		ki: "KuaiGong International",
		oi: "OmniTek Incorporated",
		nw: "NWO",
		mc: "MegaCorp",
		ft: "Fulcrum Technologies",
		ec: "ECorp",
	};
	const cities = {
		st: "Sector-12",
		is: "Ishima",
		nt: "New Tokyo",
		cq: "Chongqing",
		av: "Aevum",
		vh: "Volhaven",
	};
	const grindStats = () => (
		s.stopAction(),
		s.workForFaction("The Black Hand", "field", 0),
		ns.write("temp/workReport.txt", "Grinding stats", "w")
	);
	const grindChar = () => (
		s.travelToCity("Volhaven"),
		s.stopAction(),
		s.universityCourse("ZB Institute of Technology", "leadership", 0)
	);
	const workFor = company => (
		s.stopAction(),
		s.workForCompany(company, false),
		ns.write("temp/workReport.txt", `Working at ${company}`, "w")
	);
	const needAug = aug => !JSON.parse(ns.read("temp/ownedAugs.txt")).includes(aug);

	// behold 
	(
		!await is_Busy(ns) &&
		(needAug("NutriGen Implant")
			? s.travelToCity(cities.nt)
			: needAug("INFRARET Enhancement")
				? s.travelToCity(cities.is)
				: needAug("Social Negotiation Assistant (S.N.A)")
					? s.travelToCity(cities.nt)
					: needAug("DermaForce Particle Barrier")
						? s.travelToCity(cities.vh)
						: needAug("BrachiBlades")
							? s.travelToCity(cities.av)
							: needAug("CashRoot Starter Kit")
								? s.travelToCity(cities.st)
								: needAug("Neuregen Gene Modification")
									? s.travelToCity(cities.cq)
									: needAug("Neuroreceptor Management Implant")
										? s.travelToCity(cities.nt)
										: needAug("PCMatrix")
											? s.travelToCity(cities.av)
											: needAug("Graphene Bionic Arms Upgrade")
												? s.travelToCity(cities.cq)
												: Math.min(skill.strength, skill.defense, skill.dexterity, skill.agility) < 1200
													? grindStats()
													: skill.charisma < 250
														? grindChar()
														: (Object.values(companies).forEach(c => c == "Fulcrum Technologies"
															? s.applyToCompany(c, "IT")
															: s.applyToCompany(c, "security")),
															(needAug("Neuronal Densification")
																? workFor(companies.ck)
																: needAug("nextSENS Gene Modification")
																	? workFor(companies.ck)
																	: needAug("SmartJaw")
																		? workFor(companies.ba)
																		: needAug("Neotra")
																			? workFor(companies.bi)
																			: needAug("Photosynthetic Cells")
																				? workFor(companies.ki)
																				: needAug("OmniTek InfoLoad")
																					? workFor(companies.oi)
																					: needAug("Xanipher")
																						? workFor(companies.ck)
																						: needAug("Hydroflame Left Arm")
																							? workFor(companies.nw)
																							: needAug("CordiARC Fusion Reactor")
																								? workFor(companies.mc)
																								: needAug("PC Direct-Neural Interface NeuroNet Injector")
																									? workFor(companies.ft)
																									: needAug("ECorp HVMind Implant")
																										? workFor(companies.ec)
																										: grindStats())))
	)
}

export async function ownedAugs(ns) {
	const wrt = async (file, data) => await Run(ns, "write", [file, JSON.stringify(data), "w"]);
	(
		(!await Run(ns, "fileExists", ["temp/installCounter.txt"]) && wrt("temp/installCounter.txt", 0)),
		wrt(
			"temp/boughtAugs.txt",
			(await Run(ns, "singularity.getOwnedAugmentations", [1])).slice((await Run(ns, "singularity.getOwnedAugmentations", [0])).length)
		),
		wrt(
			"temp/priceRatio.txt",
			await Run(ns, "singularity.getAugmentationPrice", ["Combat Rib I"]) / await Run(ns, "singularity.getAugmentationBasePrice", ["Combat Rib I"])
		),
		wrt(
			"temp/ownedAugs.txt",
			await Run(ns, "singularity.getOwnedAugmentations", [1])
		),
		wrt(
			"temp/installedAugs.txt",
			await Run(ns, "singularity.getOwnedAugmentations", [0])
		),
		wrt(
			"temp/nfgInfo.txt",
			{
				cost: await Run(ns, "singularity.getAugmentationPrice", [CNST.NFG]),
				rep: await Run(ns, "singularity.getAugmentationRepReq", [CNST.NFG])
			}
		)
	)
}
/** @param {NS} ns */
export async function availableAugs(ns, s = ns.singularity) {
	const owned_augs = JSON.parse(ns.read("temp/ownedAugs.txt"));
	const forbidden_factions = ["Shadows of Anarchy", "Bladeburners", "Church of the Machine God"];

	const aug_object = ns.getPlayer().factions
		.filter(faction => !forbidden_factions.includes(faction))
		.flatMap(faction => s.getAugmentationsFromFaction(faction).filter(aug => !owned_augs.includes(aug))
			.map(augment => ({
				aug: augment,
				price: s.getAugmentationPrice(augment),
				repreq: s.getAugmentationPrice(augment),
				repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
				fact: {
					name: faction,
					fav: s.getFactionFavor(faction),
					favdelta: s.getFactionFavorGain(faction),
				},
			}))
		);
	ns.write("temp/availableAugs.txt", JSON.stringify(aug_object), "w");
}

/** @param {NS} n */
export async function backdoor(n, s = n.singularity) {
	const servers = ["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I",]
		.filter(server => (
			!n.getServer(server).backdoorInstalled
			&& n.hasRootAccess(server)
			&& n.getHackingLevel() > n.getServerRequiredHackingLevel(server)
		));
	n.print(servers)
	servers.map(server => (
		!n.getRunningScript("bd.js", "home", server)?.pid
		&& n.run("bd.js", 1, server)
	))
}

/** @param {NS} ns */
export function hacknetShindigs(ns, h = ns.hacknet) {
	const node_array = util.getIndexArray(h.numNodes());
	const profits = ns.getMoneySources().sinceInstall.hacknet + ns.getMoneySources().sinceInstall.hacknet_expenses;
	const moneyobj = sGet(ns).map(server => ({
		name: server,
		money: ns.getServerMaxMoney(server),
		sec: ns.getServerMinSecurityLevel(server),
	}));
	const moneytargetserver = moneyobj.reduce((a, b) => a.money < b.money ? a : b).name;
	const sectargetserver = moneyobj.reduce((a, b) => a.sec > b.sec ? a : b).name;
	const info = {
		num: h.numNodes(),
		hashes: `${ns.formatNumber(h.numHashes())}/${ns.formatNumber(h.hashCapacity(), 0)}`,
		prod: node_array.reduce((a, n) => a + h.getNodeStats(n).production, 0),
		profit: profits,
	};
	const upMoney = () => (
		ns.getServerMaxMoney(moneytargetserver) < 10e12
		&& h.spendHashes("Increase Maximum Money", moneytargetserver)
		&& upMoney()
	);
	const downSec = () => (
		ns.getServerMinSecurityLevel(sectargetserver) > 1
		&& h.spendHashes("Reduce Minimum Security", sectargetserver)
		&& downSec()
	);
	const nodeBuy = () => !!(h.purchaseNode() + 1) && nodeBuy();
	const upParts = () => ["Level", "Core", "Ram", "Cache"].forEach(part => node_array.forEach(n => h[`upgrade${part}`](n) && upParts()));
	(
		profits > -1
		&& (upMoney(), downSec(), nodeBuy(), upParts()),
		ns.write("temp/hacknet_info.txt", JSON.stringify(info), "w")
	)
}

/** @param {NS} ns */
export async function steves(ns, s = ns.sleeve, b = ns.bladeburner, g = ns.gang) {
	const steves = util.getIndexArray(8).sort((a, b) => s.getSleeve(b).storedCycles - s.getSleeve(a).storedCycles); // steves is an array [0..7] sorted by stored idle cycles
	const check_low_skill = steve => (
		["strength", "defense", "dexterity", "agility"]
			.reduce((a, skill) => s.getSleeve(steve).skills[skill] < 25 ? skill : a, false)
	);
	const check_BB_infil = () => !steves.map(steve => s.getTask(steve)).some(task => task?.type === "INFILTRATE");
	const train = steve => (s.travel(steve, "Sector-12"), s.setToGymWorkout(steve, "Powerhouse Gym", check_low_skill(steve)));
	const go_stabbin = steve => s.setToCommitCrime(steve, "Homicide");
	const bb_infil = steve => s.setToBladeburnerAction(steve, "Infiltrate synthoids");
	const bb_contracts = steve => b.getContractNames().some(contract => (
		!steves.some(steve => s.getTask(steve)?.actionName === contract)
		&& b.getActionCountRemaining("Contract", contract)
		&& s.setToBladeburnerAction(steve, "Take on contracts", contract)
	));
	const recover_or_idle = (steve) => s.getSleeve(steve).shock ? s.setToShockRecovery(steve) : s.setToIdle(steve);
	const buy_augs = steve => (
		s.getSleevePurchasableAugs(steve)
			.sort((a, b) => a.cost - b.cost)
			.forEach(aug => s.purchaseSleeveAug(steve, aug.name))
	);
	(
		steves.forEach(steve => (
			(s.getSleeve(steve).shock == 0 && buy_augs(steve)),
			s.getSleeve(steve).shock > 90
				? recover_or_idle(steve)
				: !!check_low_skill(steve)
					? train(steve) // train if weak or
					: !g.inGang()
						? go_stabbin(steve) // murder for gang or 
						: check_BB_infil()
							? bb_infil(steve) // one to bb infil
							: bb_contracts(steve) // or fill bb contracts,
							|| recover_or_idle(steve) // or shock recover, or idle
		))
	)
}

/** @param {NS} ns */
export async function bladeBurner(ns, s = ns.singularity, bb = ns.bladeburner) {
	const upSkill = () => bb.upgradeSkill(bb.getSkillNames().reduce((a, b) => bb.getSkillUpgradeCost(a) < bb.getSkillUpgradeCost(b) ? a : b)) && upSkill();
	(
		bb.joinBladeburnerDivision(),
		bb.inBladeburner() && !await is_Busy(ns)
		&& (
			upSkill(),
			bb.getBlackOpNames()
				.filter(op => (([a, b]) => a + b > 1.8)(bb.getActionEstimatedSuccessChance("BlackOps", op)))
				.forEach(op => (s.stopAction(), bb.startAction("BlackOps", op)))

		)
	)
}

/** @param {NS} ns */
export async function stan(ns, s = ns.stanek, _ = s.acceptGift()) {
	const frags = JSON.parse(ns.read("frags.js") || "0");
	const spare_threads = Math.floor((getFreeRam(ns, "home") - 100) / ns.getScriptRam("chrg.js"));
	const target = util.getIndexArray(s.giftWidth())
		.flatMap(x => util.getIndexArray(s.giftHeight())
			.map(y => s.getFragment(x, y)))
		.reduce((a, b) => !!b && b.id < 100 && a.numCharge < b.numCharge ? a : b, { numCharge: Infinity });
	(
		!!frags
		&& (
			spare_threads > 0 && target != Infinity
				? ns.exec("chrg.js", "home", spare_threads, target.x, target.y)
				: (ns.print("no threads! skipping..."))
		),
		ns.writePort(ns.pid, ""),
		await util.slp(10000),
		ns.disableLog("ALL"),
		ns.enableLog("exec"),
		await stan(ns)
	)
}

/** @param {NS} ns */
export async function runGang(n, g = n.gang) {
	const tryRecruit = (name = CNST.MEMBER_NAMES[Math.floor(Math.random() * CNST.MEMBER_NAMES.length)]) => g.getMemberNames().includes(name) ? tryRecruit() : g.recruitMember(name) && n.tprintf(`${util.ansi.r}Recruited ${util.ansi.g}${name}`);
	const setTW = () => g.setTerritoryWarfare(!Object.keys(other_gang_info()).some(h => h != CNST.GANG_NAME && g.getChanceToWinClash(h) < .55));
	const slp = async t => await n.sleep(t / (g.getBonusTime() > 5000 ? 25 : 1));
	const other_gang_info = g.getOtherGangInformation;
	const tick = async (q = () => Object.values(other_gang_info()).reduce((a, g) => a + g.power), l = q()) => (await n.sleep(50), l == q() && await tick());
	const assignJob = (task, focus = g.getMemberNames().length == 12 ? "moneyGain" : "respectGain") => (
		g.getMemberNames().forEach(member => (
			g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)),
			["agi", "str", "def", "dex"].map(skill => g.getAscensionResult(member)?.[skill]).reduce((a, c) => a + c) > 6 && g.ascendMember(member),
			g.setMemberTask(member, task ?? g.getTaskNames().map(n => (g.setMemberTask(member, n), { name: n, gain: g.getMemberInformation(member)[focus] })).reduce((a, b) => a.gain > b.gain ? a : b).name)
		)),
		printToPort(task?.split(" ").map(a => a[0]).join("") ?? "Jobs")
	);
	const printToPort = job => (
		n.clearPort(n.pid),
		n.writePort(n.pid, JSON.stringify({
			cycle: job,
			memnum: g.getMemberNames().length,
			power: g.getGangInformation().power,
			nextpower: Math.max(...Object.values(other_gang_info()).map(g => g.power)),
			territory: g.getGangInformation().territory * 100,
			tw: g.getGangInformation().territoryWarfareEngaged,
		}))
	);
	(
		(g.inGang() || g.createGang(CNST.GANG_NAME))
		&& (
			tryRecruit(),
			setTW(),
			assignJob(),
			await slp(15000),
			assignJob("Train Combat"),
			await slp(4500),
			assignJob("Territory Warfare"),
			await tick(),
			await runGang(n)
		)
	)
}

/** @param {NS} ns */
export async function golfedGang(n, g = n.gang,
	m = "Slum Snakes",
	s = async t => await n.sleep(t / (g.getBonusTime() > 5000 ? 25 : 1)),
	a = (j, f = g.getMemberNames().length == 12 ? "moneyGain" : "respectGain") =>
		g.getMemberNames().forEach(m => (
			g.getEquipmentNames().forEach((i) => g.purchaseEquipment(m, i)),
			["agi", "str", "def", "dex"].map(k => g.getAscensionResult(m)?.[k]).reduce((a, c) => a + c) > 6 && g.ascendMember(m),
			g.setMemberTask(m, j ?? g.getTaskNames().map(n => (g.setMemberTask(m, n), { n: n, v: g.getMemberInformation(m)[f] })).reduce((a, b) => a.v > b.v ? a : b).n)
		))
) {
	(g.inGang() || g.createGang(m))
		&& (
			g.recruitMember(Math.random()),
			g.setTerritoryWarfare(!Object.keys(g.getOtherGangInformation()).some(h => h != m && g.getChanceToWinClash(h) < .55)),
			a(),
			await s(15000),
			a("Train Combat"),
			await s(4500),
			a("Territory Warfare"),
			await g.nextUpdate(),
			await runGang(n)
		)
}

/** @param {NS} ns */
export async function prsm(ns) {
	// PRiSM -Δ<
	// A batcher
	ns.disableLog('ALL');
	ns.enableLog('exec');
	const hack_percentage = 0.01; // decimal percentage to hack
	const job_delay = 20; // delay between HWGW jobs in ms
	const batch_delay = job_delay * 5; // delay between batches
	//	
	const decideThreads = (available, requested) => available < requested ? available : requested;
	const getThreadDiff = (total, threads) => total - threads;
	const dummy_player = Object.freeze(await Run(ns, "getPlayer"));
	const getHostRam = (server, spareram = server == "home" ? (ns.getServerMoneyAvailable("home") > 150e9 ? 1000 : 100) : 0) => Math.floor(getFreeRam(ns, server) - spareram);
	const getAvailableThreads = (script, host_list) => host_list.map(server => Math.floor(getHostRam(server) / ns.getScriptRam(`${script.name}.js`))).reduce((threads, sum) => threads + sum);
	const modPlayer = (player, threads, target) => Object.freeze(Object.fromEntries(Object.entries(player).map(entry => (
		(entry[0] == "exp" && (entry[1].hacking += ns.formulas.hacking.hackExp(target, player) * threads)),
		(entry[0] == "skills" && (entry[1].hacking = ns.formulas.skills.calculateSkill(player.exp.hacking, player.mults.hacking_exp))),
		entry
	))));
	const sendJobs = (object, dummy_player) => (
		object.threads = decideThreads(object.available, object.needed),
		object.available = getThreadDiff(object.available, object.threads),
		object.needed = getThreadDiff(object.needed, object.threads),
		object.threads > 0 && !!ns.exec(`${object.script.name}.js`, object.host, object.threads, object.target.hostname, object.script.time)
			? ((object.remaining > 0 && object.needed > 1)
				? sendJobs(object, modPlayer(dummy_player, object.threads, object), object)
				: modPlayer(dummy_player, object.threads, object.target))
			: dummy_player
	);
	const runLoop = async (run_dummy_player) => {
		["hack", "grow", "weaken"].forEach(script => (ns.write(`${script}.js`, `export const main = async ns => await ns.${script}(ns.args[0], { additionalMsec: ns.args[1] })`, "w"), sGet(ns).forEach(server => ns.scp(`${script}.js`, server))));
		const host_list = sGet(ns).filter(server => ns.hasRootAccess(server) && server.substring(0, 7) != "hacknet");
		const target = ns.getServer(sGet(ns).reduce((a, s) => {
			const rank = s => ns.getServerMaxMoney(s) / ns.getServerMinSecurityLevel(s);
			return (
				(
					ns.hasRootAccess(s)
					&& ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel() / 2
					&& rank(s) > rank(a)
					&& s
				)
				|| a
			)
		}
		))
		const hack_time = ns.getHackTime(target.hostname);
		const raw_hack_jobs = hack_percentage / (ns.formulas.hacking.hackPercent(target, run_dummy_player));
		const hack_jobs = raw_hack_jobs < 1 || raw_hack_jobs == Infinity ? 1 : raw_hack_jobs;
		const grow_jobs = ns.growthAnalyze(target.hostname, (1 / (1 - (ns.formulas.hacking.hackPercent(target, run_dummy_player) * hack_jobs))));
		const hack_sec_jobs = (hack_jobs * 0.04);
		const grow_sec_jobs = (grow_jobs * 0.08);
		const wekn_jobs = (target.hackDifficulty - target.minDifficulty) / ns.weakenAnalyze(1);
		const hwekn_jobs = wekn_jobs + grow_sec_jobs;
		const gwekn_jobs = wekn_jobs + hack_sec_jobs;
		const batch_total = hack_jobs + grow_jobs + hwekn_jobs + gwekn_jobs;
		const whole_jobs_array = [
			{ name: "weaken", jobs: hwekn_jobs, time: job_delay },
			{ name: "weaken", jobs: gwekn_jobs, time: job_delay * 3 },
			{ name: "grow", jobs: grow_jobs, time: job_delay * 2 + (hack_time * 0.8) },
			{ name: "hack", jobs: hack_jobs, time: 0 + (hack_time * 3) },
		];
		const jobs_array = (
			target.moneyAvailable / target.moneyMax < 0.9
			|| target.hackDifficulty > target.minDifficulty + 3
		)
			? whole_jobs_array.slice(1, 3) // gw to prep
			: whole_jobs_array;
		const mod_run_dummy_player = jobs_array.flatMap(script =>
			host_list.map(host => // Iterate through hosts and fill each one with jobs until done
				sendJobs(
					{
						needed: Math.floor(
							batch_total > getAvailableThreads(script, host_list)
								? script.jobs * (getAvailableThreads(script, host_list) / batch_total)
								: script.jobs
						), // If the batch can't be run in available ram, shrink it to fit
						available: Math.floor(getHostRam(host) / ns.getScriptRam(`${script.name}.js`)),
						script: script,
						host: host,
						target: target
					},
					dummy_player,
				)
			)
		).pop();
		(
			ns.clearPort(ns.pid),
			ns.writePort(ns.pid, JSON.stringify(target.hostname)),
			await util.slp(batch_delay),
			await runLoop(mod_run_dummy_player)
		)
	};
	(
		await runLoop(dummy_player)
	)
}

/** @param {NS} ns */
export async function stonks(ns, s = ns.stock) {
	const thing = Object.fromEntries(s.getSymbols().map(sym => [sym, { "ask": s.getAskPrice(sym), "delta": 0, "previous": 0 }]));
	(
		s.purchaseWseAccount(),
		s.getSymbols().forEach(s =>
			ns.tprint(thing[s])),






		await s.nextUpdate()
	)
}



/** @param {NS} ns */
export async function neofetch(ns) {
	const dateFormat = date => `${Math.floor(date / (60 * 24))} days, ${Math.floor(date / 60 % 24)} hours, ${Math.floor(date % 60)} mins`;
	const pad = ` `.repeat(35);
	const title = `muesli@home`;
	const dashes = util.ansi.w + "-".repeat(11);
	const os = `${util.ansi.g}OS: ${util.ansi.w}Fulcrum Technologies Chapeau Linux x86_64`;
	const host = `${util.ansi.g}Host: ${util.ansi.w}${ns.getHostname()}`;
	const kernel = `${util.ansi.g}Kernel: ${util.ansi.w}${CNST.DOC.title}`;
	const uptime = `${util.ansi.g}Uptime: ${util.ansi.w}${dateFormat(ns.getPlayer().totalPlaytime / (1000 * 60))}`;
	const packages = `${util.ansi.g}Packages: ${util.ansi.w}${ns.ls("home").length} (bitpkg)`;
	const shell = `${util.ansi.g}Shell: ${util.ansi.w}bit-sh 6.9`;
	const resolution = `${util.ansi.g}Resolution: ${util.ansi.w}${CNST.WIN.innerWidth} x ${CNST.WIN.innerHeight}`;
	const wm = `${util.ansi.g}WM: ${util.ansi.w}BitBurner WM`;
	const terminal = `${util.ansi.g}Terminal: ${util.ansi.w}BiTTY`;
	const cpu = `${util.ansi.g}CPU: ${util.ansi.w}Gen FT-6900x ${ns.getServer("home").cpuCores} core`;
	const memory = `${util.ansi.g}Memory: ${util.ansi.w}${ns.getServer("home").ramUsed * 1000} MiB / ${ns.getServer("home").maxRam * 1000} MiB`;
	const ascii = [`${pad}${util.ansi.g}neofetch ~`,
	`    ${util.ansi.g}FFFFFFFF\\${util.ansi.r}.......${util.ansi.g}TTTTTTTT\\      ${title}`,
	`    ${util.ansi.g}FF \\_____|${util.ansi.r}:~:~:~${util.ansi.g}\\__TT \\__|     ${dashes}`,
	`    ${util.ansi.g}FF |${util.ansi.r}:=:=:=:=:=:=:=:${util.ansi.g}TT |${util.ansi.r}=\\      ${os}`,
	`   ${util.ansi.r}/${util.ansi.g}FFFFF\\${util.ansi.r}-*-*-*-*-*-*-${util.ansi.g}TT |${util.ansi.r}*-\\     ${host}`,
	`  ${util.ansi.r}/*${util.ansi.g}FF \\__|${util.ansi.r}************${util.ansi.g}TT |${util.ansi.r}***\\    ${kernel}`,
	`  ${util.ansi.r}==${util.ansi.g}FF |${util.ansi.r}====${util.ansi.g}CCCCCC\\${util.ansi.r}====${util.ansi.g}TT |${util.ansi.r}====\\   ${uptime}`,
	`  ${util.ansi.r}##${util.ansi.g}FF |${util.ansi.r}###${util.ansi.g}CCC __CC\\${util.ansi.r}###${util.ansi.g}TT |${util.ansi.r}####||  ${packages}`,
	`  ${util.ansi.r}==${util.ansi.g}\\_\\|${util.ansi.r}===${util.ansi.g}CC /${util.ansi.r}==${util.ansi.g}\\__|${util.ansi.r}==${util.ansi.g}\\_\\|${util.ansi.r}====||  ${shell}`,
	`  ${util.ansi.r}\\********${util.ansi.g}CC |${util.ansi.r}***************/\\|  ${resolution}`,
	`   ${util.ansi.r}\\*-*-*-*${util.ansi.g}CC |${util.ansi.r}-*-*-*-*-*-*-*/ /   ${wm}`,
	`    ${util.ansi.r}\\:=:=:=${util.ansi.g}CC |${util.ansi.r}:=${util.ansi.g}CC\\${util.ansi.r}=:=:=:=:/ /    ${terminal}`,
	`     ${util.ansi.r}\\~:~:~${util.ansi.g}\\CCCCCC  |${util.ansi.r}~:~:~:/ /     ${cpu}`,
	`      ${util.ansi.r}\\_____${util.ansi.g}\\_____\\/${util.ansi.r}______/ /      ${memory}`,
	`       ${util.ansi.r}\\__________________\\/`,
	`${pad}${util.ansi.k}████${util.ansi.r}████${util.ansi.g}████${util.ansi.y}████${util.ansi.b}████${util.ansi.m}████${util.ansi.c}████${util.ansi.d}████`,
	`${pad}${util.ansi.k}████${util.ansi.r}████${util.ansi.g}████${util.ansi.y}████${util.ansi.b}████${util.ansi.m}████${util.ansi.c}████${util.ansi.w}████`,
	];
	(
		await ascii.reduce(async (a, b) => (
			await a,
			ns.tprintf(b),
			util.slp(Math.random() * 10 * 7)), Promise.resolve())
	)
}


// Corp WIP

/** @param {NS} ns 
export async function corp(ns, c = ns.corporation) {
	const cities = ["Sector-12", "Aevum", "Chongqing", "New Tokyo", "Ishima", "Volhaven"];
	const corpname = "corp corp", agridivname = "plont corp", chemdivname = "chem corp", tobdivname = "cough corp", watdivname = "wet corp";
	function buyStuff(ns, c = ns.corporation) {
		const upgradenames = c.getConstants().upgradeNames;
		const upgradecosts = upgradenames.map(upgrade => c.getUpgradeLevelCost(upgrade));
		const mincostindex = upgradecosts.indexOf(Math.min(...upgradecosts));
		let limiter = 0
		while (c.getCorporation().funds / 4 > c.getUpgradeLevelCost(upgradenames[mincostindex])) {
			c.levelUpgrade(upgradenames[mincostindex]); // Level upgrades from cheapest first
			limiter++
			if (limiter > 8) break;
		}
		c.getCorporation().divisions.reverse().forEach(div => {
			while (c.getHireAdVertCost(div) < c.getCorporation().funds)
				c.hireAdVert(div);
		}); // Buy AdVert
	}

	async function newCycle(ns, c = ns.corporation) {
		while (c.getCorporation().state !== "START") await ns.asleep(1000);
		return;
	}

	async function divMaintenance(ns, c = ns.corporation, divname) {
		ns.tprint(divname)
		if (c.getDivision(divname).researchPoints > 70000 && !c.hasResearched("Market-TA.II")) {
			c.research(divname, "Market-TA.I");
			c.research(divname, "Market-TA.II");
		}
		let producstonlystr = "Base"
		if (divname == tobdivname) producstonlystr = "ProductsOnly"
		if (c.hasResearched(divname, "Market-TA.II")) {
			c.getConstants()[`researchNames${producstonlystr}`].forEach(upgrade =>
				(c.getDivision(divname).researchPoints > c.getResearchCost(divname, upgrade) && !c.hasResearched(divname, upgrade)) && c.research(divname, upgrade)
			)
		}
		for (let city of cities) {
			c.getOfficeSizeUpgradeCost(divname, city, 20) < c.getCorporation().funds && c.upgradeOfficeSize(divname, city, 20)
			while (c.getOffice(divname, city).size > c.getOffice(divname, city).numEmployees) {
				c.hireEmployee(divname, city); // Employ dudes
			}
			c.getOffice(divname, city).avgEnergy < 100 && c.buyTea(divname, city); // Tea
			c.getOffice(divname, city).avgMorale < 100 && c.throwParty(divname, city, 1e6); // Parties
			c.getUpgradeWarehouseCost(divname, city) < c.getCorporation().funds && c.upgradeWarehouse(divname, dity); // warehouse

			let size = c.getOffice(divname, city).size;
			const getJobs = (s) => Math.ceil(size * s);
			let assignment = { ops: 0.25, eng: 0.25, mgm: 0.25, rsc: 0.20, bus: 0.05 };
			if (divname === tobdivname && city === "Sector-12") assignment = { ops: (0.06), eng: (0.3), bus: (0.08), mgm: (0.56), rsc: 0 };
			if (divname === tobdivname && city !== "Sector-12") assignment = { ops: (0.1), eng: (0.1), bus: (0.1), mgm: (0.2), rsc: 0.5 };
			const assign = c.setAutoJobAssignment;
			const tasks = {
				rsc: "Research & Development",
				ops: "Operations",
				eng: "Engineer",
				bus: "Business",
				mgm: "Management",
			};
			c.getConstants().employeePositions.forEach(job => assign(divname, city, job, 0))
			await newCycle(ns);
			let remaining = c.getOffice(divname, city).size
			for (let key of Object.keys(assignment)) {
				let jobs = getJobs(assignment[key])
				if (jobs > remaining) jobs = remaining
				assign(divname, city, tasks[key], jobs);
				remaining = remaining - jobs
			}
		}
	}


	async function divSetup(ns, c = ns.corporation, divname, industry) {
		divname == agridivname ? industry = "Agriculture" : divname == chemdivname ? industry = "Chemical" : industry = "Tobacco";
		c.getCorporation().divisions.includes(divname) || c.expandIndustry(industry, divname); // Make agri div
		cities.forEach(city => {
			c.purchaseWarehouse(divname, city)
			c.getDivision(divname).cities.includes(city) || c.expandCity(divname, city); // Expand into each city
			while (c.getOffice(divname, city).size > c.getOffice(divname, city).numEmployees) {
				c.hireEmployee(divname, city); // Employ dudes
			}
			c.setAutoJobAssignment(divname, city, "Operations", 1)
			c.setAutoJobAssignment(divname, city, "Engineer", 1)
			c.setAutoJobAssignment(divname, city, "Business", 1)
			c.setSmartSupply(divname, city, 1); // Set Smart Supply
			if (divname == chemdivname) {
				c.exportMaterial(divname, city, agridivname, city, "Chemicals", "(IPROD+IINV/10)*(-1)") // Export chems to plonts
				c.sellMaterial(divname, city, "Chemicals", "MAX", "MP") // Sell the rest
				c.exportMaterial(agridivname, city, divname, city, "Plants", "(IPROD+IINV/10)*(-1)") // Export plonts to chems
			} else if (divname == agridivname) {
				c.sellMaterial(divname, city, "Plants", "MAX", "MP"); // Sell plants and food at MAX/MP for now
				c.sellMaterial(divname, city, "Food", "MAX", "MP");
			}
		});
		// Initial warehouse upgrades
		c.levelUpgrade("Smart Storage")
		c.levelUpgrade("Smart Storage")
		c.levelUpgrade("Smart Storage")
		if (divname == tobdivname) c.makeProduct(tobdivname, "Sector-12", "Death Sticks", 1e9, 1e9)
		cities.forEach(city => {
			c.upgradeWarehouse(divname, city, 4); // Upgrade warehouses 3 times 
		});

		c.hireAdVert(divname)
		c.hireAdVert(divname)

		// Buy boost materials
		while (c.getCorporation().state !== "START")
			await ns.asleep(500);
		cities.forEach(city => {
			c.buyMaterial(divname, city, "Real Estate", 7438.8);
			c.buyMaterial(divname, city, "AI Cores", 108);
			c.buyMaterial(divname, city, "Hardware", 102.1);
		});
		// Set purchases back to 0 	
		while (c.getCorporation().state !== "PRODUCTION")
			await ns.asleep(500);
		cities.forEach(city => {
			c.buyMaterial(divname, city, "Real Estate", 0);
			c.buyMaterial(divname, city, "AI Cores", 0);
			c.buyMaterial(divname, city, "Hardware", 0);
		});
		return;
	}

	//ns.disableLog('ALL');
	// Constants
	(!(c.hasCorporation()) || c.createCorporation(corpname)) && ns.exit(); // exit if no corp made

	const upgradeToLevel = (level, upgradename) => { while (level < c.getUpgradeLevel(upgradename)) c.levelUpgrade(upgradename); };
	// Initial unlocks
	try {
		c.purchaseUnlock("Smart Supply");
	} catch { }
	// Agri division initial setup
	c.getCorporation().divisions.includes(agridivname) || await divSetup(ns, c = ns.corporation, agridivname);
	while (c.getInvestmentOffer().funds < 100e9) {
		ns.clearPort(ns.pid);
		ns.writePort(ns.pid, `agri done - Awaiting offer \$${ns.formatNumber(c.getInvestmentOffer().funds)}/\$250b`);
		awaitdivMaintenance(ns, c, agridivname);
		await util.slp(20000);
	}
	(c.getInvestmentOffer().round == 1) && c.acceptInvestmentOffer();
	(c.getInvestmentOffer().round == 2) && c.acceptInvestmentOffer();
	try {
		c.purchaseUnlock("Export");
	} catch { }
	c.getCorporation().divisions.includes(chemdivname) || await divSetup(ns, c = ns.corporation, chemdivname);
	while (c.getInvestmentOffer().funds < 300e9) {
		ns.clearPort(ns.pid)
		ns.writePort(ns.pid, `chem done - Awaiting offer \$${ns.formatNumber(c.getInvestmentOffer().funds)}/\$750b`)
		await divMaintenance(ns, c, agridivname)
		await divMaintenance(ns, c, chemdivname)
		await util.slp(30000)
	}
	(c.getInvestmentOffer().round == 3) && c.acceptInvestmentOffer()

	c.getCorporation().divisions.includes(tobdivname) || await divSetup(ns, c = ns.corporation, tobdivname);

	while (true) {
		c.getInvestmentOffer().round == 5 ? c.goPublic(c.getCorporation().numShares - 1) : (c.getInvestmentOffer().funds > 750e9) && c.acceptInvestmentOffer();

		await divMaintenance(ns, c, tobdivname);
		await divMaintenance(ns, c, agridivname);
		await divMaintenance(ns, c, chemdivname);
		buyStuff(ns);

		await newCycle(ns)
		// Discontinue prods when maxed
		const prodnames = ["Death Sticks", "Death Snuff", "Death Vapes", "Death Cigars"];
		let currprods = c.getDivision(tobdivname).products;
		if (c.getDivision(tobdivname).products.length == c.getDivision(tobdivname).maxProducts) {
			const prodmultis = c.getDivision(tobdivname).products.map(product => c.getProduct(tobdivname, "Sector-12", product).rating);
			if (c.getDivision(tobdivname).products.length === c.getDivision(tobdivname).maxProducts && !prodmultis.includes(0)) { // Don't kill products if we are still developing
				const minmulti = Math.min(...prodmultis);
				const minmultiindex = prodmultis.indexOf(minmulti);
				c.discontinueProduct(tobdivname, currprods[minmultiindex]);
			}
		}
		currprods = c.getDivision(tobdivname).products;
		// Make prods up to max
		if (c.getDivision(tobdivname).products.length < c.getDivision(tobdivname).maxProducts) {
			const availablenames = prodnames.filter(name => !currprods.includes(name));
			if (availablenames.length && c.getCorporation().funds > 0) {
				c.makeProduct(tobdivname, "Sector-12", availablenames[0], c.getCorporation().funds / 3, c.getCorporation().funds / 3);
			}
		}
		cities.forEach(city => currprods.forEach(prod => c.sellProduct(tobdivname, city, prod, "MAX", "MP")));
		c.hasResearched(tobdivname, "Market-TA.II") && currprods.forEach(prod => c.setProductMarketTA2(tobdivname, prod, true));
		ns.clearPort(ns.pid)
		let publicinfo = `        Round - ${ns.formatNumber(c.getInvestmentOffer().round)}, ` +
			`Offer - \$${ns.formatNumber(c.getInvestmentOffer().funds)}, `;
		if (c.getCorporation().public) publicinfo = `        Public - Share price \$${c.getCorporation().sharePrice}`
		ns.writePort(ns.pid, `Funds - \$${ns.formatNumber(c.getCorporation().funds)}, ` + publicinfo);
		while (c.getCorporation().state !== "SALE")
			await ns.asleep(1000);
	}
}
*/