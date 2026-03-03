const transactions = [250, -100, 400, -50, -300, 1200, -20, 75, -750];

function calculateBalance(x) {
    let total = 0;

    for(let i = 0; i < x.length; i++) {
        total = total + x[i];
    }
    return total;
}

console.log("Account Summary")
console.log("---------------")

let balance = calculateBalance(transactions);
console.log("Balance: " + balance)

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
console.log('Deposits: ' + depositCount)

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
console.log('Withdrawal: ' + withdrawalCount)

function detectLargeWithdrawal(x) {
    let activity;
    for(let i = 0; i < x.length; i++) {
        if (x[i] < -500) {
            activity = "Suspicious Activity Detected"
        } else {
            activity = "No Suspicious Activity"
        }
    }
    return activity;
}

let securityStatus = detectLargeWithdrawal(transactions)
console.log('Security Status: ' + securityStatus)