var mongoose = require('mongoose');
var Schema = mongoose.Schema

var QuestionSchema = new Schema({
  question : {type : String, required:true, minlength:10},
  _user : {type: Schema.Types.ObjectId, ref:"User"},
  _answers: [{type: Schema.Types.ObjectId, ref:"Answer"}],
  desc: {type: String},
}, {timestamps:true});

mongoose.model("Question", QuestionSchema);
