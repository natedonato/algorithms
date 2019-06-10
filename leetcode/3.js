// 3. Longest Substring Without Repeating Characters
// Medium

// 5610

// 314

// Favorite

// Share
// Given a string, find the length of the longest substring without repeating characters.

//     Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
//substring = ""
//length = ""
//check for include fn
//if included in substring, return all characters after inclusion (not including old inclusion) 
//
//
//

var lengthOfLongestSubstring = function (s) {
    const charIndex = {};
    let length = 0;
    let i = 0;
    for(let j = 0; j < s.length; j++){
        let char = s[j];
        if(charIndex[char] === undefined){
            charIndex[char] = j;
        }else{
            i = charIndex[char]+1;
            charIndex[char] = j;
            if(i !== j){
            while(charIndex[s[i]] !== i ){
                i++;
            }
            }
        }
        if(j - i + 1 > length){
            length = j - i + 1;
        }
    }
    return length;
};


