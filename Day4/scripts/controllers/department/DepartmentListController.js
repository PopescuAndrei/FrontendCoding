/**
 * Created by Andrei on 5/15/2015.
 */
hrApp.controller('DepartmentListController', ['$scope', '$http', '$location','$route', 'commonResourcesFactory',
    function ($scope, $http, $location,$route, commonResourcesFactory) {

        $scope.departments = [];


        $http({url: commonResourcesFactory.findAllDepartmentsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.departments = data;
            });


        $scope.viewDepartment = function (departmentId) {
            $location.url('/departmentview/' + departmentId);
        };

        $scope.editDepartment = function (departmentId) {
            $location.url('/departmentedit/' + departmentId);
        };

        $scope.deleteDepartment = function (departmentId) {
            $http({url: commonResourcesFactory.deleteDepartmentUrl + departmentId, method: 'DELETE'}).
                success(function (data) {
                    $route.reload();
                });
        }
    }]);