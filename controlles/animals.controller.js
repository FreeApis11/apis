import { AnimalsArray } from "../models/Animals.model.js"
 

export const  getAllAnimals = (req,res)=>{
    res.status(200).json(AnimalsArray)
}


export const getUserByName = (req, res) => {
    const {name} = req.params
 
 
   const filterAnimals = AnimalsArray.find((item)=>item.name.toLowerCase()==name.toLowerCase())
   if (!filterAnimals) {
        return res.status(404).json({ message: "animalsFilters not found" })
    }
    res.status(200).json(filterAnimals)
}


export const getUserByCat = (req, res) => {
    const {cat} = req.params
 
 
   const filterAnimals = AnimalsArray.filter((item)=>item.category.toLowerCase().includes(cat.toLowerCase()))
   if (!filterAnimals) {
        return res.status(404).json({ message: "animalsFilters not found" })
    }
    res.status(200).json(filterAnimals)
}
