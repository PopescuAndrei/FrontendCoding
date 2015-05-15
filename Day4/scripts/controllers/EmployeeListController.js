hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {

        $scope.employees = [];


        $http({url: commonResourcesFactory.findAllEmployeesUrl, method: 'GET'}).
         success(function (data, status, headers, config) {
         $scope.employees = data;
         });


        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };

     $scope.editEmployee = function(employeeId) {
      $location.url('/employeeedit/'+employeeId);
     };


    }]);