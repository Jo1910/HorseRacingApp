(function () {
    'use strict';

    angular.module('horseApp').factory('colourService', function (apiBase, $http) {
        var self = this;

        // Get all colours
        self.getAllColours = function () {
            return $http.get(apiBase + 'DropDown/GetColours')
                .then(function (result) {
                    return result.data;
                });
        }
        return this;
    });
})();