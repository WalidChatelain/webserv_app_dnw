/* User model
 * A username, an email and a password are used for the authentification
 * There is also a role for each user : 
 * - Staff who fix the issues
 * - Citizen who spot and signal the issues
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema for users
const userSchema = new Schema({
  // Define the validation rules for users
  credentials: {
  	username: {type: String, required: true},
  	email: {type: String, required: true},
  	password: {type: String, required: true}
  	},
  role: {type: String, required: true},
});


// Create the model from the schema and export it
module.exports = mongoose.model('User', userSchema);