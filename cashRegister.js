/*Design a cash register drawer function checkCashRegister() 
    that accepts purchase price as the first argument (price), 
    payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
*/
console.log("\nCash Register\n");
    function checkCashRegister(price, cash, cid) {
        let changeDue = cash - price;
        let change = [];
        let cidTotal = 0;

    for (let i = 0; i < cid.length; i++) {
        cidTotal += cid[i][1];
    }
    if (cidTotal < changeDue) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    if (cidTotal === changeDue) {
        return {status: "CLOSED", change: cid};
    }

    let currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
    }

    for (let i = cid.length - 1; i >= 0; i--) {
        let unitName = cid[i][0];
        let unitValue = currencyUnits[unitName];
        let unitTotal = cid[i][1];

    if (unitValue > changeDue) {
        continue;
    }

    let unitsNeeded = Math.floor(changeDue / unitValue);
    if (unitsNeeded > unitTotal) {
        unitsNeeded = unitTotal;
    }
        let unitChange = unitsNeeded * unitValue;
        changeDue -= unitChange;
        changeDue = Math.round(changeDue * 100) / 100;

        change.push([unitName, unitChange]);

        cid[i][1] -= unitChange;
    }

    if (changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
        return {status: "OPEN", change: change};
    }
  }
  
  console.log(checkCashRegister(19.5, 20, 
    [["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]]
    ));
