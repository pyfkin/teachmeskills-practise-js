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
        console.log(dogJson.message);
        return dogJson.message;
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
        let dogPhotoSrc = await getPhotos('https://dog.ceo/api/breeds/image/random');
        let img = document.createElement("IMG");
        img.src = dogPhotoSrc;
        canvas.appendChild(img);
    }
    }
);
