describe("Tabs controller test", function() {

    var base;
    var scope = {};

    beforeEach(function() {
        base = angular.element(
            '<ul><li class="active"><a href="/#/">1</a></li>' +
            '<li><a href="/#/add">2</a></li></ul>'
        );
    });

    it('should make first tab active when location is root', inject(function($controller) {
        var location = {path: function() {return '/';}}

        $controller(TabsCtrl, {$scope: scope, $element: base, $location: location});

        expect(angular.element(base.find('li')[0]).hasClass('active')).toBeTruthy();
        expect(angular.element(base.find('li')[1]).hasClass('active')).toBeFalsy();
    }));


    it('should make second tab active when location is /add', inject(function($controller) {
        var location = {path: function() {return '/add';}}

        $controller(TabsCtrl, {$scope: scope, $element: base, $location: location});

        expect(angular.element(base.find('li')[0]).hasClass('active')).toBeFalsy();
        expect(angular.element(base.find('li')[1]).hasClass('active')).toBeTruthy();
    }));


});