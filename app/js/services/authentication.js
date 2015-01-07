app.factory('authentication', function(){
    var key = 'user';

    function saveUserData (data) {
        localStorage.setItem(key, angular.toJson(data));
    };

    function getUserData () {
        return angular.fromJson(localStorage.getItem(key));
    };

    return {
        saveUser: saveUserData,
        getUser: getUserData
    }
});