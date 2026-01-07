const express = require('express');
const app = express();
const cores = require('cors');

app.use(express.json());
app.use(cores());

let RegStudent = [];
app.post('/sendData',(req,res)=>{
    const Users ={
        Date: Date.now().toLocaleString,
        ...req.body,
    }
    RegStudent.push(Users);
    console.log(RegStudent);
    res.json({
        message: 'Data Send Sucessfully',
        length: RegStudent.length
    });
});

app.get('/sendData',(req,res)=>{
    res.status(200).json(RegStudent);
    console.log('Data Received Sucessfully');
})

let port = 3000;
app.listen(port, ()=>{
    console.log(`Server is Running at Port ${port}`);
})