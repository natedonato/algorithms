//[1,2] [3,4]
// idx = 0
//midpoint = 2
// //cEle = 
// Runtime: 104 ms, faster than 96.27 % of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 38.7 MB, less than 94.72 % of JavaScript online submissions for Median of Two Sorted Arrays.

var findMedianSortedArrays = function (nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    if (totalLength === 1) { return nums1.concat(nums2)[0] }
    const midpoint = totalLength / 2;
    let index = 0;
    let currentEle;
    while (index < midpoint) {
        if (nums1.length === 0) {
            currentEle = nums2.shift();
            index++;
        } else if (nums2.length === 0) {
            currentEle = nums1.shift();
            index++;
        } else {
            if (nums1[0] < nums2[0]) {
                currentEle = nums1.shift();
                index++;
            } else {
                currentEle = nums2.shift();
                index++;
            }
        }
    }

    let nextEle;
    if (nums1.length === 0) {
        nextEle = nums2.shift();
    } else if (nums2.length === 0) {
        nextEle = nums1.shift();

    } else {
        if (nums1[0] < nums2[0]) {
            nextEle = nums1.shift();
        } else {
            nextEle = nums2.shift();
        }
    }

    if (totalLength % 2 === 1) {
        return currentEle;
    }

    return ((currentEle + nextEle) / 2.0);
};