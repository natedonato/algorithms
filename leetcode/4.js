//[1,3] [2]
// idx = 0
//midpoint = 1


 
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const midpoint = totalLength / 2;
    let index = 0;
    let currentEle;
    while(index < midpoint){
        if(nums1.length === 0){
            currentEle = nums2.shift();
            index++;
        }else if (nums2.length === 0){
            currentEle = nums1.shift();
            index++;
        }else{
            if(nums1[0] < nums2[0]){
                currentEle = nums2.shift();
                index++;
            }else{
                currentEle = nums1.shift();
                index++;
            }
        }
    }
    if(totalLength % 2 === 1){
        return currentEle;
    }
    
    let nextEle;
    if (nums1.length === 0) {
        nextEle = nums2.shift();
    } else if (nums2.length === 0) {
        nextEle = nums1.shift();
    } else {
        if (nums1[0] < nums2[0]) {
            nextEle = nums2.shift();
        } else {
            nextEle = nums1.shift();
        }
    }

    return((currentEle + nextEle) / 2.0);
};