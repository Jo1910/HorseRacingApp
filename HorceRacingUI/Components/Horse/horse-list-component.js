(function () {
    'use strict';
    

    angular.module('horseApp').component('horseList', {
        controllerAs: 'vm',
        controller: function (horseService, $filter) {
            var vm = this;

            vm.horses = null;

            vm.$onInit = function () {
                horseService.getAllHorses().then(function (horses) {
                    vm.horses = horses;
                });
            }

        },
        templateUrl: '/Templates/Horse/horse-list-component.html'
    });
})();