const express = require("express")

const app = express()

app.use(express.json())

// server check route
app.get("/", (req,res)=>{
  res.send("Backend working successfully 🚀")
})

// login route
app.post("/login",(req,res)=>{

  const {username,password} = req.body

  if(username === "admin" && password === "1234"){
    res.send("success")
  }else{
    res.send("fail")
  }

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("server running")
})