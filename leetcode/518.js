// You are given coins of different denominations and a total amount of money.Write a function to compute the number of combinations that make up that amount.You may assume that you have infinite number of each kind of coin.


var change = function (amount, coins, memo = {}) {
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let count = 0;
    if(coins.length === 0 ){
        if(amount > 0){
            return 0;
        }else{
            return 1;
        }
    };
    if(coins.length === 1 && amount % coins === 0){return 1;}
    if(coins.length === 1 && amount % coins != 0){return 0;}
    let firstCoin = coins.pop();
    
    while(amount >= firstCoin){
        // console.log("amount: ", amount);
        // console.log("coins: ", coins);
        // console.log("count: ", count);
        count += change(amount, coins);   
        amount -= firstCoin;
    }
    
    // console.log("count: ", count);
    // console.log("amount: ", amount);
    if(amount === 0){count += 1}
    
    if(amount > 0){
        count += change(amount, coins)
    }
    

    return count;
}
};
