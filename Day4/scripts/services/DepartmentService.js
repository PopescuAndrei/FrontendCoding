/**
 * Created by Andrei on 5/15/2015.
 */
hrApp.service('departmentService', ['$http', 'commonResourcesFactory', function ($http, commonResourcesFactory) {
        return {
            findById: function (id) {
                $http.get(commonResourcesFactory.findOneDepartmentUrl + id)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        return {
                            "departmentId": 100,
                            "departmentName": "Finance",
                            "locationId":1700
                        };
                    })
            }
        }
    }]
);