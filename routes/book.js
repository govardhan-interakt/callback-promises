const express = require('express')
const router = express.Router()

const {Book}=require('../models/book')


// insert books in data base

/*const books =[
    {title:"The living mountain",author:"Amitav Ghosh"},
    {title:"Glimpse of world history",author:"Jawaharlal nehru"},
    {title:"Gora",author:"Rabindra Nath Tagore"},
    {title:"Hind Swaraj",author:"M K Gandhi"},
    {title:"A secular Agenda",author:"Arun Shourie"},
]
books.forEach(book=>{
    Book.create({
        title:book.title,
        author:book.author
    })
    
})*/

router.get('/books',(req,res)=>{

Book.find()
.exec()
.then(books=>{
    return res.status(201).json(books)
})
.catch(err=>{
    return res.status(500).send(err.message)
})

})
// code with recursive function
router.get('/books/:id',(req,res)=>{
    Book.findById(req.params.id)

.exec((err,result)=>{
    if(err){
      return  res.status(500).send(err.message)
    } else{
      return  res.status(201).json(result)
    }
})
})
// code with promises
router.patch('/books/:id',(req,res)=>{

    const id = req.params.id
        const updates =req.body
        const options = {new:true}
         Book.findByIdAndUpdate(id,updates,options)
        .then(result=>{
       return res.status(200).json({
            message:'updated user',
            Result:result
        })
    })
     .catch (error=>{
        return res.status(500).send(error)
    })
})

router.delete('/books/:id',(req,res)=>{
    Book.findByIdAndDelete({_id:req.params.id})
    .exec()
    .then(result=>{
       return res.status(200).json({
         message:'user deleted',
         Result:result
            })
 })
 .catch(err=>{
    return res.status(500).json({
         error:err
     })
 })
})


module.exports = router