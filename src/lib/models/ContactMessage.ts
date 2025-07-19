// src/models/ContactMessage.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the interface for a ContactMessage document
export interface IContactMessage extends Document {
  name: string;
  email: string;
  phoneNumber?: string; 
  message: string;
  createdAt: Date;
}

// Define the Mongoose schema for ContactMessage
const ContactMessageSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String }, // <--- ADD THIS LINE: phoneNumber field (optional, no 'required: true')
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Check if the model already exists to prevent re-compilation in development
const ContactMessage: Model<IContactMessage> =
  (mongoose.models.ContactMessage as Model<IContactMessage>) ||
  mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);

export default ContactMessage;