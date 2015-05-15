hrApp.controller('LocationViewController', ['$scope', '$http', '$routeParams', '$location', 'jobService',
    function($scope, $http, $routeParams, $location, jobService) {

        $http({url: 'http://hrapp-zth.rhcloud.com/hrapp/locations/'+$routeParams.locationid, method: 'GET'}).
            success(function (data) {
                $scope.location = data;
            });

        $scope.back = function() {
            $location.url('/locationslist');
        }

    }]);