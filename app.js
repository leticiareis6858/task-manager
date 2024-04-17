const express=require('express');
const app=express();
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

app.use(notFound) //handle the 404(not found)
app.use(errorHandlerMiddleware) //error handler middleware

const port= process.env.PORT || 3000; 
//we can set the port by typing at terminal(vs code):' PORT portvalue(4000 for example) node app.js '. Must do this with the (npm start) stoped

const start=async ( )=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}`));
    } catch (error){
        console.log(error)
    }
 }

start()
