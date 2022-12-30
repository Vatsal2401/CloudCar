const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
  
passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
  
passport.use(new GoogleStrategy({
    clientID:"473509240448-erpijneig6pfjtreiut7ngede225ru5f.apps.googleusercontent.com", // Your Credentials here.
    clientSecret:"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", // Your Credentials here.
    callbackURL:"http://localhost:3006/auth/google/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // console.log(request,accessToken,refreshToken,profile,done)
    return done(null, profile);
  }
));