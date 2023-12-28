// func.js
export const
	NFG = "NeuroFlux Governor",
	TRP = "The Red Pill",
	GANG_NAME = "Slum Snakes",
	MEMBER_NAMES = [
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
	LOOP_FUNCTIONS = ["stan", "runGang", "prsm"],
	ONESHOT_FUNCTIONS = [
		"clean",
		"ownedAugs",
		"availableAugs",
		"hacknetShindigs",
		"pServ",
		"factWork",
		"murderate",
		"d43m0nD357r0y",
		"ramUp",
		"coresUp",
		"darkwebShopping",
		"buyTOR",
		"backdoor",
		"factionJoin",
		"graft",
		"donate",
		"installAugs",
		"buyAugs",
		"cityAugs",
		"persuade",
		"steves",
		"bladeBurner",
	],
	WIN = eval("window"),
	DOC = eval("document"),
	HOOK0 = DOC.getElementById('overview-extra-hook-0'),
	HOOK1 = DOC.getElementById('overview-extra-hook-1');


export function main(n) {
	(
		n.ps().forEach(s => n.closeTail(s.pid)),
		sGet(n).forEach(s => n.killall(s, 1)),
		!n.args.length && (writeLaunchers(n), n.run("gvnr.js"))
	)
};

/**
 * @param {NS} ns The ns object
 * @param {number} id  ns.pid, pid of the script running the Run function, to ID temp run files
 * @param {string} path String of ns function to run, eg "gang.getMemberNames" or "getPlayer"
 * @param {array} params Parameters to run function with, eg ["n00dles",{ramOverride:10}]
 * @param {string} props properties to access, eg ".skills.hacking". Include the preceding "." or "?.""
 * @return {Promise<Any>} Whatever the passed function returns
 */
export async function Run(ns, path, params, props) {
	const runstring = `await ns.${path}(${(params || []).map(p => JSON.stringify(p))})${props ?? ""}`;
	ns.write(`run/${ns.pid}.js`, `export async function main(ns) {const val = JSON.stringify(${runstring}); ns.atExit(()=>ns.writePort(ns.pid,val||0)) }`, "w");
	const run_pid = ns.run(`run/${ns.pid}.js`, { ramOverride: 1.6 + ns.getFunctionRamCost(path) });
	!run_pid && ns.tprintf(`${utils.ansi.r}!! ${path} DID NOT RUN !!`);
	await ns.getPortHandle(run_pid).nextWrite();
	return JSON.parse(ns.readPort(run_pid));
};

export const utils = {
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

	tickString: (t, l = 30, e = true) => t % l && !e ? '#'.repeat(t / 5 % (l / 5)) + ` |/-\\`[t % 5] : "#exec#",

	digiClock: (r = Date.now(), c = (t, d = 60, v = r / t % d | 0) => v <= 9 ? "0" + v : v) => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3),

	ramFormat: ram => (ram < 1e3) ? ram.toFixed(2) + "GB" : (ram < 1e6) ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB"
}

function grindStats(ns, fact = "The Black Hand", s = ns.singularity) {
	s.stopAction(), s.workForFaction(fact, "field", 0), ns.write("temp/workReport.txt", "Grinding stats", "w")
};

function minSkill(ns, p = ns.getPlayer().skills) {
	return Math.min(p.strength, p.defense, p.dexterity, p.agility)
};

function getFreeRam(ns, server) {
	return ns.getServerMaxRam(server) - ns.getServerUsedRam(server)
};

export async function isBusy(ns) {
	return (await Run(ns, "singularity.getCurrentWork", "", "?.type") == "GRAFTING" ||
		await Run(ns, "bladeburner.inBladeburner") && !!(await Run(ns, "bladeburner.getCurrentAction", "", ".name")));
}


function sGet(ns, m = new Set(["home"])) {
	return (m.forEach(h => ns.scan(h).map(s => m.add(s))), [...m])
};

function readyFiley(ns, file, data = ns.read(file)) {
	return JSON.parse(!!data ? data : "[]")
};

function peekyPorty(ns, script, data = ns.peek(ns.getRunningScript(script)?.pid ?? ns.pid)) {
	return JSON.parse(data == "NULL PORT DATA" ? "[]" : data)
};

function getCurrentNode(ns) {
	return `${ns.getResetInfo().currentNode}.${ns.singularity.getOwnedSourceFiles().reduce((a, sf) => sf.n == ns.getResetInfo().currentNode ? sf.lvl + 1 : a, 1)}`
};

export function clean(ns) {
	ns.ls("home", "run/").forEach(s => ns.rm(s))
}

export async function buyTOR(ns) {
	await Run(ns, "singularity.purchaseTor")
};

export async function ramUp(ns) {
	await Run(ns, "singularity.upgradeHomeRam") && (ns.tprintf(utils.ansi.g + "Upgraded home ram"), ramUp(ns))
};

export async function coresUp(ns) {
	await Run(ns, "singularity.upgradeHomeCores") && (ns.tprintf(utils.ansi.g + "Upgraded home cores"), coresUp(ns))
};

export function factionJoin(n, s = n.singularity) {
	s.checkFactionInvitations().forEach(f => (s.joinFaction(f), n.tprintf(`${utils.ansi.m}Joined ${f}`)))
};

export function darkwebShopping(n) {
	["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].map(p => p + ".exe").map(n.singularity.purchaseProgram)
};

export async function murderate(ns, s = ns.singularity) {
	!await isBusy(ns) && (await Run(ns, "getPlayer").numPeopleKilled > 30) && (Run(ns, "singularity.stopAction"), Run(ns, "singularity.commitCrime", ["Homicide", 0]))
};

export function persuade(n, a = (s, p) => n.scan(s).forEach(v => v != p ? a(v, s) : [n.brutessh, n.ftpcrack, n.relaysmtp, n.sqlinject, n.httpworm, n.nuke].forEach(p => { try { p(s) } catch { } }))) { a("home") };

export async function d43m0nD357r0y(ns, s = ns.singularity, date = new Date(), wd = "w0r1d_d43m0n") {
	sGet(ns).includes(wd) &&
		await Run(ns, "getHackingLevel") > await Run(ns, "getServerRequiredHackingLevel", [wd]) &&
		(["installCounter.txt", "installAugsReason.txt", "installAugsLog.txt"].map(f => ns.rm(`temp/${f}`)),
			ns.write("report/nodeLog.txt", `${getCurrentNode(ns)} completed  - ${date.toLocaleTimeString()} ${date.toLocaleDateString()}\n`), await Run(ns, "singularity.destroyW0r1dD43m0n", [12, "rset.js"]))
}

/** @param {NS} ns */
export function pServ(ns) {
	(ns.purchaseServer("p", 8) && ns.tprintf(`${utils.ansi.c}Purchased host server ${ns.getPurchasedServers().length - 1}`)) ||
		ns.getPurchasedServers().some(s => ns.upgradePurchasedServer(s, ns.getServerMaxRam(s) * 2)) && pServ(ns)
};

function prettyLogs(ns) {
	const
		prsm_target = peekyPorty(ns, "loop/prsm.js"),
		mainlist = sGet(ns),
		getCash = ns.getServerMoneyAvailable,
		getMaxMoney = ns.getServerMaxMoney,
		getSecLvl = ns.getServerSecurityLevel,
		getSecMin = ns.getServerMinSecurityLevel,
		access_list = mainlist.filter(s => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel()),
		funded_list = access_list.filter(getMaxMoney),
		funded_count = mainlist.reduce((a, s) => a + !!getMaxMoney(s), 0),
		total_max_ram = access_list.reduce((a, s) => a + ns.getServerMaxRam(s), 0),
		total_free_ram = access_list.reduce((a, s) => a + getFreeRam(ns, s), 0),
		bought_augs = readyFiley(ns, "temp/boughtAugs.txt"),
		bought_augs_sans_nfg = bought_augs.reduce((acc, aug) => acc + (aug != NFG), 0),
		num_nfg = bought_augs.reduce((acc, aug) => acc + (aug == NFG), 0),
		num_other_augs = readyFiley(ns, "temp/installedAugs.txt").reduce((acc, aug) => acc + (aug != NFG), 0),
		aug_info = bought_augs.filter(a => a != NFG).map(aug => ` ·${aug}`).concat(num_nfg ? [(` ·NeuroFlux Governor x${num_nfg}\n`)] : null).join("\n"),
		printLogLine = line => ns.print(" " + line.join(" | ")),
		percColour = perc => (perc < 33 ? utils.ansi.r : perc < 66 ? utils.ansi.y : perc < 85 ? utils.ansi.c : utils.ansi.g) + perc.padStart(6, " ") + "%" + utils.ansi.d,
		secColour = sec => (sec < 0 ? utils.ansi.g : sec < 66 ? utils.ansi.y : utils.ansi.r) + ("" + sec).padStart(3, " ") + utils.ansi.d;

	(
		ns.resizeTail(800, 1000),
		ns.clearLog(),
		ns.moveTail(WIN.innerWidth - 1150, 0),
		[...funded_list.map(server => [
			Math.ceil(getSecLvl(server)).toString().padStart(3, " "),
			secColour(Math.floor(getSecLvl(server) - (getSecMin(server) + 3))),
			ns.formatNumber(getCash(server)).toString().padStart(8, " "),
			ns.formatNumber(getMaxMoney(server)).toString().padStart(8, " "),
			percColour((getCash(server) / getMaxMoney(server) * 100).toFixed(2)),
			utils.digiClock(ns.getWeakenTime(server)),
			server == prsm_target ? `${server} ${utils.ansi.w}---${utils.ansi.y}Δ<` : server
		]), ["sec", " Δ ", "  \$cur  ", "  \$max  ", "   %   ", "  ~ete  ", ` Target ~ ${funded_list.length}/${funded_count}`]]
			.forEach(printLogLine),
		ns.print([
			"",
			` home - ${utils.ramFormat(getFreeRam(ns, "home"))}/${utils.ramFormat(ns.getServerMaxRam("home"))}`,
			` network - ${utils.ramFormat(total_free_ram)}/${utils.ramFormat(total_max_ram)}`,
			` threads - ${ns.formatNumber(Math.floor(total_free_ram / ns.getScriptRam("weaken.js")))}/${ns.formatNumber(Math.floor(total_max_ram / ns.getScriptRam("weaken.js")))} threads`,
			"",
			` bought augs x ${bought_augs_sans_nfg}, ${num_other_augs}/100 installed`,
			`${aug_info}`,
			` ${ns.read("temp/installAugsReason.txt")}`,
		].join("\n"))
	);
};

function prettyOverview(ns, timer) {
	const 
	bar = "<>".repeat(8),
		prsm_target = peekyPorty(ns, "loop/prsm.js"), gang_info = peekyPorty(ns, "loop/runGang.js"), hacknet_info = readyFiley(ns, "temp/hacknet_info.txt"),
		date = Number(new Date()),
		lastaugtime = Number(ns.read("temp/lastAugTime.txt")) || date,
		overview_array = [
			[`bitnode:`, `${getCurrentNode(ns)}`],
			[`pserv:`, `${ns.getPurchasedServers().length}/${ns.getPurchasedServerLimit()}`],
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
			[`${utils.tickString(timer)}`, `cycle #${Math.floor(timer / 30)}`],
			[`gvnr uptime:`, `${utils.digiClock(timer * 1000)}`],
			[`t+ Augbuy:`, `${!!(date - lastaugtime) ? utils.digiClock(date - lastaugtime) : "N/A"}`],
			[`t+ Install:`, `${utils.digiClock(date - ns.getResetInfo().lastAugReset)}`],
			[`t+ Bitnode:`, `${utils.digiClock(date - ns.getResetInfo().lastNodeReset)}`]];
	(
		HOOK0.innerText = overview_array.reduce((a, l) => `${a}\n${l[0]}`, ""),
		HOOK1.innerText = overview_array.reduce((a, l) => `${a}\n${l[1]}`, "")
	)
};

async function runScripts(ns, is_first_start) {
	for (const script of [
		"solveallcontracts.js",
		...ONESHOT_FUNCTIONS.map(s => `oneshot/${s}.js`),
	]) {
		is_first_start && ns.tprintf(`${utils.ansi.y}starting ${script}`);
		const runpid = ns.run(script);
		runpid ? (await ns.getPortHandle(runpid).nextWrite(), (is_first_start && ns.tprintf(`${utils.ansi.g}${script} passed init`))) : ns.tprintf(`${utils.ansi.r}!! ${script} DID NOT RUN !!`);
	};
	LOOP_FUNCTIONS.map(s => `loop/${s}.js`).forEach(script => !ns.isRunning(script) && (ns.run(script), ns.tprintf(`${utils.ansi.y}starting ${script}`)));
	is_first_start && (ns.print(`${utils.ansi.m} Welcome to gnvr.js!`), ns.tprintf(`${utils.ansi.g}*** Startup Complete ***`), await ns.sleep(1000), ns.run("neofetch.js"));
};



/** @param {NS} ns */
export async function gvnr(ns) {
	const 
	refresh_delay = 1,
		runLoop = async (is_first_start = true, timer = 0) => (
			prettyLogs(ns),
			prettyOverview(ns, timer),
			timer % 30 == 0 && await runScripts(ns, is_first_start),
			await ns.sleep(refresh_delay * 1000),
			await runLoop(false, timer + refresh_delay)
		);
	(
		ns.atExit(() => ns.closeTail(), HOOK0.innerText = "", HOOK1.innerText = ""), // Clears the overview on exit to prevent stale data
		ns.tail(),
		ns.disableLog('ALL'),
		ns.tprintf(`${utils.ansi.m}** ./gvnr.js **`),
		await runLoop()
	);
};

/** @param {NS} ns */
export function writeLaunchers(ns) {
	const writeFile = (type, func) => ns.write(`${type}/${func}.js`, `import { ${func} } from "func.js"; export const main = async ns =>( await ${func}(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));`, "w");
	(
		ns.ls("home", "oneshot/").forEach(s => ns.rm(s)),
		ns.ls("home", "loop/").forEach(s => ns.rm(s)),
		// looping functions here
		["bd", "neofetch", "gvnr"].forEach(func => writeFile("", func)),
		LOOP_FUNCTIONS.forEach(func => writeFile("loop", func)),

		// regular functions here
		ONESHOT_FUNCTIONS.forEach(func => writeFile("oneshot", func))
	)
}

export async function graft(ns, g = ns.grafting) {
	!await isBusy(ns) && ns.singularity.travelToCity("New Tokyo") &&
		[
			"QLink",
			"ECorp HVMind Implant",
			"Xanipher",
			"OmniTek InfoLoad",
			"nickofolas Congruity Implant",
		].some(aug => g.graftAugmentation(aug) && ns.write("temp/workReport.txt", `grafting ${aug}`, "w"));
}

/** @param {NS} ns */
export async function factWork(ns, s = ns.singularity) {
	const 
	available_augs = JSON.parse(ns.read("temp/availableAugs.txt")),
	target_faction = available_augs.includes(TRP) ?
		"Daedalus"
		: available_augs.filter(aug => aug.faction != GANG_NAME).reduce((a, b) => a.repdelta < b.repdelta ? a : b, Infinity)?.faction;

	!await isBusy(ns) && target_faction && (s.stopAction(), ["field", "security", "hacking"].some(job => s.workForFaction(target_faction, job, 0)))
}

/** @param {NS} ns */
export async function donate(ns, s = ns.singularity) {
	const 
	availableAugs = JSON.parse(ns.read("temp/availableAugs.txt")),
		rep_multi = await Run(ns, "getBitNodeMultipliers", "", ".RepToDonateToFaction"),
		nfginfo = JSON.parse(ns.read("temp/nfgInfo.txt")),
		donatefaction = "The Black Hand";
	(
		// Donate to TBH to grind NF Governor
		s.getFactionFavor(donatefaction) >= 150 * rep_multi &&
		s.getFactionRep(donatefaction) < nfginfo.rep && // If we need the rep
		s.donateToFaction(donatefaction, Math.max(nfginfo.cost, 100e9)) && // try to donate
		ns.tprintf(`${utils.ansi.m}Donated \$${ns.formatNumber(Math.max(nfginfo.cost, 100e9))} to ${donatefaction} (grinding NFG)`), // print
		// Donate to factions for augs
		availableAugs.forEach(aug =>
			aug.faction != GANG_NAME && // don't donate to gang
			s.getFactionFavor(aug.faction) > 150 * rep_multi &&
			aug.repdelta > 0 && // If we  need the rep
			s.donateToFaction(aug.faction, 100e9) && // try to donate
			ns.tprintf(`${utils.ansi.m}Donated \$100B to ${aug.faction}`) // print
		)
	);
}

/** @param {NS} ns */
export async function installAugs(ns, s = ns.singularity) {
	const
	 date = new Date(),
		augs_array = JSON.parse(ns.read("temp/availableAugs.txt")).filter(aug => aug.faction != GANG_NAME),
		bought_augs = JSON.parse(ns.read("temp/boughtAugs.txt")),
		time_since_last_aug = date - (ns.read("temp/lastAugTime.txt") ?? date),
		lowest_price = augs_array.reduce((a, b) => a.aug != TRP && a?.price < b?.price ? a : b, Infinity)?.price ?? 0,
		favour_log = aug => `increased ${aug.faction} favour by ${Math.floor(s.getFactionFavorGain(aug.faction))} to ${Math.floor(s.getFactionFavorGain(aug.faction) + s.getFactionFavor(aug.faction))} - ${`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}`,
		timeout_log = `timeout - \$${ns.formatNumber(ns.getServerMoneyAvailable("home"))}/\$${ns.formatNumber(lowest_price)}, multi x${Math.floor(ns.read("temp/priceRatio.txt"))} - ${`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}`,
		writeLog = log => (ns.write("temp/installAugsReason.txt", `installAugs #${(+(ns.read("temp/installCounter.txt")) + 1)}: ${log}`, "w"), true),
		// 
		rep_to_donate = 150 * ns.getBitNodeMultipliers().RepToDonateToFaction,
		checkFavour = () => augs_array.some(aug => s.getFactionFavor(aug.faction) < rep_to_donate && (s.getFactionFavorGain(aug.faction) >= 50 || s.getFactionFavorGain(aug.faction) + s.getFactionFavor(aug.faction) > rep_to_donate) && writeLog(favour_log(aug))),
		checkTimeout = () => (time_since_last_aug > 1800000 && lowest_price > ns.getServerMoneyAvailable("home")) ? (writeLog(timeout_log)) : false,
		hasTRP = () => bought_augs.includes(TRP) && writeLog("installed The Red Pill");
	//check if busy and if there are augs to install and (if has trp or timed out or can hit favour breakpoint) then install
	(
		(hasTRP() && await Run(ns, "singularity.softReset", ["rset.js"])),
		!await isBusy(ns) && !!bought_augs.length && (checkTimeout() || checkFavour()) &&
		(
			ns.write("temp/installCounter.txt", +(ns.read("temp/installCounter.txt")) + 1, "w"),
			ns.write("report/installAugsLog.txt", ns.read("temp/installAugsReason.txt") + "\n", "a"),
			await Run(ns, "singularity.installAugmentations", ["rset.js"])
		)
	)
}

/** @param {NS} ns */
export function buyAugs(ns, s = ns.singularity) {
	const
		timeStamp = () => ns.write("temp/lastAugTime.txt", Date.now(), "w"),
		termPrint = (aug) => ns.tprintf(`${utils.ansi.m}Purchased ${utils.ansi.c}${aug.aug}${utils.ansi.m} from ${aug.faction} for \$${ns.formatNumber(aug.price)}`),
		termPrintNFG = (faction) => ns.tprintf(`${utils.ansi.m}Purchased ${utils.ansi.c}${NFG}${utils.ansi.m} from ${faction} for \$${ns.formatNumber(s.getAugmentationPrice(NFG))}`),
		availableAugs = JSON.parse(ns.read("temp/availableAugs.txt"));
	(
		// Buy NFG
		ns.getPlayer().factions.filter(f => f != GANG_NAME).forEach(f => s.purchaseAugmentation(f, NFG) && (timeStamp(), termPrintNFG(f))),
		// Buy Augs
		availableAugs.forEach(aug => (s.purchaseAugmentation(aug.faction, aug.aug)) && (timeStamp(), termPrint(aug)))
	)
}

/** @param {NS} ns */
export async function cityAugs(ns, s = ns.singularity) {
	const
		corps = { ck: "Clarke Incorporated", ba: "Bachman & Associates", bi: "Blade Industries", ki: "KuaiGong International", oi: "OmniTek Incorporated", nw: "NWO", mc: "MegaCorp", ft: "Fulcrum Technologies", ec: "ECorp" },
		cities = { st: "Sector-12", is: "Ishima", nt: "New Tokyo", cq: "Chongqing", av: "Aevum", vh: "Volhaven" },
		grindChar = () => (s.travelToCity("Volhaven"), s.stopAction(), s.universityCourse("ZB Institute of Technology", "leadership", 0)),
		workFor = corp => (s.stopAction(), s.workForCompany(corp, false), ns.write("temp/workReport.txt", `Working at ${corp}`, "w")),
		needAug = aug => !JSON.parse(ns.read("temp/ownedAugs.txt")).includes(aug);

	// behold 
	(
		!await isBusy(ns) &&
		(needAug("NutriGen Implant") ? s.travelToCity(cities.nt) :
			needAug("INFRARET Enhancement") ? s.travelToCity(cities.is) :
				needAug("Social Negotiation Assistant (S.N.A)") ? s.travelToCity(cities.nt) :
					needAug("DermaForce Particle Barrier") ? s.travelToCity(cities.vh) :
						needAug("BrachiBlades") ? s.travelToCity(cities.av) :
							needAug("CashRoot Starter Kit") ? s.travelToCity(cities.st) :
								needAug("Neuregen Gene Modification") ? s.travelToCity(cities.cq) :
									needAug("Neuroreceptor Management Implant") ? s.travelToCity(cities.nt) :
										needAug("PCMatrix") ? s.travelToCity(cities.av) :
											needAug("Graphene Bionic Arms Upgrade") ? s.travelToCity(cities.cq) :
												minSkill(ns) < 1200 ? grindStats(ns) :
													ns.getPlayer().skills.charisma < 250 ? grindChar() :
														(Object.values(corps).forEach(corp => corp == "Fulcrum Technologies" ? s.applyToCompany(corp, "IT") : s.applyToCompany(corp, "security")),
															(needAug("Neuronal Densification") ? workFor(corps.ck) :
																needAug("nextSENS Gene Modification") ? workFor(corps.ck) :
																	needAug("SmartJaw") ? workFor(corps.ba) :
																		needAug("Neotra") ? workFor(corps.bi) :
																			needAug("Photosynthetic Cells") ? workFor(corps.ki) :
																				needAug("OmniTek InfoLoad") ? workFor(corps.oi) :
																					needAug("Xanipher") ? workFor(corps.ck) :
																						needAug("Hydroflame Left Arm") ? workFor(corps.nw) :
																							needAug("CordiARC Fusion Reactor") ? workFor(corps.mc) :
																								needAug("PC Direct-Neural Interface NeuroNet Injector") ? workFor(corps.ft) :
																									needAug("ECorp HVMind Implant") ? workFor(corps.ec) :
																										grindStats(ns))))
	);
}

export async function ownedAugs(ns) {
	const wrt = async (file, data) => await Run(ns, "write", [file, JSON.stringify(data), "w"]);
	(!await Run(ns, "fileExists", ["temp/installCounter.txt"]) && wrt("temp/installCounter.txt", 0)),
		wrt("temp/boughtAugs.txt", (await Run(ns, "singularity.getOwnedAugmentations", [1])).slice((await Run(ns, "singularity.getOwnedAugmentations", [0])).length)),
		wrt("temp/priceRatio.txt", await Run(ns, "singularity.getAugmentationPrice", ["Combat Rib I"]) / await Run(ns, "singularity.getAugmentationBasePrice", ["Combat Rib I"])),
		wrt("temp/ownedAugs.txt", await Run(ns, "singularity.getOwnedAugmentations", [1])),
		wrt("temp/installedAugs.txt", await Run(ns, "singularity.getOwnedAugmentations", [0])),
		wrt("temp/nfgInfo.txt", { cost: await Run(ns, "singularity.getAugmentationPrice", [NFG]), rep: await Run(ns, "singularity.getAugmentationRepReq", [NFG]) })
}

/** @param {NS} ns */
export async function availableAugs(ns, s = ns.singularity) {
	const
		owned_augs = JSON.parse(ns.read("temp/ownedAugs.txt")),
		forbidden_factions = ["Shadows of Anarchy", "Bladeburners", "Church of the Machine God"],
		aug_object = await Promise.all(ns.getPlayer().factions
			.filter(faction => !forbidden_factions.includes(faction))
			.flatMap(faction => s.getAugmentationsFromFaction(faction).filter(aug => !owned_augs.includes(aug))
				.map(async augment => ({
					aug: augment,
					price: s.getAugmentationPrice(augment),
					repreq: s.getAugmentationPrice(augment),
					repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
					faction: faction,
					factrep: s.getFactionRep(faction),
				}))));
	ns.write("temp/availableAugs.txt", JSON.stringify(aug_object), "w");
}

/** @param {NS} n */
export async function backdoor(n, s = n.singularity) {
	const servers = ["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I",].filter(server => !n.getServer(server).backdoorInstalled && n.hasRootAccess(server) && n.getHackingLevel() > n.getServerRequiredHackingLevel(server));
	await Promise.all(servers.map(async server =>
	(
		n.tprintf(`${utils.ansi.y}Backdoor started on ${server}`),
		s.connect("home"),
		n.run("bd.js", 1, server),
		n.tprintf(`${utils.ansi.g}Backdoor complete on ${server}`)
	)
	))
}

export async function bd(n, server, s = n.singularity) {
	await (async (r = [], h = "home", w = t => t !== h ? (r.unshift(t), w(n.scan(t)[0])) : r) => (w(server).map(s.connect), await s.installBackdoor(), s.connect(h)))()
}
/** @param {NS} ns */
export function hacknetShindigs(ns, h = ns.hacknet) {
	const 
	profits = ns.getMoneySources().sinceInstall.hacknet + ns.getMoneySources().sinceInstall.hacknet_expenses,
		moneyobj = sGet(ns).map(server => ({ name: server, money: ns.getServerMaxMoney(server), sec: ns.getServerMinSecurityLevel(server) })),
		moneytargetserver = moneyobj.reduce((a, b) => a.money < b.money ? a : b).name,
		sectargetserver = moneyobj.reduce((a, b) => a.sec > b.sec ? a : b).name,
		info = { num: h.numNodes(), hashes: `${ns.formatNumber(h.numHashes())}/${ns.formatNumber(h.hashCapacity(), 0)}`, prod: utils.getIndexArray(h.numNodes()).reduce((a, n) => a + h.getNodeStats(n).production, 0), profit: profits },
		upMoney = () => ns.getServerMaxMoney(moneytargetserver) < 10e12 && h.spendHashes("Increase Maximum Money", moneytargetserver) && upMoney(),
		downSec = () => ns.getServerMinSecurityLevel(sectargetserver) > 1 && h.spendHashes("Reduce Minimum Security", sectargetserver) && downSec(),
		nodeBuy = () => (ns.hacknet.purchaseNode() + 1) && nodeBuy(),
		upParts = () => ["Level", "Core", "Ram", "Cache"].forEach(part => utils.getIndexArray(h.numNodes()).forEach(n => { while (ns.hacknet[`upgrade${part}`](n)); }));
	(
		profits > -1 &&
		(
			upMoney(),
			downSec(),
			nodeBuy(),
			upParts()
		),
		ns.write("temp/hacknet_info.txt", JSON.stringify(info), "w")
	)
}

/** @param {NS} ns */
export function steves(ns, s = ns.sleeve, b = ns.bladeburner, g = ns.gang) {
	const 
	steves = utils.getIndexArray(8).sort((a, b) => s.getSleeve(b).storedCycles - s.getSleeve(a).storedCycles), // steves is an array [0..7] sorted by stored idle cycles
		skillToTrain = (steve) => ["strength", "defense", "dexterity", "agility"].map(skill => ({ name: skill, val: s.getSleeve(steve).skills[skill] })).filter(x => x.val < 25)[0]?.name;
	(
		steves.forEach(steve => s.setToShockRecovery(steve)),
		steves.forEach(steve => (
			(!s.getSleeve(steve).shock && s.getSleevePurchasableAugs(steve).sort((a, b) => a.cost - b.cost).forEach(aug => s.purchaseSleeveAug(steve, aug.name))),
			s.getSleeve(steve).shock < 90 &&
			(
				skillToTrain(steve) ? (s.travel(steve, "Sector-12"), s.setToGymWorkout(steve, "Powerhouse Gym", skillToTrain(steve))) // Train skills if weak
					: !g.inGang() ? s.setToCommitCrime(steve, "Homicide") // else murder if no gang
						: !steves.map(steve => s.getTask(steve)).some(task => task?.type === "INFILTRATE") ? s.setToBladeburnerAction(steve, "Infiltrate synthoids") // else assign one to infiltrate
							: b.getContractNames().map(contract => !steves.map(steve => s.getTask(steve)).some(task => task?.actionName === contract) && b.getActionCountRemaining("Contract", contract) && s.setToBladeburnerAction(steve, "Take on contracts", contract)) // else fill all BB contracts
							|| (!s.getSleeve(steve).shock && s.setToIdle(steve)) // else reduce shock, else go idle to build cycles
			)
		))
	);
}

/** @param {NS} ns */
export async function bladeBurner(ns, s = ns.singularity, bb = ns.bladeburner) {
	const upSkill = () => bb.upgradeSkill(bb.getSkillNames().reduce((a, b) => bb.getSkillUpgradeCost(a) < bb.getSkillUpgradeCost(b) ? a : b)) && upSkill();
	(
		bb.joinBladeburnerDivision(),
		bb.inBladeburner() && !await isBusy(ns) &&
		(
			upSkill(),
			bb.getBlackOpNames().filter(op => bb.getActionEstimatedSuccessChance("BlackOps", op)[0] > 0.8)
				.forEach(op => (s.stopAction(), bb.startAction("BlackOps", op)))

		)
	)
}

/** @param {NS} ns */
export async function stan(ns, s = ns.stanek, _ = s.acceptGift()) {
	const 
	frags = JSON.parse(ns.read("frags.js") || "0"),
		getTarget = () => utils.getIndexArray(s.giftWidth()).flatMap(x => utils.getIndexArray(s.giftHeight()).map(y => s.getFragment(x, y))).filter(e => e && e.id < 100).reduce((a, b) => a.numCharge < b.numCharge ? a : b, Infinity),
		runLoop = async (target = getTarget(), spare_threads = Math.floor((getFreeRam(ns, "home") - 100) / ns.getScriptRam("chrg.js"))) => (
			frags &&
			(
				spare_threads > 0 && target != Infinity ?
					ns.exec("chrg.js", "home", spare_threads, target.x, target.y)
					: (ns.print("no threads! skipping..."))
			),
			ns.writePort(ns.pid, ""),
			await ns.asleep(10000),
			runLoop()
		);

	ns.disableLog("ALL"), ns.enableLog("exec"), await runLoop();
}

/** @param {NS} ns */
export async function runGang(n, g = n.gang) {
	const
		tryRecruit = () => ((name = ((list = MEMBER_NAMES.filter(n => !g.getMemberNames().includes(n))) => list[Math.floor(Math.random() * list.length)])()) => g.recruitMember(name) && n.tprintf(`${utils.ansi.r}Recruited ${utils.ansi.g}${name}`))(),
		getBTDenom = () => g.getBonusTime() > 5000 ? 25 : 1,
		printToPort = job => (n.clearPort(n.pid), n.writePort(n.pid, JSON.stringify({ cycle: job, memnum: g.getMemberNames().length, power: g.getGangInformation().power, nextpower: Math.max(...Object.values(other_gang_info()).map(g => g.power)), territory: g.getGangInformation().territory * 100, tw: g.getGangInformation().territoryWarfareEngaged }))),
		other_gang_info = g.getOtherGangInformation,
		tick = async (q = () => Object.values(other_gang_info()).reduce((acc, g) => acc + g.power), l = q()) => (await n.sleep(50), l == q() && await tick()),
		assignJob = (task, focus = g.getMemberNames().length == 12 ? "moneyGain" : "respectGain") => (
			g.getMemberNames().forEach(member => (
				g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)),
				["agi", "str", "def", "dex"].map(skill => g.getAscensionResult(member)?.[skill]).reduce((a, c) => a + c) > 6 && g.ascendMember(member),
				g.setMemberTask(member, task ?? g.getTaskNames().map((n) => (g.setMemberTask(member, n), { name: n, gain: g.getMemberInformation(member)[focus] })).reduce((a, b) => a.gain > b.gain ? a : b).name)
			)),
			printToPort(task?.split(" ").map(a => a[0]).join("") ?? "Jobs")
		),
		runLoop = async () => (((g.inGang() || g.createGang(GANG_NAME)) ?
			(
				tryRecruit(),
				g.setTerritoryWarfare(!Object.keys(other_gang_info()).some(h => h != GANG_NAME && g.getChanceToWinClash(h) < .55)),
				assignJob(),
				await n.sleep(15000 / getBTDenom()),
				assignJob("Train Combat"),
				await n.sleep(4500 / getBTDenom()),
				assignJob("Territory Warfare"),
				await tick()
			)
			: await n.sleep(30000),
			await runLoop())
		);
	n.disableLog("ALL")
	n.enableLog("sleep")
	await runLoop()
}


/** @param {NS} ns */
export async function prsm(ns) {
	// PRiSM -Δ<
	// A batcher
	ns.disableLog('ALL');
	ns.enableLog('exec');
	const
		hack_percentage = 0.01, // decimal percentage to hack
		job_delay = 20, // delay between HWGW jobs in ms
		batch_delay = job_delay * 5, // delay between batches
		//	
		decideThreads = (available, requested) => available < requested ? available : requested,
		getThreadDiff = (total, threads) => total - threads,
		dummy_player = Object.freeze(ns.getPlayer()),
		getHostRam = (server, spareram = server == "home" ? (ns.getServerMoneyAvailable("home") > 150e9 ? 1000 : 100) : 0) => Math.floor(getFreeRam(ns, server) - spareram),
		getAvailableThreads = (script, host_list) => host_list.map(server => Math.floor(getHostRam(server) / ns.getScriptRam(`${script.name}.js`))).reduce((threads, sum) => threads + sum),
		modPlayer = (player, threads, target) => Object.freeze(Object.fromEntries(Object.entries(player).map(entry => (
			(entry[0] == "exp" && (entry[1].hacking += ns.formulas.hacking.hackExp(target, player) * threads)),
			(entry[0] == "skills" && (entry[1].hacking = ns.formulas.skills.calculateSkill(player.exp.hacking, player.mults.hacking_exp))),
			entry
		)))),
		sendJobs = (object, dummy_player) => (
			object.threads = decideThreads(object.available, object.needed),
			object.available = getThreadDiff(object.available, object.threads),
			object.needed = getThreadDiff(object.needed, object.threads),
			object.threads > 0 && ns.exec(`${object.script.name}.js`, object.host, object.threads, object.target.hostname, object.script.time) ?
				((object.remaining > 0 && object.needed > 1) ?
					sendJobs(object, modPlayer(dummy_player, object.threads, object), object) :
					modPlayer(dummy_player, object.threads, object.target)) :
				dummy_player
		),
		runLoop = async (run_dummy_player) => {
			["hack", "grow", "weaken"].forEach(script => (ns.write(`${script}.js`, `export const main = async ns => await ns.${script}(ns.args[0], { additionalMsec: ns.args[1] })`, "w"), sGet(ns).forEach(server => ns.scp(`${script}.js`, server))));
			const
				host_list = sGet(ns).filter(server => ns.hasRootAccess(server) && server.substring(0, 7) != "hacknet"),
				target = ns.getServer(sGet(ns).filter(s => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel() / 2).map(s => ({ name: s, val: ns.getServerMaxMoney(s) / ns.getServerMinSecurityLevel(s) })).reduce((a, b) => a.val > b.val ? a : b, 0)?.name ?? "foodnstuff"),
				hack_time = ns.getHackTime(target.hostname),
				raw_hack_jobs = hack_percentage / (ns.formulas.hacking.hackPercent(target, run_dummy_player)),
				hack_jobs = raw_hack_jobs < 1 || raw_hack_jobs == Infinity ? 1 : raw_hack_jobs,
				grow_jobs = ns.growthAnalyze(target.hostname, (1 / (1 - (ns.formulas.hacking.hackPercent(target, run_dummy_player) * hack_jobs)))),
				hack_sec_jobs = (hack_jobs * 0.04),
				grow_sec_jobs = (grow_jobs * 0.08),
				wekn_jobs = (target.hackDifficulty - target.minDifficulty) / ns.weakenAnalyze(1),
				hwekn_jobs = wekn_jobs + grow_sec_jobs,
				gwekn_jobs = wekn_jobs + hack_sec_jobs,
				batch_total = hack_jobs + grow_jobs + hwekn_jobs + gwekn_jobs,
				whole_jobs_array = [
					{ name: "weaken", jobs: hwekn_jobs, time: job_delay },
					{ name: "weaken", jobs: gwekn_jobs, time: job_delay * 3 },
					{ name: "grow", jobs: grow_jobs, time: job_delay * 2 + (hack_time * 0.8) },
					{ name: "hack", jobs: hack_jobs, time: 0 + (hack_time * 3) },
				],
				jobs_array = (target.moneyAvailable / target.moneyMax < 0.9 || target.hackDifficulty > target.minDifficulty + 3) ? whole_jobs_array.slice(1, 3) : whole_jobs_array, // gw to prep
				//ns.tprint(jobs_array)
				mod_run_dummy_player = jobs_array.flatMap(script =>
					host_list.map(host => // Iterate through hosts and fill each one with jobs until done
						sendJobs(
							{
								needed: Math.floor(batch_total > getAvailableThreads(script, host_list) ? script.jobs * (getAvailableThreads(script, host_list) / batch_total) : script.jobs), // If the batch can't be run in available ram, shrink it to fit
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
				await ns.sleep(batch_delay),
				await runLoop(mod_run_dummy_player)
			)
		};
	(
		await runLoop(dummy_player)
	)
}

/** @param {NS} ns */
export async function neofetch(ns) {
	const 
	dateFormat = date => `${Math.floor(date / (60 * 24))} days, ${Math.floor(date / 60 % 24)} hours, ${Math.floor(date % 60)} mins`,
		pad = ` `.repeat(35),
		title = `muesli@home`,
		dashes = utils.ansi.w + "-".repeat(11),
		os = `${utils.ansi.g}OS: ${utils.ansi.w}Fulcrum Technologies Chapeau Linux x86_64`,
		host = `${utils.ansi.g}Host: ${utils.ansi.w}${ns.getHostname()}`,
		kernel = `${utils.ansi.g}Kernel: ${utils.ansi.w}${DOC.title}`,
		uptime = `${utils.ansi.g}Uptime: ${utils.ansi.w}${dateFormat(ns.getPlayer().totalPlaytime / (1000 * 60))}`,
		packages = `${utils.ansi.g}Packages: ${utils.ansi.w}${ns.ls("home").length} (bitpkg)`,
		shell = `${utils.ansi.g}Shell: ${utils.ansi.w}bit-sh 6.9`,
		resolution = `${utils.ansi.g}Resolution: ${utils.ansi.w}${WIN.innerWidth} x ${WIN.innerHeight}`,
		wm = `${utils.ansi.g}WM: ${utils.ansi.w}BitBurner WM`,
		terminal = `${utils.ansi.g}Terminal: ${utils.ansi.w}BiTTY`,
		cpu = `${utils.ansi.g}CPU: ${utils.ansi.w}Gen FT-6900x ${ns.getServer("home").cpuCores} core`,
		memory = `${utils.ansi.g}Memory: ${utils.ansi.w}${ns.getServer("home").ramUsed * 1000} MiB / ${ns.getServer("home").maxRam * 1000} MiB`,
		ascii = [`${pad}${utils.ansi.g}neofetch ~`,
		`    ${utils.ansi.g}FFFFFFFF\\${utils.ansi.r}.......${utils.ansi.g}TTTTTTTT\\      ${title}`,
		`    ${utils.ansi.g}FF \\_____|${utils.ansi.r}:~:~:~${utils.ansi.g}\\__TT \\__|     ${dashes}`,
		`    ${utils.ansi.g}FF |${utils.ansi.r}:=:=:=:=:=:=:=:${utils.ansi.g}TT |${utils.ansi.r}=\\      ${os}`,
		`   ${utils.ansi.r}/${utils.ansi.g}FFFFF\\${utils.ansi.r}-*-*-*-*-*-*-${utils.ansi.g}TT |${utils.ansi.r}*-\\     ${host}`,
		`  ${utils.ansi.r}/*${utils.ansi.g}FF \\__|${utils.ansi.r}************${utils.ansi.g}TT |${utils.ansi.r}***\\    ${kernel}`,
		`  ${utils.ansi.r}==${utils.ansi.g}FF |${utils.ansi.r}====${utils.ansi.g}CCCCCC\\${utils.ansi.r}====${utils.ansi.g}TT |${utils.ansi.r}====\\   ${uptime}`,
		`  ${utils.ansi.r}##${utils.ansi.g}FF |${utils.ansi.r}###${utils.ansi.g}CCC __CC\\${utils.ansi.r}###${utils.ansi.g}TT |${utils.ansi.r}####||  ${packages}`,
		`  ${utils.ansi.r}==${utils.ansi.g}\\_\\|${utils.ansi.r}===${utils.ansi.g}CC /${utils.ansi.r}==${utils.ansi.g}\\__|${utils.ansi.r}==${utils.ansi.g}\\_\\|${utils.ansi.r}====||  ${shell}`,
		`  ${utils.ansi.r}\\********${utils.ansi.g}CC |${utils.ansi.r}***************/\\|  ${resolution}`,
		`   ${utils.ansi.r}\\*-*-*-*${utils.ansi.g}CC |${utils.ansi.r}-*-*-*-*-*-*-*/ /   ${wm}`,
		`    ${utils.ansi.r}\\:=:=:=${utils.ansi.g}CC |${utils.ansi.r}:=${utils.ansi.g}CC\\${utils.ansi.r}=:=:=:=:/ /    ${terminal}`,
		`     ${utils.ansi.r}\\~:~:~${utils.ansi.g}\\CCCCCC  |${utils.ansi.r}~:~:~:/ /     ${cpu}`,
		`      ${utils.ansi.r}\\_____${utils.ansi.g}\\_____\\/${utils.ansi.r}______/ /      ${memory}`,
		`       ${utils.ansi.r}\\__________________\\/`,
		`${pad}${utils.ansi.k}████${utils.ansi.r}████${utils.ansi.g}████${utils.ansi.y}████${utils.ansi.b}████${utils.ansi.m}████${utils.ansi.c}████${utils.ansi.d}████`,
		`${pad}${utils.ansi.k}████${utils.ansi.r}████${utils.ansi.g}████${utils.ansi.y}████${utils.ansi.b}████${utils.ansi.m}████${utils.ansi.c}████${utils.ansi.w}████`,
		];
	for (const line of ascii) {
		ns.tprintf(line);
		await ns.sleep(Math.random() * 20);
	}
}