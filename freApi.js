import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
import animalsRoutes from "./routes/Animals.routes.js"
 
const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send(`<a href="https://github.com/FreeApis11">freeapi</a>`)
})
 
app.use("/users", userRoutes)
app.use("/animals",animalsRoutes)
app.listen(3000, () =>
    console.log("Server Connected at Port 3000")
)
 