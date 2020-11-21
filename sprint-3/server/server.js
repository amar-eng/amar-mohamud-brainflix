const express = require('express'); 
const app = express(); 
const cors = require('cors');
app.use(express.json());
app.use(cors());
const videos = require('./data/Data'); 

const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}`); 
    next(); 
}


// Initializing Middleware
app.use(logger); 

// Get all videos 
app.get('/videos', (req,res)=>{
    res.json(videos); 
}) 

// get single video 

app.get('/videos/:id', (req, res)=>{
    const found = videos.some(video => video.id === req.params.id); 
if (found){
    res.status(200).json(videos.filter(video =>video.id === req.params.id));
} else{
    res.status(400).json({message:`The Video with id of ${req.params.id} does not exist`})
}
     
}) 

const port = 8080;
app.listen(port, ()=> console.log(`Server listening on port ${port}`)); 
