app.controller('PublicAdsCtrl', ['$scope', 'adsData', function($scope, adsData) {
    $scope.ready = false;

    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};

        adsData.getPublicAds()
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            });
    };

    loadPublicAds();

//    adsData.getPublicAds()
//        .$promise
//        .then(function (data) {
//            $scope.adsData = data;
//            $scope.ready = true;
//        });

    $scope.$on('categoryClicked', function (event, category) {
        loadPublicAds(filter.getFilterParams());
    });
}]);