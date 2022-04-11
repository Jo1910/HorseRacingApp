(function () {
    'use strict';

    angular.module('horseApp').factory('categoryService', function (apiBase, $http) {
        var self = this;

        // Get all categories
        self.getAllCategories = function () {
            return $http.get(apiBase + 'DropDown/GetCategories')
                .then(function (result) {
                    return result.data;
                });
        }
        return this;
    });
})();