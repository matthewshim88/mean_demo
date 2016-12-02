app.controller('questionController', function($scope, $routeParams, sessionFactory, questionFactory, $location){

  $scope.questionID = $routeParams.id;

  $scope.index = function(){
    questionFactory.showOne($scope.questionID, function(data){
      $scope.question = data;
    })
  };
  $scope.index();

  sessionFactory.checkUser(function(data){
    $scope.currUser = data.user;
    if(!$scope.currUser){
      $location.url('/')
    }
  });

  $scope.createAnswer = function(){
    if(!$scope.answer){
      $scope.answer.text="";
    }
    if($scope.answer.text.length < 5){
      alert("Answer must be at least 5 characters!")
      }else{
          $scope.answer._user = $scope.currUser._id;
          $scope.answer._question = $scope.question._id;
          questionFactory.createAnswer($scope.answer, function(){
          $scope.answer = "";
          $scope.index();
          $location.url('/dashboard')
        })
      }
    };

  $scope.addLike = function(id){
    var ansID = {id:id}
    questionFactory.addLike(ansID, function(){
      $scope.index();
    })
  };

})
