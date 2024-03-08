import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/PE_FALL2023_B1')
        console.log("connect successfully");

    } catch (error) {
        throw new Error("Connect failed")
    }
}

export default ConnectDB