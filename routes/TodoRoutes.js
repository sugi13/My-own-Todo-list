const express = require('express');

const router = express.Router(); // new instance of router object 

// importing controllers //
let TodoController = require('../controllers/controller');

// get request //
router.get('/', TodoController.Todo_index);

router.get('/about', TodoController.Todo_get_about);

router.get('/Create', TodoController.Todo_create_get);

router.get('/home', TodoController.Todo_redirect);

// middleware and post //
router.use(express.urlencoded({extended: true}));

router.post('/home', TodoController.Todo_create_post);

// delete request //
router.delete('/home/:id', TodoController.Todo_delete);


module.exports = router;