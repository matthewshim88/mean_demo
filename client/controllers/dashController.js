app.controller('dashController', function($scope, sessionFactory, questionFactory, $location){
  $scope.questions = [];

  sessionFactory.checkUser(function(data){
    $scope.currUser = data.user;
    if(!$scope.currUser){
      $location.url('/')
    }
  });

  $scope.index = function(){
    questionFactory.index(function(returnQuestions){
      $scope.questions = returnQuestions;
    });
  }
  $scope.index();

  $scope.add = function(){

    if($scope.question.question.length < 10){
      alert("Question length must be at least 10 characters!");
    }
    else{
      //gets User
      $scope.question._user = $scope.currUser._id;
      questionFactory.add($scope.question, function(question){
        $scope.questions.push(question.data);
        })
        $scope.question = "";
        $scope.index();
        $location.url('/dashboard');
      }

    }


})
