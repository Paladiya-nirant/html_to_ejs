const express = require('express');
const body_parser = require('body-parser')
const app = express();

app.set("view engine", "ejs");
app.use(body_parser.urlencoded({extended:true}));


const data = require('./routes/routes');


app.use('/', data);






app.listen(3002,() => {

    console.log('done...');

});


