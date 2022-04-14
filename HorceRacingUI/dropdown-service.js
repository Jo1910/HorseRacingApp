(function () {
    'use strict';

    angular.module('horseApp').factory('dropdownService', function (apiBase, $http) {

        var self = this;

        // Get all colours
        self.getAllColours = function () {
            return $http.get(apiBase + 'DropDown/GetColours')
                .then(function (result) {
                    return result.data;
                });
        }

        // Get all categories
        self.getAllCategories = function () {
            return $http.get(apiBase + 'DropDown/GetCategories')
                .then(function (result) {
                    return result.data;
                });
        }

        // Get genders
        self.getAllGenders = function () {
            return $http.get(apiBase + 'Dropdown/GetGenders')
                .then(function (result) {
                    return result.data;
                })
        }

        // Get all countries
        self.getAllCountries = function () {
            return $http.get(apiBase + 'Dropdown/GetCountries')
                .then(function (result) {
                    return result.data;
                });
        }

        // Get all acqusitions
        self.getAllAcqusitions = function () {
            return $http.get(apiBase + 'Dropdown/GetAcqusitions')
                .then(function (result) {
                    return result.data;
                });
        }

        return this;
    });
})();

