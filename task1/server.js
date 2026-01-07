const express = require('express');
const app = express();
const cores = require('cors');

app.use(express.json());
app.use(cores());

let saveditem = {};

app.post('/send',(req,res)=>{

    saveditem = req.body;
    res.json({
        message: 'date send',
        Item: saveditem
    })
});

app.get('/send', (req,res)=>{
    res.status(200).json({
        saveditem,
        message: 'Data received sucessfully',
    });
});

let port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
})