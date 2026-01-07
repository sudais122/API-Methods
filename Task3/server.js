const express = require('express');
const app = express();
const cores = require('cors');

app.use(express.json());
app.use(cores());

const ContactDetails = [];

app.post('/Senddata', (req,res)=>{
    console.log(req.body);

    const Users = {
        ...req.body
    }
    ContactDetails.push(Users);
    console.log(ContactDetails);

    res.json({
        Message: 'Date Send Sucessfully',
        Student: ContactDetails.length
    })
});

app.get('/senddata',(req,res)=>{
    res.status(200).json(ContactDetails);
    console.log('Data Receiver sucessfully');
})

let port = 3000;
app.listen(port,()=>{
    console.log(`Server is Running on PORT ${port}`);
})