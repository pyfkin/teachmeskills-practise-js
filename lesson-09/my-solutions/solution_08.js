
let slice = Array.prototype.slice;
function duckCount() {
    return slice.call(arguments).filter( (obj) =>
        Object.prototype.hasOwnProperty.call(obj, 'quack')).length
    }

module.exports = duckCount;
