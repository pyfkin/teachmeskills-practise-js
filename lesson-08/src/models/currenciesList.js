const getCurrenciesList = async () => {
    let response = await fetch('http://data.fixer.io/api/latest?access_key=' +
        '3fa257c6fba931432adcc9e5b5933250&symbols=USD,AUD,CAD,PLN,MXN&format=1');
    if (response.status === 200){
        let json = await response.json();
        return json.rates;
    }
};


export {
    getCurrenciesList
};

