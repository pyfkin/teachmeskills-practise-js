function Spy(target, method) {
    let func = target[method];

    result = {
        count : 0
    };

    target[method] = () =>{
        result.count++;
        return func.apply(this, arguments)
    }



    return result;
}

module.exports = Spy
