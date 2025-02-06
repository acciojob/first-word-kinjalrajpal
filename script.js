function firstWord(s) {
  // your code here
	    s = s.trim();
	
       let space = s.indexOf(" ");

	   if (space === -1) {
        return s;
	  }

	   return s.substring(0, space);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
