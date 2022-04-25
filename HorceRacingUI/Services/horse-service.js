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
                })
        }

        // Create horse - post method
        self.createHorse = function (horse) {
            return $http.post(apiBase + 'Horse/Post', horse)
                .then(function (result) {
                    return result.data;
                })
        }       

        //self.createHorse = function (horse) {
        //    return $http.post(apiBase + 'Horse/Post', horse)
        //        .success(function (result) {
        //            return result.data;
        //        })
        //        .error(function (response) {
        //            console.log("Saving failed " + JSON.stringify(response));
        //        });
        //}

        // Update horse - put method
        self.updateHorse = function (horse) {
            console.log(horse);
            return $http.put(apiBase + 'Horse/Put/?id='+horse.Id, horse)
                .then(function (result) {
                    return result.data;
                });
        }



        //// Save horse - post method
        //self.saveHorseData = function (data) {
        //    return $http({
        //        method: 'post',
        //        data: data,
        //        url: apiBase + 'Horse/Post'
        //    });
        //}       

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