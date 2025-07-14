const mongoose = require('mongoose');


const AccountSchema = new mongoose.Schema({
    email:      { type: String, required: true, unique: true },
    password:   { type: String, required: true },
    role:       { type: String, enum: ['user', 'admin']},
    refId:      { type: mongoose.Schema.Types.ObjectId, required: true },
    refModel:   { type: String, enum: ['User', 'Staff'], required: true }
});


module.exports = mongoose.model('Account', AccountSchema);
