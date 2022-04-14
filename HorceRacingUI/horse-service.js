(function () {
    'use strict';

    angular.module('horseApp').factory('horseService', function (apiBase, $http) {

        var self = this;

        // Get all horses
        self.getAllHorses = function () {
            return $http.get(apiBase + 'Horse/GetAll')
                .then(function (result) {
                    return result.data;
                });

        }

        // Get horse by id
        self.getHorse = function (horseId) {
            return $http.get(apiBase + 'Horse/Get/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }

        // Create horse
        self.createHorse = function (horse) {
            return $http.post(apiBase + 'Horse/', horse)
                .then(function (result) {
                    return result.data;
                })
        }

        // Update horse - get
        self.editHorse = function (horseId) {
            return $http.get(apiBase + 'Horse/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }

        // Update horse - post
        self.updateHorse = function (horse) {
            return $http.put(apiBase + 'Horse/', horse)
                .then(function (result) {
                    return result.data;
                });
        }

       

        return this;
    });
})();