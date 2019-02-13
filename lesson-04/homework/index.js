// Homework

// Create application in order to show 10 random dogs after user clicked on the button.
// Use this API: https://dog.ceo/api/breeds/image/random via `fetch` function
// Dogs should appear below the button
// Dogs should be refreshed each time user clicked on `Show dogs` button
// Create simple UI with CSS
// Forbidden to use any of JS or CSS framework

let btnShowDog = document.querySelector('.btnShowDog');
let canvas = document.querySelector('.forPhotos');

async function getPhotos(url)
{
    let response = await fetch(url);
    if (response.status === 200){
        let dogJson = await response.json();
        console.log(dogJson.rates);
        return dogJson.rates;
    }

    throw alert(new Error(response.status));
}


btnShowDog.addEventListener('click', async function (e)
{
    e.preventDefault();
    while(canvas.hasChildNodes()){
        canvas.removeChild( canvas.childNodes[0] );
    }

    for (let i=0; i < 10; i++) {
        let dogPhotoSrc = await getPhotos('http://data.fixer.io/api/latest?access_key=3fa257c6fba931432adcc9e5b5933250&symbols=USD,AUD,CAD,PLN,MXN&format=1');
        let img = document.createElement("p");
        img.innerText = dogPhotoSrc;
        canvas.appendChild(img);
    }
    }
);
