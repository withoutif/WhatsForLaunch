import qs from 'qs';
import { config } from '../config';
import { getRequest } from '../service/requestHandler';

//for now, we're getting all rockets. But IRL it's not super scalable
export const getRockets = async () => {
    const uri = config.spaceXdata.uris.rocket;
    return getRequest(uri); 
};

//offset and limit are for pagination.
export const getLaunches = async (offset = '', limit = '') => {
   const params = qs.stringify({
       offset,
       limit,
    });
    const uri = `${config.spaceXdata.uris.launch}?${params}`;
    return getRequest(uri);
};

export const getLaunchByFlightNumber = async (flightNumber) => {
    const uri = `${config.spaceXdata.uris.launch}/${flightNumber}`;
    return getRequest(uri);
};