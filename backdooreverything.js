/** @param {NS} ns **/
export async function main(ns) {
	//ns.disableLog('ALL');
	ns.tail()
	const servers = GetAllServers(ns);
	const targets = ['CSEC', 'I.I.I.I', 'avmnite-02h', 'run4theh111z', 'The-Cave'];
	//'millenium-fitness', 'powerhouse-fitness', 'crush-fitness', 'snap-fitness'/*, 'w0r1d_d43m0n'*/];
 
	for (const server of servers) {
		if (servers == 'w0r1d_d43m0n') continue;
 
		//if (!targets.find(p => p == server.name)) {
		//    continue;
		//}
		ns.print(server.name + ' => ' + server.route);
 
		let so = ns.getServer(server.name);
		if (so.requiredHackingSkill > ns.getHackingLevel()) {
			continue;
		}
 
		if (!ns.hasRootAccess(server.name))
			continue;
 
		if (so.backdoorInstalled)
			continue;
 
		ns.print('Traversing the server chain to target: ' + server.name);
		for (const node of server.route) {
			if (!ns.singularity.connect(node)) {
				ns.tprint('ERROR: Could not connect to ' + node);
			}
			else {
				ns.tprint('INFO: Connected to ' + node);
			}
		}
 
		ns.print('INFO: Installing backdoor on ' + server.name);
		await ns.singularity.installBackdoor();
 
		so = ns.getServer(server.name);
		if (so.backdoorInstalled == false) {
			ns.print('ERROR: Failed to install backdoor on ' + server.name);
		}
		else
			ns.print('SUCCESS: Installed backdoor on ' + server.name);
	}
 
	ns.print('INFO: Done installing backdoors on all servers we have hack level for, returning home...');
	ns.singularity.connect('home');
	ns.print('SUCCESS: Done.');
}
 
export function GetAllServers(ns, root = 'home', found = new Array(), route = new Array()) {
	if (!found.find(p => p.name == root)) {
		let entry = new Object();
		entry.name = root;
		entry.route = route;
		entry.route.push(root);
		found.push(entry);
	}
 
	for (const server of ns.scan(root)) {
		if (!found.find(p => p.name == server)) {
			let newRoute = route.map(p => p);
			GetAllServers(ns, server, found, newRoute);
		}
	}
 
	return [...found];
 
}