import express from "express"
import { ArrayOfUsers } from "./models/User.model.js"
import cors from "cors"
const app = express()
app.use(cors())



app.get("/",(req,res)=>{
    res.send(
        `<a href="https://github.com/FreeApis11"/>freeapi<a/>`
    )
})



app.get("/users",(req,res)=>{
    res.status(200).json(ArrayOfUsers
    )
})



app.get("/users/id/:id",(req,res)=>{
    if(!req.params.id) return 
     
    const filterData =ArrayOfUsers.find((item)=>item.id ==req.params.id)
     if(!filterData){
        res.status(200).json({message :"notFound"})
        return
     }
    res.status(200).json(filterData
    )
})

app.get("/users/salary/:sal",(req,res)=>{

   console.log(req.params.sal)
   
    const filter = ArrayOfUsers.filter((item)=> item.job.salary >=req.params.sal   )
 
    res.status(200).json(filter)
})


 app.listen(3000,()=>console.log("Server Connected at Port 3000"))






 




