const mongoose = require('mongoose')
const {Schema, model} = mongoose

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cart: {
    type:Schema.Types.ObjectId,
    ref: 'Cart'
  },
  __v: {
    type: String,
    select: false
  }
})

module.exports = model('User', UserSchema)