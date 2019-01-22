// Exercise 03: Write a function in order to extract any email from the link.
// Example: <a href="mailto:test@tut.by">Write a letter</a>. Should return test@tut.by
// (Note: you need to use RegExp in the solution!!)

const extractEmail = (string) => {
  // Solution here...
    var re = /(\w){1,}@(\w){1,}.(\w){1,}/g;
    let a = string.match(re);
    return a === null ? null : a[0];
};