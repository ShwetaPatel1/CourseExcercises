const databaseClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

//mongodb database connection made on port 27017
databaseClient.connect(url, function (error, client) {
    console.log("Database connection is made...!!");

    const db = client.db('comics');
    const collection = db.collection('superheroes');

    

    collection.updateOne({"name":"HULK1"}, {$set:{"name":"HULK2"}}, function(error,result){
        if(error)
        {
            console.log(error.message);
        }
        else
        {
            console.log(result);
        }
    });
    // collection.find({"name":"HULK1"}).toArray((error, documents) => {
    //     console.log(documents);
    // });
});





