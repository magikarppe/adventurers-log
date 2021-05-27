import mongoose from "mongoose";
const { Schema } = mongoose;

const modSchema = new Schema({
    strength: {
        type: Number,
        default: null
    },
    dexterity: {
        type: Number,
        default: null
    },
    constitution: {
        type: Number,
        default: null
    },
    intelligence: {
        type: Number,
        default: null
    },
    wisdom: {
        type: Number,
        default: null
    },
    charisma: {
        type: Number,
        default: null
    },
    speed: {
        type: Number,
        default: null
    }
});

const Modifiers = mongoose.model("Modifiers", modSchema);

export default Modifiers;