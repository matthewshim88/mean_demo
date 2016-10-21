var path = require('path');
var session = require('./../controllers/sessionController.js')
var question = require('./../controllers/questionController.js')

module.exports = function(app){
  app.post('/login', session.login);
  app.get('/checkUser', session.checkUser);
  app.get('/logout', session.logout);
  app.get('/getUser/:id', session.findUser);
  app.get('/question/get', question.getAll);
  // app.get('/question/get/:id', question.find);
  app.get("/question/getOne/:id", question.findOne);
  app.post('/addQuestion', question.add);
  app.post('/answer/create', question.createAnswer);
  app.put("/answer/like", question.addLike);
}
