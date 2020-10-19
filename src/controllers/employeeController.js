const controller = {}
var Employee = require('../model/Employee');
var Role = require('../model/Role');
var sequelize = require('../model/database');

controller.test = (req,res) => {

    const data = {
        name: "saelani",
        age: 10,
        city: "London"
    }

    console.log("sen data from controller");
    res.json(data);
};

controller.testdata = async ( req, res) => {
        
    const response = await sequelize.sync().then(function() {
       
       //Create role
        //Role.create({
        //    role:  'Admin'
        //});

        // create employee
        //Employee.create({
        //    name: 'saelani Morgan',
        //    email:  'saelani@gmail.com',
        //    address: 'Manislor Cll 108',
        //    phone: '123456789',
        //    roleId:1
        //});
        
        const data =  Employee.findAll()
        return data;
    })
    .catch(err => {
      return err;
    });
    res.json({
        succsess: true, 
        data: response
    });
  }
  
  controller.list = async ( req, res) => {
  
    const data = await Employee.findAll({
        include: [ Role ]
      })
      .then(function(data){
        return data;
      })
      .catch(error => {
        return error;
      }); 
    
      res.json({success : true, data : data});
  
  }

module.exports = controller;