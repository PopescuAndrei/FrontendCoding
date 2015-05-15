hrApp.controller('MenuController', ['$scope', 'employeeActionsService','jobActionsService','departmentActionsService','locationActionsService', function($scope, employeeActionsService, jobActionsService, departmentActionsService, locationActionsService){
    /*$scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];*/

    $scope.employeeActionList = employeeActionsService;
    $scope.jobActionList = jobActionsService;
    $scope.locationActionList = locationActionsService;
    $scope.departmentActionList = departmentActionsService;
    $scope.currentDate = new Date();

}]);
