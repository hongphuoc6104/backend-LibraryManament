#cách cài đặc
# Mở terminal, đi đến thư mục backend và chạy:
# (Open a terminal, go to the backend directory and run:)
cd path/to/backend-LibraryManament-main
npm install

# Mở terminal khác, đi đến thư mục frontend và chạy:
# (Open another terminal, go to the frontend directory and run:)
cd path/to/frontend-LibraryManament-main
npm install

tạo thêm file env nội dung như sau:
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=BatNgoChua123

# cách chạy: 
# cd path/to/frontend-LibraryManament-main
# npm run dev
# lưu ý chạy mongodb trước khi chạy lệnh trên.
