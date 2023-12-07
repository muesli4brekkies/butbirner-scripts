// FUNCtions
const nfg = "NeuroFlux Governor"
export const win = "window";
export const doc = "document";
export const test = "ns.getServer";
export const c = {
	r: "\x1b[31m", //red
	g: "\x1b[32m",//green
	b: "\x1b[34m",//blue
	c: "\x1b[36m",//cyan
	m: "\x1b[35m",//Magenta
	y: "\x1b[33m",//Yellow
	k: "\x1b[30m",//key(black)
	w: "\x1b[37m",//white
	d: "\x1b[0m", //default
	bl: "\x1b[2m", //bold
};

export const tickString = t => t % 30 ? '#'.repeat(t / 5 % 6) + ` |/-\\`[t % 5] : "#exec#";
export const ramFormat = (ram) => (ram < 1e3) ? ram.toFixed(2) + "GB" : (ram < 1e6) ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB";
export const t = (r = Date.now(), c = (t, d = 60, v = r / t % d | 0) => v <= 9 ? "0" + v : v) => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3);
//export const  sGet = (n, m = new Set(["home"]))=>(m.forEach(h => n.scan(h).map(s => m.add(s))), [...m]);
export function sGet(n, m = new Set(["home"])) { return (m.forEach(h => n.scan(h).map(s => m.add(s))), [...m]) };
function minSkill(ns, p = ns.getPlayer().skills) { return Math.min(p["strength"], p["defense"], p["dexterity"], p["agility"]) };
export function busyCheck(ns) { return ns.singularity.getCurrentWork()?.type == "GRAFTING" || (ns.bladeburner.inBladeburner() && !!ns.bladeburner.getCurrentAction().name) };
export function pServers(ns) { (ns.purchaseServer(ns.getPurchasedServers().length, 8) && ns.tprintf(`${c.c}Purchased host server ${ns.getPurchasedServers().length - 1}`)) || ns.getPurchasedServers().some(server => ns.upgradePurchasedServer(server, ns.getServerMaxRam(server) * 2)) && pServers(ns) };
export function murderate(ns, s = ns.singularity) { !busyCheck(ns) && ns.heart.break() < -54000 && ns.getPlayer().numPeopleKilled > 30 && (s.stopAction(), s.commitCrime("Homicide", 0)) };
export function d43m0nD357r0y(ns, s = ns.singularity) { ["installCounter.txt", "installAugsReason.txt", "installAugsLog.txt"].map(f => ns.rm(`logs/${f}`)), s.destroyW0r1dD43m0n(12, "rset.js") }
export function grindStats(ns, fact = "The Black Hand", s = ns.singularity) { s.stopAction(); s.workForFaction(fact, "field", 0); ns.write("logs/workReport.txt", "Grinding stats", "w") };
export function rset(n) { (n.ps().forEach(s => n.closeTail(s.pid)), sGet(n).forEach(s => n.killall(s, 1)), !n.args.length && n.run("gvnr.js")) };
export function ramUp(ns) { ns.singularity.upgradeHomeRam() && (ns.tprintf(c.g + "Upgraded home ram"), ramUp(ns)) };
export function coresUp(ns) { ns.singularity.upgradeHomeCores() && (ns.tprintf(c.g + "Upgraded home cores"), coresUp(ns)) };
export function darkwebShopping(n) { ["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].forEach(prog => n.singularity.purchaseProgram(`${prog}.exe`)) };
export function buyTOR(ns) { ns.singularity.purchaseTor() };
export function factionJoin(n, s = n.singularity) { (s.checkFactionInvitations().forEach(f => (s.joinFaction(f), n.tprintf(`${c.m}Joined ${f}`)))) };
export function persuade(n, a = (s, p) => n.scan(s).forEach(v => v != p ? a(v, s) : [n.brutessh, n.ftpcrack, n.relaysmtp, n.sqlinject, n.httpworm, n.nuke].forEach(p => { try { p(s) } catch { } }))) { a("home") };
export async function bd(n,targ, r = [], s = n.singularity, h = "home", w = t => t !== h ? (r.unshift(t), w(n.scan(t)[0])) : r) { w(targ).map(q => s.connect(q)), await s.installBackdoor(), s.connect(h) };

/** @param {NS} ns */
export function writeLaunchers(ns) {
	const writeFile = (type, func, is_async) => ns.write(`${type}/${func}.js`, `import { ${func} } from "func.js";\nexport const main = ${is_async ? "async" : ""} (ns)=>(${is_async ? "await" : ""} ${func}(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));`, "w");
	ns.ls("home", "oneshot/").forEach(s => ns.rm(s)),
		ns.ls("home", "loop/").forEach(s => ns.rm(s)),
		ns.ls("home", "async/").forEach(s => ns.rm(s)),
		// looping functions here
		["stan", "runGang","prsm"].forEach(func => writeFile("loop", func, true)),
		// regular functions here
		[
			"pServers",
			"murderate",
			"d43m0nD357r0y",
			"ramUp",
			"coresUp",
			"darkwebShopping",
			"buyTOR",
			"factionJoin",
			"factWork",
			"graft",
			"donate",
			"installAugs",
			"buyAugs",
			"uniqueAugs",
			"ownedAugs",
			"availableAugs",
			"hacknetShindigs",
			"persuade",
			"steves",
			"bladeBurner",
		].forEach(func => writeFile("oneshot", func, false)),
		["backdoor"].forEach(func => writeFile("oneshot", func, true))
}

export function graft(ns, g = ns.grafting) {
	!busyCheck(ns) && ns.singularity.travelToCity("New Tokyo") &&
		[
			"QLink",
			"ECorp HVMind Implant",
			"Xanipher",
			"OmniTek InfoLoad",
			"nickofolas Congruity Implant",
		].some(aug => g.graftAugmentation(aug) && ns.write("logs/workReport.txt", `grafting ${aug}`, "w"));
}
/** @param {NS} ns */
export function factWork(ns, s = ns.singularity) {
	const target_faction = JSON.parse(ns.read("logs/availableAugs.txt")).filter(aug => aug.faction != "Slum Snakes").sort((a, b) => a.repdelta - b.repdelta)[0]?.faction;
	!busyCheck(ns) && target_faction && (s.stopAction(), ["field", "security", "hacking"].some(job => s.workForFaction(target_faction, job, 0)))
}

/** @param {NS} ns */
export function donate(ns, s = ns.singularity) {
	const availableAugs = JSON.parse(ns.read("logs/availableAugs.txt")),
		nfginfo = JSON.parse(ns.read("logs/nfgInfo.txt")),
		donatefaction = "The Black Hand";
	// Donate to TBH to grind NF Governor
	s.getFactionFavor(donatefaction) >= 150 * ns.getBitNodeMultipliers().RepToDonateToFaction && // If we can donate
		s.getFactionRep(donatefaction) < nfginfo.rep && // If we need the rep
		s.donateToFaction(donatefaction, Math.max(nfginfo.cost, 100e9)) && // try to donate
		ns.tprintf(`${c.m}Donated \$${Math.max(nfginfo.cost, 100e9)} to ${donatefaction} (grinding NFG)`); // print
	// Donate to factions for augs
	availableAugs.forEach(aug =>
		aug.faction != "Slum Snakes" && // don't donate to gang
		s.getFactionFavor(aug.faction) > 150 * ns.getBitNodeMultipliers().RepToDonateToFaction && // If we can donate
		aug.repdelta > 0 && // If we  need the rep
		s.donateToFaction(aug.faction, 100e9) && // try to donate
		ns.tprintf(`${c.m}Donated \$100B to ${aug.faction}`) // print
	)
}
/** @param {NS} ns */
export function installAugs(ns, s = ns.singularity) {
	const date = new Date(),
		augs_array = JSON.parse(ns.read("logs/availableAugs.txt")).filter(aug => aug.faction != "Slum Snakes"),
		bought_augs = JSON.parse(ns.read("logs/boughtAugs.txt")),
		file_date = (+date - ns.read("logs/lastAugTime.txt")),
		time_since_last_aug = file_date == date ? 0 : file_date,
		favour_log = aug => `increased ${aug.faction} favour by ${Math.floor(s.getFactionFavorGain(aug.faction))} to ${Math.floor(s.getFactionFavorGain(aug.faction) + s.getFactionFavor(aug.faction))} - ${`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}`,
		lowest_price = augs_array.filter(aug => aug.aug != "The Red Pill").sort((a, b) => a?.price - b?.price)[0]?.price ?? 0,
		timeout_log = `timeout - \$${ns.formatNumber(ns.getServerMoneyAvailable("home"))}/\$${ns.formatNumber(lowest_price)}, multi x${Math.floor(ns.read("logs/priceRatio.txt"))} - ${`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}`,
		writeLog = log => (ns.write("logs/installAugsReason.txt", `installAugs #${(+(ns.read("logs/installCounter.txt")) + 1)}: ${log}`, "w"), true),
		// 
		rep_to_donate = 150 * ns.getBitNodeMultipliers().RepToDonateToFaction,
		checkFavour = () => augs_array.some(aug => s.getFactionFavor(aug.faction) < rep_to_donate && (s.getFactionFavorGain(aug.faction) >= 50 || s.getFactionFavorGain(aug.faction) + s.getFactionFavor(aug.faction) > rep_to_donate) && writeLog(favour_log(aug))),
		checkTimeout = () => (time_since_last_aug > 3600000 && lowest_price > ns.getServerMoneyAvailable("home")) ? (writeLog(timeout_log)) : false,
		hasTRP = () => bought_augs.includes("The Red Pill") && writeLog("installed TRP");
	//check if busy and if there are augs to install and (if has trp or timed out or can hit favour breakpoint) then install
	!busyCheck(ns) && !!bought_augs.length && (hasTRP() || checkTimeout() || checkFavour()) &&
		(ns.write("logs/installCounter.txt", +(ns.read("logs/installCounter.txt")) + 1, "w"),
			ns.write("logs/installAugsLog.txt", ns.read("logs/installAugsReason.txt") + "\n", "a"),
			s.installAugmentations("rset.js"))
}

/** @param {NS} ns */
export function buyAugs(ns, s = ns.singularity) {
	const timeStamp = () => ns.write("logs/lastAugTime.txt", Date.now(), "w"),
		termPrint = (aug) => ns.tprintf(`${c.m}Purchased ${c.c}${aug.aug}${c.m} from ${aug.faction} for \$${ns.formatNumber(aug.price)}`),
		termPrintNFG = (faction) => ns.tprintf(`${c.m}Purchased ${c.c}${nfg}${c.m} from ${faction} for \$${ns.formatNumber(s.getAugmentationPrice(nfg))}`),
		availableAugs = JSON.parse(ns.read("logs/availableAugs.txt"));
	// Buy NFG
	ns.getPlayer().factions.filter(f => f != "Slum Snakes").forEach(f => s.purchaseAugmentation(f, nfg) && (timeStamp(), termPrintNFG(f)));
	// Buy Augs
	availableAugs.forEach(aug => (s.purchaseAugmentation(aug.faction, aug.aug)) && (timeStamp(), termPrint(aug)));
}

/** @param {NS} ns */
export function uniqueAugs(ns, s = ns.singularity) {
	const corps = { ck: "Clarke Incorporated", ba: "Bachman & Associates", bi: "Blade Industries", ki: "KuaiGong International", oi: "OmniTek Incorporated", nw: "NWO", mc: "MegaCorp", ft: "Fulcrum Technologies", ec: "ECorp" },
		cities = { st: "Sector-12", is: "Ishima", nt: "New Tokyo", cq: "Chongqing", av: "Aevum", vh: "Volhaven" },
		grindChar = _ => (s.travelToCity("Volhaven"), s.stopAction(), s.universityCourse("ZB Institute of Technology", "leadership", 0)),
		workFor = corp => (s.stopAction(), s.workForCompany(corp, false), ns.write("logs/workReport.txt", `Working at ${corp}`, "w")),
		needAug = aug => !JSON.parse(ns.read("logs/ownedAugs.txt")).includes(aug);

	!busyCheck(ns) &&
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
																										grindStats(ns))));
}

export function ownedAugs(ns, s = ns.singularity) {
	const wrt = (file, data) => ns.write(file, JSON.stringify(data), "w");
	(!ns.fileExists("logs/installCounter.txt") && wrt("logs/installCounter.txt", 0)),
		wrt("logs/boughtAugs.txt", s.getOwnedAugmentations(1).slice(s.getOwnedAugmentations(0).length)),
		wrt("logs/priceRatio.txt", s.getAugmentationPrice("Combat Rib I") / s.getAugmentationBasePrice("Combat Rib I")),
		wrt("logs/ownedAugs.txt", s.getOwnedAugmentations(1)),
		wrt("logs/installedAugs.txt", s.getOwnedAugmentations(0)),
		wrt("logs/nfgInfo.txt", { cost: s.getAugmentationPrice(nfg), rep: s.getAugmentationRepReq(nfg) })
}

/** @param {NS} ns */
export function availableAugs(ns, s = ns.singularity) {
	const forbiddenfactions = ["Shadows of Anarchy", "Bladeburners", "Church of the Machine God"],
		availableAugs = ns.getPlayer().factions.filter(faction => !forbiddenfactions.includes(faction)).flatMap(faction => s.getAugmentationsFromFaction(faction).filter(aug => !JSON.parse(ns.read("logs/ownedAugs.txt")).includes(aug)).map(augment => ({
			aug: augment,
			price: s.getAugmentationPrice(augment),
			repreq: s.getAugmentationRepReq(augment),
			repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
			faction: faction,
			factrep: s.getFactionRep(faction)
		})));
	ns.write("logs/availableAugs.txt", JSON.stringify(availableAugs), "w");
}

/** @param {NS} ns */
// Backdoor
export async function backdoor(ns, s = ns.singularity) {
	const servers = ["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I",].filter(server => !ns.getServer(server).backdoorInstalled && ns.hasRootAccess(server) && ns.getHackingLevel() > ns.getServerRequiredHackingLevel(server));
	await Promise.all(servers.map(async server => (
		ns.tprintf(`${c.y}Backdoor started on ${server}`),
		s.connect("home"),
		await ns.getPortHandle(ns.run("bd.js", 1, server)).nextWrite(),
		ns.tprintf(`${c.g}Backdoor complete on ${server}`)
	)))
}

/** @param {NS} ns */
export function hacknetShindigs(ns, h = ns.hacknet) {
	const profits = ns.getMoneySources().sinceInstall.hacknet + ns.getMoneySources().sinceInstall.hacknet_expenses,
		moneyobj = sGet(ns).map(server => ({ name: server, money: ns.getServerMaxMoney(server), sec: ns.getServerMinSecurityLevel(server) })),
		moneytargetserver = moneyobj.sort((a, b) => b.money - a.money)[0].name,
		sectargetserver = moneyobj.sort((a, b) => b.sec - a.sec)[0].name,
		info = { num: h.numNodes(), hashes: `${ns.formatNumber(h.numHashes())}/${ns.formatNumber(h.hashCapacity(), 0)}`, prod: [...Array(h.numNodes()).keys()].reduce((a, n) => a + h.getNodeStats(n).production, 0), profit: profits },
		upMoney = () => ns.getServerMaxMoney(moneytargetserver) < 10e12 && h.spendHashes("Increase Maximum Money", moneytargetserver) && upMoney(),
		downSec = () => ns.getServerMinSecurityLevel(sectargetserver) > 1 && h.spendHashes("Reduce Minimum Security", sectargetserver) && downSec(),
		nodeBuy = () => (ns.hacknet.purchaseNode() + 1) && nodeBuy(),
		upParts = () => ["Level", "Core", "Ram", "Cache"].forEach(part => [...Array(h.numNodes()).keys()].forEach(n => { while (ns.hacknet[`upgrade${part}`](n)); }));

	profits > -1 && (upMoney(), downSec(), nodeBuy(), upParts()), ns.write("logs/hacknet_info.txt", JSON.stringify(info), "w")
}

/** @param {NS} ns */
export function steves(ns, s = ns.sleeve, b = ns.bladeburner, g = ns.gang) {
	const steves = [...Array(8).keys()].sort((a, b) => s.getSleeve(b).storedCycles - s.getSleeve(a).storedCycles), // steves is an array [0..7] sorted by stored idle cycles
		skillToTrain = (steve) => ["strength", "defense", "dexterity", "agility"].map(skill => ({ name: skill, val: s.getSleeve(steve).skills[skill] })).filter(x => x.val < 25)[0]?.name;

	steves.forEach(steve => s.setToShockRecovery(steve)),
		steves.filter(steve => ((s.getTask(steve)?.cyclesWorked ?? 0) / (s.getTask(steve)?.cyclesNeeded ?? 1) < 0.5)).forEach(steve => {
			(!s.getSleeve(steve).shock && s.getSleevePurchasableAugs(steve).sort((a, b) => a.cost - b.cost).forEach(aug => s.purchaseSleeveAug(steve, aug.name))),
				s.getSleeve(steve).shock < 90 &&
				(skillToTrain(steve) ? (s.travel(steve, "Sector-12"), s.setToGymWorkout(steve, "Powerhouse Gym", skillToTrain(steve))) :
					!g.inGang() ? s.setToCommitCrime(steve, "Homicide") :
						!steves.map(steve => s.getTask(steve)).some(task => task?.type === "INFILTRATE") ? s.setToBladeburnerAction(steve, "Infiltrate synthoids") :
							b.getContractNames().map(contract => !steves.map(steve => s.getTask(steve)).some(task => task?.actionName === contract) && b.getActionCountRemaining("Contract", contract) && s.setToBladeburnerAction(steve, "Take on contracts", contract)) ||
							(!s.getSleeve(steve).shock && s.setToIdle(steve)))
		});
}

/** @param {NS} ns */
export async function bladeBurner(ns, b = ns.bladeburner) {
	const upSkill = () => b.upgradeSkill(b.getSkillNames().sort((x, y) => b.getSkillUpgradeCost(x) - b.getSkillUpgradeCost(y))[0]) && upSkill();
	b.joinBladeburnerDivision();
	b.inBladeburner() && !busyCheck(ns) && (
		upSkill(),
		ns.singularity.stopAction(),
		b.getBlackOpNames().forEach(op => (b.startAction("BlackOps", op))))
}

/** @param {NS} ns */
export async function stan(ns, s = ns.stanek) {
	const frags = JSON.parse(ns.read("frags.js")),
		target = frags.filter(frag => frag && frag.id < 100).sort((a, b) => a.numCharge - b.numCharge)[0],
		tryCharge = async (spare_threads = Math.floor((ns.getServerMaxRam("home") - ns.getServerUsedRam("home") - 100) / ns.getScriptRam("chrg.js"))) => ((spare_threads > 0 ? ns.exec("chrg.js", "home", spare_threads, target.x, target.y) : (ns.print("no threads! skipping..."))), ns.writePort(ns.pid, ""), await ns.asleep(10000), tryCharge());

	ns.disableLog("ALL"), ns.enableLog("exec"), await tryCharge();
}

/** @param {NS} ns */
export async function runGang(n, g = n.gang) {
	const available_names = ["Tony Harrison", "Kathy Rindhoops", "Jimmy Lazers", "Naboo the Enigma", "Helen Back", "Tubular Tony", "Stabby Clarkson", "Carl", "Poops Mcghee", "Hairy Dan", "Will Barrow", "Barry Three-Nips", "Markkus", "Patricia O'Violence", "Pat O'Cake", "Ray Fridgerator", "Sammy the Squid", "Slanty Bob (one leg)", "Bastard Man", "Man-Spider", "Non-Bio Bruce", "Rockhead Rumple", "Johnny Segment"].filter(n => g.inGang() && !g.getMemberNames().includes(n)),
		random_index = Math.round(Math.random() * (available_names?.length - 1)),
		gang_name = "Slum Snakes",
		other_gang_info = g.getOtherGangInformation,
		printToPort = j => (n.clearPort(n.pid), n.writePort(n.pid, JSON.stringify({ cycle: j, memnum: g.getMemberNames().length, power: g.getGangInformation().power, nextpower: Math.max(...Object.values(other_gang_info()).map(g => g.power)), territory: g.getGangInformation().territory * 100, tw: g.getGangInformation().territoryWarfareEngaged }))),
		tick = async (n, q = () => Object.values(other_gang_info()).map(a => a.power).reduce((a, b) => a + b), l = q()) => (await n.sleep(50), l == q() && await tick(n)),
		assign_job = (t, y = g.getMemberNames().length == 12 ? "moneyGain" : "respectGain") => (
			g.getMemberNames().forEach(member => (
				g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)),
				["agi", "str", "def", "dex"].map(skill => g.getAscensionResult(member)?.[skill]).reduce((d, t) => d + t) > 6 && g.ascendMember(member),
				g.setMemberTask(member, t ?? g.getTaskNames().map((n) => (g.setMemberTask(member, n), { name: n, gain: g.getMemberInformation(member)[y] })).sort((a, b) => b.gain - a.gain)[0].name)
			)),
			printToPort(t/*.split(" ")[0]*/ ?? "Jobs")
		),
		runLoop = async () => ((g.inGang() || g.createGang(gang_name)) && (
			g.recruitMember(available_names[random_index]) && n.tprint(`${c.r}Recruited ${c.g}${available_names[random_index]}`),
			g.setTerritoryWarfare(!Object.keys(other_gang_info()).filter(h => h !== gang_name).some(h => g.getChanceToWinClash(h) < .55)),
			assign_job(),
			await n.sleep(15000),
			assign_job("Train Combat"),
			await n.sleep(4000),
			assign_job("Territory Warfare"),
			await tick(n),
			runLoop()));

	await runLoop()
}


// PRiSM -Δ<
/** @param {NS} ns */
export async function prsm(ns) {
	ns.disableLog('ALL');
	ns.enableLog('exec');
	const dummy_player = ns.getPlayer();
	const runLoop = async () => {
		const server_list = ((m = new Set(["home"]), _ = m.forEach(h => ns.scan(h).map(s => m.add(s)))) => [...m])(),
			hack_percentage = 0.01, // decimal percentage to hack
			job_delay = 5, // delay between HWGW jobs in ms
			batch_delay = 25, // delay between batches
			ramCalc = (server, spareram = server === "home" ? (ns.getServerMoneyAvailable("home") > 150e9 ? 1000 : 100) : 0) => Math.floor(ns.getServerMaxRam(server) - spareram - ns.getServerUsedRam(server)),
			host_list = server_list.filter(server => ns.hasRootAccess(server) && server.substring(0, 7) != "hacknet"),
			target = ns.getServer(server_list.filter(s => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel() / 2).map(s => ({ name: s, val: ns.getServerMaxMoney(s) / ns.getServerMinSecurityLevel(s) })).sort((a, b) => b.val - a.val)[0]?.name ?? "foodnstuff"),
			hack_time = ns.getHackTime(target.hostname),
			raw_hack_jobs = hack_percentage / (ns.formulas.hacking.hackPercent(target, dummy_player)),
			hack_jobs = raw_hack_jobs < 1 || raw_hack_jobs == Infinity ? 1 : raw_hack_jobs,
			grow_jobs = ns.growthAnalyze(target.hostname, (1 / (1 - (ns.formulas.hacking.hackPercent(target, dummy_player) * hack_jobs)))),
			hack_sec_jobs = (hack_jobs * 0.04),
			grow_sec_jobs = (grow_jobs * 0.08),
			wekn_jobs = (target.hackDifficulty - target.minDifficulty) / ns.weakenAnalyze(1),
			hwekn_jobs = wekn_jobs + grow_sec_jobs,
			gwekn_jobs = wekn_jobs + hack_sec_jobs,
			batch_total = hack_jobs + grow_jobs + hwekn_jobs + gwekn_jobs,
			whole_jobs_array = [
				{ name: "wekn", jobs: hwekn_jobs, time: job_delay },
				{ name: "wekn", jobs: gwekn_jobs, time: job_delay * 3 },
				{ name: "grow", jobs: grow_jobs, time: job_delay * 2 + (hack_time * 0.8) },
				{ name: "hack", jobs: hack_jobs, time: 0 + (hack_time * 3) },
			],
		jobs_array = target.moneyAvailable / target.moneyMax < 0.9 ? whole_jobs_array.slice(1, 3) : whole_jobs_array; // gw to prep
		//ns.tprint(jobs_array)
		server_list.forEach(server => ns.scp(["hack.js", "grow.js", "wekn.js"], server));
		jobs_array.forEach(script => {
			host_list.forEach(host => { // Iterate through hosts and fill each one with jobs until done
				const sendJobs = (jobs_needed, host_threads,dummy_player) => {
					const threads = host_threads < jobs_needed ? host_threads : jobs_needed,
						host_threads_left = host_threads - threads,
						jobs_needed_left = jobs_needed - threads;

					(threads > 0 && ns.exec(`${script.name}.js`, host, threads, target.hostname, script.time))
						dummy_player.exp.hacking += ns.formulas.hacking.hackExp(target, dummy_player) * threads,
						dummy_player.skills.hacking = ns.formulas.skills.calculateSkill(dummy_player.exp.hacking, ns.getPlayer().mults.hacking_exp),
						jobs_needed_left > 0 && host_threads_left > 1 && sendJobs(jobs_needed_left, host_threads_left,dummy_player)
				};
				const threads_available = host_list.map(server => Math.floor(ramCalc(server) / ns.getScriptRam(`${script.name}.js`))).reduce((threads, sum) => threads + sum),
					ratio = threads_available / batch_total,
					jobs_needed = Math.floor(batch_total > threads_available ? script.jobs * ratio : script.jobs), // If the batch can't be run in available ram, shrink it to fit
					host_threads = Math.floor(ramCalc(host) / ns.getScriptRam(`${script.name}.js`));

				sendJobs(jobs_needed, host_threads)
			});
		});
		ns.clearPort(ns.pid);
		ns.writePort(ns.pid, JSON.stringify(target));
		await ns.sleep(batch_delay);
		await runLoop()
	}
		await runLoop()
}