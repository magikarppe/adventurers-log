import mongoose from "mongoose";
const { Schema } = mongoose;

const raceSchema = new Schema({
    race: { type: String, required: true },
    description: { type: String, required: true },
    raceTraitsId: mongoose.ObjectId
});

const Race = mongoose.model("Race", raceSchema);

export default Race;