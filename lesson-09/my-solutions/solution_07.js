function reduce(arr, fn, initial) {
    return ((index, value) => {
        if (index < arr.length - 1) return value;
        return fn(value, arr[index], index, arr), initial) =>
        return value + arr[index];
        _);
};

module.exports = reduce;

// function reduce(arr, fn, initial) {
//     return (function reduceOne(index, value) {
//         if (index > arr.length - 1) return value
//         return reduceOne(index + 1, fn(value, arr[index], index, arr))
//     })(0, initial)
// }
