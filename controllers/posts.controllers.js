import {ArrayOfposts} from  "../models/posts.models.js"

export const getAllPosts = (req,res)=>{
    res.status(200).json(ArrayOfposts)
}
export const getPostsByNames  =(req,res)=>{
    const {title} = req.params 
    const fitlerPosts = ArrayOfposts.filter((item)=>item.title.toLowerCase().includes(title.toLowerCase()))
     if(!fitlerPosts){
        res.status(201).json({message :   "no posts right now in this title"})
     }
 
    res.status(200).json(fitlerPosts)
}

export const getCommentPostById  =(req,res)=>{
    const {id} = req.params 
    const getCommentPostById = ArrayOfposts.find((item)=>item.id == id)
     if(!getCommentPostById){
        res.status(201).json({message :   "no Comment right now in this title"})
     }
 
    res.status(200).json(getCommentPostById.comments)
}