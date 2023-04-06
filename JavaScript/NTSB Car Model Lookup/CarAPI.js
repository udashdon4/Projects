
document.querySelector('button').addEventListener('click', searchModel)

function searchModel() {

  let carName = document.querySelector('input').value

  fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${carName}?format=json`)
    .then( res => res.json() )
    .then( data => {
      for(let i = 0; i < data.Results.length; i++){
        console.log(data.Results[i].Model_Name)

        const li = document.createElement('li')
        li.textContent = data.Results[i].Model_Name
        document.querySelector('ul').appendChild(li)
      }
    } )
    .catch ( err => {
      console.log(`err ${err}`)
    } )
  }

