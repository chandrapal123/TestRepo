const express = require('express');
const router = express.Router();

const Controller = require('../Controllers/Controller');

//Get a list of all users
router.get('/', Controller.getAllUsers);

//create new user
router.post('/',Controller.createNewUser);


//Get user
router.get('/:name', Controller.findUser);

/*
//Update a product by id
router.patch('/:name', Controller.updateUser);

//Delete a product by id
router.delete('/:name', Controller.deleteAUser);
*/
module.exports = router;
