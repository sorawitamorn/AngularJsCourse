(function(){
'use strict'

angular.module("demoApp", [])
.controller('Controller', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
  $scope.name = ""
  $scope.reverse = function() {
    $scope.reversedName = reverseString($scope.name)
  }

  $scope.switch = function()
  {
    var temp = $scope.name;
    $scope.name = $scope.reversedName;
    $scope.reversedName = temp;
  }

  function reverseString(string)
  {
    var value =new Array(string.length);
    for(var i = string.length - 1; i >=0; i--)
    {
      value[string.length - i - 1] = string[i];
    }
    return value.join("");
  }
};

})();
