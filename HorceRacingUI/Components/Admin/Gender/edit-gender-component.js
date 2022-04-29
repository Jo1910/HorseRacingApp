(function () {
    'use strict';

    angular.module("horseApp").component('editGender', {
        controllerAs: 'vm',
        controller: function () {

            var vm = this;
        },

        templateUrl: '/Templates/Admin/Gender/edit-gender-component.js'
    });
})();