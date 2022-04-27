(function () {
    'use strict';

    angular.module('horseApp').component('navbar', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.openMenu = function () {
                document.getElementById('res-side-menu').style.width = '250px';
                document.getElementById('main').style.marginLeft = '250px';
            }

            vm.closeMenu = function () {
                document.getElementById('res-side-menu').style.width = '0';
                document.getElementById('main').style.marginLeft = '0';
            }
        },

        templateUrl: '/Templates/navbar-component.html'
    })
})();