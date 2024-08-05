const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient
const connectionUrl = "mongodb://127.0.0.1:27017"
const dbname ="Task-Lec-11"

mongoClient.connect(connectionUrl , (error, res1)=>{
    if(error){return console.log("Error Has Occuered")}
    console.log("All Ok")

    const db = res1.db(dbname)

    // insertOne  :  2 Documents
    db.collection("users").insertOne({
        name : "Metwally",
        age : 42
    }, (error , data)=>{
        if(error){return console.log("Unable to insert Data")}
        console.log(data.insertedId)
    })
    db.collection("users").insertOne({
        name : "Safaa",
        age : 14
    }, (error , data)=>{
        if(error){return console.log("Unable to insert Data")}
        console.log(data.insertedId)
    })

    // insertMany :  10 documents ( 5 of them age : 27 year )
    db.collection("users").insertMany(
        [
            {
                name : "Zeyad",
                age : 11
            },
            {
                name : "Mohamed",
                age : 7
            },
            {
                name : "fares",
                age : 27
            },
            {
                name : "Hady",
                age : 27
            },
            {
                name : "Shady",
                age : 15
            },
            {
                name : "Zaki",
                age : 27
            },
            {
                name : "Karim",
                age : 32
            },
            {
                name : "Marwan",
                age : 27
            },
            {
                name : "Ibrahim",
                age : 25
            },
            {
                name : "Momen",
                age : 27
            }
        ]
    )

    // find only
    db.collection("users").find({age : 27}).toArray((error , data)=>{
        if(error) { return console.log("Error Has Occures")}
        console.log(data)
    })

    // find  & limit (3)

    db.collection("users").find({age : 27}).limit(3).toArray((error , data)=>{
        if(error) { return console.log("Error Has Occures")}
        console.log(data)
    })

    // update using ( $set ) ==> update names for first 4 documents

    db.collection("users").updateOne({_id:mongodb.ObjectId("66b0db811f49214b6691f99e")},{
        $set : {name : "Salah"}
    }).then((data1)=> console.log(data1.modifiedCount))
    .catch((error)=> console.log(error))

    db.collection("users").updateOne({_id:mongodb.ObjectId("66b0db811f49214b6691f99f")},{
        $set : {name : "Fady"}
    }).then((data1)=> console.log(data1.modifiedCount))
    .catch((error)=> console.log(error))

    db.collection("users").updateOne({_id:mongodb.ObjectId("66b0db9f91f36e1f68f7af88")},{
        $set : {name : "Ahmed"}
    }).then((data1)=> console.log(data1.modifiedCount))
    .catch((error)=> console.log(error))

    db.collection("users").updateOne({_id:mongodb.ObjectId("66b0db9f91f36e1f68f7af89")},{
        $set : {name : "Mahmoud"}
    }).then((data1)=> console.log(data1.modifiedCount))
    .catch((error)=> console.log(error))

    // $inc  : update age for first 4 documents ==> age : 27  ( +4 )
    db.collection("users").find({age : 27}).limit(4).toArray((error , users)=>{
        if(error) { return console.log("Error Has Occured")}
        users.forEach((doc)=> {
            db.collection("users").updateOne(
                 {_id : doc._id},
                 {$inc : { age : 4}}
                
            ).then((modData)=> console.log(modData.matchedCount))
            .catch((error)=> console.log(error))
        })

    })

    // updateMany : all documents increment age +10
    db.collection("users").updateMany({},{
        $inc : { age : 10}
    }).then((dataIncr)=> console.log(dataIncr.modifiedCount))
    .catch((error)=> console.log(error))

    //deleteMany : all document that match age : 41 ==> display count for delete documents
    db.collection("users").deleteMany({age : 41})
    .then((dataDel)=> console.log(dataDel.deletedCount))
    .catch((error)=> console.log(error))





  

































})