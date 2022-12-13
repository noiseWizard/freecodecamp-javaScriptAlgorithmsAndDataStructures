// CHALLENGE: Convert the switch statement into an object called lookup.
// Use it to look up val and assign the associated string to the result variable.
// Note: I've put this here for future reference because I almost had it,
// and still trying to figure this out.



// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
      
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  
    result = lookup[val];
    // this is the line I struggled with,
    // I was getting way too specific with the examples provided
    // this code was simple, it was looking for looking for anything with the defined value.
    // so based on the final line of code, it was saying "look for the value for any of these keys",
    // because the original code was a switch, i don't think I'd clicked that it was no longer a switch.
    // go team!

    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");