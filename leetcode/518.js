// You are given coins of different denominations and a total amount of money.Write a function to compute the number of combinations that make up that amount.You may assume that you have infinite number of each kind of coin.


var change = function (amount, coins, memo = {}) {
    if(memo[amount]){return memo[amount];}
    if(amount === 0){return 0;}

    count = 0;
    
    coins.forEach(coin => {
        if(coin <= amount){
            count += 1 + change(amount - coin, coins, memo);
        }
    });

    return count;
};