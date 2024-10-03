const express = require("express");

const {graphqlHTTP} = require("express-graphql");
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require("dotenv").config();

const cors = require('cors');

const app = express();


// allow cross origin requests
app.use(cors());
//connect to mongodb 
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database successfully");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });


app.use('/graphql', graphqlHTTP({
//  schema: schema
    schema,
    graphiql:true
}

));


app.listen(4000, () => {
    console.log("listening for requests on 4000");
})