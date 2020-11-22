const express = require('express'); 
const app = express(); 
const cors = require('cors');
app.use(express.json());
app.use(cors());



app.use(express.static("files"))


//  Middleware
const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}`); 
    next(); 
}
app.use(logger);

app.use(express.json()); 



// Videos Route
app.use('/videos', require ('./routes/videos'))

const port = 8080;
app.listen(port, ()=> console.log(`Server listening on port ${port}`)); 
