// import mongo tools / library
const { MongoClient,ServerApiVersion } = require('mongodb');

const { uri } = require('./dbsecrets.js');   

// connect to Mango/Atlas USING a URL CONNECTION String
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true,
serverApi: ServerApiVersion.v1 });

// connect to sample_mflix database
const db = client.db('sample_mflix');

// Query

// Lets get a specific movie (doc) from the "movies" collection
// search ny title for "Back for the Future"
db.collection('movies')
.findOne({ title: "Back to the Future" }, (err, results) => {
    if (err) {
        console.error(err)
    }
    // let's output the results:
    console.log(results);
    client.close();
});
