require('../src/db/mongoose')
const User= require('../modals/user')
const Task=require('../modals/tasks')

// 62f10e745e2793cc8cd9fd5f
// User.findByIdAndUpdate('62f10e745e2793cc8cd9fd5f',{age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({ age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const updateAgeAndCount=async(id,age)=>{
    const user= await User.findByIdAndUpdate(id,{age})
    const count= await User.countDocuments({age})
    return count
}

updateAgeAndCount('62f11185b6ff169ebeaaf947',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

const deleteTaskAndCount= async (id)=>{
    const user=  await Task.findByIdAndDelete(id)
    const count= await Task.countDocuments()
    return count
}
deleteTaskAndCount('62f11185b6ff169ebeaaf947').then((count)=>{
    console.log('Total Count is '+count)
}).catch((el)=>{
    console.log(el)
})
