const express = require('express');
const router = express.Router();
// imp controllers
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home)

router.post('/add_task',homeController.add)

router.get('/delete-contact',homeController.delete);

module.exports = router;