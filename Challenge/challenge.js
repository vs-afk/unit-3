

let firstName = "Vince"
let age = 36
let annualIncome = 100000
let creditScore = 720
let isCitizen = true
let hasCriminalRecord = false

let accountApproval

if (age > 18 && isCitizen && !hasCriminalRecord) {
    accountApproval = true
    console.log("Account Approved");
} else {
    accountApproval = false
    console.log("Account Denied");
}


if (annualIncome > 100000 && creditScore >= 720 && accountApproval) {
    console.log("Premium Approved")
}   else {
    console.log("Standard Account Only")
}

if (creditScore < 600 || annualIncome < 25000) {
    console.log("Flag for Review")
}   else {
    console.log("No Risk Flags")
}