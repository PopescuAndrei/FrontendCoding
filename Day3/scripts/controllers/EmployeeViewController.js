hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location','commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {
        $scope.employee = {};
        $scope.employee = $http.get(commonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeId).success(
            (function(data, status, headers, config) {
                $scope.employee= data;
            })).error(
            function(data,status,headers,config){
                alert('Can\'t connect to the server');
            }
        );

        $scope.back = function() {
            $location.url('/employeeslist');

        }

    }]);