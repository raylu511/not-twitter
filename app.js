const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const jwt = require("jsonwebtoken");
const authRouter = require("./routes/authRoute");
const blogRouter = require("./routes/blogsRoute");
const userRouter = require("./routes/userRoutes");
const blogModel = require("./models/blogModel");
const userModel = require("./models/usersModel");
const port = process.env.PORT || 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(authRouter);
app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.get("/", async (req, res) => {
  // if the user is authenticated
  const blogs = await blogModel.getBlogsFromDB();
  const token = req.cookies.access_token;
  if (!token) {
    return res.render("home", {authenticated: false});
  }
  const data = jwt.verify(token, "Your_Secret_Key");
  res.render("home", { blogs, authenticated: true });
});

app.listen(port, () => {
  console.log(port);
});
