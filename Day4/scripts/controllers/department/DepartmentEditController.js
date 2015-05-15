/**
 * Created by Andrei on 5/15/2015.
 */
hrApp.controller('DepartmentEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, $commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        $http({url: $commonResourcesFactory.findAllLocationsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.locations = data;
            });
        $http({url: $commonResourcesFactory.findOneDepartmentUrl + $routeParams.departmentid, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.department = data;
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.department = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addDepartment) {
            $http({url: $commonResourcesFactory.editDepartmentUrl, method: 'PUT', data: addDepartment}).
                success(function (data) {
                    $scope.department = data;
                    $location.url('/departmentview/' + $scope.department.departmentId);
                });
        }


    }]);