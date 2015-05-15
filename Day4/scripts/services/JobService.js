/**
 * Created by Andrei on 5/14/2015.
 */
hrApp.service('jobService', ['$http', 'commonResourcesFactory', function ($http, commonResourcesFactory) {
        return {
            findById: function (id) {
                $http.get(commonResourcesFactory.findOneJobUrl + id)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        return {
                            "jobId": "MG_M",
                            "jobTitle": "President",
                            "maxSalary": 1000,
                            "minSalary": 2000

                        };
                    })
            }
        }
    }]
);