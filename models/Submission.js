const mongoose = require('mongoose');
const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  submission_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Enquiry', EnquirySchema);




