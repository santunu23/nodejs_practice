const request = require('request')

const forecast=(lat,long,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+lat+','+long+'.json?access_token=pk.eyJ1Ijoic2FudHVudTIzIiwiYSI6ImNqcWdlMmUxMTVlZ2w0Y3M3ZXZrZWhocDkifQ.rzPmjpnyfcrfDm-PUysgPA'
     request({url:url,json:true},(error,response)=>{
        if(error){
           callback('Unable to connect to location service')
        }else if(response.body.features.length===0){
            callback('Unable to find location,Try another search',undefined)
        }else{
            callback(undefined,{
              latitude:response.body.features[0].center[0],
              longtitude:response.body.features[0].center[1],
              location: response.body.features[0].place_name
            })
        }
    })
    }
    module.exports=forecast 