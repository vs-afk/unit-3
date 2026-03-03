const transactions = [250, -100, 400, -50, -300, 1200, -20, 75];

function calculateBalance(x) {
    let total = 0;

    for(let i = 0; i < x.length; i++) {
        total = total + x[i];
    }
    return total;
}

let balance = calculateBalance(transactions);
console.log(balance)

function countDeposits(x) {
    let total = 0;
    for(let i = 0; i < x.length; i++) {
        if (x[i]> 0) {
            total++;
        }
    }
    return total;
}

let depositCount = countDeposits(transactions)
console.log(depositCount)

function countWithdrawals(x) {
    let total = 0;
    for(let i = 0; i < x.length; i++) {
        if (x[i]< 0) {
            total++;
        }
    }
    return total;
}

let withdrawalCount = countWithdrawals(transactions)
console.log(withdrawalCount)