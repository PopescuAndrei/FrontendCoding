/**
 * Created by Andrei on 5/15/2015.
 */
hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'jobService',
    function($scope, $http, $routeParams, $location, jobService) {

        $http({url: 'http://hrapp-zth.rhcloud.com/hrapp/jobs/'+$routeParams.jobid, method: 'GET'}).
            success(function (data) {
                $scope.job = data;
            });

        $scope.back = function() {
            $location.url('/joblist');
        }

    }]);