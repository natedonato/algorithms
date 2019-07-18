var buddyStrings = function(A, B) {
    if(A.length !== B.length){return false};
    
    
    let counts = {};
    let dups = false;
    
    A.split("").forEach(char => {
        if(!counts[char]){counts[char] = 1;}
       
        else{
            dups = true;
            //console.log("dups in same string");
        }
    });
    
    if(A === B && dups){return true;}
    
    let count = 0;
    let cached = [];


    for(let i = 0; i < A.length; i++){
        
        if(A[i] !== B[i]){
            
            count++;
            
            
            if(count === 1){
                cached = [A[i],B[i]]
            }else if(count === 2)
                if(A[i] !== cached[1] || B[i] !== cached[0]){
                   // console.log("missmatch")
                    return false
                }
            
            if(count > 2)
            {
                return false;
        }        
    }}
    
    if(count === 0) {return false;}
    return true;
};
