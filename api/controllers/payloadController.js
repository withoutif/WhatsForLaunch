import { getMissionPayload } from '../service/missionService';

export const payloadController = async (req, res) => {
    let missions = '';
    const offset = req.params.offset;
    const limit = req.params.limit;
    const count = req.params.count;
    try {
        missions = await getMissionPayload(offset, limit);
    } catch(e) {
        console.log(e);  
    }
    const data = count ? missions.length : missions;
    res.send(data);
};

export default payloadController;