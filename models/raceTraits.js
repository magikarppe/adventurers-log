import mongoose from "mongoose";
const { Schema } = mongoose;

const raceTraitsSchema = new Schema({
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
    },
    languages: {
        type: String,
    },
    specialAbilities: {
        type: Array,
        default: null
    }  
});

const RaceTraits = mongoose.model("Race Traits", raceTraitsSchema);

export default RaceTraits;