var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    text: {type: String, required: true},
    details: {type: String},
    _question: {type: Schema.Types.ObjectId, ref: "Question"},
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    likes: {type: Number, default: 0},
},{timestamps: true});

mongoose.model("Answer", AnswerSchema);
