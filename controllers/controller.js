// 1. Todo_index, 2. Todo_create_get, 3. Todo_create_post, 4.Todo_delete 5. Todo_redirect //
let tasks = require("../models/todo");

// get index//
const Todo_index = (req, res)=>{
  tasks.find()
  .then((result) =>{
    res.render('index', {title:'Home', ToDos: result})
  })
  .catch((err) =>{
    console.log(err);
  })
}

// get create //
const Todo_create_get = (req, res) =>{
  res.render('Create', {title: "Create"});
}

//get about //
const Todo_get_about = (req, res) => {
  res.render('about', {title: "About"});
}

// post data //
const Todo_create_post = (req, res)=>{
  console.log(req.body);
  // The body holds the object data from the url //
  // creating of new instance for saving data //
  let todo = new tasks(req.body);
  todo.save()
  .then((result) =>{
    res.redirect('/home')
  })
  .catch((err) =>{
    console.log(err);
  })
}

// delete data //
const Todo_delete = (req, res) => {
  const id = req.params.id;
  tasks.findByIdAndDelete(id)
  .then((result) =>{
    res.json({redirect: "/home"});
  })
  .catch((err) =>{
    console.log(err);
  })
}

// redirect //

const Todo_redirect = (req, res) => {
  res.redirect('/');
}

// exporting //
module.exports = {
  Todo_index,
  Todo_create_get,
  Todo_get_about,
  Todo_create_post,
  Todo_delete,
  Todo_redirect
}