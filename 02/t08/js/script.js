// str is the string to parse
let checkBrackets = (str) => {
	// depth of the parenthesis
	// ex : ( 1 ( 2 ) ( 2 ( 3 ) ) )
	let depth = 0, result = 0;
  
	if (typeof str === "string") {
	  for (let i = 0; str[i]; i++) {
		if (str.charAt(i) === `(`)
		  depth++;
		if (str.charAt(i) === `)`)
		  depth ? depth-- : result++;
	  }
	  return depth + result;
	}
	return -1;
  }

  
