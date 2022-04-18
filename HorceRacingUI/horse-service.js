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

        // Create horse - post method
        self.createHorse = function (horse) {
            return $http.post(apiBase + 'Horse/Post', horse)
                .then(function (result) {
                    return result.data;
                })
        }       

        // Update horse - put method
        self.updateHorse = function (horse) {
            return $http.put(apiBase + 'Horse/', horse)
                .then(function (result) {
                    return result.data;
                });
        }

        // Save horse - post method
        self.saveHorseData = function (data) {
            return $http({
                method: 'post',
                data: data,
                url: apiBase + 'Horse/Post'
            });
        }       

        // Delete horse - delete method
        self.deleteHorse = function (horseId) {
            return $http.delete(apiBase + 'Horse/Delete/' + horseId)
                .then(function (result) {
                    return result.data;
                });
        }
       

        return this;
    });
})();