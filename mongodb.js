// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database')   
    }

   const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        Task: 'Clean the car'
    }).then((result) => {
        console.log(result)        
    }).catch((error) => {
        console.log(error)        
    })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5ef0b801e69ea445ec4e949f')
    // }, {
    //     $inc: {
    //         age: 30
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({ _id: new ObjectID('5ef0b9ab02d8be4e28c0e3b7')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 28 }).toArray((error, users) => {
    //     console.log(users) 
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5ef0bb35dc585c4020d1945c')}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ Completed: false }).toArray((error, task) => {
    //     console.log(task) 
    // })


    // db.collection('tasks').updateMany({
    //     Completed: false
    // }, {
    //     $set: {
    //         Completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})