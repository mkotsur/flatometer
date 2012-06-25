angular.module('Flatometer', []).config(function($routeProvider) {
        $routeProvider.when('/', {templateUrl: './js/templates/flats.html'});
        $routeProvider.when('/add', {templateUrl: './js/templates/add.html'});
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
    .directive('fmTabs', function() {
        return {
            restrict: 'E',
            template: '<ul class="nav nav-tabs">' +
                '<li class="active"><a href="/#/">My Flats</a></li>' +
                '<li><a href="/#/add">Add a flat</a></li>' +
                '</ul>',
            link: function postLink(scope, element, attrs) {
                element.find('a').bind('click', function(a) {
                    element.find('li').removeClass('active');
                    angular.element(a.target).parent().addClass('active');
                });
            },
            controller: TabsCtrl
        }
    });


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

var TabsCtrl = function($scope, $element, $location) {
    angular.forEach($element.find('li'), function(li) {
        li = angular.element(li);
        if (li.find('a').attr('href') == '/#' + $location.path()) {
            li.addClass('active');
        } else {
            li.removeClass('active');
        }
    })
}