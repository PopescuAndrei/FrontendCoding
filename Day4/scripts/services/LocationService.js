/**
 * Created by Andrei on 5/15/2015.
 */

hrApp.service('locationService', ['$http', 'commonResourcesFactory', function ($http, commonResourcesFactory) {
        return {
            findById: function (id) {
                $http.get(commonResourcesFactory.findOneLocationUrl + id)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        return {
                            "city": "Roma",
                            "locationId": 1000,
                            "postalCode": "00989",
                            "stateProvince": null,
                            "streetAddress": "1297 Via Cola di Rie"

                        };
                    })
            }
        }
    }]
);