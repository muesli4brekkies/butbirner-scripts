// THIS FILE IS IN TRANSITION
// REFER TO lib.ts AND TRANSPILE 
// FOR UP-TO-DATE VERSION



// iib.js
export const CNST = {
	NFG: "NeuroFlux Governor",
	TRP: "The Red Pill",
	GANG_NAME: "Slum Snakes",
	AUGS_TO_BUY: [
		"Social Negotiation Assistant (S.N.A)",
		"Nuoptimal Nootropic Injector Implant",
		"ADR-V1 Pheromone Gene",
		"Speech Enhancement",
		"Wired Reflexes",
		"Cranial Signal Processors - Gen I",
		"BitWire",
		"Synaptic Enhancement Implant",
		"Neurotrainer I",
		"Cranial Signal Processors - Gen II",
		"CRTX42-AA Gene Modification",
		"Embedded Netburner Module",
		"Neural-Retention Enhancement",
		"Artificial Synaptic Potentiation",
		"Neurotrainer II",
		"The Black Hand",
		"Embedded Netburner Module Core Implant",
		"Cranial Signal Processors - Gen IV",
		"Neuralstimulator",
		"Enhanced Myelin Sheathing",
		"Neural Accelerator",
		"Cranial Signal Processors - Gen III",
		"DataJack",
		"Embedded Netburner Module Core V2 Upgrade",
		"BitRunners Neurolink",
		"Cranial Signal Processors - Gen V",
		"Artificial Bio-neural Network Implant",
		"CashRoot Starter Kit",
		"Augmented Targeting I",
		"Augmented Targeting II",
		"Speech Processor Implant",
		"Nanofiber Weave",
		"InfoLoad",
		"ADR-V2 Pheromone Gene",
		"ECorp HVMind Implant",
		"QLink",
		"nickofolas Congruity Implant",
		"The Red Pill"
	],
	ALL_FACTIONS: [
		"Illuminati",
		"Daedalus",
		"The Covenant",
		"ECorp",
		"MegaCorp",
		"Bachman & Associates",
		"Blade Industries",
		"NWO",
		"Clarke Incorporated",
		"OmniTek Incorporated",
		"Four Sigma",
		"KuaiGong International",
		"Fulcrum Secret Technologies",
		"BitRunners",
		"The Black Hand",
		"NiteSec",
		"Aevum",
		"Chongqing",
		"Ishima",
		"New Tokyo",
		"Sector-12",
		"Volhaven",
		"Speakers for the Dead",
		"The Dark Army",
		"The Syndicate",
		"Silhouette",
		"Tetrads",
		"Slum Snakes",
		"Netburners",
		"Tian Di Hui",
		"CyberSec",
		"Bladeburners",
		"Church of the Machine God",
		"Shadows of Anarchy",
	],
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
	LOOP_FUNCTIONS: ["stan", "runGang", "prsm"],
	ONESHOT_FUNCTIONS: [
		"darkwebShopping",
		"ownedAugs",
		"availableAugs",
		"hacknetShindigs",
		"pServ",
		"factionJoin",
		"factWork",
		"murderate",
		"d43m0nD357r0y",
		"ramUp",
		"coresUp",
		"buyTOR",
		"backdoor",
		"graft",
		"donate",
		"buyAugs",
		"installAugs",
		"persuade",
		"steves",
		"bburner",
	],
	STANDALONE_FUNCTIONS: ["bd", "gvnr", "neofetch"],
	STANDALONE_SCRIPTS: ["contracts.js"],
	WIN: eval("window"),
	DOC: eval("document"),
	HOOK0: eval("document").getElementById('overview-extra-hook-0'),
	HOOK1: eval("document").getElementById('overview-extra-hook-1'),
};

// Main running funcs

export function main(n) {
	(
		n.ps().forEach(s => n.closeTail(s.pid)),
		sGet(n).forEach(s => n.killall(s, 1)),
		!n.args.length && (writeLaunchers(n), n.run("gvnr.js"))
	)
};

/** @param {NS} ns */
export function writeLaunchers(ns) {
	const writeFile = (type, func) => {
		ns.write(`${type}/${func}.js`, `import { ${func} } from "lib.js"; export const main = async ns => (ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))), await ${func}(ns,ns.args[0]));`, "w");
	}
	(
		["oneshot", "loop"].forEach(dir => ns.ls("home", dir).forEach(s => ns.rm(s))),
		CNST.STANDALONE_FUNCTIONS.forEach(func => writeFile("", func)),
		CNST.LOOP_FUNCTIONS.forEach(func => writeFile("loop", func)),
		CNST.ONESHOT_FUNCTIONS.forEach(func => writeFile("oneshot", func))
	)
}

/** @param {NS} ns */
export async function gvnr(ns) {
	const refresh_delay = 1;
	const runLoop = async (is_first_start, timer) => (
		prettyLogs(ns),
		await prettyOverview(ns, timer),
		timer % 40 == 0 && await runScripts(ns, is_first_start),
		await util.slp(refresh_delay * 1000),
		await runLoop(false, timer + refresh_delay)
	);
	(
		ns.tail(),
		ns.disableLog('ALL'),
		ns.tprintf(`${util.ansi.m}** ./gvnr.js **`),
		ns.atExit(() => (CNST.HOOK0.innerText = "", CNST.HOOK1.innerText = "")), // Clears the overview on exit to prevent stale data)
		await runLoop(true, 0)
	)
}

/**
 * @param {NS} ns The ns object
 * @param {string} path String of ns function to run, eg "gang.getMemberNames" or "getPlayer"
 * @param {array} params Parameters to run function with, eg ["n00dles",{ramOverride:10}]
 * @param {string} props properties to access, eg "skills".
 * @return {Promise<Any> | null} Whatever the passed function returns, or null if it fails to execute (probably low ram)
 */
export async function Run(ns, path, params = [], props = "") {
	!ns.fileExists("run.js")
		&& ns.write(`run.js`, [
			'/** @param ns {NS} */',
			'export async function main(ns) {',
			'const [path, props, ...params] = ns.args;',
			'const func_return = path.split(".").reduce((a, b) => a[b], ns)(...params)',
			'const return_value = !props ? func_return : props.split(".").reduce((a,b) => a?.[b], func_return)',
			'ns.atExit(() => ns.writePort(ns.pid, return_value || 0));',
			'}',
		].join("\n"),
			"w");
	const run_pid = ns.run(`run.js`, { ramOverride: 1.6 + ns.getFunctionRamCost(path) }, path, props, ...params);
	return !run_pid
		? (ns.tprintf(`${util.ansi.r}!! ${path} DID NOT RUN !!`), null)
		: (await ns.nextPortWrite(run_pid), ns.readPort(run_pid));
};

// 
//
//

export const util = {

	/** 
	* @param {NS} ns The ns object
	* @param {string} text Text to colour
	* @param {string} extra_style Extra CSS style, eg "font-size:100px; font-weight:bold;"
	* @param {Number} timeout Number of ms to run the rainbow effect for
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

	tickString: (t, l = 40, e = true) => t % l ? '#'.repeat(t / 4 % (l / 4)) + `|/-\\`[t % 4] : "#--exec--#",

	digiClock: (r = Date.now(), c = (t, d = 60, v = r / t % d | 0) => v <= 9 ? "0" + v : v) => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3),

	ramFormat: ram => (ram < 1e3) ? ram.toFixed(2) + "GB" : (ram < 1e6) ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB",

	slp: async t => await new Promise(r => setTimeout(r, t)),
}

function getFreeRam(ns, server) {
	return ns.getServerMaxRam(server) - ns.getServerUsedRam(server)
}

export async function is_Busy(ns) {
	return (await Run(ns, "singularity.getCurrentWork", "", "type") == "GRAFTING" ||
		await Run(ns, "bladeburner.inBladeburner") && !!(await Run(ns, "bladeburner.getCurrentAction", "", "name")));
}

//const z = t => [t, ...ns.scan(t).slice(t != 'home').flatMap(z)];
//return z('home');

export function sGet(ns, m = new Set(["home"])) {
	return (m.forEach(h => ns.scan(h).map(s => m.add(s))), [...m])
}

function readyFiley(ns, file) {
	const data = ns.read(file);
	return JSON.parse(!!data ? data : "[]")
}

function peekyPorty(ns, script) {
	const data = ns.peek(ns.getRunningScript(script)?.pid ?? ns.pid);
	return data == "NULL PORT DATA" ? "[]" : data
}

/** @param {NS} ns */
function getCurrentNode(ns) {
	const r = ns.getResetInfo();
	return `${r.currentNode}.${1 + r.ownedSF.get(r.currentNode)}`
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

export async function factionJoin(n, s = n.singularity) {
	(await Run(n, "singularity.checkFactionInvitations")).forEach(f => (s.joinFaction(f), n.tprintf(`${util.ansi.m}Joined ${f}`)))
}

export async function darkwebShopping(ns) {
	await ["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].reduce(async (a, b) => (await a, await Run(ns, "singularity.purchaseProgram", [`${b}.exe`])), Promise.resolve())
}

export async function murderate(ns, s = ns.singularity) {
	!await is_Busy(ns) && (await Run(ns, "getPlayer", [], "numPeopleKilled") < 30) && (await Run(ns, "singularity.stopAction"), await Run(ns, "singularity.commitCrime", ["Homicide", 0]));
}

export async function bd(n, target, s = n.singularity) {
	await (async (h, w = (t, r = []) => t == h ? r : w(n.scan(t)[0], [t, ...r])) => (s.connect(h), w(target).map(s.connect), n.tprintf(`${util.ansi.y}Backdoor started on ${target}`), await s.installBackdoor(), s.connect(h), n.tprintf(`${util.ansi.g}Backdoor complete on ${target}`)))("home")
}

export function persuade(n, a = (s, p) => n.scan(s).forEach(v => v != p ? a(v, s) : [n.brutessh, n.ftpcrack, n.relaysmtp, n.sqlinject, n.httpworm, n.nuke].forEach(p => { try { p(s) } catch { } }))) { a("home") };

/** @param {NS} ns */
export async function d43m0nD357r0y(ns, date = new Date(), wd = "w0r1d_d43m0n") {
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
			|| sGet(ns).some(s => [...Array(21).keys()].some(r => ns.upgradePurchasedServer(s, r << 1)))
		)
		&& pServ(ns)
	)
}

/** @param {NS} ns */
function prettyLogs(ns) {
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
		`${(sec < 5
			? util.ansi.g
			: util.ansi.y)}${("" + sec).padStart(3, " ")}${util.ansi.d}`
	);
	const main_list = sGet(ns);
	const access_list = main_list.filter(s => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel());
	const funded_list = access_list.filter(ns.getServerMaxMoney);
	const funded_count = main_list.reduce((a, s) => a + !!ns.getServerMaxMoney(s), 0);
	const total_max_ram = access_list.reduce((a, s) => a + ns.getServerMaxRam(s), 0);
	const total_free_ram = access_list.reduce((a, s) => a + getFreeRam(ns, s), 0);
	const bought_augs = readyFiley(ns, "temp/boughtAugs.txt");
	const bought_augs_sans_nfg = bought_augs.reduce((acc, aug) => acc + (aug != CNST.NFG), 0);
	const num_nfg = bought_augs.reduce((acc, aug) => acc + (aug == CNST.NFG), 0);
	const num_other_augs = readyFiley(ns, "temp/installedAugs.txt").reduce((acc, aug) => acc + (aug != CNST.NFG), 0);
	const aug_info = bought_augs.filter(a => a != CNST.NFG).map(aug => ` ·${aug}`).concat(num_nfg ? [(` ·NeuroFlux Governor x${num_nfg}\n`)] : null).join("\n");

	const getSecLvl = server => Math.ceil(ns.getServerSecurityLevel(server)).toString().padStart(3, " ");
	const getSecDelta = server => secColour(Math.ceil((ns.getServerSecurityLevel(server) - ns.getServerMinSecurityLevel(server))).toString().padStart(3, " "));
	const getCash = server => ns.formatNumber(ns.getServerMoneyAvailable(server)).toString().padStart(8, " ");
	const getMaxCash = server => ns.formatNumber(ns.getServerMaxMoney(server)).toString().padStart(8, " ");
	const getPerc = server => percColour((ns.getServerMoneyAvailable(server) / ns.getServerMaxMoney(server) * 100).toFixed(2));
	const getExecTime = server => util.digiClock(ns.getWeakenTime(server));
	const getServerName = server => server == peekyPorty(ns, "loop/prsm.js") ? `${server} ${util.ansi.w}---${util.ansi.y}Δ<` : server;
	const getInfo = s => [getSecLvl(s), getSecDelta(s), getCash(s), getMaxCash(s), getPerc(s), getExecTime(s), getServerName(s)]
	const format = line => ` ${line.join(" | ")}`;
	(
		ns.resizeTail(800, 1000),
		ns.moveTail(CNST.WIN.innerWidth - 1150, 0),
		ns.clearLog(),
		[
			...[...funded_list.map(getInfo), ["sec", " Δ ", "  \$cur  ", "  \$max  ", "   %   ", "  ~ete  ", ` Target ~ ${funded_list.length}/${funded_count}`]].map(format),
			`\n`,
			` home - ${util.ramFormat(getFreeRam(ns, "home"))}/${util.ramFormat(ns.getServerMaxRam("home"))}`,
			` network - ${util.ramFormat(total_free_ram)}/${util.ramFormat(total_max_ram)}`,
			` threads - ${ns.formatNumber(Math.floor(total_free_ram / ns.getScriptRam("weaken.js")))}/${ns.formatNumber(Math.floor(total_max_ram / ns.getScriptRam("weaken.js")))} threads`,
			`\n`,
			` bought augs x ${bought_augs_sans_nfg}, ${num_other_augs}/100 installed, NFG x ${ns.getResetInfo().ownedAugs.get(CNST.NFG)}`,
			`${aug_info}`,
			` ${ns.read("temp/installAugsReason.txt")}`,
			`\n`,
			` available ass: ${ns.bladeburner.inBladeburner() ? ns.formatNumber(ns.bladeburner.getActionCountRemaining("Operations", "Assassination")) : "not in BB"}`
		].forEach(l => ns.print(l)),

		[...Array(8).keys()].sort((a, b) => ns.sleeve.getSleeve(b).storedCycles - ns.sleeve.getSleeve(a).storedCycles).map(s => " steve " + s + " : " + ns.sleeve.getSleeve(s).storedCycles + " cycles stored").forEach(l => ns.print(l))
	)
};

async function prettyOverview(ns, timer) {
	const bar = "<>".repeat(8);
	const prsm_target = peekyPorty(ns, "loop/prsm.js");
	const gang_info = peekyPorty(ns, "loop/runGang.js");
	const hacknet_info = readyFiley(ns, "temp/hacknet_info.txt");
	const date = Number(new Date());
	const last_aug_time = Number(ns.read("temp/lastAugTime.txt")) || date;
	const overview_array = [
		...[
			[`bitnode:`, `${getCurrentNode(ns)}`],
			[`pserv:`, `${sGet(ns).filter(s => s.startsWith("#")).length}/${ns.getPurchasedServerLimit()}`],
			[`w_d lvl:`, `${Math.round(3000 * await Run(ns, "getBitNodeMultipliers", [], "WorldDaemonDifficulty"))}`],
			[`city:`, `${ns.getPlayer().city}`],
			[`karma:`, `${ns.formatNumber(ns.heart.break())}`],
		]
			.map(a => a.map(e => `<span style="color:cyan">${e}</span>`)),
		...[
			[`target:`, `${prsm_target}`],
			[`\$/s:`, `\$${ns.formatNumber(ns.getScriptIncome("loop/prsm.js"))}`],
			[`\$ total:`, `${ns.formatNumber(ns.getMoneySources().sinceInstall.hacking)}`],
			[`xp/s:`, `${ns.formatNumber(ns.getTotalScriptExpGain())}`],
			[`scripts:`, `${sGet(ns).reduce((a, b) => a + ns.ps(b).length, 0)}`],
		]
			.map(a => a.map(e => `<span style="color:red">${e}</span>`)),
		...[
			[`hN Servers:`, `${hacknet_info.num}`],
			[`hashes/Max:`, `${hacknet_info.hashes}`],
			[`hashes/s:`, `${ns.formatNumber(hacknet_info.prod)}`],
			[`profit:`, `\$${ns.formatNumber(hacknet_info.profit)}`],
		]
			.map(a => a.map(e => `<span style="color:orange">${e}</span>`)),
		...[
			[`status:`, `${gang_info?.cycle ?? "~"}`],
			[`members:`, `${gang_info?.size ?? "~"}`],
			[`power:`, `${ns.formatNumber(gang_info?.power ?? 0, 2)}/${ns.formatNumber(gang_info?.nextpower ?? 0, 2)}`],
			[`territory:`, `${ns.formatNumber(gang_info?.territory ?? 0 * 100) ?? "~"}%`],
			[`warfare?:`, `${gang_info?.tw ?? "~"}`],
			[`profit:`, `\$${ns.formatNumber(ns.getMoneySources().sinceStart.gang ?? 0)}`],
		]
			.map(a => a.map(e => `<span style="color:magenta">${e}</span>`)),
		...[
			[`${util.tickString(timer)}`, `cycle #${Math.floor(timer / 30)}`],
			[`gvnr uptime:`, `${util.digiClock(timer * 1000)}`],
			[`t+ Augbuy:`, `${!!(date - last_aug_time) ? util.digiClock(date - last_aug_time) : "N/A"}`],
			[`t+ Install:`, `${util.digiClock(date - ns.getResetInfo().lastAugReset)}`],
			[`t+ Bitnode:`, `${util.digiClock(date - ns.getResetInfo().lastNodeReset)}`]
		]
			.map(a => a.map(e => `<span style="color:yellow">${e}</span>`))
	];
	(
		CNST.HOOK0.innerHTML = overview_array.reduce((a, l) => `${a}</br>${l[0]}`, ""),
		CNST.HOOK1.innerHTML = overview_array.reduce((a, l) => `${a}</br>${l[1]}`, "")
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
						? (await ns.nextPortWrite(runpid), (is_first_start && (await util.slp(70 * Math.random()), ns.tprintf(`${util.ansi.g}${script} passed init`))))
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
export async function graft(ns, g = ns.grafting) {
	!await is_Busy(ns) && ns.singularity.travelToCity("New Tokyo") &&
		[
			"QLink",
			"ECorp HVMind Implant",
			"Xanipher",
			"OmniTek InfoLoad",
			"nickofolas Congruity Implant",
		]
			.some(aug => g.graftAugmentation(aug, 0) && ns.write("temp/workReport.txt", `grafting ${aug}`, "w"));
}

/** @param {NS} ns */
export async function factWork(ns, s = ns.singularity) {
	const available_augs = JSON.parse(ns.read("temp/availableAugs.txt"));
	const target_faction = available_augs.reduce((a, b) =>
		(
			b.fact.name != CNST.GANG_NAME
			&& b.repdelta > a.repdelta
		)
			? b
			: a
		, { repdelta: 0 }).fact?.name;
	(
		!await is_Busy(ns)
		&& !!target_faction
		&& (
			s.stopAction(),
			["field", "security", "hacking"].some(job => s.workForFaction(available_augs.includes(CNST.TRP) ? "Daedalus" : target_faction, job, 0))
		)
	)
}

/** @param {NS} ns */
export async function donate(ns, s = ns.singularity) {
	const availableAugs = JSON.parse(ns.read("temp/availableAugs.txt"));
	const rep_multi = await Run(ns, "getBitNodeMultipliers", "", "RepToDonateToFaction");
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
	const timestamp = Date().slice(4, 24);
	const augs_array = JSON.parse(ns.read("temp/availableAugs.txt")).filter(aug => aug.fact.name != CNST.GANG_NAME);
	const bought_augs = JSON.parse(ns.read("temp/boughtAugs.txt"));
	const time_since_last_aug = date - (ns.read("temp/lastAugTime.txt") ?? date);
	const lowest_price = augs_array.reduce((a, b) => a.aug != CNST.TRP && a?.price < b?.price ? a : b, Infinity)?.price ?? 0;
	const favour_log = aug => `increased ${aug.fact.name} favour by ${Math.floor(aug.fact.favdelta)} to ${Math.floor(aug.fact.favdelta + aug.fact.fav)} - ${timestamp}}`;
	const timeout_log = `timeout - \$${ns.formatNumber(ns.getServerMoneyAvailable("home"))}/\$${ns.formatNumber(lowest_price)}, multi x${Math.floor(ns.read("temp/priceRatio.txt"))} - ${timestamp}`;
	const writeLog = log => (ns.write("temp/installAugsReason.txt", `installAugs #${(1 + +ns.read("temp/installCounter.txt"))}: ${log}`, "w"), true);
	const fav_to_donate = 150 * await Run(ns, "getBitNodeMultipliers", [], "RepToDonateToFaction");
	const checkFavour = () => augs_array.some(aug => aug.fact.fav < fav_to_donate && (aug.fact.favdelta >= 50 || aug.fact.favdelta + aug.fact.fav > fav_to_donate) && writeLog(favour_log(aug)));
	const checkTimeout = () => (time_since_last_aug > 1800000 && lowest_price > ns.getServerMoneyAvailable("home")) ? (writeLog(timeout_log)) : false;
	const hasTRP = () => bought_augs.includes(CNST.TRP) && writeLog("installed The Red Pill");
	(
		(hasTRP() && await Run(ns, "singularity.softReset", ["rset.js"])), // if have TRP then install asap
		!await is_Busy(ns) // if not busy
		&& !!bought_augs.length // and augs to install
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
	const odd_factions = ["Bladeburners", "Church of the Machine God"];
	const timeStamp = () => ns.write("temp/lastAugTime.txt", Date.now(), "w");
	const termPrint = (aug) => ns.tprintf(`${util.ansi.m}Purchased ${util.ansi.c}${aug.aug}${util.ansi.m} from ${aug.fact.name} for \$${ns.formatNumber(aug.price)}`);
	const termPrintNFG = (faction) => ns.tprintf(`${util.ansi.m}Purchased ${util.ansi.c}${CNST.NFG}${util.ansi.m} from ${faction} for \$${ns.formatNumber(s.getAugmentationPrice(CNST.NFG))}`);
	const availableAugs = JSON.parse(ns.read("temp/availableAugs.txt"));
	(
		ns.getPlayer().factions.forEach(f => f != CNST.GANG_NAME && s.purchaseAugmentation(f, CNST.NFG) && (timeStamp(), termPrintNFG(f))),
		availableAugs.forEach(aug => (s.purchaseAugmentation(aug.fact.name, aug.aug)) && (timeStamp(), termPrint(aug))),
		odd_factions.forEach(fac => s.getAugmentationsFromFaction(fac).forEach(aug => s.purchaseAugmentation(fac, aug)))
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
		.flatMap(faction => s.getAugmentationsFromFaction(faction).filter(aug => /*CNST.AUGS_TO_BUY.includes(aug) &&*/ !owned_augs.includes(aug))
			.map(augment => ({
				aug: augment,
				price: s.getAugmentationPrice(augment),
				repreq: s.getAugmentationRepReq(augment),
				repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
				fact: {
					name: faction,
					fav: s.getFactionFavor(faction),
					favdelta: s.getFactionFavorGain(faction),
				},
			}))
		);
	ns.write("temp/availableAugs.txt", JSON.stringify(aug_object ?? []), "w");
}

/** @param {NS} n */
export async function backdoor(n, s = n.singularity) {
	["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I"]
		.forEach(server => (
			!n.getServer(server).backdoorInstalled
			&& n.hasRootAccess(server)
			&& n.getHackingLevel() > n.getServerRequiredHackingLevel(server)
			&& !n.getRunningScript("bd.js", "home", server)?.pid
			&& n.run("bd.js", 1, server)
		))
}

/** @param {NS} ns */
export function hacknetShindigs(ns, h = ns.hacknet) {
	const node_array = util.getIndexArray(h.numNodes());
	const profits = ns.getMoneySources().sinceInstall.hacknet + ns.getMoneySources().sinceInstall.hacknet_expenses;
	const server_obj = sGet(ns).map(server => ({
		name: server,
		money: ns.getServerMaxMoney(server),
		sec: ns.getServerMinSecurityLevel(server),
	}));
	const moneytargetserver = server_obj.reduce((a, b) => a.money < b.money ? a : b).name;
	const sectargetserver = server_obj.reduce((a, b) => a.sec > b.sec ? a : b).name;
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
	const nodeBuy = () => h.purchaseNode() + 1 && nodeBuy();
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
	const get_low_skill = steve => ["strength", "defense", "dexterity", "agility"].reduce((a, skill) => s.getSleeve(steve).skills[skill] < 25 ? skill : a, false);
	const try_train = steve => get_low_skill(steve) ? (s.travel(steve, "Sector-12"), s.setToGymWorkout(steve, "Powerhouse Gym", get_low_skill(steve))) : false;
	const try_stabbin = steve => !g.inGang() ? s.setToCommitCrime(steve, "Homicide") : false;
	const bb_infil = steve => b.inBladeburner() && !steves.map(steve => s.getTask(steve)).some(task => task?.type === "INFILTRATE") ? s.setToBladeburnerAction(steve, "Infiltrate synthoids") : false;
	const bb_contracts = steve => b.inBladeburner() && b.getContractNames().some(contract => (
		steves.every(steve => s.getTask(steve)?.actionName !== contract)
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
		steves.forEach(steve => s.setToIdle(steve)),
		steves.forEach(steve => (
			(!s.getSleeve(steve).shock && buy_augs(steve)),
			s.getSleeve(steve).shock > 90
				? recover_or_idle(steve)
				: try_train(steve) // train if weak or
				|| try_stabbin(steve) // murder for gang or 
				|| bb_infil(steve) // one to bb infil or 
				|| bb_contracts(steve) // fill bb contracts or
				|| recover_or_idle(steve) // or shock recovery/idle
		))
	)
}

/** @param {NS} ns */
export async function bburner(ns, s = ns.singularity, bb = ns.bladeburner) {
	const goTrain = async () => (
		await Run(ns, "singularity.stopAction"),
		await Run(ns, "singularity.travelToCity", ["Sector-12"]),
		await Run(ns, "singularity.gymWorkout", [
			"Powerhouse Gym",
			["Defense", "Strength", "Dexterity", "Agility"].reduce((a, b) => {
				const getSkill = s => ns.getPlayer().skills[s.toLowerCase()];
				return getSkill(a) < getSkill(b) ? a : b
			}),
			0
		])
	);
	const upSkill = () => bb.upgradeSkill(bb.getSkillNames().reduce((a, b) => bb.getSkillUpgradeCost(a) < bb.getSkillUpgradeCost(b) ? a : b)) && upSkill();
	const doOp = async op => op
		? ((([a, b]) => a + b > 1.8)(bb.getActionEstimatedSuccessChance("BlackOps", bb.getNextBlackOp().name))
			&& !await is_Busy(ns)
			&& (s.stopAction(), bb.startAction("BlackOps", bb.getNextBlackOp().name)))
		: null; //d43m0nD357r0y(ns);

	(
		bb.joinBladeburnerDivision(),
		!bb.inBladeburner()
			? await goTrain()
			: (
				//upSkill(),
				await doOp(bb.getNextBlackOp()?.name)
			)
	)
}

/** @param {NS} ns */
export async function stan(ns, s = ns.stanek) {
	await ns.sleep(1000) // short sleep to let prsm allocate properly on restart
	ns.disableLog("ALL"),
		ns.enableLog("exec"),
		ns.run("lsg.js");
	s.acceptGift() || (await ns.sleep(1000), await stan(ns));
	const spare_threads = Math.floor((getFreeRam(ns, "home") - 50) / ns.getScriptRam("chrg.js"));
	const target = s.activeFragments().filter(f => f.id < 100).reduce((a, b) => a.numCharge < b.numCharge ? a : b, {});
	(
		!!target
		&& (
			spare_threads > 0 && target != Infinity
				? ns.exec("chrg.js", "home", spare_threads, target.x, target.y)
				: (ns.print("no threads! skipping..."))
		),
		ns.writePort(ns.pid, ""),
		await util.slp(10000),
		await stan(ns)
	)
}

/** @param {NS} ns */
export async function runGang(n, g = n.gang) {
	const tryRecruit = (name = CNST.MEMBER_NAMES[Math.floor(Math.random() * CNST.MEMBER_NAMES.length)]) => g.getMemberNames().includes(name) ? tryRecruit() : g.recruitMember(name) && n.tprintf(`${util.ansi.r}Recruited ${util.ansi.g}${name}`);
	const setTW = () => g.setTerritoryWarfare(Object.keys(other_gang_info()).every(h => g.getChanceToWinClash(h) >= .5));
	const slp = async t => await n.sleep(t / (g.getBonusTime() > 5000 ? 25 : 1));
	const other_gang_info = g.getOtherGangInformation;
	const tick = async (q = () => Object.values(other_gang_info()).reduce((a, b) => a + b.power), l = q()) => (await n.sleep(50), l == q() && await tick());
	const focus = () => g.getMemberNames().length > 9 ? "moneyGain" : "respectGain";
	const assignJob = task => (
		g.getMemberNames().forEach(member => (
			g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)),
			["agi", "str", "def", "dex"].reduce((a, b) => a + g.getAscensionResult(member)?.[b], 0) > 6 && g.ascendMember(member),
			g.setMemberTask(member, task ?? g.getTaskNames().reduce((a, b) => (g.setMemberTask(member, b), (gain => gain < a.dat ? a : { name: b, dat: gain })(g.getMemberInformation(member)[focus()]))).name)
		)),
		printToPort(task?.split(" ").map(a => a[0]).join("") ?? "Jobs")
	);
	const printToPort = job => (
		n.clearPort(n.pid),
		n.writePort(n.pid, {
			cycle: job,
			size: g.getMemberNames().length,
			power: g.getGangInformation().power,
			nextpower: Object.values(other_gang_info()).reduce((a, b) => a > b.power ? a : b.power, 0),
			territory: g.getGangInformation().territory * 100,
			tw: g.getGangInformation().territoryWarfareEngaged,
		})
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
	s = async t => await n.sleep(t / (g.getBonusTime() > 5e3 ? 25 : 1)),
	a = j =>
		g.getMemberNames().map(m => (
			g.getEquipmentNames().map((i) => g.purchaseEquipment(m, i)),
			["agi", "str", "def", "dex"].reduce((a, b) => a + g.getAscensionResult(m)?.[b], 0) > 6 && g.ascendMember(m),
			g.setMemberTask(m, j ?? g.getTaskNames().reduce((a, b) => (g.setMemberTask(m, b), i => i < a.g ? a : { n: b, g: i })(g.getMemberInformation(m)[g.getMemberNames().length > 9 ? "moneyGain" : "respectGain"])).n)
		))
) {
	(g.inGang() || g.createGang("Slum Snakes"))
		&& (
			g.recruitMember(Math.random()),
			g.setTerritoryWarfare(Object.keys(g.getOtherGangInformation()).every(h => g.getChanceToWinClash(h) > .5)),
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
	const batch_delay = 20; // delay between batches
	//
	const write_workers = () => ["hack", "grow", "weaken"].forEach(script => ((!ns.fileExists(script) && ns.write(`${script}.js`, `export const main = async ns => await ns.${script}(ns.args[0], { additionalMsec: ns.args[1] })`, "w")), sGet(ns).forEach(server => ns.scp(`${script}.js`, server))));
	const getHostRam = server => Math.floor(getFreeRam(ns, server) - (server == "home" ? 100 : 0));
	const modPlayer = (player, threads, target) => Object.fromEntries(Object.entries(player).map(([key, entry]) => (
		(key == "exp" && (entry.hacking += ns.formulas.hacking.hackExp(target, player) * threads)),
		(key == "skills" && (entry.hacking = ns.formulas.skills.calculateSkill(player.exp.hacking, player.mults.hacking))),
		[key, entry]
	)));
	const sendJobs = (b_obj, p_obj) => (
		b_obj.threads = Math.min(b_obj.available, b_obj.script.jobs),
		b_obj.available -= b_obj.threads,
		b_obj.script.jobs -= b_obj.threads,
		b_obj.threads > 0 && !!ns.exec(`${b_obj.script.name}.js`, b_obj.host, b_obj.threads, b_obj.target.hostname, b_obj.script.time)
			? ((b_obj.available > 0 && b_obj.script.jobs > 1)
				? sendJobs(b_obj, modPlayer(p_obj, b_obj.threads, b_obj.target))
				: modPlayer(p_obj, b_obj.threads, b_obj.target))
			: p_obj
	);

	async function runLoop(run_p_obj) {
		write_workers();
		const host_list = sGet(ns).filter(server => ns.hasRootAccess(server) && server.substring(0, 7) != "hacknet");
		const getAvailableThreads = script => host_list.reduce((a, server) => a + Math.floor(getHostRam(server) / ns.getScriptRam(`${script.name}.js`)), 0);
		const target = ns.getServer(host_list.reduce((a, b) => {
			const rank = s => ns.getServerMaxMoney(s) / ns.getServerMinSecurityLevel(s);
			return (ns.getServerRequiredHackingLevel(b) <= ns.getHackingLevel() / 2 && rank(a) < rank(b) ? b : a);
		}));
		const clamp = n => n < 1 || n == Infinity ? 1 : n;
		const hack_jobs = 1;//clamp(hack_percentage / (ns.formulas.hacking.hackPercent(target, run_p_obj)));
		const grow_jobs = 1 + ns.growthAnalyze(target.hostname, (1 / (1 - (ns.formulas.hacking.hackPercent(target, run_p_obj) * hack_jobs))));
		const sec_jobs = (target.hackDifficulty - target.minDifficulty) / ns.weakenAnalyze(1);
		const wekn_jobs = sec_jobs + (hack_jobs * 0.04) + (grow_jobs * 0.08);
		const batch_total = hack_jobs + grow_jobs + wekn_jobs;
		const squish = (script, jobs) => Math.floor(batch_total > getAvailableThreads(script, host_list) // If the batch can't be run in available ram, shrink it to fit
			? jobs * (getAvailableThreads(script, host_list) / batch_total)
			: jobs)
		const jobs_array = [
			{ name: "weaken", jobs: squish("weaken", wekn_jobs), time: job_delay * 2 },
			{ name: "grow", jobs: squish("grow", grow_jobs), time: job_delay + (ns.getHackTime(target.hostname) * 0.8) },
			{ name: "hack", jobs: squish("hack", hack_jobs), time: 0 + (ns.getHackTime(target.hostname) * 3) },
		];

		//ns.tprint(jobs_array)
		const batch_complete_p_obj = jobs_array.reduce((_, script) =>
			host_list.reduce((_, host) => // Iterate through hosts and fill each one with jobs until done
				sendJobs(
					{
						available: Math.floor(getHostRam(host) / ns.getScriptRam(`${script.name}.js`)),
						script: script,
						host: host,
						target: target
					},
					run_p_obj,
				)
				, {})
			, {});
		(
			ns.clearPort(ns.pid),
			ns.writePort(ns.pid, target.hostname),
			await util.slp(batch_delay),
			await runLoop(batch_complete_p_obj)
		)
	};
	(
		await runLoop(await Run(ns, "getPlayer"))
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
