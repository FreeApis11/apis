import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send(`<a href="https://github.com/FreeApis11">freeapi</a>`)
})

// mount router
app.use("/users", userRoutes)

app.listen(3000, () =>
    console.log("Server Connected at Port 3000")
)