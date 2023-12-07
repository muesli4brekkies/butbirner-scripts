/** @param {NS} ns */
export async function main(ns) {
    await ns.hack(ns.args[0],{additionalMsec:ns.args[1]});
    //ns.tprint(`HACK ${ns.getHostname()} > ${ns.args[0]}`)
}