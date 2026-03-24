import express from "express"
import { getAllAnimals, getUserByCat ,getUserByName} from "../controlles/Animals.controller.js"
 
 

const  router   = express.Router()

router.get("/",getAllAnimals)
router.get("/name/:name",getUserByName)
router.get("/cat/:cat",getUserByCat)

export default router