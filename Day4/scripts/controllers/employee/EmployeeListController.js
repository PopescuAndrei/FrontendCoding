hrApp.controller('EmployeeListController', ['$scope', '$http', '$location','$route', 'commonResourcesFactory',
    function ($scope, $http, $location,$route, commonResourcesFactory) {

        $scope.employees = [];


        $http({url: commonResourcesFactory.findAllEmployeesUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.employees = data;
            });


        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };

        $scope.editEmployee = function (employeeId) {
            $location.url('/employeeedit/' + employeeId);
        };

        $scope.deleteEmployee = function (employeeId) {
            $http({url: commonResourcesFactory.deleteEmployeeUrl + employeeId, method: 'DELETE'}).
                success(function (data) {
                    $route.reload();
                });
        }
    }]);