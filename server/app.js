const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema/schema");
const pw = "%25f5I0q*b";
const mongoose = require("mongoose");
//const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://hsyuting:hsyuting8@cluster0-gmxr3.mongodb.net/test?retryWrites=true&w=majority`;
//const client = new MongoClient(uri, { useNewUrlParser: true });

const app = express();
app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to database.");
});
// client.connect(err => {
//   assert.equal(null, err);
//   const db = client.db("gql");
//   //const collection = client.db("test").collection("devices");
//   console.log("connected to database");
//   // perform actions on the collection object
//   let getDocs = () => {
//     return new Promise((resolve, reject) => {
//       db.collection("books")
//         .find({})
//         .limit(1)
//         .toArray((err, data) => {
//           err ? reject(err) : resolve(data[0]);
//         });
//     });
//   };

//   let callGetDocs = async () => {
//     let result = wait(getDocs());
//     return result;
//   };

//   callGetDocs().then(result => {
//     client.close();
//     res.json(result);
//   }); //end mongoclient
// });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening for requests on port 4000.");
});
