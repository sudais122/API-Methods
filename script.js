const Button = document.getElementById('addBtn');


async function sendToServer(Product) {
    try{
        const Response = await fetch('http://localhost:3000/cart',{
            method: 'POST', // tell about the metod it means we are creating dometing new sending data
            headers: {
                'Content-type': 'application/json' // tell te server tat i am sending teh json data
            },
            body: JSON.stringify(Product) //it define the body of the POST method that what i am sending in my body also convert that in to js string 
        });
            const Data = await Response.json(); // when repsose come from the server that respose can be convert in to JSON after this line
        console.log(Data);
    }catch{
        console.log('Something Wennt Wrong');
    }
}
Button.addEventListener('click', ()=>{
    const Tittle = document.getElementById('title').value;
    const Price = document.getElementById('price').value;
    const Quantitiy = document.getElementById('qty').value;

    const Product = {
        Tittle,
        Price,
        Quantitiy
    };

    sendToServer(Product);
});

