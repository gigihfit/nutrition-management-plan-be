var express = require('express');
var router = express.Router();
const checkIsLoggedIn = require('../middleware/authMiddleware');
const nutritionController = require('../controllers/nutritionController');

/* GET users listing. */
router.post('/add', checkIsLoggedIn, nutritionController.addNutrition);
// router.get('/view/:id', checkIsLoggedIn, nutritionController.)
router.put('/update/:id', checkIsLoggedIn, nutritionController.updateNutrition);

module.exports = router;
