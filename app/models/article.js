/* Article model
 * A title, an url, a date and a text are used to define an article.
 * Notice that the text area is limited at 400 caracter to prevent too long articles.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema for articles
const articleSchema = new Schema({
  // Define the validation rules for articles
  title: {type: String, required: true},
  url: {type: String, required: true},
  date: {type: Date, required: true, default: Date.now},
  text: {type: String, max: 400, required: true}
});

// Create the model from the schema and export it
module.exports = mongoose.model('Article', articleSchema);