let total = (addCount, addPrice, currentTotal = 0) => {
	return Number((currentTotal + (addCount * addPrice)).toFixed(2));
}