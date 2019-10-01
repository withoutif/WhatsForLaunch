import qs from 'qs';
import { config } from '../config';
import { getRequest } from './requestHandler';

//We'll need this number for pagination
export const getLaunchCount = async () => {
    const uri = config.missionApi.uris.count;
    return getRequest(uri);
};

export const getMissions = async (offset = '', limit = '') => {
    const params = qs.stringify({
        offset,
        limit,
    });
    console.log('got missions');
    const uri = `${config.missionApi.uris.missions}?${params}`;
    return getRequest(uri);
};

export const getSpecificLaunch = async (flightNumber) => {
    const uri = `${config.missionApi.uris.singleLaunch}/${flightNumber}`;
    return getRequest(uri);
};