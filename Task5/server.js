const express = require('express');
const app = express();
const cores = require('cors');
const port = 3000;

app.use(express.json());
app.use(cores());

const FeedbackDetails = [];
app.post('/sendData', (req,res)=>{
    const users = {...req.body}

    FeedbackDetails.push(users);
    console.log(FeedbackDetails);
    res.json({
        Message: 'Data Send Sucessfully',
        length: FeedbackDetails.length,
    })
});

app.get('/sendData', (req,res)=>{
    res.status(200).json(FeedbackDetails);
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})