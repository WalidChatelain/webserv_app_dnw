/* User model
 * A username, an email and a password are used for the authentification
 * There is also a role for each user : 
 * - Manager who fix the issues
 * - Citizen who spot and signal the issues
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema for users
const userSchema = new Schema({
  // Define the validation rules for users
  credentials: {
  	firstName: {type: String, min: 2, max: 20, required: true},
  	lastName: {type: String, min: 2, max: 20, required: true},
  	email: {type: String, required: true},
  	password: {type: String, required: true},
  	createdAt: {type: Date, required: true, default: Date.now}
  },
  role: {type: String, enum: ['Citizen', 'Manager'], required: true},
});

userSchema.index({ firstName : 1, lastName : 1}, { unique: true });

// Create the model from the schema and export it
module.exports = mongoose.model('User', userSchema);