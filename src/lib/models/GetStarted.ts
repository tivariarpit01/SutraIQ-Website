import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  company: {
    type: String,
    default: '',
  },
  services: {
    type: [String],
    required: true,
    validate: {
      validator: function(val:string[]) {
        return Array.isArray(val) && val.length > 0;
      },
      message: 'At least one service is required.',
    },
  },
  details: {
    type: String,
    required: true,
    minlength: 20,
  },
  budget: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const GetStartedModel = mongoose.models.GetStarted || mongoose.model('GetStarted', QuoteSchema);

export default GetStartedModel;