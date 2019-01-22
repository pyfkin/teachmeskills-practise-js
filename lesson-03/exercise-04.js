// Exercise 04: Check if provided string is a correct URL
// Example: https://google.com. Should return true
// (Note: you need to use RegExp in the solution!!)

const checkUrl = (string) => {
  // Solution here...
    var re = /http(|s):[\/][\/][\w-]{1,}.(\w){1,}.(\w){1,}/g;
    let a = string.match(re);
    return a === null ? false : true;
};