const express = require('express');
const path = require('path');
const app = express();
const authRouter = require('./routes/authRoute');
const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRouter);

app.get('/', (req, res) => {
  res.render("home")
})



app.listen(port, ()=> {
  console.log(port)
})