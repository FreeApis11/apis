import express from "express"
import {
    getAllUsers,
    getUserById,
    getUsersBySalary
} from "../controllers/user.controllers.js"

const router = express.Router()

router.get("/", getAllUsers)
router.get("/id/:id", getUserById)
router.get("/salary/:sal", getUsersBySalary)
 
export default router