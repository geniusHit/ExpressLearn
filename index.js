const express=require("express")
const app=express()
const path=require('path')
const blog=require('./routes/blog')
const staticPath=path.join(__dirname, 'public')
app.use(express.static(staticPath))
console.log(path)

app.use('/blog', blog)          // Using an imported file.

// app.get('/', function(req, res){
//     res.send("Hi from techlive mohali")
// })

app.get('/about', function(req, res){
    res.send("Hi this is about page")
})

app.get('/', function(req, res){
    console.log("Hey it is a get request.")
    res.sendFile(`${staticPath}/home.html`)
})

app.get("/api", (req, res)=>{
    res.json({a:1, b:2, c:3, d:4})
})

app.get('/:slug', (req, res)=>{
    console.log("req.params.slug = "+(req.params.slug))
    console.log("req.query.name = " +(req.query.name))
    res.send(`Hello ${req.params.slug}`)
})

app.post('/', function(req, res){
    console.log("Hey it is a post request.")
    res.send("Hi this is home page")
})

app.put('/', function(req, res){
    console.log("Hey it is a put request.")
    res.send("Hi this is home page")
})

app.listen(8000, ()=>{
    console.log("Server running at port : 8000")
})

// Added a comment