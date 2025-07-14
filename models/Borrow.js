const mongoose = require('mongoose');

const BorrowSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    ngayMuon: { type: Date, default: Date.now },
    ngayTra: { type: Date }
});

module.exports = mongoose.model('Borrow', BorrowSchema);
