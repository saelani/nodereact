const express = require('express');
const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//setting
app.set('port', process.env.PORT || 3000);

//midleware
app.use(express.json());


//importing routers
const employeeRouters = require('./routes/employeeRoute');

//router
app.use('/employee', employeeRouters); 

app.use('/', (req,res) => {
    res.send("Hello word");
});

app.listen(app.get('port'), () => {
    console.log("Star server port " + app.get('port'));
});