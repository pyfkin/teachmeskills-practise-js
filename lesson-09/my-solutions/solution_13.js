function repeat(operation, num) {
    // modify this so it can be interrupted

    if (num <= 0) return operation()
    setInterval(function ()
    {
        repeat(operation, --num)
    }, 100);
    return repeat(operation, --num)
}

module.exports = repeat
