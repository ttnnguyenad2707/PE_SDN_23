import mongoose from "mongoose"

const Image = mongoose.model("Image", new mongoose.Schema({
    path: {
        type: String,
    },
    url: {
        type: String,
    },
    caption: {
        type: String,
    },
},{timestamps:true}),)

export default Image