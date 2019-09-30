import { getMissionPayload } from '../service/missionService';

export const payloadController = async (req, res) => {
    let missions = '';
    const offset = req.params.offset;
    const limit = req.params.limit;
    try {
        missions = await getMissionPayload(offset, limit);
    } catch(e) {
        console.log(e);  
    }
    res.send(missions);
};

export default payloadController;