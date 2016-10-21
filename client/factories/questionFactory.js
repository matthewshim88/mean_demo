app.factory('questionFactory', ["$http", "$location", function($http, $location){

  var factory = {};

  factory.add = function(newQuestion, callback){
    $http.post('/addQuestion', newQuestion)
    .then(function(returnQuestion){
      callback(returnQuestion.data);
    });
  }


  factory.showOne = function(questionID, callback){
    $http.get('/question/getOne/' + questionID)
    .then(function(returnedData){
      question = returnedData.data;
      callback(question);
    });
  }

  factory.index = function(callback){
    $http.get('/question/get')
    .then(function(returnQuestion){
      callback(returnQuestion.data);
    })
  }
  factory.createAnswer = function(answer, callback){
    $http.post("/answer/create", answer)
    .then(function(data){
      if(typeof(callback) == "function"){
        callback(data.data);
      }else{
        alert("factory error");
      }
    })
  }
  factory.addLike = function(id, callback){
    $http.put("/answer/like", id)
    .then(function(data){
      if(typeof(callback) == "function"){
        callback(data.data)
      }else{
        alert("factory error");
      }
    })
  }
  return factory;
}]);
