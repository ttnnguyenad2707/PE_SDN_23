import mongoose from "mongoose"

const Categories = mongoose.model("Categories", new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    }
}))

export default Categories