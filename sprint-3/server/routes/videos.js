const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const videos = require('../data/Data'); 
// import {pic} from '../files/upload.jpg'
// Get all videos 
router.get('/', (req,res)=>{
    res.json(videos); 
}) 

// get single video 

router.get('/:id', (req, res)=>{
    const found = videos.some(video => video.id === req.params.id); 
if (found){
    res.status(200).json(videos.filter(video =>video.id === req.params.id));
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
        views:"0", 
        likes:0, 
        duration:'7:09',
        video: "https://project-2-api.herokuapp.com/stream",
        comments:[]
    }

    if (!newVideo.title || !newVideo.description){ 
        res.status(400).json ({message: `Please include both the title and description`})
    }

    videos.push(newVideo); 
    res.json(videos); 
})


module.exports = router; 