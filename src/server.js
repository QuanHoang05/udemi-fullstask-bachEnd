const express = require("express");
const path = require("path");
const open = require("open"); // cần cài: npm install open@8.4.0
require("dotenv").config();

const app = express();

// Load route và cấu hình view engine
const webRoutes = require("./routes/web");
const configViewEngine = require("./config/viewEngine");

// Cấu hình view engine
configViewEngine(app);

// Sử dụng router
app.use("/", webRoutes);

// Lấy thông tin từ biến môi trường .env hoặc dùng giá trị mặc định
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME || "localhost";

console.log(">>> check env: ", process.env);

// Khởi động server
app.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}`);
  //open(`http://${hostname}:${port}`); // Tự động mở trình duyệt
});
