let f=(x,y)=>1/(1%x/y);
let xor=(x,y)=>!f(!f(!f(x,y),x),!f(!f(x,y),y));

export function main(ns){
	ns.tprint(f(Infinity,Infinity));
	ns.tprint(f(NaN,NaN));
	ns.tprint(f(Infinity,NaN));
	ns.tprint(f(NaN,Infinity));

	ns.tprint(xor(Infinity,Infinity));
	ns.tprint(xor(NaN,NaN));
	ns.tprint(xor(Infinity,NaN));
	ns.tprint(xor(NaN,Infinity));
}