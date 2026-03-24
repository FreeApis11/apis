import express from "express"
import { HandelBookGenre, HandelBooks, HandelBooksbyId, HandelBooksbytitle, HandelBooksbyYear } from "../controllers/HandelBooks.controllers.js"
 
 

const  router   = express.Router()

router.get("/",HandelBooks)
 
router.get("/:id",HandelBooksbyId)
router.get("/title/:title",HandelBooksbytitle)
router.get("/year/:year",HandelBooksbyYear)
router.get("/genere/:genere",HandelBookGenre)
 
export default router