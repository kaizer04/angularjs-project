app.directive('publishAd', function(){
    return {
        controller: 'PublishAdCtrl',
        restrict: 'E',
        templateUrl: 'templates/publish-ad.html',
        replace: true
    };
});
