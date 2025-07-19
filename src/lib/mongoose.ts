// src/lib/mongoose.ts
import mongoose from 'mongoose';

// Cache the connection to reuse it across hot reloads in development
// This prevents "already connected" errors
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes a connection to the MongoDB database.
 * Uses a cached connection if available.
 */
async function connectToDatabase() {
  if (cached.conn) {
    // console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable Mongoose's buffering
    };

    // Check if MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in the environment variables.');
    }

    // Create a new connection promise
    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  // Await the connection promise and store the connection object
  try {
    cached.conn = await cached.promise;
    // console.log('New MongoDB connection established');
    return cached.conn;
  } catch (e) {
    cached.promise = null; // Reset promise if connection fails
    throw e;
  }
}

export default connectToDatabase;