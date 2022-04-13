const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const authRouter = require('./routes/authRoute');
const blogRouter = require('./routes/blogsRoute');
const userRouter = require('./routes/userRoutes');
const blogModel = require('./models/blogModel');
const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRouter);
app.use('/users', userRouter);
app.use('/blogs', blogRouter);

app.get('/', async (req, res) => {
  // if the user is authenticated
  const blogs = await blogModel.getBlogsFromDB();
  res.render("home", {blogs})
})

app.listen(port, ()=> {
  console.log(port)
})