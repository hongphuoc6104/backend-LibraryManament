// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: đăng ký.
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 

require('dotenv').config(); 

const express = require('express');
const cors = require('cors')

const borrowRoutes = require('./routes/borrowRoutes')
const bookRoutes = require('./routes/bookRoutes')
const staffRoutes = require('./routes/staffRoutes')
const accountRoutes = require('./routes/accountRoutes')
const publisherRoutes = require('./routes/publisherRoutes')
const connectDB = require('./config/db'); 
const createRootAdmin = require('./seed/rootAccount'); 

const app = express();

connectDB(); 
createRootAdmin(); 

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrows',borrowRoutes)
app.use('/api/staff', staffRoutes)
app.use('/api/account', accountRoutes)
app.use('/api/publishers', publisherRoutes);
app.use('/api/users', require('./routes/userRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));