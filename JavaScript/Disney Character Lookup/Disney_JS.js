document.querySelector('button').addEventListener('click', getNames)

function getNames() {
    let values = document.querySelector('input').value

    fetch (`https://api.disneyapi.dev/character?name=${values}`)
        .then (res => res.json ())
        .then (data => {
            console.log(data.data[0].name)
            document.querySelector('h3').innerText = data.data[0].name

            document.querySelector('img').src = data.data[0].imageUrl

        })
        .catch (err => {
            console.log(`err ${err}`)
        })
    

}