hrApp.factory('commonResourcesFactory', function () {
        var baseUrl = "http://hrapp-zth.rhcloud.com/hrapp/";
        return {
           findAllDepartmentsUrl : baseUrl + "departments",
           findAllEmployeesUrl : baseUrl + "employees",
           findAllJobsUrl : baseUrl + "jobs",
           findOneDepartmentUrl : baseUrl + "departments/",
           findOneEmployeeUrl : baseUrl + "employees/",
           findOneJobUrl : baseUrl + "jobs/",
           deleteDepartmentUrl : baseUrl + "departments/",
           deleteEmployeeUrl : baseUrl + "employees/",
           deleteJobUrl : baseUrl + "jobs/",
           addDepartmentUrl : baseUrl + "departments/",
           addEmployeeUrl : baseUrl + "employees/",
           addJobUrl : baseUrl + "jobs/",
           editDepartmentUrl : baseUrl + "departments/",
           editEmployeeUrl : baseUrl + "employees/",
           editJobUrl : baseUrl + "jobs/",
           addLocationUrl : baseUrl + "locations/",
           editLocationUrl : baseUrl + "locations/",
           deleteLocationUrl: baseUrl + "locations/",
           findAllLocationsUrl: baseUrl + "locations",
           findOneLocationUrl: baseUrl + "locations/"

        };
    }
);