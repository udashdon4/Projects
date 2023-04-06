// //  API test_1

// document.querySelector('button').addEventListener('click', searchModel)

// function searchModel() {

//   let carName = document.querySelector('input').valuetoyota

//   fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${carName}?format=json`)
//     .then( res => res.json() )
//     .then( data => {
//       for(let i = 0; i < data.Results.length; i++){
//         console.log(data.Results[i].Model_Name)

//         const li = document.createElement('li')
//         li.textContent = data.Results[i].Model_Name
//         document.querySelector('ul').appendChild(li)
//       }
//     } )
//     .catch ( err => {
//       console.log(`err ${err}`)
//     } )
//   }

// //  API test_2

document.querySelector('button').addEventListener('click', searchModel)

function searchModel() {

  // let carName = document.querySelector('input').valuetoyota

  fetch(`https://api.disneyapi.dev/characters`)
    .then( res => res.json() )
    .then( data => {
        console.log(data.data[0])
    } )
    .catch ( err => {
      console.log(`err ${err}`)
    } )
  }