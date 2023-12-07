import { tickString, c } from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog("ALL");
	ns.tail()
	const xy = ns.getRunningScript().tailProperties
	for (let i = 0; i < 100; i++) {
		ns.clearLog()
		ns.printRaw( React.createElement("h1",{style: {color:`rgb(${2.55 * (100 - i)},${2.55 * i},0)`} },`${tickString(i, 20)}\n[LOADING - ${i}%]`))
		ns.resizeTail(xy.width, xy.height)
		await ns.sleep(200 * Math.random())
	}
		ns.printRaw( React.createElement("h1",{},":)"))
	new Audio("https://raw.githubusercontent.com/muesli4brekkies/butbirner-scripts/main/Silly_Farts-Joe-1473367952.mp3").play()
}
