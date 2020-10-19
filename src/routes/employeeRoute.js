const express = require('express');
const router = express.Router();
//importing controllers
const EmployeeController = require('../controllers/employeeController')

router.get('/',EmployeeController.test);
router.get('/testdata',EmployeeController.testdata );
router.get('/list',EmployeeController.list );


module.exports = router;