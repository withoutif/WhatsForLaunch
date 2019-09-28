import rp from 'request-promise';
import mapJson from 'map-json';
import rocketMap from '../models/rocket.json';

async function getRequest(uri, transform) {
    
    const options = {
        method: 'GET',
        uri: uri,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        //TODO: use passed transform instead (JSON formatting as function param)
        transform: function(body) {
            console.log(body);
          return mapJson.map(body, rocketMap)
        },
        json: true
    }
   return rp(options)
    .then((payload) => {
        return payload;
    })
    .catch((err) => {
        return err;
    });
}

export default getRequest;
