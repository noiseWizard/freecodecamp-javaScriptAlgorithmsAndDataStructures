// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
// If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
    // Only change code below this line
  
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }


//  this was another one I struggled with, I am may be at a threshold where my deep learning isn't enough to understand the instructions.
//  i was too focused on the instructions to consider it was time to include things like if/else as part of the instructions.
//  now that these kinds of instructions are now being given, I will consider it with future steps. 