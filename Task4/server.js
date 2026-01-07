const express = require('express');
const app = express();
const cores = require('cors');
let port = 3000;

app.use(express.json());
app.use(cores());

let saveditem = {}
app.post('/sendData', (req,res)=>{
    saveditem = req.body;

    console.log(saveditem);
    res.json({
        Message: 'Data Send sucessfully',
        Details: saveditem
    })
})

app.get('/sendData',(req,res)=>{
    res.status(200).json(saveditem);
})
app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);
})