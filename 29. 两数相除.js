/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var div = function (a, b) {
	if (a < b) return 0

	let ct = 1
	let tb = b

	while (a > (tb + tb)) {
		if (ct < 1073741824) ct = ct + ct
		else return 2147483647
		tb = tb + tb
	}

	return ct + div(a - tb, b)
}

var divide = function(dividend, divisor) {
    if (dividend === 0) return 0
    if (divisor === 1) return dividend
    if (divisor === -1) {
        if (dividend > -2147483648) return -dividend
        else return 2147483647
    }

    let fushu = true
    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) fushu = false

	if (dividend < 0) dividend = Math.abs(dividend)
	if (divisor < 0) divisor = Math.abs(divisor)

	if (dividend < divisor) return 0

    let ret = div(dividend, divisor)

	if (fushu) {
		ret = -ret
	}

	return ret
};

/* 这个方法就是不断的减去除数，时间效率不够好 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0
    if (divisor === 1) return dividend
    if (divisor === -1) {
        if (dividend > -2147483648) return -dividend
        else return 2147483647
    }

    let fushu = true
    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) fushu = false

	if (dividend < 0) dividend = Math.abs(dividend)
	if (divisor < 0) divisor = Math.abs(divisor)

    let ret = 0
	while (dividend >= divisor && ret < 2147483647) {
		dividend -= divisor
		ret ++
	}

	if (fushu) {
		ret = -ret
	 	if (dividend >= divisor) {
			dividend -= divisor
			ret--
		}
	}

	return ret
};