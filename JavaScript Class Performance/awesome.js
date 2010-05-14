/*

I'm Ian Christian Myers.
Let's talk about inheritance, prototypes and classes in JavaScript.

@iancmyers
ian@iancmyers.com

*/




var greetings = ["cheerio", "bonjour", "howdy"];

/*

   greetings (Array instance)
--------------------------------            
|   0           |   "cheerio"  |            
--------------------------------                       Array.prototype            
|   1           |   "bonjour"  |             -----------------------------------
--------------------------------             |   push      |   [native code]   |      
|   2           |   "howdy"    |             -----------------------------------
--------------------------------             |   pop       |   [native code]   |
|   length      |   3          |             -----------------------------------
--------------------------------             |   reverse   |   [native code]   |                   
|   __proto__   |   ------------------->     -----------------------------------
--------------------------------                             ...

*/




// ------------------




var text = "Bazinga!";

function reverse (s) {
  var reverse = "";
  
  var i = s.length;
  while(i--) {
    reverse += s.charAt(i);
  }
  
  return reverse;
}

var myReversedString = reverse(text);

String.prototype.reverse = function() {
  var reverse = "";
  
  var i = this.length;
  while(i--) {
    reverse += this.charAt(i);
  }
  
  return reverse;
}




// ------------------




// THIS IS BAD. DO NOT DO THIS.
Object.prototype.findName = function () {
  return this.name || null;
};

var person = {
  name          : "Dylan Bathurst",
  gender        : "Male-ish",
  isAwesome     : true,
  likesUnicorns : true
};

for (k in person) {
  console.log( k + " : " + person[k] );
}




