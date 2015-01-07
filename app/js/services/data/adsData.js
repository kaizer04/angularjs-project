app.factory('adsData', 'baseServiceUrl', ['$resource', function($resource, baseServiceUrl){
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: {method: 'PUT'}
    });

    function getPublicAds(){ //pageSize, startPage
        return resource.query();
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
        gatAdById: gatAdById,
        add: addAd,
        delete: deleteAd
    }
}]);
