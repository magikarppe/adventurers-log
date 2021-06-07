const mongoose = require("mongoose");
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
    class: { 
        type: String, 
        required: true 
    },
    abilities: [abilitiesSchema],
    description: { 
        type: String, 
        required: true 
    },
    imageURL: {
        type: String
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});


const Character = mongoose.model("Character", charSchema);

module.exports = Character;