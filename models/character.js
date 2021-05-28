import mongoose from "mongoose";
const { Schema } = mongoose;

const abilitiesSchema = new Schema({
    strength: {
        type: Number,
        required: true
    },
    dexterity: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    wisdom: {
        type: Number,
        required: true
    },
    charisma: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    languages: {
        type: Array,
    },
    specialAbilities: {
        type: Array,
        default: null
    }
});

const charSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    race: { 
        type: String, 
        required: true 
    },
    classId: { 
        type: String, 
        required: true 
    },
    abilities: [abilitiesSchema],
    description: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    userId: mongoose.objectId
});


const Character = mongoose.model("Character", charSchema);

export default Character;