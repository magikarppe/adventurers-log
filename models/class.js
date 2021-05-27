import mongoose from "mongoose";
const { Schema } = mongoose;

const classSchema = new Schema({
    class: { type: String, required: true },
    description: { type: String, required: true },
    classTraits: mongoose.ObjectId
});

const Class = mongoose.model("Class", classSchema);

export default Class;