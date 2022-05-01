(function () {
    'use strict';

    angular.module('horseApp').factory('adminService', function (apiBase, $http) {

        var self = this;

        // Create gender
        self.createGender = function (gender) {
            return $http.post(apiBase + 'Admin/Post', gender)
                .then(function (result) {
                    //console.log(result);
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

        // Get edit gender
        self.getEditGender = function (genderId) {
            return $http.get(apiBase + 'Admin/GetEdit/' + genderId)
                .then(function (result) {
                    return result.data;
                });
        }

        // Update gender
        self.updateGender = function (gender) {
            return $http.put(apiBase + '/Admin/Put/?id=' + gender.Id, gender)
                .then(function (result) {
                    return result.data;
                });
        }

        // Delete gender
        self.deleteGender = function (genderId) {
            return $http.delete(apiBase + 'Admin/Delete/' + genderId)
                .then(function (result) {
                    return result.data;
                });
        }

        return this;
    });
})();