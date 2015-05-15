hrApp.controller('RequestController', ['$scope', '$http', function($scope,$http){

    $scope.jobList = [];
    $scope.jobList = $http.get('http://demo.teamnet.ro:8282/hrapp/jobs').success(
        (function(data, status, headers, config) {
            $scope.jobList = data;
        })).error(
        function(data,status,headers,config){
            alert('Can\'t connect to the server');
        }
    );

}]);
