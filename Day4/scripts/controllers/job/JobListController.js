hrApp.controller('JobListController', ['$scope', '$http', '$location','$route', 'commonResourcesFactory',
    function ($scope, $http, $location,$route, commonResourcesFactory) {

        $scope.jobs = [];

        $http({url: commonResourcesFactory.findAllJobsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.jobs = data;
            });


        $scope.viewJob = function (jobId) {
            $location.url('/jobview/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobedit/'+jobId);
        };

        $scope.deleteJob = function (jobId) {
            $http({url: commonResourcesFactory.deleteJobUrl + jobId, method: 'DELETE'}).
                success(function (data) {
                    $route.reload();
                });
        }
    }]);