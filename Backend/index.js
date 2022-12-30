require("dotenv").config();
const connectToMongo = require('./db');  
var cors = require('cors')
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');
const express = require('express') 
connectToMongo();
const app = express();
const port =  process.env.PORT || 3006;
app.use(cors({
    origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
}));
app.use(express.json());
app.use("/api/auth",require("./routes/auth"));
app.use("/api/cars",require("./routes/cars"));
app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());
  

// app.get('/', (req, res) => {
//   res.send("<button><a href='/auth'>Login With Google</a></button>")
// });

// Auth 
app.get('/auth/google' , passport.authenticate('google', { scope:
  [ 'email', 'profile' ]
}));

// Auth Callback
app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
      successRedirect: 'http://localhost:3000/',
      failureRedirect: '/auth/login/failure'
}));

// Success 
app.get('/auth/login/success' , (req , res) => {
  if(!req.user)
      res.redirect('/auth/login/failure');
  res.status(200).json({
    error: false,
    message: "Successfully Loged In",
    user: req.user,
  })
  // res.send("Welcome " + JSON.stringify(req.user.email));
  console.log(req.user)
});
// JSON.stringify(req.user)
// failure
app.get('/auth/login/failure' , (req , res) => {
  res.send("Error");
})
app.get("/auth/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});
// app.use("/api/cars",require("./routes/cars"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})