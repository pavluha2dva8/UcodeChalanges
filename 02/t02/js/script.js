let getAnimal = () => {
    let animal = prompt('What animal is the superhero most similar to?');
        if (!/^[A-Z]{1,20}$/ig.test(animal)) {
            alert('Wrong input');
            return null;
        }
        return animal;
    } 

let getGender = () => {
    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other');
        if (!/male/i.test(gender) && !/female/i.test(gender) &&
        !/^$/.test(gender)) {
            alert('Wrong input');
            return null;
        }
        return gender;
}

let getAge = () => {
    let age = prompt('How old is the superhero?');
    if (!/^[0-9]{1,5}$/g.test(age)) {
        alert('Wrong input');
        return null;
    }
    return age;
}

let generateHeroName = () => {
    let animal, gender, age, description;
    if ((animal = getAnimal()) == null || (gender = getGender()) == null ||
    (age = getAge()) == null)
    return null;
    if (gender === `male` && +age < 18) description = `boy`;
    if (gender === `male` && +age >= 18) description = `man`;
    if (gender === `female` && +age < 18) description = `girl`;
    if (gender === `female` && +age >= 18) description = `woman`;
    if (gender.length == 0 && +age < 18) description = `kid`;
    if (gender.length == 0 && +age >= 18) description = `hero`;
    return `The superhero name is: ${animal}-${description}!`
}

alert(generateHeroName());