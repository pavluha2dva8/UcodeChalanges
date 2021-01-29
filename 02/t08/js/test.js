'use strict'

describe('Check Brackets', function () {
	let array = [
		'( ( a + b ) / 5 – d )', 0,
		'( ( ) a + b ) / 5 – d )', 1,
		'1)()(())2(()', 2,
		'( ) ) ( ( a + b ) / 5 – d )', 1,
		'(1)()(())2(()', 1,
		'qwerty)', 1,
		'((()))', 0,
		'(((', 3,
		'(qwertttt)()', 0,
		'(())(())()()', 0,
		'(hi(hi)hi)hi)))', 0,
		];
	let error = [
		undefined,
		null,
		NaN,
		1488,
		];
 
	  let makeCorrectTest = (depth, result) => {
		 it(`In "${depth}" string have to add ${result} brackets`, function () {
			assert.equal(checkBrackets(depth), result);
		 });
	  }
 
	  for (let i = 0; array[i]; i += 2)
		 makeCorrectTest(array[i], array[i + 1])

		 
 
	  let makeErrorTest = (value) => {
		 it(`If income ${typeof value} return value is -1`, function () {
			assert.equal(checkBrackets(value), 0);
		 });
	  }
	  for (let i = 0; i < error.length; i++)
		 makeErrorTest(error[i]);

	});








// console.log(checkBrackets('( ( a + b ) / 5 – d )')); // true 0
// console.log(checkBrackets('( ( ) a + b ) / 5 – d )')); // false 1
// console.log(checkBrackets('( ) ) ( ( a + b ) / 5 – d )')); // false 1
// console.log(checkBrackets('1)()(())2(()'));// false 2
// console.log(checkBrackets(NaN));// NaN -1