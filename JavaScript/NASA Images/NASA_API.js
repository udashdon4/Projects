document.querySelector('button').addEventListener('click', getPicture)

function getPicture() {

    let date = document.querySelector('input').value
    
    fetch (`https://api.nasa.gov/planetary/apod?api_key=RdUNmeKFParW5UT0vB60faLWk4HoPylVj4W3spkF&date=${date}`)
        .then (res => res.json ())
        .then (data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.url
            
        })
        .catch (err => {
            console.log(`err ${err}`)
        })
}