// import $ from 'jquery';
//
// endpoint = 'latest';
// access_key = '3fa257c6fba931432adcc9e5b5933250';

const getCurrenciesList = async (url) => {

    // let dogPhotoSrc = await getCurrenciesList('http://data.fixer.io/api/latest?access_key=3fa257c6fba931432adcc9e5b5933250');
    let response = await fetch(url);
    if (response.status === 200){
        let json = await response.json();
        console.log(json.message);
        return json.message === undefined ? 'yes' : 'no';

    }
    throw alert(new Error(response.status));

};


export {
    getCurrenciesList
};

// // get the most recent exchange rates via the "latest" endpoint:
// $.ajax({
//     url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,
//     dataType: 'jsonp',
//     success: function(json) {
//
//         // exchange rata data is stored in json.rates
//         alert(json.rates.GBP);
//
//         // base currency is stored in json.base
//         alert(json.base);
//
//         // timestamp can be accessed in json.timestamp
//         alert(json.timestamp);
//
//     }
// });