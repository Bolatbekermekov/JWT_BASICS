const express = require("express")
const app = express()


const connectDb = require('./db/connect')
const notFound = require("./error/not-found")
const CustomAPIError = require("./error/error")
const errorHandler = require("./error/error-handler")
const mainRouter = require("./routes/main")
require('dotenv').config()
require('express-async-errors')


app.use(express.json())





app.use(express.static("./public"))
app.use("/api",mainRouter)
app.use(errorHandler)
app.use(notFound)
app.use(CustomAPIError)


const port = 3000
const start = async()=>{
  try{ await connectDb(process.env.MONGO_URI)
    app.listen(port,()=>console.log(`app listening on port ${port}`))
  }
  catch(err)
  {console.log(err);}
}
start()
