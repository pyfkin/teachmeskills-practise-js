// Exercise 04: Rewrite with async/await. Show the final result to the teacher.

/*
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}
*/

async function loadJson(url)
{
    let response = await fetch(url);

    if (response.status == 200) {
        return await response.json();
    }

    throw new Error(response.status);
}
