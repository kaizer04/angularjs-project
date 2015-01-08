app.directive('loggedInSidebar', function(){
    return {
        controller: 'LoggedInSidebarCtrl',
        restrict: 'E',
        templateUrl: 'templates/public/logged-in-sidebar.html',
        replace: true
    };
});