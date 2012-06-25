angular.module('Flatometer', []).config(function($routeProvider) {
        $routeProvider.when('/', {templateUrl: './js/templates/flats.html'});
        $routeProvider.when('/add', {templateUrl: './js/templates/add.html'});
        $routeProvider.when('/settings', {templateUrl: './js/templates/settings.html'});
    })
    .directive('fmFlat', function() {
        return {
            restrict: 'E',
            template: '<strong>{{flat.address}}</strong>: <i>{{flat.note}}</i>' +
                ' <a ng-click="remove()">X</a>' +
                '<div>' +
                '</div>',
            scope: {
                flat: '=',
                remove: '&'
            }
        }
    })


var FlatsCtl = function($scope) {

    $scope.flats = [
        {
            address: "Eerste Weteringplantsoen 8, Amsterdam",
            note: "That's where WLL take place"
        },
        {
            address: "Herengracht 83, Amsterdam",
            note: "Probably very fancy building"
        }
    ];

    return this;
};