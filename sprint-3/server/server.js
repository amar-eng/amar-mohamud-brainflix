const express = require('express'); 
const app = express(); 
 



app.get('/api/customer', (req,res)=>{
    const customers = [
        {id:1, firstName:'John', lastName:'Doe'}, 
        {id:2, firstName:'Johnss', lastName:'Doe'}, 
        {id:3, firstName:'Ahmed', lastName:'Doe'} 
    ]; 
    res.json(customers); 
})


const port = 8080;
app.listen(port, ()=> console.log(`Server listening on port ${port}`)); 
