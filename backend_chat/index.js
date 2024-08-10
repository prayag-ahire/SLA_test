
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const rootRouter = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const {router} = require("./routes/user.routes.js");

const {connectDB} = require("./db.js");
const {server } = require("./socket/socket.js");

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // Body parser
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/api/v1/auth", rootRouter);
app.use("/api/v1/messages", messageRoutes);
app.use("/api/v1/users", router);


app.listen(PORT, () => {
    connectDB(); 
    console.log(`Server is running on port ${PORT}`);
});
