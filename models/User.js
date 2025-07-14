const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    hoLot: String,
    ten: String,
    ngaySinh: Date,
    phai: {type: String, enum: ['Nam', 'Nữ']},
    diaChi: String,
    dienThoai: String,
});

module.exports = mongoose.model('User', UserSchema);