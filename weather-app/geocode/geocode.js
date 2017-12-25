const request = require('request');

module.exports = {
    geocodeAddress: (address, callback) => {
        var encodeAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC9tDdf2--qqJJsVwXmtDIOGPChwSWgwqE&address=${encodeAddress}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                callback('Unable to connect to google');
            } else if (body.status === 'ZERO_RESULTS') {
                callback('Unable to finf address');
            } else if (body.status === 'OK') {
                callback(null, {
                    address: body.results[0].formatted_address,
                    laditide: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    }
}