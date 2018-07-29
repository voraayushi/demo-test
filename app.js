(function (){
  'use strict';
angular.module('namecalculator',[])
.controller('calculatorcontroller',function($scope){
  $scope.name="";
  $scope.totalvalue=0;

  $scope.displaynumeric=function(){
    var totalnamevalue=calculatenumerforstring($scope.name);
    $scope.totalvalue=totalnamevalue;
  };
  function calculatenumerforstring(string){
    var totalstringvalue=0;
    for(var i=0;i<string.length;i++){
      totalstringvalue +=string.charCodeAt(i);
    }

    return totalstringvalue;
  };
});
})();
