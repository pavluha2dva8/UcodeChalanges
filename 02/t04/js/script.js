let checkDivision = (beginRange, endRange) => {
	let str;
	let flag;

	while (beginRange <= endRange) {
		str = beginRange;
		flag = false;
		if ((beginRange % 2) == 0) {
			str += ' is even';
			flag = true;
		}
		if ((beginRange % 3) == 0) {
			str += ' is a multiple of 3';
			flag = true;
		}
		if ((beginRange % 10) == 0) {
			str += ' is a multiple of 10';
			flag = true;
		}
		if (flag == false) str += ' -';
		
		flag = false;
		console.log(str + '\n');
		++beginRange;
	}
}

let start = Number(prompt('Enter begin of range', 1));
let end = Number(prompt('Enter end of range', 100));

checkDivision(start, end);

