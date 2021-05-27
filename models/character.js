import mongoose from "mongoose";
const { Schema } = mongoose;

const charSchema = new Schema({
    name: { type: String, required: true },
    raceId: mongoose.ObjectId,
    classId: mongoose.ObjectId,
    modifiersId: mongoose.ObjectId,
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Character = mongoose.model("Character", charSchema);

export default Character;