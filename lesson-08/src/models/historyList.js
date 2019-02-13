const getHistoryList = async () => {
    let response = await fetch('http://data.fixer.io/api/' +
        // date +
        '2015-09-16' +
        '?' +
        'access_key=3fa257c6fba931432adcc9e5b5933250&symbols=USD,AUD,CAD,PLN,MXN&format=1');
    if (response.status === 200){
        let json = await response.json();
        return json.rates;
    }

};


export {
    getHistoryList
};

