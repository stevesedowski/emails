var emailApp = angular.module('emailApp', []);

emailApp.controller('EmailCtrl', function($scope) {
  $scope.emails = [];
  
  $scope.addEmails = function() {
    $scope.emails.push($scope.email);
    $scope.email = "";
    
  };
  
  $scope.deleteEmail = function(index) {
    $scope.emails.splice(index, 1);
  };
  
});