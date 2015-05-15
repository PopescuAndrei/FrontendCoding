/**
 * Created by Andrei on 5/15/2015.
 */
hrApp.controller('DepartmentAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, $commonResourcesFactory) {
        $scope.department = {};
        $scope.requiredErrorMessage = "Please fill out this form!";

        $http({url: $commonResourcesFactory.findAllLocationsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.locations = data;
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.department = {};
        };


        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addDepartment) {
            $http({url: $commonResourcesFactory.addDepartmentUrl, method: 'POST', data: addDepartment}).
                success(function (data) {
                    $scope.department = data;
                    $location.url('/departmentview/' + $scope.department.departmentId);
                });
        }
    }]);