 arrayMap = (arr, fn) =>{
    arr.reduce((acc, item) => acc.push(fn.call( item * 2), [])
};

module.exports = arrayMap;
