const request = require('request')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

const address=process.argv[2]

if(!address){
  console.log('Please provide address');
}else{

  geocode('New York',(error,data)=>{
    if(error){
          return console.log(error)   
    }
    forecast(data.latitude, data.longtitude, (error, data) => {
    if(error){
      return console.log(error)
    }
    console.log('Data', data)
  })
  })
}

//  const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=27.2046&lon=77.4977&appid=40ae24753b1fbf9b0bcb99a5b02c6d0a'
// request({ url: url,json:true }, (error, response) => {
//   console.log(response.body.list)
    // const data = JSON.parse(response.body)
    // console.log(data.currently)
// })

//Geocoding
//Address->Lat/Long->weather

// Goal: Print the lat/long for los Angeles
// 1. Fire off a new request to the url explored in browser.Angeles
// 2. Move the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal 
// 4. Test your work!
// const geocodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FudHVudTIzIiwiYSI6ImNqcWdlMmUxMTVlZ2w0Y3M3ZXZrZWhocDkifQ.rzPmjpnyfcrfDm-PUysgPA"
// request({url:geocodeURL,json:true},(error,response)=>{
//   if(error){
//     console.log('Unable to connect to weather service!')
//   }else if(response.body.error){
//     console.log('Unable to find location.')
//   }else{
//     const latitude=response.body.features[0].center[1];
//     const longitude=response.body.features[0].center[0]
//     console.log(latitude+' '+longitude);
//   }

// })



// console.log('Starting')
// setTimeout(()=>{
//     console.log("Hi there")
// },2000)

// setTimeout(()=>{
//     console.log('Hi')
// },0)
// console.log('Stopping')





//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

//const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FudHVudTIzIiwiYSI6ImNqcWdlMmUxMTVlZ2w0Y3M3ZXZrZWhocDkifQ.rzPmjpnyfcrfDm-PUysgPA'


// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// })