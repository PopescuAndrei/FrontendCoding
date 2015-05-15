hrApp.controller('MathController', ['$scope','MathService', function ($scope, MathService) {
    $scope.a = '0';
    $scope.b = '0';
    $scope.op1 = '0';
    $scope.op2 = '0';
    $scope.op3 = '0';
    $scope.op4 = '0';
    $scope.calculate = function () {
        $scope.op1 = MathService.add($scope.a,$scope.b);
        $scope.op2 = MathService.substract($scope.a,$scope.b);
        $scope.op3 = MathService.multiplication($scope.a,$scope.b);
        $scope.op4 = MathService.division($scope.a,$scope.b);
    }

}]);
