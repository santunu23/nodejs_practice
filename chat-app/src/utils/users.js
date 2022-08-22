const users=[]
//addUser,removeUser,getUser,getUsersRoom
const addUser=({id,username,room})=>{
    //Clean the data 
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }
    //Check for existing user
    const existingUser=users.find((user)=>{
        return user.room === room && user.username===username
    })

    //Validate username
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    //Store user
    const user={id,username,room}
    users.push(user)
    return {user}

}
const getUser=(id)=>{
    const findExactUser=users.find((id)=>{
        return users
    })
    if(!findExactUser){
        console.log(undefined)
    }else{
        return findExactUser
    }
}
const getUserInRoom=(room)=>{
    room=room.trim().toLowerCase()
    return users.filter((user)=>user.room===room)
}


const removeuser=(id)=>{
    const index=users.findIndex((user)=> user.id===id)
    if(index!==-1){
        return users.splice(index,1)[0]
    }
}
// addUser({
//     id:22,
//     username: 'Joy',
//     room: 'South Philly'
// })

// const removedUser=removeuser(22)
// console.log(removedUser)
// console.log(users)

// addUser({
//     id:32,
//     username: 'Tanmoy',
//     room: 'South Philly'
// })

// addUser({
//     id:42,
//     username: 'Susmi',
//     room: 'Center City'
// })

// const getUserdetails=getUser({
//     id:42
// })

// const getUserInRoom=getUsersRoom('Center City')
// console.log(getUserInRoom)

module.exports={
    addUser,
    removeuser,
    getUser,
    getUserInRoom
}