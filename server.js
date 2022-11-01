const express = require('express')
const app = express()
const path = require('path')
const data = require('./data')

//serving the public file
app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

 

 

app.get('/',(req,res)=>{
    res.render('index.ejs',{data})
    
    
})

app.get('/teach',(req,res)=>{
    res.render('teach.ejs')
    
    
})

app.get('/class/:course',(req,res)=>{
    res.send('hello')
    const{course} = req.params
    console.log(course)
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})
app.get('/:post',(req,res)=>{
    const{post} = req.params
  
const dataBlog =  data.filter((e)=>{
        return e.title === post
    })

    const all = [data,dataBlog]
res.render('post',{all})
 
    
})




const PORT = '8080'
app.listen(PORT,()=>{
    console.log(`listenting to port ${PORT}`)
})