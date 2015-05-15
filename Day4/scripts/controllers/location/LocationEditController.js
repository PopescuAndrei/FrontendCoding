hrApp.controller('LocationEditController', ['$scope', '$http', '$location','$routeParams', 'commonResourcesFactory',
    function ($scope, $http, $location,$routeParams, $commonResourcesFactory) {
        $scope.location = {};
        $scope.requiredErrorMessage = "Please fill out this form!";

        $http({url: $commonResourcesFactory.findOneLocationUrl + $routeParams.locationid, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.location = data;
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.location = {};
        };

        $scope.create = function (addLocation) {
            $http({url: $commonResourcesFactory.editLocationUrl + $routeParams.locationid, method: 'PUT', data: addLocation}).
                success(function (data) {
                    $scope.location = data;
                    $location.url('/locationedit/' + $scope.location.locationId);
                });
        }
    }]);