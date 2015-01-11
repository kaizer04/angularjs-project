app.controller('HomeCtrl', ['$scope', 'authentication', 'userData', function($scope, authentication, userData){
    $scope.pageTitle = 'Home';
    $scope.isLoggedIn = authentication.isLoggedIn();

    $scope.logout = function() {
        userData.logout().then(function() {
//            notifier.success('Successful logout!');
//            if ($scope.user) {
//                $scope.user.email = '';
//                $scope.user.username = '';
//                $scope.user.password = '';
//            }

            $location.path('/');
        })
    }
}]);