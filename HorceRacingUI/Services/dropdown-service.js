(function () {
    'use strict';

    angular.module('horseApp').factory('dropdownService', function (apiBase, $http) {

        var self = this;

        // Get all dams
        self.getAllDams = function () {
            return $http.get(apiBase + 'DropDown/GetDams')
                .then(function (result) {
                    return result.data;
                });
        }

        //Get all sires
        self.getAllSires = function () {
            return $http.get(apiBase + 'DropDown/GetSires')
                .then(function (result) {
                    return result.data;
                });
        }

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
        self.getAllAcquisitions = function () {
            return $http.get(apiBase + 'Dropdown/GetAcquisitions')
                .then(function (result) {
                    return result.data;
                });
        }

        // Get all sexes
        self.getAllSexes = function () {
            return $http.get(apiBase + 'Dropdown/GetSexes')
                .then(function (result) {
                    return result.data;
                });
        }

        // Get all contacts 
        self.getAllContacts = function () {
            return $http.get(apiBase + 'Dropdown/GetContacts')
                .then(function (result) {
                    return result.data;
                });
        }

        // Get all ratings
        self.getAllRatings = function () {
            return $http.get(apiBase + 'Dropdown/GetRatings')
                .then(function (result) {
                    return result.data;
                });
        }

        return this;
    });
})();

