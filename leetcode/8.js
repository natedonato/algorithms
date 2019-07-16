/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let i = 0;
    while(str[i] === " "){
        i++;
    }    

    const symbols = {"-": true, "+": true};
    const digits = {1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 0: true};
    if(!digits[str[i]] || symbols[str[i]]){return(0)};
    
    
    if(!str[i]){return(0)}
    if(str[i] === "+"){i++;  
    if(!digits[str[i]]){return(0)};
    }
    
    let res = 1;
    let negative = 1;
    
    if(str[i] === "-"){
        negative = -1;
        i++;
        if(!digits[str[i]]){return(0)};
        res = str[i]
        i++
    }else{
        res = str[i]
        i++;
    }
    
    
   

    while(digits[str[i]]){
        res = res + str[i];
        i++;

        if(res >= 2147483648){return 2147483648 * negative};
    } 
    
    return res * negative;
};
