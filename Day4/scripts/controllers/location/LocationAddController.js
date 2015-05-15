hrApp.controller('LocationAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, $commonResourcesFactory) {
        $scope.location = {};
        $scope.requiredErrorMessage = "Please fill out this form!";

        $http({url: $commonResourcesFactory.findAllLocationsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.locations = data;
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.location = {};
        };


        /**
         * Persist an job
         * @param addEmployee - job to be persisted
         */
        $scope.create = function (addLocation) {
            $http({url: $commonResourcesFactory.addLocationUrl, method: 'POST', data: addLocation}).
                success(function (data) {
                    $scope.location = data;
                    $location.url('/locationview/' + $scope.location.locationId);
                });
        }
    }]);