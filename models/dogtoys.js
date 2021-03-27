const mongoose = require('mongoose')
const {Schema, model}=mongoose

const dogtoySchema = new Schema({
  name: {type: String},
  brand: {type: String},
  img: {type: String},
  size: {type: Number},
  reviews:{type:Array}
})

const Dogtoy = model('Dogtoy',dogtoySchema)

module.exports = Dogtoy
