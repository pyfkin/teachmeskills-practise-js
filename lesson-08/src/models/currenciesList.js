const getCurrentiesList = async (url) => {
    // let dogPhotoSrc = await getCurrentiesList('http://data.fixer.io/api/latest?access_key=3fa257c6fba931432adcc9e5b5933250');

    let response = await fetch(url);
    if (response.status === 200){
        let json = await response.json();
        console.log(json.message);
        return json.message;
    }

    throw alert(new Error(response.status));
};

export {
    getCurrentiesList
};