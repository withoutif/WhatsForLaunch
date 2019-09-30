import { DataTransform } from 'node-json-transform';
import { launchMap, rocketMap, missionMap } from '../models';
import { getLaunches, getRockets } from './spaceXService';
import { mergeObjectByKey } from '../utils/utils';

//these feel out of place
const rocketKey = 'rocket_id';
const launchKey = 'rocket';

export const getMissionPayload = async (offset, limit) => {
   const launches = await getLaunches(offset, limit);
   const mappedLaunches = DataTransform(launches, launchMap).transform();
   
   return Promise.all(mappedLaunches.map(async launch => {
       const rockets = await getRockets();
       const mappedRockets = DataTransform(rockets, rocketMap).transform();
       return mergeObjectByKey(launch, mappedRockets, launchKey, rocketKey);
   })); 
}