const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Kết nối thành công");
    }catch (err) {
        console.error("Kết nối thất bại", err.message);
    }
};
module.exports = connectDB;