import mapJson from 'map-json'
import getRequest from '../service/requestHandler';
import rocketMap from '../models/rocket.json';

//TODO: make launch call
export default async function getRockets() {
    //TODO: move uris to config. Do something about rocket name param
    const uri = 'https://api.spacexdata.com/v3/rockets/falcon9';
    return getRequest(uri, (body) => mapJson.map(body, rocketMap));
}

