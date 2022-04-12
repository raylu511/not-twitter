const express = require('express');
const path = require('path');
const app = express();

const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render("home")
})
app.get('/register', (req,res) => {
  res.render("register")
})
app.get('/login', (req,res) => {
  res.render("login")
})


app.listen(port, ()=> {
  console.log(port)
})