app.controller('HomeCtrl', ['$scope', 'authentication', 'userData', function($scope, authentication, userData){
    $scope.pageTitle = 'Home';
    $scope.isLoggedIn = authentication.isLoggedIn();

    $scope.logout = function() {
        userData.logout().then(function() {
            $location.path('/');
        })
    }
}]);