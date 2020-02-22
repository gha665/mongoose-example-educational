const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const catSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, enum: ['whie', 'black', 'brown'] }, 
    age: { Number, min: 0, max: 30 }, 
    avatarUrl: { type: String, default: 'images/default-avater.png' },
    location: {
        address: String,
        city: String
    },
    countryCode: {
        type: String, 
        match: /^[A-Z]{2}$/
    }, 
    created: {
        type: Date,
        default: Date.now
    }
}); 

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat; 