(function(){
'use strict'

angular.module("LunchCheck", [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = ""
  $scope.message = ""
  $scope.messageStyle = ""

  $scope.CheckIfTooMuch = function () {
    var dishesCount = GetNumberOfDishes($scope.dishes)
    var message = "Too much!";
    var fontColor = "green";
    if(dishesCount === 0)
    {
      fontColor = "red";
      message = "Please enter data first";
    }
    else if (dishesCount <= 3) {
      message = "Enjoy!";
    }

    $scope.message = message;
    $scope.messageStyle = {"color": fontColor, "border-style" : "solid", "border-color" : fontColor}
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
