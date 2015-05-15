/**
 * Created by Andrei on 5/12/2015.
 */
hrApp.controller('DemoMathController',['$rootScope','$scope', function($rootScope,$scope){
    $scope.numberA=1;
    $scope.numberB=1;
    $scope.mulNumbers=1;
    $scope.divNumbers=1;
    $scope.subNumbers=0;
    $scope.sumNumbers=2;

    $scope.operations = function(a,b) {
        $scope.sumNumbers = a+b;
        $scope.subNumbers =a-b;
        $scope.mulNumbers = a*b;
        $scope.divNumbers = a/b;
    };
}]);