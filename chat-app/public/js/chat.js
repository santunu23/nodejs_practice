const socket=io()

// socket.on('countupdated',(count)=>{ 
//     console.log('The count has been updated',count)
// })
// document.querySelector('#increment').addEventListener('click',()=>{
//     console.log('Click Me')
//     socket.emit('increment')
// })

//Elements
const $messageFormButton=document.querySelector('#submitvalue')
const $messageFormInput=document.querySelector('#inputtext')
const $locationFormButton=document.querySelector('#send-location')
const $messages=document.querySelector('#my_message')

//Templates 
const messageTemplate=document.querySelector('#message-template').innerHTML
const locationMessageTemplate= document.querySelector('#location_message-template').innerHTML
const sidebarTemplate=document.querySelector('#sidebar-template').innerHTML
//Options
const {username,room}=Qs.parse(location.search,{ignoreQueryPrefix:true})


socket.on('message',(message)=>{
    const html= Mustache.render(messageTemplate,{
        username:message.username,
        message:message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend',html)
})

socket.on('locationMessage',(url)=>{
    const html=Mustache.render(locationMessageTemplate,{
        username:url.username,
        url:url.url,
        createdAt: moment(url.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend',html)
})

socket.on('roomData',({room,users})=>{
    const html=Mustache.render(sidebarTemplate,{
        room,
        users
    })
    document.querySelector("#sidebar").innerHTML=html
})

$messageFormButton.addEventListener('click',()=>{
    //disable 
    $messageFormButton.setAttribute('disabled','disabled')
    const inputtextvalue=document.querySelector('#inputtext').value;
    console.log('sending to server',inputtextvalue)
     socket.emit('inputvalue',inputtextvalue,(error)=>{
        // enable 
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value=''
        $messageFormInput.focus()
        if(error){
            return console.log(error)
        }
    })
})

$locationFormButton.addEventListener('click',()=>{
    //disable
 if(!navigator.geolocation){
        return alert('Geolocation is not supported by your browser')
    }
    $locationFormButton.setAttribute('disabled','disabled')

    navigator.geolocation.getCurrentPosition((position)=>{
        socket.emit('sendLocation',{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        },()=>{
                //enable
                $locationFormButton.removeAttribute('disabled')
                console.log('Location shared')
        })
    })
})

socket.emit('join',{username,room},(error)=>{
     if(error){
        alert(error)
        location.href='./'
     }
})