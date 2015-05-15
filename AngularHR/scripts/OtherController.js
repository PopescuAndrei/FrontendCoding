/**
 * Created by Andrei on 5/12/2015.
 */
hrApp.controller('OtherController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.title = 'Other Page';
    $scope.setTitle = function(title) {
        $scope.title = title;
    };
}]);