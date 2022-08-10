const express=require('express');
require('./db/mongoose')
const app=express();
const port=process.env. PORT || 3000
const User=require('../modals/user')
const Task=require('../modals/tasks')

app.use(express.json())

//Get users
app.get('/users',async (req,res)=>{
    try{
         const users=await User.find({})
         res.send(users)
     }catch(e){
         res.status(500).send()
     }
 
     //Using the promise chaining
 
     // User.find({}).then((users)=>{
     //     res.send(users)
     // }).catch((e)=>{
     //     res.status(500).send()
     // })
 })

//POST users
app.post('/users', async (req,res)=>{
    const user=new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
   
    //Using the Promise chaining

    // user.save().then(()=>{
    //     res.send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
  
})
//Get element by ID
app.get('/users/:id', async (req,res)=>{
    const _id=req.params.id;
    try{
        const user= await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch{
        res.status(500).send()
    }
    // Using the promise chaining
    
    // User.findById(_id).then((user)=>{
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })

})

app.patch('/users/:id',async(req,res)=>{
    const updates=Object.keys(req.body);
    const allowedUpdate=['name','email','age','password']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(isValidOperation){
        return res.status(400).send({error:'Invalid updates'})
    }
    try{
        const user=await User.findByIdAndUpdate(req.params.id,  req.body, { new : true,runValidators:true })
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
            res.status(400).send()
    }
})

//Implementation Task modal
app.post('/tasks', async (req,res)=>{
    const task=new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
  

    //Using the promise chaining
    // task.save().then(()=>{
    //     res.send(task)
    // }).catch((e)=>{
    //     res.status(200).send(e)
    // })
})

// Goal: Setup the task reading endpoint
// 1. Create an endpoint for fetching all tasks.
// 2. Create an endpoint for featcing a tasks by its id.
// 3. Setup new requests in postman and test your work.

app.get('/tasks',async (req,res)=>{
    try{
        const tasks=await  Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(400).send(e)
    }
    // Task.find({}).then((tasks)=>{
    //     res.send(tasks)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

app.get('/tasks/:id',async (req,res)=>{
   const _id=req.params.id;
   console.log(_id)
   try{
    const tasks= await Task.findById(_id)
    if(!tasks){
        return res.status(404).status(e)
    }
    res.send(tasks)
   }catch(e){
       res.status(400).send(e)
   }
    
//    const tasks=new Tasks()
//     // Task.findById(_id).then((task)=>{
//     //     console.log(task)
//     //     if(!task){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(task)
//     // }).catch((e)=>{
//     //     req.status().send()
//     // })
})


app.patch('tasks/')


app.listen(port,()=>{
    console.log("Server is up on port "+port)
})