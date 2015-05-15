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
            .when('/employeeslist', {
                templateUrl: 'views/employeelist.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeview/:employeeid', {
                templateUrl: 'views/employeeview.html',
                controller: 'EmployeeViewController'
            })
            .when('/jobslist', {
                templateUrl: 'views/joblist.html',
                controller: 'JobListController'
            })
            .when('/jobview/:jobid', {
                templateUrl: 'views/jobview.html',
                controller: 'JobViewController'
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
            }).when('/employeeadd', {
                templateUrl: 'views/employeeadd.html',
                controller: 'EmployeeAddController'
            }).when('/employeeedit/:employeeid', {
                templateUrl: 'views/employeeedit.html',
                controller: 'EmployeeEditController'
            }).when('/jobadd', {
                templateUrl: 'views/jobadd.html',
                controller: 'JobAddController'
            }).when('/jobedit/:jobid', {
                templateUrl: 'views/jobedit.html',
                controller: 'JobEditController'
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