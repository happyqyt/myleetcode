/**题目描述
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const jud = 214748364 //min = -2147483648, max = 2147483647
  let lastN = 0, toN = 0
  while (Math.abs(x) > 0) {
    lastN = x % 10
    if (Math.abs(toN) > jud) return 0 // 溢出
    if (Math.abs(toN) === jud ) {
      if (toN > 0 && lastN > 7) return 0 // 溢出
      else if (toN < 0 && lastN < -8 ) return 0 // 溢出
    }
    toN = toN * 10 + lastN
    if (x < 0) x = -Math.floor(Math.abs(x) / 10)
    else x = Math.floor(x / 10)
  }
  return toN
};