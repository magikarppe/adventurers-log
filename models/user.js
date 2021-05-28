import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        maxLength: 20,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 30,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

export default User;