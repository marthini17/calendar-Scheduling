const express=require('express')
const cors =require('cors')
const bodyparser=require('body-parser')
const bodyParser = require('body-parser')
const router =require('./routes/router')
const mongoose=require('mongoose')
require('dotenv/config')

const app=express()

app.use(bodyparser.json())
app.use(bodyParser.urlencoded({extended:false}))
const corsOptions={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200

}
app.use(cors(corsOptions))
app.use('/',router)

// app.get('/users',(req,res)=>{

// })
const dbOptions={useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex: true, 
// useFindAndModify: false 
}

mongoose.connect(process.env.DB_URI,dbOptions)
.then(()=>console.log('DB connected!'))
.catch(err => console.error('DB connection error:', err));

const port=process.env.PORT || 4000
// const port=4001
//port number can be of own choice
const server=app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


