const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users')
const Dogtoy = require('../models/dogtoys')

//Session NEW Route
router.get('/new',(req,res)=>{
  res.render('sessions/new.ejs',{currentUser: req.session.currentUser})
})

//USER LOGIN ROUTE( CREATE SESSION ROUTE)
router.post('/',(req,res)=>{
  User.findOne({username: req.body.username},(err,foundUser)=>{
    if (err) {
      res.send(err)
    }else {
      if (foundUser) {
        if (bcrypt.compareSync(req.body.password,foundUser.password)) {
          //login user and creat session
          req.session.currentUser = foundUser
          res.redirect('/maidenschoice')

        }else {
          res.send('<h1>Invalid Password</h1>')
        }
      }else {
        res.send("<h1>Invalid Username</h1>")
      }
    }
  })
})



//logout route
router.delete('/',(req,res)=>{
  req.session.destroy(()=>{
    res.redirect('/maidenschoice')
  })
})


module.exports = router;
