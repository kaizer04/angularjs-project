app.controller('PublicAdsCtrl', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
    $scope.ready = false;

    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};

        adsData.getPublicAds(filterParams)
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