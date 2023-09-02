import { c } from "func.js"

/** @param {NS} ns */
export async function recruit(g, n,
	names = [
		"Kathy Rindhoops",
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
		"Johnny Segment",
	].filter(name => !g.getMemberNames().includes(name)), i = Math.round(Math.random() * (names.length - 1))) {
	(g.recruitMember(names[i])) && n.tprint(`${c.r}Recruited ${c.g}${names[i]}`);
}

/** @param {NS} ns */
export function territoryWarfare(g) {
	const mygang = "Slum Snakes", ganginfo = g.getOtherGangInformation(), gangs = Object.entries(ganginfo);
	// If any of the clash chances are sub 50% turn off warfare
	for (const gang of gangs) { if (gang[1].territory && gang[0] != mygang) { if (g.getChanceToWinClash(gang[0]) < 0.5) { return g.setTerritoryWarfare(0); } } };
	g.setTerritoryWarfare(1)
}


/** @param {NS} ns */
export function equipGangMember(g, member) { g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)) }



/** @param {NS} ns */
export function ascendGangMember(g, member) {
	(g.getAscensionResult(member)) && ((["agi", "str", "def", "dex"].map(skill => g.getAscensionResult(member)[skill])).reduce((gain, sum) => gain + sum) > 6) && g.ascendMember(member)
}