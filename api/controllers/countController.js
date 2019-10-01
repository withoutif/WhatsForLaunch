import { getLaunchCount } from '../service/missionService';

export const countController = async (req, res) => {
    try {
        const count = await getLaunchCount();
        res.json(count);
    } catch(e) {
        console.log(e);
        throw new Error(e);
    }

};
export default countController;