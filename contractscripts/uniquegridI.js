/** @param {NS} ns */
export async function main(ns) {
    const rightMoves = ns.args[0] - 1;
    const downMoves = ns.args[1] - 1;

    ns.tprint(Math.round(factorialDivision(rightMoves + downMoves, rightMoves) / (factorial(downMoves))))

function factorial(n) {
    return factorialDivision(n, 1);
}

function factorialDivision(n, d) {
    if (n == 0 || n == 1 || n == d)
        return 1;
    return factorialDivision(n - 1, d) * n;
}
}