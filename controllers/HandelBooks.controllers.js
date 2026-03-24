import { ArrayOfBooks } from "../models/books.models.js"



export const HandelBooks = (req,res)=>{
    res.status(200).json(ArrayOfBooks)
}

export const HandelBooksbyId = (req,res)=>{
      const { id } = req.params
        
        const ArrayOfBooksfilterd = ArrayOfBooks.find(item => item.id == id)
     
        if (!ArrayOfBooksfilterd) {
            return res.status(404).json({ message: "book not found" })
        }
    
        res.status(200).json(ArrayOfBooksfilterd)
   
}

export const HandelBooksbytitle= (req,res)=>{
      const { title } = req.params
        
        const ArrayOfTitlefilterd = ArrayOfBooks.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
     
        if (!ArrayOfTitlefilterd) {
            return res.status(404).json({ message: "book not found" })
        }
    
        res.status(200).json(ArrayOfTitlefilterd)
   
}

export const HandelBooksbyYear= (req,res)=>{
      const { year } = req.params
        
        const araryOfYear = ArrayOfBooks.filter(item =>item.year>year)
     
        if (!araryOfYear) {
            return res.status(404).json({ message: "year not found" })
        }
    
        res.status(200).json(araryOfYear)
   
}


export const HandelBookGenre = (req,res)=>{
      const { genere } = req.params
        
        const araryOfgenere= ArrayOfBooks.filter(item => item.genre.toLowerCase().includes(genere.toLowerCase()))
     
        if (!araryOfgenere) {
            return res.status(404).json({ message: "genere not found" })
        }
    
        res.status(200).json(araryOfgenere)
   
}
