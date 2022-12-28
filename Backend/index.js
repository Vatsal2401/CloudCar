const connectToMongo = require('./db');  
var cors = require('cors')
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');
const express = require('express') 
connectToMongo();
const app = express();
const port = 3006;
app.use(cors());
app.use(express.json());
app.use("/api/auth",require("./routes/auth"));
app.use("/api/cars",require("./routes/cars"));
app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());
  

app.get('/', (req, res) => {
  res.send("<button><a href='/auth'>Login With Google</a></button>")
});

// Auth 
app.get('/auth' , passport.authenticate('google', { scope:
  [ 'email', 'profile' ]
}));

// Auth Callback
app.get( '/auth/callback',
  passport.authenticate( 'google', {
      successRedirect: '/auth/callback/success',
      failureRedirect: '/auth/callback/failure'
}));

// Success 
app.get('/auth/callback/success' , (req , res) => {
  if(!req.user)
      res.redirect('/auth/callback/failure');
  res.send("Welcome " + JSON.stringify(req.user.email));
  console.log(req.user)
});
// JSON.stringify(req.user)
// failure
app.get('/auth/callback/failure' , (req , res) => {
  res.send("Error");
})
// app.use("/api/cars",require("./routes/cars"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})