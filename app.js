const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.set("view engine","ejs");
app.use(express.static(__dirname + '/views'));
app.use(express.static(path.join(__dirname,'..')))
// app.use(express.static('C:\Users\w3goy\Documents\Web\nodeProjects'));
 
app.get('/',(req, res)=>{   
    fs.readdir('./..',(err,files)=>{
        res.render('all',{data:files});
    })
})
app.listen('3000',()=>{
    console.log('Listening on port 3000');
    const url = 'http://localhost:3000';
    const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
    require('child_process').exec(start + ' ' + url);
})