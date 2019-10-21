// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Input : [-12, 11, -13, -5, 6, -7, 5, -3, -6]
// Output :-12 -13 -5 -7 -3 -6 11 6 5

function intSort(arr){
    let negs = [];

    let positives = [];

    for(el of arr){
        if(el < 0){
            negs.push(el);
        }else{
            positives.push(el);
        }
    }
    return negs.concat(positives);
}
