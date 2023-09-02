/** @param {NS} ns */
export async function main(ns) {
	if (!ns.fileExists("logs/gangcycle.txt")) ns.write("logs/gangcycle.txt", 0, "w")
	const traincycle = 8 // Train combat one cycle every traincycle
	let gangcycle = ns.read("logs/gangcycle.txt"),
		membercount = 0,
		runpid,
	toggle,
		jobtodo;

	gangcycle++
	ns.write("logs/gangcycle.txt", gangcycle, "w");
	// Make a gang
	ns.gang.createGang("Slum Snakes")
	if (!ns.gang.inGang()) { ns.writePort(ns.pid, ""); ns.exit() } // Exit if no gang made

	// Run recruit and territory warfare subscripts
	["g-scripts/recruit.js", "g-scripts/territoryWarfare.js"]
		.forEach(async script => runpid = ns.run(script), (runpid) && await ns.getPortHandle(runpid).nextWrite());

	// Do a bunch of stuff for every member of the gang
	for (const member of ns.gang.getMemberNames()) {
		const minskill = Math.min(...["str", "agi", "dex", "def"].map(skill => ns.gang.getMemberInformation(member)[skill]));
		membercount++;

		// run ascend and buy equipment subscripts
		["g-scripts/ascendGangMember.js", "g-scripts/equipGangMember.js"]
			.forEach(async script => runpid = ns.run(script, 1, member), (runpid) && await ns.getPortHandle(runpid).nextWrite());

		// Train on cycle
		if (minskill < 50 || (gangcycle % traincycle == 0 && gangcycle != 0)) {
			ns.gang.setMemberTask(member, "Train Combat")
			continue;
		}

		// Reduce wanted level if it's high
		if (ns.gang.getGangInformation().wantedPenalty < 0.80 && ns.gang.getGangInformation().wantedLevel > 20) {
			ns.gang.setMemberTask(member, "Vigilante Justice")
			continue;
		}

		// Send guys to territory warfare if needed
		const ganginfo = Object.entries(ns.gang.getOtherGangInformation()).slice(1), // Slice (our gang) from the array
			maxotherpower = Math.max(...(ganginfo).map(entry => entry[1].territory && entry[1].power)); // Get max power of other gangs (that also have territory)
		if (ns.gang.getGangInformation().power < maxotherpower * 1.2) { // Send guys to build power if our power < 1.2 * max other power
			if (membercount > 2) { // Always have the first two dudes working to build the gang
				ns.gang.setMemberTask(member, "Territory Warfare")
				continue;
			}
		}

		// If we don't have all members or own a corp (i.e have loads of money) focus respect gains
		(ns.gang.getMemberNames().length != 12 || ns.corporation.hasCorporation()) ? toggle = "respectGain" : toggle = "moneyGain";

		ns.gang.getTaskNames().slice(1, 10).forEach((name, max) => {
			ns.gang.setMemberTask(member, name); // For each task, set member to the task...
			(ns.gang.getMemberInformation(member)[toggle] > max) && (max = ns.gang.getMemberInformation(member)[toggle], jobtodo = name); //...find the best one...
		});
		ns.gang.setMemberTask(member, jobtodo); // ...and do it!



	}
	ns.writePort(ns.pid, "");
}


