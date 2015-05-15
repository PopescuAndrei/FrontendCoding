/**
 * Created by Andrei on 5/15/2015.
 */
hrApp.controller('DepartmentViewController', ['$scope', '$http', '$routeParams', '$location', 'departmentService',
    function($scope, $http, $routeParams, $location, departmentService) {

        $http({url: 'http://hrapp-zth.rhcloud.com/hrapp/departments/'+$routeParams.departmentid, method: 'GET'}).
            success(function (data) {
                $scope.department = data;
            });

        $scope.back = function() {
            $location.url('/departmentslist');
        }

    }]);