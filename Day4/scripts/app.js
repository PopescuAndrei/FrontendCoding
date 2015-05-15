var hrApp = angular.module('hrApp', ['ngRoute']);
hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/numbers', {
                redirectTo: '/math'
            })
            .when('/math', {
                templateUrl: 'views/demo/math.html',
                controller: 'MathController'
            })
            .when('/user', {
                templateUrl: 'views/demo/user.html',
                controller: 'UserController'
            }).when('/colors', {
                templateUrl: 'views/demo/colors.html',
                controller: 'Colors'
            }).when('/forms', {
                templateUrl: 'views/demo/form.html',
                controller: 'Form'
            })
            .when('/employeeslist', {
                templateUrl: 'views/employees/employeelist.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeview/:employeeid', {
                templateUrl: 'views/employees/employeeview.html',
                controller: 'EmployeeViewController'
            })
            .when('/employeedelete/:employeeid', {
                templateUrl: 'views/employees/employeelist.html',
                controller: 'EmployeeListController'
            }).when('/employeeadd', {
                templateUrl: 'views/employees/employeeadd.html',
                controller: 'EmployeeAddController'
            }).when('/employeeedit/:employeeid', {
                templateUrl: 'views/employees/employeeedit.html',
                controller: 'EmployeeEditController'
            })
            .when('/jobslist', {
                templateUrl: 'views/jobs/joblist.html',
                controller: 'JobListController'
            })
            .when('/jobview/:jobid', {
                templateUrl: 'views/jobs/jobview.html',
                controller: 'JobViewController'
            }).when('/jobadd', {
                templateUrl: 'views/jobs/jobadd.html',
                controller: 'JobAddController'
            }).when('/jobedit/:jobid', {
                templateUrl: 'views/jobs/jobedit.html',
                controller: 'JobEditController'
            })
            .when('/jobdelete/:jobid', {
                templateUrl: 'views/jobs/joblist.html',
                controller: 'JobListController'
            })
            .when('/jobslist', {
                templateUrl: 'views/jobs/joblist.html',
                controller: 'JobListController'
            })
            .when('/locationview/:locationid', {
                templateUrl: 'views/locations/locationview.html',
                controller: 'LocationViewController'
            }).when('/locationadd', {
                templateUrl: 'views/locations/locationadd.html',
                controller: 'LocationAddController'
            }).when('/locationedit/:locationid', {
                templateUrl: 'views/locations/locationedit.html',
                controller: 'LocationEditController'
            })
            .when('/locationdelete/:locationid', {
                templateUrl: 'views/locations/locationlist.html',
                controller: 'LocationListController'
            })
            .when('/locationslist', {
                templateUrl: 'views/locations/locationlist.html',
                controller: 'LocationListController'
            })
            .when('/departmentview/:departmentid', {
                templateUrl: 'views/departments/departmentview.html',
                controller: 'DepartmentViewController'
            }).when('/departmentadd', {
                templateUrl: 'views/departments/departmentadd.html',
                controller: 'DepartmentAddController'
            }).when('/departmentedit/:departmentid', {
                templateUrl: 'views/departments/departmentedit.html',
                controller: 'DepartmentEditController'
            })
            .when('/departmentdelete/:departmentid', {
                templateUrl: 'views/departments/departmentlist.html',
                controller: 'DepartmentListController'
            })
            .when('/departmentslist', {
                templateUrl: 'views/departments/departmentlist.html',
                controller: 'DepartmentListController'
            })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController'
            });
    }])
    .
    run(['$rootScope',
        function ($rootScope) {

        }
    ]);