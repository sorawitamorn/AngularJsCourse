(function(){
'use strict'

angular.module("LunchCheck", [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = ""
  $scope.message = ""
  $scope.textStyle = { }
  $scope.messageStyle = { }
  $scope.CheckIfTooMuch = function () {
    var dishesCount = GetNumberOfDishes($scope.dishes)
    var message = "Too much!";
    var color = "green";
    if(dishesCount === 0)
    {
      color = "red";
      message = "Please enter data first";
    }
    else if (dishesCount <= 3) {
      message = "Enjoy!";
    }

    $scope.message = message;
    $scope.messageStyle = {"border-style" : "solid", "border-color" : color}
    $scope.textStyle = { "color": color }
  }


  function GetNumberOfDishes(dishes)
  {
    var items = dishes.split(",")
    var counter = 0
    for(var item of items)
    {
      if(item.trim() !== "")
      {
        counter += 1;
      }
    }

    return counter;
  }
};

})();
