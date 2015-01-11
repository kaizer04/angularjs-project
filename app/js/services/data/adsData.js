app.factory('adsData', ['$resource', 'baseServiceUrl', 'userData', 'authentication', function($resource, baseServiceUrl, userData, authentication){
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: {method: 'PUT'}
    });

    var authorizationHeaders = 'Bearer ' + authentication.getUser().access_token;
    var resource = $resource(baseServiceUrl + 'user/ads',{}, {
        update: {
            method: 'PUT',
            headers: {'Authorization': authorizationHeaders}
        }
    });

    function getPublicAds(params){ //pageSize, startPage
        return resource.get(params);
    };

    function editAd (adId, ad) {
        return resource.update({id: adId}, ad);
    };

    function getAdById (adId) {
        return resource.get({id: adId});
    };

    function addAd (ad) {
        return resource.save(ad);
    };

    function deleteAd (adId) {
        return resource.delete({id: adId});
    };

    return {
        getPublicAds: getPublicAds,
        edit: editAd,
        getAdById: getAdById,
        add: addAd,
        delete: deleteAd
    }
}]);
