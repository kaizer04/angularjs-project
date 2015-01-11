app.controller('LoginCtrl', ['$scope', '$location', 'userData', function($scope, $location, userData) {
    $scope.login = function (user) {
        userData.login(user)
            .$promise
            .then(function (data) {
                $location.path('/');
            });
    }


//    $scope.login = function(user, loginForm) {
//        if (loginForm.$valid) {
//            userData.login(user).then(function(success) {
//                if (success) {
//                    notifier.success('Successful login!');
//                    $location.path('/');
//                }
//                else {
//                    notifier.error('Username/Password combination is not valid!');
//                }
//            });
//        }
//        else {
//            notifier.error('Username and password are required fields!')
//        }
//    }

}]);