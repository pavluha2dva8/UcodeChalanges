let capitalize = (string) => {
    let reg = new RegExp(`${string[0]}`);
    return (string != '') ? string.replace(reg, `${string[0].toUpperCase()}`) : '';
}

let firstName = capitalize(prompt('Enter your first name:'));
let lastName = capitalize(prompt('Enter your last name:'));

if (firstName == '' || firstName.match(/\W/g) || firstName.match(/\d/g) ||
	lastName == '' || lastName.match(/\W/g) || lastName.match(/\d/g)) {

		alert('Wrong input! Only characters');

} else {
	alert(`Greetings ${firstName} ${lastName}!`);
	console.log(`Greetings ${firstName} ${lastName}!`);
}
