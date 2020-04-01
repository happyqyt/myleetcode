/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let n = nums.length
    let left = 0, right = n - 1

    let compareIndex = Math.floor((left + right + 1) / 2) // 正中或偏右的下标
    while (compareIndex >= left && compareIndex <= right) {
        if (nums[compareIndex] === target) return compareIndex
        if (compareIndex === right) { // 比较到left和right相临了
            if (nums[left] > target) return left
            else if (nums[left] === target) return left
            else if (nums[left] < target) {
                if (nums[right] > target) return right
                else return right + 1 
            }
        }

        if (nums[compareIndex] > target) {
            right = compareIndex
        } else if (nums[compareIndex] < target) {
            left = compareIndex
        }

        compareIndex = Math.floor((left + right + 1) / 2)
    }
};