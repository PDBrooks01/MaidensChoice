const express = require('express')
const multer = require('multer')
const router = express.Router()


const Dogtoy = require('../models/dogtoys')

//Index Route
router.get('/',(req,res)=>{
  Dogtoy.find({},(err, foundDogtoys,next)=>{
    if (err) {
      console.log(err)
      next(err)
    }else {
      res.render('index.ejs',{dogtoys: foundDogtoys, currentUser: req.session.currentUser})
    }
  })
})

//New Route
router.get('/new',(req,res)=>{
  res.render('new.ejs',{currentUser: req.session.currentUser })
})

//Seed Route
router.get('/seed',(req,res)=>{
  Dogtoy.create([
    {
      name:"Kong® Classic",
      brand:"Kong",
      img:"https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/T1_1_1000x1000.jpg",
      size:2
    },
    {
      name:"Kong® Extreme",
      brand:"Kong",
      img:"https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/K1_1_1000x1000.jpg",
      size:3
    },
    {
      name:"KONG® Floppy Knot Fox Dog Toy",
      brand:"Kong",
      img:"https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKF12%20(1)-20180813164051-20180814193403-1000x1000.jpg",
      size:2
    }
  ],(err,data) =>{
    if (err) {
      console.log(err)
    }
    res.redirect('/maidenschoice')
  })
})


//Show Route
router.get('/:id',(req,res)=>{
  Dogtoy.findById(req.params.id, (err, foundDogtoys)=>{
    res.render('show.ejs',{dogtoy:foundDogtoys, currentUser: req.session.currentUser })
  })
})


// POST Route
router.post('/',(req,res)=>{
  Dogtoy.create(req.body,(error,createdToy)=>{
    if (error){
      console.log(error)
      res.send(error)
    }else {
      // console.log(createdToy)
      res.redirect('/maidenschoice')
    }
  })
})

//Delete Route
router.delete('/:id',(req,res)=>{
  Dogtoy.findByIdAndRemove(req.params.id,(err,data)=>{
    if (err) {
      console.log(err)
    }else {
      res.redirect('/maidenschoice')
    }
  })
})


//Edit Route
router.get('/:id/edit',(req,res)=>{
  Dogtoy.findById(req.params.id,(err,foundDogtoys)=>{
    res.render('edit.ejs',{ dogtoy:foundDogtoys, currentUser: req.session.currentUser })
  })
})

//Update Route
router.put('/:id',(req,res)=>{
  Dogtoy.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedToy)=>{
    res.redirect('/maidenschoice')
  })
})



module.exports = router
