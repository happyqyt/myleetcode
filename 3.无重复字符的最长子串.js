/**题目描述
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: "pwwkew"
输出: 3

解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 * 运行时间 120 ms	  内存消耗 44.1 MB
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0
    let res = 1
    let arr = [...s]
    let result = arr.reduce((total, cur, i, arr) => {
        if (total.indexOf(cur) < 0) return total + cur
        else if (res < total.length) {
            res = total.length
            return total.slice(total.indexOf(cur) + 1, total.length) + cur
        } else {
            return total.slice(total.indexOf(cur) + 1, total.length) + cur
        }
    }, "")

    if (res < result.length) res = result.length

    return res
};

/**
 * @param {string} s
 * @return {number}
 * 运行时间 84 ms	  内存消耗 36.7 MB
 */
var lengthOfLongestSubstring = function(s) {
    let arr = s.split('')
    if (arr.length === 0) return 0
    let spos = 0, epos = 0
    let maxLen = 1

    for (let i = 1; i < arr.length; i++) {
        let loop = arr[i]

        for (let j = spos; j <= epos; j++) {
            if (loop === arr[j]) {
                // 重复字符
                spos = j + 1
                break
            }
        }

        epos = i
        let len = epos - spos + 1
        if (len > maxLen) maxLen = len
    }

    return maxLen
};