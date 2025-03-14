// models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  sentiment: {
    label: {
      type: String,
      enum: ['POSITIVE', 'NEGATIVE', 'NEUTRAL'],
      required: true
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 1
    }
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  approved: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);