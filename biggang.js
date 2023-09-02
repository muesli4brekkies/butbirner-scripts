// This script is all the gang related functions in one place. The normal gang.js and subscripts allow for lower ram-use

const /* Pretty Colours!*/ r = "\x1b[31m", gr = "\x1b[32m";

function recruit(g, n) {
	const names = [
		"***",
		"Put at least 12 gang member names here!",
		"***"
	].filter(name => !g.getMemberNames().includes(name)), i = Math.round(Math.random() * (names.length - 1));
	(g.recruitMember(names[i])) && n.tprint(`${r}Recruited ${gr}${names[i]}`);
};

function territoryWarfare(g) {
	const mygang = "Slum Snakes", ganginfo = g.getOtherGangInformation(), gangs = Object.entries(ganginfo);
	for (const gang of gangs) { if (gang[1].territory && gang[0] != mygang) { if (g.getChanceToWinClash(gang[0]) < 0.5) { return g.setTerritoryWarfare(0); } } }; // If any of the clash chances are sub 50% turn off warfare
	g.setTerritoryWarfare(1)
};

function equipGangMember(g, member) { g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)) }

function ascendGangMember(g, member) {
	(g.getAscensionResult(member)) && ((["agi", "str", "def", "dex"].map(skill => g.getAscensionResult(member)[skill])).reduce((gain, sum) => gain + sum) > 6) && g.ascendMember(member)
};


/** @param {NS} ns */
export function main(ns) {
	if (!ns.fileExists("logs/gangcycle.txt")) ns.write("logs/gangcycle.txt", 0, "w")
	const traincycle = 8 // Train combat one cycle every traincycle
	let gangcycle = ns.read("logs/gangcycle.txt"),
		membercount = 0,
		toggle,
		jobtodo;

	gangcycle++;
	ns.write("logs/gangcycle.txt", gangcycle, "w");
	// Make a gang
	ns.gang.createGang("Slum Snakes");
	if (!ns.gang.inGang()) { ns.writePort(ns.pid, ""); ns.exit() }; // Exit if no gang made
	// Run recruit and territory warfare funcs
	recruit(ns.gang);
	territoryWarfare(ns.gang);

	// Do a bunch of stuff for every member of the gang
	for (const member of ns.gang.getMemberNames()) {
		const minskill = Math.min(...["str", "agi", "dex", "def"].map(skill => ns.gang.getMemberInformation(member)[skill]));
		membercount++;
		// run ascend and buy equipment funcs
		ascendGangMember(ns.gang, member);
		equipGangMember(ns.gang, member);
		// Train on cycle
		if (minskill < 50 || (gangcycle % traincycle == 0 && gangcycle != 0)) {
			ns.gang.setMemberTask(member, "Train Combat")
			continue;
		};
		// Reduce wanted level if it's high
		if (ns.gang.getGangInformation().wantedPenalty < 0.80 && ns.gang.getGangInformation().wantedLevel > 20) {
			ns.gang.setMemberTask(member, "Vigilante Justice")
			continue;
		};
		// Send guys to territory warfare if needed
		const ganginfo = Object.entries(ns.gang.getOtherGangInformation()).slice(1), // Slice (our gang) from the array
			maxotherpower = Math.max(...(ganginfo).map(entry => entry[1].territory && entry[1].power)); // Get max power of other gangs (that also have territory)
		if (ns.gang.getGangInformation().power < maxotherpower * 1.2) { // Send guys to build power if our power < 1.2 * max other power
			if (membercount > 2) { // Always have the first two dudes working to build the gang
				ns.gang.setMemberTask(member, "Territory Warfare")
				continue;
			}
		};
		// If we don't have all 12 members or own a corp (i.e have loads of money) focus respect gains
		(ns.gang.getMemberNames().length != 12 || ns.corporation.hasCorporation()) ? toggle = "respectGain" : toggle = "moneyGain";

		ns.gang.getTaskNames().slice(1, 10).forEach((name, max) => {
			ns.gang.setMemberTask(member, name); // For each task, set member to the task...
			(ns.gang.getMemberInformation(member)[toggle] > max) && (max = ns.gang.getMemberInformation(member)[toggle], jobtodo = name); //...find the best one...
		});
		ns.gang.setMemberTask(member, jobtodo); // ...and do it!
	};
	ns.writePort(ns.pid, ""); // Useful to pass info back to governing script and/or check for crashes
};


