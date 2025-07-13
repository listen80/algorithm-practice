// https://leetcode.cn/problems/minimum-swaps-to-group-all-1s-together-ii/description/

function minSwaps(nums) {
    const n = nums.length;
    const ones = nums.filter(item => item === 1).length;
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let res = Infinity;
   
    while (right < n + ones) {
        if (nums[right % n] === 0) {
            zeroCount++;
        }
        if (right - left + 1 > ones) {
            if (nums[left % n] === 0) {
                zeroCount--;
            }
            left++;
        }
        if (right - left + 1 === ones) {
            res = Math.min(res, zeroCount);
        }
        right++;
    }
    return res;
}

console.log(minSwaps([0, 1, 0, 1, 1, 0, 0]))