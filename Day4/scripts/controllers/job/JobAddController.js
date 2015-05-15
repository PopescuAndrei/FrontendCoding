/**
 * Created by Andrei on 5/15/2015.
 */
hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, $commonResourcesFactory) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";

        $http({url: $commonResourcesFactory.findAllJobsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };


        /**
         * Persist an job
         * @param addEmployee - job to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: $commonResourcesFactory.addJobUrl, method: 'POST', data: addJob}).
                success(function (data) {
                    $scope.job = data;
                    $location.url('/jobview/' + $scope.job.jobId);
                });
        }
    }]);