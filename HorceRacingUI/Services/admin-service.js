(function () {
    'use strict';

    angular.module('horseApp').factory('adminService', function (apiBase, $http) {

        var self = this;

        //Show genders
        self.showGenders = function () {
            return $http.get(apiBase + 'Admin/ShowGenders')
                .then(function (result) {
                    return result.data;
                });
        }

        return this;
    });
})();