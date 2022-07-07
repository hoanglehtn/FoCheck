const express = require('express')
const LoginController = require("../controller/LoginController")
const LoginRoute = express.Router()
const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy

// LoginRoute.route("/auth/google/data")
//     .all(()=>{passport.authenticate('google')})
// LoginRoute.route("/auth/google")
//     .all( passport.authenticate('google', {
//     scope: ['profile', 'email']
    
//   },
//     passport.use(
//         new GoogleStrategy(
//           {
//             clientID: "861637830827-6upaco2rmke6toa8027eaq2cbjedqqrt.apps.googleusercontent.com",
//             clientSecret: "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",
//             callbackURL: '/login/auth/google/data'
//           },
//           (accessToken,rf,profile,done) => {
//             console.log(accessToken);
            
//           }
//         )
//       ),
//     (req ,res)=>{
//           res.send("alo")
//       }
//   ))
//   LoginRoute.route("/auth/google/data")
//         .all(passport.authenticate('google'))
    
    
passport.serializeUser(function(user1, done) {
  done(null, user1);
}),
LoginRoute.use('/auth',
  passport.authenticate(new localStrategy(
    { failureRedirect: '/login' },(username, pass, done)=>{
      console.log(username);
      console.log(pass)
      if(username ==="admin" && pass==="admin"){
        console.log("verified")
        return done(null,{user: username,password: pass})
      }else{
        return done(err)
      }
    }
  )),(req,res)=>{
    console.log(req.session.passport)
    if(req.session.passport.user =="admin"){
      
      res.sendStatus(200)
    }
    else{
      res.sendStatus(404)
    }
  })
    





module.exports = LoginRoute