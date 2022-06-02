const express = require("express");

// Router importss
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");

const PORT = process.env.PORT || 3000;

const app = express();
const jsonParser = express.json();

// Middlewares -> tools
app.use(express.json()); // Body parser middleware
app.use(jsonParser);

// Routers
app.use("/users", userRouter);
app.use("/images", imageRouter);

// Start the app
app.listen(PORT, () => console.log("Server started in port:", PORT));
