angular.module('service')
    .factory('UserService', UserService);

function UserService($http, $q,$localStorage) {
    return {
        autoComplete: autoComplete
    }

    function autoComplete() {
        var deferred = $q.defer();
        // var url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + input;
        // url += "&types=geocode&components=country:GB&key=AIzaSyAdZGZ1Dx37vya-8IGUFcRl4aaHBpPcA24";

        $http.get("./data/data.json").then(function(response) {
            deferred.resolve(response);
            $localStorage.user=response.data.users;
            // $localStorage.user.push({"username":123});
            // console.log($localStorage.user);
        }, function(err) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
}
