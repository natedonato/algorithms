/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

    if (amount === 0) { 
        return 1; 
    }
    let firstCoin = coins[0];
    let count = 0;

    for(let qty = 0; qty * firstCoin <= amount; qty++){
        nextAmount = amount - qty * firstCoin;
        count += change(nextAmount, coins.slice(1));
    }


    return count;
};

change(5,[1,2,5]);