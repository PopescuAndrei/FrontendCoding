/**
 * Created by Andrei on 5/12/2015.
 */
hrApp.controller('MenuController',['$rootScope','$scope',function($rootScope,$scope){
        $scope.demoActionList=[
            {
                label: "OtherScope",
                url: "views/childscope.html"
            },
            {
                label: "DemoMath",
                url: "views/demomath.html"
            }
        ];
}]);