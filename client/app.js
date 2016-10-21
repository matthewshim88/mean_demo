var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl : "/partials/login.html",
    controller: "sessionController"
  })
  .when("/dashboard", {
    templateUrl : "/partials/dashboard.html",
    controller: "dashController"
  })
  .when("/question", {
    templateUrl : "/partials/question.html",
    controller: "dashController"
  })
  .when("/question/:id", {
    templateUrl: "/partials/show.html",
    controller: "questionController"
  })
  .when("/answer/:id", {
    templateUrl: "/partials/answer.html",
    controller: "questionController"
  })
  .otherwise({
      redirectTo: "/"
  })

});
