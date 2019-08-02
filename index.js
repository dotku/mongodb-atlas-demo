require('dotenv').config();
const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;
const {USERNAME, PASSWORD} = process.env;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-ppeaz.mongodb.net`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  collection.findOne().then(r => {
    console.log(r._id, r.name);
    process.exit();
  });
  client.close();
});