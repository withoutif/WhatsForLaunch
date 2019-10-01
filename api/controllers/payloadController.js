import { getMissionPayload, getSingleLaunch } from '../service/missionService';

export const payloadController = async (req, res) => {
    const offset = req.params.offset;
    const limit = req.params.limit;
    try {
        const missions = await getMissionPayload(offset, limit);
        res.send(missions);
    } catch(e) {
        Console.log(e);
        throw new Error(e);
    }

};

export const singleFlightController = async (req, res) => {
    const flightNumber = req.params.flightNumber;
    try {
        const launch = await getSingleLaunch(flightNumber);
        res.send(launch);
    } catch(e) {
        Console.log(e);
        throw new Error(e);
    }

};