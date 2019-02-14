function repeat(operation, num) {
    return (operation) => {

    num === 0 ? operation() : repeat(operation, num--);
    }
}

module.exports = repeat;
