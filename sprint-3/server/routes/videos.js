const express = require('express')
const uuid = require('uuid')
const router = express.Router() 
const fs = require('fs'); 

// Reading data function for re-usability 

function readData(){
    const file = fs.readFileSync('./data/Data.json')
    return JSON.parse(file)
}

// Get all videos 
router.get('/', (req,res)=>{
   
    res.json(readData()); 
}) 

// get single video 


router.get('/:id', (req, res)=>{
    
    const videodata = readData()

    const found = videodata.some(video => video.id === req.params.id); 
if (found){
    res.status(200).json(videodata.filter(video =>video.id === req.params.id));
} else{
    res.status(400).json({message:`The Video with id of ${req.params.id} does not exist`})
}
     
}) 

// Create a video 

router.post ('/', (req,res)=>{

   

    const newVideo = { 
        id: uuid.v4(), 
        title: req.body.title,
        channel: "Sly Cooper", 
        description: req.body.description, 
        image: "http://localhost:8080/upload.jpg", 
        timestamp: new Date().getTime(), 
        views:0, 
        likes:0, 
        duration:'7:09',
        video: "https://project-2-api.herokuapp.com/stream",
        comments:[]
    }

    if (!newVideo.title || !newVideo.description){ 
        res.status(400).json ({message: `Please include both the title and description`})
    }

    const videolist= readData()
    videolist.push(newVideo); 
    fs.writeFileSync('./data/Data.json', JSON.stringify(videolist))

    res.status(201).json(newVideo); 
})


router.post('/:id', (req,res) =>{
    const newComment = { 
        name: "Amar Mohamud",
        id: uuid.v4(),
        timestamp:new Date().getTime(),
        comment: req.body.comment
    }
    const videolist= readData()
    const videoIndex = videolist.findIndex((item)=>{
        return item.id===req.params.id
    })

    const comments = videolist[videoIndex].comments; 
    comments.push(newComment)
    fs.writeFileSync('./data/Data.json', JSON.stringify(videolist))

    res.status(201).json(newVideo);
})


module.exports = router; 