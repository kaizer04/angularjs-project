app.controller('RegisterCtrl', ['$scope', 'townsData', 'userData', function($scope, townsData, userData) {
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.register = function (user) {
        userData.register(user);
    }

//    $scope.register = function(user) {
//        userData.register(user).then(function() {
//            notifier.success('User account created. Please login.');
//        })
//    }
}]);
