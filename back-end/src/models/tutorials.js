import mongoose, { Schema } from "mongoose"

const ImageSchema = mongoose.Schema({
    url: {
        type: String,
    }, 
    caption: {
        type: String,
    }, 
    
    
})
const Tutorial = mongoose.model("Tutorial", new mongoose.Schema({
    title: {
        type: String,
    }, 
    author: {
        type: String,
    }, 
    images: {
        type: [ImageSchema]
    },
    comments: [{
        type: mongoose.Schema.ObjectId,
        ref: 'comment'
    }], 
    category :{
        type: mongoose.Schema.ObjectId,
        ref: 'Categories'
    }
    
     
}))

export default Tutorial