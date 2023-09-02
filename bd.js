export let main=async(n,y=n.singularity,h="home")=>{let m=(n,r=[],t = n.args[0],l=(n,t,x,r)=>{r.unshift(t);m(n,r,x)},g=(r)=>r.map(s=>y.connect(s)))=>{(t!=h)?l(n,t,n.scan(t)[0],r):(g(r));};m(n);try{await y.installBackdoor()}catch{};y.connect(h);n.writePort(n.pid,"")}
	//(t != "home") ?  l(n, t, n.scan(t)[0], r):(g(r),n.tprint(r));
/* 
export async function main(ns) {
		let target = ns.args[0]
		let result = []
		while (true) {
				result.unshift(target)
				target = ns.scan(target)[0]
				if (target == "home") break;
		}
		for (let server of result) {
				ns.singularity.connect(server)
		}
		ns.writePort(ns.pid,"")
}
*/