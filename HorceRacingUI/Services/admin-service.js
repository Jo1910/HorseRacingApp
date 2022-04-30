(function () {
    'use strict';

    angular.module('horseApp').factory('adminService', function (apiBase, $http) {

        var self = this;

        // Create gender
        self.createGender = function () {
            return $http.post(apiBase + 'Admin/Post', gender)
                .then(function (result) {
                    console.log(result)
                    return result.data;
                });
        }

        // Show genders
        self.showGenders = function () {
            return $http.get(apiBase + 'Admin/ShowGenders')
                .then(function (result) {
                    return result.data;
                });
        }

        // Get gender
        self.getGender = function (genderId) {
            return $http.get(apiBase + 'Admin/GetGender/' + genderId)
                .then(function (result) {
                    return result.data;
                });
        }

        return this;
    });
})();