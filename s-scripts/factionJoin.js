export const main = (n, s = n.singularity, m = "\x1b[35m") => { s.checkFactionInvitations().forEach(f => { s.joinFaction(f);n.tprint(`${m}Joined ${f}`)});n.writePort(n.pid,"")}