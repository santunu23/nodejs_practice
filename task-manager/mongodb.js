//CRUD operation using mongodb
// const mongodb=require('mongodb');
// const MongoClient=mongodb.MongoClient;

const { MongoClient,ObjectID, ObjectId } = require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName= 'task-manager'

// const id=new ObjectID()
// console.log(id)

MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
    if(error){
        return console.log('Unable to connect to database ')
    }
  const db=client.db(databaseName);
  //Insert
  // db.collection("users").insertOne({
    //     name: 'Indrajit', 
    //     age: 28
    // }, (error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.acknowledged);
    // })

    // db.collection("users").insertOne({
    //     name: 'Joy',
    //     age: 27
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // });
    // db.collection("users").insertMany([
    //     {
    //         name: 'Jane',
    //         age: 28
    //     },
    //     {
    //         name: 'Genther',
    //         age:27
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert document');
    //     }
    //     console.log(result)
    // })

    // Goal: Insert 3 tasks into a new tasks collection. 
    // 1. Use insertMany to insert the documents.
    //     --description(string), completed(boolean)
    // 2. Setup the callback to handle error or print ops 
    // 3. Run the script. 
    // 4. Refresh the database in Robo 3T and view data in tasks collection.

    // db.collection("tasks").insertMany([
    //     {
    //         description: "Walking for 10 minutes",
    //         completed:  true
    //     },
    //     {
    //         description: "Buying Grossary.",
    //         completed: true
    //     },
    //     {
    //         description: "Cooking Dinner",
    //         completed: false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(result.insertedIds)
    // })

    // Get data
    // db.collection('users').findOne({_id: new ObjectID("62eb9eef9578842f489cc545")},(error,user)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //         console.log(user);
    // })
  
        //using find option
    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(users) 
    // });


    //update

    // db.collection('users').updateOne({
    //     _id: new ObjectID("62eb9eef9578842f489cc545")
    // },{
    //     $set:{
    //         name: 'Joy'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //Increment a collection field. 

    // db.collection('users').updateOne({
    //     _id: new ObjectID("62eb9eef9578842f489cc545")
    // },{
    //     $inc:{
    //         age:1
    //     }
    // })

    // Goal: Use updatemany to complete all tasks.

    // 1. Check the documentation for updatemany. 
    // 2. Setup the call with the query and the updates. 
    // 3. Use promise methods the setup the success/error handlers.
    // 4. Test your work. []

    // db.collection('users').updateMany({
    //     name: "Indrajit"
    //     },{
    //     $set:{
    //         age:30
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //          completed: true
    //     },{
    //         $set:{
    //             completed: false
    //         }
    //     }).then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
        

        //Delete Operation
        // db.collection('users').deleteMany({
        //     age:27
        // })
        // .then((result)=>{
        //     console.log(result)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

        //Goal Use deleteOne 
        //
        // 1. Grab the description for the task you want to remove. 
        // 2. Setup the call with the query.
        // 3. Use promise methods to setup the success/error handlers.
        // 4. Test your work.

        db.collection('tasks').deleteOne({
            description: 'Buying Grossary.'
        }).then((result)=>{
            console.log(result)
        }).catch((err)=>{
            console.log(err)
        })

})
