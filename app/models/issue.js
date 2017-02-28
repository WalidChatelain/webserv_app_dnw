/* Issue model
 * Type, creation date, issue name, description, author,
 * assigned to, status and location are used to define an issue.
 * There is also few action that are available for an issue.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema for issues
const issueSchema = new Schema({
  // Define the validation rules for issues
  type: {type: String, required: true},
  creationDate: {type: Date, required: true, default: Date.now},
  issueName: {type: String, required: true, max: 75},
  description: {type: String, max: 1000, required: false},
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  assignedTo: {type: Schema.Types.ObjectId, ref: 'User'},
  imageUrl: {type: String, max: 500, required: false},
  // Define de 4 states of an issue. The state can change :
  // from new to inProgress, new to canceled, inProgress to completed
  // A CODER State machine avec if imbriqué ou objet clé valeur.
  status: {
  	type: String,
  	required: true,
  	match: /^(new|inProgress|canceled|completed)$/,
  	default: "new"
  },
  location: {
  	type: {type: String, required: true, default: "Point"},
  	coordinates: {type: [Number], required: true}
  },
  actions: [{
   	type: {type: String, required: true},
  	updateDate: {type: Date, required: true, default: Date.now},
  	user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  	content: {type: String},
  	status: {type: String},
  }],

  tags: [String]
});

// the map
IssueSchema.index({
	location: '2dsphere'
});

// Create the model from the schema and export it
module.exports = mongoose.model('Issue', issueSchema);