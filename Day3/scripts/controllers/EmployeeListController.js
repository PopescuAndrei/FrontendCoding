hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {

        $scope.employees = []; // Employee list
        $scope.employees = $http.get(commonResourcesFactory.findAllEmployeesUrl).success(
            (function(data, status, headers, config) {
                $scope.employees = data;
            })).error(
            function(data,status,headers,config){
                alert('Can\'t connect to the server');
            }
        );

        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };


    }]);