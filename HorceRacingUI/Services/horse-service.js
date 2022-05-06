(function () {
    'use strict';

    angular.module('horseApp').factory('horseService', function (apiBase, $http) {

        var self = this;

        // Get all horses - get method
        self.getAllHorses = function () {
            return $http.get(apiBase + 'Horse/GetAll')
                .then(function (result) {
                    return result.data;
                });
        }

        // Get horse by id - get method
        self.getHorse = function (horseId) {
            return $http.get(apiBase + 'Horse/Get/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }

        self.getEditHorse = function (horseId) {
            return $http.get(apiBase + 'Horse/GetEdit/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }

        self.getRateHorse = function (horseId) {
            return $http.get(apiBase + '/Horse/GetToRate/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }

        // Create horse - post method
        self.createHorse = function (horse) {
            return $http.post(apiBase + 'Horse/Post', horse)
                .then(function (result) {
                    return result.data;
                });
        }       


        // Update horse - put method
        self.updateHorse = function (horse) {
            return $http.put(apiBase + 'Horse/Put/?id='+horse.Id, horse)
                .then(function (result) {
                    return result.data;
                });
        }


        // Delete horse - delete method
        self.deleteHorse = function (horseId) {
            return $http.delete(apiBase + 'Horse/Delete/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }

        // Create rating
        self.createRating = function (rating) {
            return $http.post(apiBase + 'Horse/PostRating', rating)
                .then(function (result) {
                    return result.data;
                });
        }

        // Get ratings
        self.getLastRating = function (horseId) {
            return $http.get(apiBase + 'Horse/GetRatings/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }

        // Get horse to rate
        self.getHorseToRate = function (horseId) {
            return $http.get(apiBase + 'Horse/GetHorseToRate/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }
       

        return this;
    });
})();