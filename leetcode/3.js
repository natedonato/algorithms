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
    let length = 1;
    if(s.length === 0){
        return 0;
    }
    let substring = s[0];

    for(let i = 1; i < s.length; i++){
        let char = s[i];
        substring = checkForInclusion(substring).concat(char);
        if(substring.length > length){
            length = substring.length;
        }
    }
    return length;
};

var checkForInclusion = function (s, c) {
    const index = s.indexOf(c);
    if(index === -1){
        return s;
    }else{
        return s.slice(index + 1);
    }
};


