/**
 * Created by Andrei on 5/13/2015.
 */
hrApp.controller('UserController',['$rootScope','$scope','$location','userService', function($rootScope,$scope,$location,userService){
    $scope.back = function() {
        $location.url('/index');

    }

    $scope.reset = function() {
        $scope.firstName = undefined;
        $scope.lastName = undefined;
        $scope.cnp = undefined;
        $scope.age = undefined;
    };

    $scope.save = function() {
        userService.push({firstName:$scope.firstName, lastName:$scope.lastName, cnp:$scope.cnp, age:$scope.age});
        console.log(userService.toString());
    };

    $scope.show = function(){
        $scope.usersList = userService;
    }
}]);