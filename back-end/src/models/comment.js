import mongoose from "mongoose"

const Comment = mongoose.model("comment", new mongoose.Schema({
    username: {
        type: String,
    },
    text: {
        type: String,
    }
},{timestamps:true}))

export default Comment