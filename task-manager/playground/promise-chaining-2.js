require('../src/db/mongoose')
const Task= require('../modals/tasks')


Task.findByIdAndDelete('62ebcb9437af7295836beb14').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})


