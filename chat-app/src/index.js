const express=require('express');
const path=require('path')
const http=require('http')
const socketio=require('socket.io')
const Filter=require('bad-words')
const {generateMessage}=require('./utils/messages')
const {generateLocationMessage} =require('./utils/messages')
const {
    addUser,
    removeuser,
    getUser,
    getUserInRoom
}=require('./utils/users');
const app=express();
const server=http.createServer(app)
const io=socketio(server)

const port=process.env.PORT||3000
const publicDirectoryPath=path.join(__dirname, '../public/')

app.use(express.static(publicDirectoryPath))

//server(emit)=>client(receive) -> counterupdated
//client(emit)->server(receive) -> increement
io.on('connection',(socket)=>{
    //Sending server to client
    console.log('New websocket connected')
    // socket.emit('countupdated',count)
    // socket.emit('message',generateMessage('Welcome'))
    // //send message to other's when new user has joined.
    // socket.broadcast.emit('message','A new user has joined: ')

    socket.on('join',(options,callback)=>{
        const{error,user}=addUser({ id:socket.id,...options })
        if(error){
            return callback(error)
        }
        socket.join(user.room)
        socket.emit('message',generateMessage('Admin','Welcome')) 
        //send message to other's when new user has joined.
        socket.broadcast.in(user.room).emit('message', generateMessage(`${user.username} has joined`))
        io.in(user.room).emit('roomData',{
            room:user.room,
            users:getUserInRoom(user.room) 
        })
        callback()
    })

    socket.on('inputvalue',(message,callback)=>{
        const filter=new Filter()
        if(filter.isProfane(message)){
            return callback('Profanity is not allowed.')
        }
        const getuser=getUser(socket.id)
        io.in(getuser.room).emit('message',generateMessage(getuser.username,message))
        callback()
    })

    socket.on('sendLocation',(res,callback)=>{
        const getuser=getUser(socket.id)
        console.log(getuser)
        // io.emit('locationMessage',generateLocationMessage(user.username,`https://www.google.com/maps?q=${res.latitude},${res.longitude}`))
        io.in(getuser.room).emit('locationMessage',generateLocationMessage(getuser.username,`https://www.google.com/maps?q=${res.latitude},${res.longitude}`))
        callback()
    })

    socket.on('disconnect',()=>{
        const user=removeuser(socket.id)
       if(user){
            io.to().emit('message',generateMessage('Admin',`${user.username} has left.`))
            io.to(user.room).emit('roomData',{
                room:user.room,
                users:getUserInRoom(user.room) 
            })
        }
   })

    //Receiving client to server
    // socket.on('increment',()=>{
    //     count++
    //     //socket.emit('countupdated',count)
    //    io.emit('countupdated',count)
    // })
})


server.listen(port,()=>{
    console.log("Server is up on port "+port)
})