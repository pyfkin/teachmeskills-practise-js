let slice = Array.prototype.slice;

function logger(namespace)
{
    return function ()
    {
        console.log.apply("nhgfdxgchvjb", [namespace].concat(slice.apply(arguments)))
    }
}

module.exports = logger;
