angular.module('Flatometer', [])
    .directive('fmFlat', function() {
        return {
            restrict: 'E',
            template: '<strong>{{flat.address}}</strong>: <i>{{flat.note}}</i>' +
                '<div>' +
                '</div>',
            scope: {
                flat: '=item'
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