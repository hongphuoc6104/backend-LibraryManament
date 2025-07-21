// server.js (hoặc file chính của bạn)

require('dotenv').config(); // Đảm bảo dòng này nằm ở đầu file, trước khi các module khác được require nếu chúng dùng biến môi trường

const express = require('express');
const cors = require('cors')

const borrowRoutes = require('./routes/borrowRoutes')
const bookRoutes = require('./routes/bookRoutes')
const staffRoutes = require('./routes/staffRoutes')
const accountRoutes = require('./routes/accountRoutes')
const publisherRoutes = require('./routes/publisherRoutes')
const connectDB = require('./config/db'); // Đường dẫn đến file connectDB của bạn
const createRootAdmin = require('./seed/rootAccount'); // Đảm bảo đường dẫn này đúng

const app = express();

connectDB(); // Gọi hàm kết nối database
createRootAdmin(); // Gọi hàm tạo admin gốc nếu cần

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrows',borrowRoutes)
app.use('/api/staff', staffRoutes)
app.use('/api/account', accountRoutes)
app.use('/api/publishers', publisherRoutes);
app.use('/api/users', require('./routes/userRoutes'));

// Sử dụng biến môi trường cho PORT để Render có thể gán cổng
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));