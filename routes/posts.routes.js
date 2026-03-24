import express from "express"
import { getAllPosts  ,getPostsByNames ,getCommentPostById} from "../controllers/posts.controllers.js"
 
 
 

const  router   = express.Router()

router.get("/",getAllPosts)
router.get("/:title",getPostsByNames)
router.get("/v/:id",getCommentPostById)
 

export default router