const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());  // this line convert all the js string to JS obj
app.use(cors());

app.post('/cart', (req,res)=>{
    console.log(req.body);
      res.json({
      message: 'peoduct added sucessfully',
      product: req.body
    })
});
//Server code
const PORT = 3000;
app.listen(PORT ,()=>{
  console.log(`Server is Running! at PORT ${PORT}`);
})

