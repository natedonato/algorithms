/**
 * @param {string} s
 * @return {string}
 */
 
 //451. Sort Characters By Frequency

var frequencySort = function(s) {
    let count = {};
    
    //first we create a hash with each character as a key and the frequency of that character as the value (calculated by iterating thru each character and adding one to that chars count value)
    s.split("").forEach(char =>{
        if(!count[char]){
            count[char] = 1
        }else{
            count[char] += 1
        }
    });
    
    //then we create an array of our keys (characters), sorting the keys by their frequency values.
    let sorted = Object.keys(count).sort((a,b) => count[b] - count[a]);
    
    //finally we assemble our output string using our sorted array, repeating every character by the frequency / count
    let output = "";
    sorted.forEach(char =>{
        output += char.repeat(count[char]);
    });
    
    return output
};
