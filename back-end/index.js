const express = require("express")

const app=express()

app.listen(5000,()=>{
    console.log("server is get ready ....")
})

const express = require("express")

const app = express()

app.get("/", (req,res)=>{
  res.send("Backend working successfully 🚀")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("server running")
})