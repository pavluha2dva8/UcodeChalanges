/*
Task: 02 (index.js)
Name: Range
*/

let checkDivision = (beginRange = 1, endRange = 60) => {
	let str;
	let flag;

	while (beginRange <= endRange) {
		str = `The number ${beginRange}`;
		flag = false;
		if ((beginRange % 2) == 0) {
			str += ' is divisible by 2';
			flag = true;
		}
		if ((beginRange % 3) == 0) {
			str += ' is divisible by 3';
			flag = true;
		}
		if ((beginRange % 10) == 0) {
			str += ' is divisible by 10';
			flag = true;
		}
		if (flag == false) str += ' -';
		
		flag = false;
		console.log(str);
		++beginRange;
	}
}


module.exports = {checkDivision}