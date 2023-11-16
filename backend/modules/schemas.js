const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema ({
    email:{type:String},
    password:{type:String},
    entryDate:{type:Date,defualt:Date.now}
})
const users=mongoose.model('event_table',userSchema,'event')
const myschemas={'event_table':users}
module.exports=myschemas