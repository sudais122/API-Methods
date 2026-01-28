const express = require('express');
const app = express();
const Port = 3000;
const cores = require('cors')

app.use(express.json());
app.use(cores());

const Array = [];

app.post('/SendData',(req,res)=>{
    const users = {...req.body};

    users.quantity = parseInt(users.quantity);
    const Existinguse = Array.find(u =>u.title === users.title);

    if(Existinguse){
        Existinguse.quantity += users.quantity;
        console.log("Item already Exist Qulity incresed");
    }else{
        Array.push(users);
    }
    res.json({
        message: 'Data send Sucessfully',
        length: Array.length,
        items: Array,
    });
});

app.get('/SendData',(req,res)=>{
    res.json(Array);
});

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})