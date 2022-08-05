const express = require('express')
const { send } = require('process')
const path=require('path')
var hbs = require('hbs');

//testing __dirname function

// console.log(__dirname);
// console.log(path.join(__dirname,'../public/'));
// console.log(path.join(__dirname,'../views/'));

//Configure express
const app = express()
const port = 3000


//Define paths for Express config
const publicDirectoryPath=path.join(__dirname,'../public/')
const viewPath=path.join(__dirname, '../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine' , 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath) 

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//Dynamic directory setup
app.get('/',(req,res)=>{
    res.render('index.hbs',{
      title:'Weather app',
      name:'Joy Sen'
    })
})
app.get('/help',(req,res)=>{
  res.render('helps.hbs',{
    title:'This is helps page',
    name:'Joy Sen'
  })
})

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    title:'This is about page',
    name:'Joy Sen'
  })
})

app.get('/help/*',(req,res)=>{
 res.render('404',{
  title:'404',
  name:'Joy Sen',
  errorMessage: 'Help article not found.'
 })
})

app.get('*',(req,res)=>{
  res.render('404',{
    title:'404',
    name:'Joy Sen',
    errorMessage:'Page not found'
  })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})