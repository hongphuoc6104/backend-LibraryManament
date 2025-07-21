// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Với Mongoose v6.0 trở lên, các tùy chọn này không còn cần thiết nữa
        // vì chúng đã là mặc định.
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Kết nối MongoDB Atlas thành công!");
    } catch (err) {
        console.error("Kết nối MongoDB Atlas thất bại:", err.message);
        process.exit(1); // Thoát ứng dụng nếu không kết nối được DB
    }
};

module.exports = connectDB;