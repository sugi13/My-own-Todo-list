const express = require('express');
const mongoose = require('mongoose');
// importing routes //
let routes = require('./routes/TodoRoutes');

// set express app //
let app = express();

// connecting mongoDB-collections //
let dbURL = 'mongodb+srv://sugi13:Sugi1319@todotuts.rtbn6co.mongodb.net/todo-data?retryWrites=true&w=majority';

mongoose.connect(dbURL,{ useNewUrlParser: true, 
  useUnifiedTopology: true}) // object optional //
.then((res) =>{
  console.log("Database connected!");
})
.catch((err) =>{
  console.log(err);
})

// set view engine //
app.set('view engine', 'ejs');


// routes//
app.use(routes);

// listening port on 3000 //
app.listen(3000);
