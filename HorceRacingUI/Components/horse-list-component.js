(function () {
    'use strict';

    // angular.module('horseApp').component('horseList', {

    //     controller: function ($scope, $http) {

    //         $scope.horses = [];
    //         $http.get("https://localhost:44366/api/Horse").then(function (result) {
    //             console.log(result);
    //             //lower camel
    //             $scope.horses = result.data;
    //         })
    //     },

    //     templateUrl: '/App/Templates/horse-list-component.html',

    // });

    angular.module('horseApp').component('horseList', {
        controllerAs: 'vm',
        controller: function (horseService) {
            var vm = this;

            vm.horses = null;


            vm.$onInit = function () {
                horseService.getAllHorses().then(function (horses) {
                    vm.horses = horses;
                    console.log(horses);
                });
            }
        },
        templateUrl: '/Templates/horse-list-component.html'
    })
})();