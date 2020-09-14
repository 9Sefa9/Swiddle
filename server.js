	// call all the required packages
    const express = require('express')
    const bodyParser= require('body-parser')
    const multer = require('multer');
    const fs = require("fs");
    const path = require("path");
    //CREATE EXPRESS APP
    const app = express();
    const exec = require('child_process').exec

//um auf CSS und Javascript zuzugreifen.
app.use(express.static("scripts"));
app.use('/images', express.static(__dirname + '/images'));
//zeigt den homepage
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.listen(8080, () => console.log('Server started on port 8080'));
