// FUNCtions
const NFG = "NeuroFlux Governor"
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

export function buyTOR(ns) { ns.singularity.purchaseTor() };
export const tickString = t => t % 30 ? '#'.repeat(t / 5 % 6) + ` |/-\\`[t % 5] : "#exec#";
export function sGet(n, m = new Set(["home"])) { return (m.forEach(h => n.scan(h).map(s => m.add(s))), [...m]) };
export function ramUp(ns) { ns.singularity.upgradeHomeRam() && (ns.tprintf(c.g + "Upgraded home ram"), ramUp(ns)) };
export function coresUp(ns) { ns.singularity.upgradeHomeCores() && (ns.tprintf(c.g + "Upgraded home cores"), coresUp(ns)) };
function minSkill(ns, p = ns.getPlayer().skills) { return Math.min(p["strength"], p["defense"], p["dexterity"], p["agility"]) };
export const ramFormat = ram => (ram < 1e3) ? ram.toFixed(2) + "GB" : (ram < 1e6) ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB";
export function factionJoin(n, s = n.singularity) { (s.checkFactionInvitations().forEach(f => (s.joinFaction(f), n.tprintf(`${c.m}Joined ${f}`)))) };
export function darkwebShopping(n) { ["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].forEach(prog => n.singularity.purchaseProgram(`${prog}.exe`)) };
export function isBusy(ns) { return ns.singularity.getCurrentWork()?.type == "GRAFTING" || (ns.bladeburner.inBladeburner() && !!ns.bladeburner.getCurrentAction().name) };
export function getCurrentNode(ns) { return `${ns.getResetInfo().currentNode}.${++ns.singularity.getOwnedSourceFiles().filter(sf => sf.n == ns.getResetInfo().currentNode)[0].lvl}` };
export const t = (r = Date.now(), c = (t, d = 60, v = r / t % d | 0) => v <= 9 ? "0" + v : v) => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3);
export function grindStats(ns, fact = "The Black Hand", s = ns.singularity) { s.stopAction(); s.workForFaction(fact, "field", 0); ns.write("logs/workReport.txt", "Grinding stats", "w") };
export function murderate(ns, s = ns.singularity) { !isBusy(ns) && (ns.heart.break() > -54000 || ns.getPlayer().numPeopleKilled > 30) && (s.stopAction(), s.commitCrime("Homicide", 0)) };
export function persuade(n, a = (s, p) => n.scan(s).forEach(v => v != p ? a(v, s) : [n.brutessh, n.ftpcrack, n.relaysmtp, n.sqlinject, n.httpworm, n.nuke].forEach(p => { try { p(s) } catch { } }))) { a("home") };
export function d43m0nD357r0y(ns, s = ns.singularity, date = new Date(), wd = "w0r1d_d43m0n") { sGet(ns).includes(wd) && ns.getHackingLevel() > ns.getServerRequiredHackingLevel(wd) && (["installCounter.txt", "installAugsReason.txt", "installAugsLog.txt"].map(f => ns.rm(`logs/${f}`)), ns.write("logs/nodeLog.txt", `${getCurrentNode(ns)} completed  - ${date.toLocaleTimeString()} ${date.toLocaleDateString()}\n`), s.destroyW0r1dD43m0n(12, "rset.js")) }
export function pServers(ns) { (ns.purchaseServer(ns.getPurchasedServers().length, 8) && ns.tprintf(`${c.c}Purchased host server ${ns.getPurchasedServers().length - 1}`)) || ns.getPurchasedServers().some(server => ns.upgradePurchasedServer(server, ns.getServerMaxRam(server) * 2)) && pServers(ns) };

const LOOP_SCRIPTS = ["stan", "runGang", "prsm"];
const ONESHOT_SCRIPTS = [
	"availableAugs",
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
	"cityAugs",
	"ownedAugs",
	"hacknetShindigs",
	"persuade",
	"steves",
	"bladeBurner",
];
/** @param {NS} ns */
export function writeLaunchers(ns) {
	const writeFile = (type, func, is_async) => ns.write(`${type}/${func}.js`, `import { ${func} } from "func.js"; export const main = ${is_async ? "async" : ""} ns =>(${is_async ? "await" : ""} ${func}(ns,ns.args[0]), ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))));`, "w");
	ns.ls("home", "oneshot/").forEach(s => ns.rm(s)),
		ns.ls("home", "loop/").forEach(s => ns.rm(s)),
		// looping functions here
		["gvnr"].forEach(func => writeFile("", func, true)),
		LOOP_SCRIPTS.forEach(func => writeFile("loop", func, true)),
		// regular functions here

		ONESHOT_SCRIPTS.forEach(func => writeFile("oneshot", func, false)),
		["backdoor"].forEach(func => writeFile("oneshot", func, true))
}

export function graft(ns, g = ns.grafting) {
	!isBusy(ns) && ns.singularity.travelToCity("New Tokyo") &&
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
	const available_augs = JSON.parse(ns.read("logs/availableAugs.txt"))
	const target_faction = available_augs.some(a => a.aug == "The Red Pill") ? "Daedalus" : JSON.parse(ns.read("logs/availableAugs.txt")).filter(aug => aug.faction != "Slum Snakes").sort((a, b) => a.repdelta - b.repdelta)[0]?.faction;
	!isBusy(ns) && target_faction && (s.stopAction(), ["field", "security", "hacking"].some(job => s.workForFaction(target_faction, job, 0)))
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
		ns.tprintf(`${c.m}Donated \$${ns.formatNumber(Math.max(nfginfo.cost, 100e9))} to ${donatefaction} (grinding NFG)`); // print
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
	!isBusy(ns) && !!bought_augs.length && (hasTRP() || checkTimeout() || checkFavour()) &&
		(ns.write("logs/installCounter.txt", +(ns.read("logs/installCounter.txt")) + 1, "w"),
			ns.write("logs/installAugsLog.txt", ns.read("logs/installAugsReason.txt") + "\n", "a"),
			s.installAugmentations("rset.js"))
}

/** @param {NS} ns */
export function buyAugs(ns, s = ns.singularity) {
	const timeStamp = () => ns.write("logs/lastAugTime.txt", Date.now(), "w"),
		termPrint = (aug) => ns.tprintf(`${c.m}Purchased ${c.c}${aug.aug}${c.m} from ${aug.faction} for \$${ns.formatNumber(aug.price)}`),
		termPrintNFG = (faction) => ns.tprintf(`${c.m}Purchased ${c.c}${NFG}${c.m} from ${faction} for \$${ns.formatNumber(s.getAugmentationPrice(NFG))}`),
		availableAugs = JSON.parse(ns.read("logs/availableAugs.txt"));
	// Buy NFG
	ns.getPlayer().factions.filter(f => f != "Slum Snakes").forEach(f => s.purchaseAugmentation(f, NFG) && (timeStamp(), termPrintNFG(f)));
	// Buy Augs
	availableAugs.forEach(aug => (s.purchaseAugmentation(aug.faction, aug.aug)) && (timeStamp(), termPrint(aug)));
}

/** @param {NS} ns */
export function cityAugs(ns, s = ns.singularity) {
	const corps = { ck: "Clarke Incorporated", ba: "Bachman & Associates", bi: "Blade Industries", ki: "KuaiGong International", oi: "OmniTek Incorporated", nw: "NWO", mc: "MegaCorp", ft: "Fulcrum Technologies", ec: "ECorp" },
		cities = { st: "Sector-12", is: "Ishima", nt: "New Tokyo", cq: "Chongqing", av: "Aevum", vh: "Volhaven" },
		grindChar = _ => (s.travelToCity("Volhaven"), s.stopAction(), s.universityCourse("ZB Institute of Technology", "leadership", 0)),
		workFor = corp => (s.stopAction(), s.workForCompany(corp, false), ns.write("logs/workReport.txt", `Working at ${corp}`, "w")),
		needAug = aug => !JSON.parse(ns.read("logs/ownedAugs.txt")).includes(aug);

	// behold 

	!isBusy(ns) &&
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
		wrt("logs/nfgInfo.txt", { cost: s.getAugmentationPrice(NFG), rep: s.getAugmentationRepReq(NFG) })
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
		await (async (r = [], h = "home", w = t => t !== h ? (r.unshift(t), w(n.scan(t)[0])) : r) => (w(targ).map(q => s.connect(q)), await s.installBackdoor(), s.connect(h)))(),
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
	b.inBladeburner() && !isBusy(ns) && (
		upSkill(),
		ns.singularity.stopAction(),
		b.getBlackOpNames().forEach(op => (b.startAction("BlackOps", op))))
}

/** @param {NS} ns */
export async function stan(ns, s = ns.stanek) {
	const frags = JSON.parse(ns.read("frags.js") || "0"),
		getTarget = () => frags.filter(frag => frag && frag.id < 100).sort((a, b) => a.numCharge - b.numCharge)[0],
		tryCharge = async (spare_threads = Math.floor((ns.getServerMaxRam("home") - ns.getServerUsedRam("home") - 100) / ns.getScriptRam("chrg.js"))) => (s.acceptGift() && frags && (spare_threads > 0 ? ns.exec("chrg.js", "home", spare_threads, getTarget().x, getTarget().y) : (ns.print("no threads! skipping..."))), ns.writePort(ns.pid, ""), await ns.asleep(10000), tryCharge());

	ns.disableLog("ALL"), ns.enableLog("exec"), await tryCharge();
}

/** @param {NS} ns */
export async function runGang(n, g = n.gang) {
	const getAvailableNames = () => ["Tony Harrison", "Kathy Rindhoops", "Jimmy Lazers", "Naboo the Enigma", "Helen Back", "Tubular Tony", "Stabby Clarkson", "Carl", "Poops Mcghee", "Hairy Dan", "Will Barrow", "Barry Three-Nips", "Markkus", "Patricia O'Violence", "Pat O'Cake", "Ray Fridgerator", "Sammy the Squid", "Slanty Bob (one leg)", "Bastard Man", "Man-Spider", "Non-Bio Bruce", "Rockhead Rumple", "Joey Tagliatelle", "Johnny Segment"].filter(n => !g.getMemberNames().includes(n)),
		getRandomName = () => getAvailableNames()[Math.round(Math.random() * (getAvailableNames().length - 1))],
		gang_name = "Slum Snakes",
		other_gang_info = g.getOtherGangInformation,
		printToPort = j => (n.clearPort(n.pid), n.writePort(n.pid, JSON.stringify({ cycle: j, memnum: g.getMemberNames().length, power: g.getGangInformation().power, nextpower: Math.max(...Object.values(other_gang_info()).map(g => g.power)), territory: g.getGangInformation().territory * 100, tw: g.getGangInformation().territoryWarfareEngaged }))),
		tick = async (q = () => Object.values(other_gang_info()).reduce((a, b) => a.power + b.power), l = q()) => (await n.sleep(50), l == q() && await tick()),
		assignJob = (t, y = g.getMemberNames().length == 12 ? "moneyGain" : "respectGain") => (
			g.getMemberNames().forEach(member => (
				g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)),
				["agi", "str", "def", "dex"].map(skill => g.getAscensionResult(member)?.[skill]).reduce((d, t) => d + t) > 6 && g.ascendMember(member),
				g.setMemberTask(member, t ?? g.getTaskNames().map((n) => (g.setMemberTask(member, n), { name: n, gain: g.getMemberInformation(member)[y] })).sort((a, b) => b.gain - a.gain)[0].name)
			)),
			printToPort(t?.split(" ").map(a => a[0]).join("") ?? "Jobs")

		),
		getBTDenom = () => g.getBonusTime() > 5000 ? 25 : 1,
		runLoop = async () => (((g.inGang() || g.createGang(gang_name)) ? (
			g.recruitMember(getRandomName()) && n.tprint(`${c.r}Recruited ${c.g}${getAvailableNames[getRandomName]}`),
			g.setTerritoryWarfare(!Object.keys(other_gang_info()).filter(h => h !== gang_name).some(h => g.getChanceToWinClash(h) < .55)),
			assignJob(),
			await n.sleep(15000 / getBTDenom()),
			assignJob("Train Combat"),
			await n.sleep(4500 / getBTDenom()),
			assignJob("Territory Warfare"),
			await tick()) :
			await n.sleep(30000), await runLoop())
		);
	await runLoop()
}


// PRiSM -Δ<
// A batcher
/** @param {NS} ns */
export async function prsm(ns) {
	ns.disableLog('ALL');
	ns.enableLog('exec');
	const decideThreads = (available, requested) => available < requested ? available : requested;
	const getThreadDiff = (total, threads) => total - threads;

	const dummy_player = Object.freeze(ns.getPlayer()),
		getHostRam = (server, spareram = server == "home" ? (ns.getServerMoneyAvailable("home") > 150e9 ? 1000 : 100) : 0) => Math.floor(ns.getServerMaxRam(server) - spareram - ns.getServerUsedRam(server)),
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
			const hack_percentage = 0.01, // decimal percentage to hack
				job_delay = 20, // delay between HWGW jobs in ms
				batch_delay = job_delay * 5, // delay between batches
				host_list = sGet(ns).filter(server => ns.hasRootAccess(server) && server.substring(0, 7) != "hacknet"),
				target = ns.getServer(sGet(ns).filter(s => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel() / 2).map(s => ({ name: s, val: ns.getServerMaxMoney(s) / ns.getServerMinSecurityLevel(s) })).sort((a, b) => b.val - a.val)[0]?.name ?? "foodnstuff"),
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
				deployScripts = () => ["hack", "grow", "weaken"].forEach((script, _) => (ns.write(`${script}.js`, `export const main = async ns => await ns.${script}(ns.args[0], { additionalMsec: ns.args[1] })`, "w"), sGet(ns).forEach(server => ns.scp(`${script}.js`, server)))),
				jobs_array = (target.moneyAvailable / target.moneyMax < 0.9 || target.hackDifficulty > target.minDifficulty + 3) ? whole_jobs_array.slice(1, 3) : whole_jobs_array, // gw to prep
				//ns.tprint(jobs_array)
				mod_run_dummy_player = (deployScripts(), jobs_array.flatMap(script =>
					host_list.map(host =>
						sendJobs(// Iterate through hosts and fill each one with jobs until done
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
				).pop());
			ns.clearPort(ns.pid);
			ns.writePort(ns.pid, JSON.stringify(target));
			await ns.sleep(batch_delay);
			await runLoop(mod_run_dummy_player)
		};
	await runLoop(dummy_player);

}

/** @param {NS} ns */
export async function gvnr(ns) {
	ns.tail();
	ns.disableLog('ALL');
	ns.tprintf(`${c.m}** ./gvnr.js **`);
	ns.print(`${c.r} *** LOADING ***`);
	const peekyPorty = (script, data = ns.peek(ns.getRunningScript(script)?.pid ?? ns.pid)) => JSON.parse(data == "NULL PORT DATA" ? "[]" : data),
		percColour = perc => (perc < 33 ? `${c.r}${perc}` : perc < 66 ? `${c.y}${perc}` : perc < 85 ? `${c.c}${perc}` : `${c.g}${perc}`).padStart(11, " "),
		secColour = sec => (sec < 0 ? `${c.g}${sec}` : sec < 66 ? `${c.y}${sec}` : `${c.r}${sec}`).padStart(8, " "),
		getCash = ns.getServerMoneyAvailable,
		getMaxMoney = ns.getServerMaxMoney,
		getSecLvl = ns.getServerSecurityLevel,
		getSecMin = ns.getServerMinSecurityLevel,
		fmtNum = ns.formatNumber,
		refresh_delay = 1,
		cycle_delay = 30,
	 runLoop = async (timer = 0, is_first_start = true, cycle_counter = 0) => {
		ns.moveTail(eval("window").innerWidth - 1300, 0)
		ns.resizeTail(850, 1000);
		// Run things every n sec
		if (timer % cycle_delay == 0 && !ns.args[0]) {
			for (const script of [
				...ONESHOT_SCRIPTS.map(s => `oneshot/${s}.js`),
				"solveallcontracts.js",
			]) {
				if (is_first_start) { ns.tprintf(`${c.y}starting ${script}`) }
				let runpid = ns.run(script)
				if (runpid) {
					await ns.getPortHandle(runpid).nextWrite();
					if (is_first_start) { ns.tprintf(`${c.g}${script} passed init`) };
				} else { ns.tprintf(`${c.r}!! ${script} DID NOT RUN !!`) };
			}
		}
		LOOP_SCRIPTS.map(s => `loop/${s}.js`).forEach(script => !ns.isRunning(script) && (ns.run(script), ns.tprintf(`${c.y}starting ${script}`)));
		const prsm_info = peekyPorty("loop/prsm.js"), gang_info = peekyPorty("loop/runGang.js"), hacknet_info = JSON.parse(ns.read("logs/hacknet_info.txt"));
		if (is_first_start) { ns.print(`${c.m}Welcome to gnvr.js`), ns.tprintf(`${c.g}*** Startup Complete ***`), await ns.sleep(1000), ns.run("neofetch.js") };

		// Tail print
		const mainlist = sGet(ns),
			access_list = mainlist.filter(s => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel()),
			funded_list = access_list.filter(s => getMaxMoney(s)),
			funded_count = mainlist.reduce((a, s) => a + !!getMaxMoney(s), 0),
			total_max_ram = access_list.reduce((a, s) => a + ns.getServerMaxRam(s), 0),
			total_free_ram = total_max_ram - access_list.reduce((a, s) => a + ns.getServerUsedRam(s), 0),
			spacer = " | ",
			date = Number(new Date()),
			lastaugtime = Number(ns.read("logs/lastAugTime.txt")) || date,
			boughtaugs = JSON.parse(ns.read("logs/boughtAugs.txt")),
			boughtaugsminusnfg = boughtaugs.reduce((acc, aug) => acc + (aug != NFG), 0),
			nfgcount = boughtaugs.reduce((acc, aug) => acc + (aug == NFG), 0),
			otheraugs = JSON.parse(ns.read("logs/installedAugs.txt")).reduce((acc, aug) => acc + (aug != NFG), 0),
			aug_info = boughtaugs.filter(a => a != NFG).map(aug => ` ·${aug}`).concat(nfgcount ? [(` ·NeuroFlux Governor x${nfgcount}\n`)] : null).join("\n");
		ns.clearLog()
		funded_list.map(server => ({
			name: server,
			maxmoney: ns.formatNumber(getMaxMoney(server)).toString().padStart(8, " "),
			availmoney: ns.formatNumber(getCash(server)).toString().padStart(8, " "),
			percmoney: percColour((getCash(server) / getMaxMoney(server) * 100).toFixed(2)) + "%" + c.d,
			seclvl: Math.ceil(getSecLvl(server)).toString().padStart(3, " "),
			secdelta: secColour(Math.floor(getSecLvl(server) - (getSecMin(server) + 3))) + c.d,
			weaktime: t(ns.getWeakenTime(server)),
		})
		).forEach(server =>
			ns.print(`${spacer}${server.seclvl}${spacer}${server.secdelta}${spacer}${server.availmoney}${spacer}${server.maxmoney}${spacer}${server.percmoney}${spacer}${server.weaktime}${spacer}${server.name}${server.name == prsm_info.hostname ? ` ${c.w}---${c.y}Δ< ` : ""}`)
		);
		ns.print(...[
			`${spacer}sec${spacer} Δ ${spacer}  \$cur  ${spacer}  \$max  ${spacer}   %   ${spacer}  ~ete  ${spacer} Target ~ ${funded_list.length}/${funded_count}\n\n`,
			` home - ${ramFormat(ns.getServerMaxRam("home") - ns.getServerUsedRam("home"))}/${ramFormat(ns.getServerMaxRam("home"))}, network - ${ramFormat(total_free_ram)}/${ramFormat(total_max_ram)}, ${fmtNum(Math.floor(total_free_ram / ns.getScriptRam("weaken.js")))}/${fmtNum(Math.floor(total_max_ram / ns.getScriptRam("weaken.js")))} threads\n`,
			` bought augs x ${boughtaugsminusnfg}, ${otheraugs}/100 installed\n`,
			`${aug_info}`,
			` ${ns.read("logs/installAugsReason.txt")}`,
		]);

		// Overview stuff
		const p = ns.getPlayer(),
			doc = eval("document"),
			hook0 = doc.getElementById('overview-extra-hook-0'),
			hook1 = doc.getElementById('overview-extra-hook-1'),
			leftbar = "<>".repeat(9),
			rightbar = leftbar;
		hook0.innerText = [
			`bitnode:`,
			`pserv:`,
			`w_d lvl:`,
			`city:`,
			`karma:`,
			leftbar,
			`target:`,
			`\$/s:`,
			`\$ total:`,
			`xp/s:`,
			`scripts:`,
			leftbar,
			`hN Servers:`,
			`hashes/Max:`,
			`hashes/s:`,
			`profit:`,
			leftbar,
			`status:`,
			`members:`,
			`power:`,
			`territory:`,
			`warfare?:`,
			`profit:`,
			`${leftbar}`,
			`${tickString(timer)}`,
			`gvnr uptime:`,
			`t+ Augbuy:`,
			`t+ Install:`,
			`t+ Bitnode:`,
		].join("\n")

		hook1.innerText = [
			`${getCurrentNode(ns)}`,
			`${ns.getPurchasedServers().length}/${ns.getPurchasedServerLimit()}`,
			`${Math.round(3000 * ns.getBitNodeMultipliers().WorldDaemonDifficulty)}`,
			`${p.city}`,
			`${fmtNum(ns.heart.break())}`,
			rightbar,
			`${prsm_info.hostname}`,
			`\$${fmtNum(ns.getScriptIncome("loop/prsm.js"))}`,
			`${fmtNum(ns.getMoneySources().sinceInstall.hacking)}`,
			`${fmtNum(ns.getTotalScriptExpGain())}`,
			`${sGet(ns).flatMap(s => ns.ps(s)).length}`,
			rightbar,
			`${hacknet_info.num}`,
			`${hacknet_info.hashes}`,
			`${fmtNum(hacknet_info.prod)}`,
			`\$${fmtNum(hacknet_info.profit)}`,
			rightbar,
			`${gang_info?.cycle ?? "~"}`,
			`${gang_info?.memnum ?? "~"}`,
			`${fmtNum(gang_info?.power ?? 0, 2)}/${fmtNum(gang_info?.nextpower ?? 0, 2)}`,
			`${fmtNum(gang_info?.territory ?? 0 * 100) ?? "~"}%`,
			`${gang_info?.tw ?? "~"}`,
			`\$${fmtNum(ns.getMoneySources().sinceStart.gang ?? 0)}`,
			`${rightbar}`,
			`cycle #${Math.floor(cycle_counter++ / cycle_delay)}`,
			`${t(timer * 1000)}`,
			`${!!(date - lastaugtime) ? t(date - lastaugtime) : "N/A"}`,
			`${t(date - ns.getResetInfo().lastAugReset)}`,
			`${t(date - ns.getResetInfo().lastNodeReset)}`,
		].join("\n")


		ns.atExit(() => { hook0.innerText = ""; hook1.innerText = "" }) // Clears the overview on exit to prevent stale data
		is_first_start = false
		timer += refresh_delay;
		await ns.sleep(refresh_delay * 1000)
	await runLoop(timer,false,cycle_counter)
	};
	await runLoop()
}