import { getLaunchCount } from '../service/missionService';

export const countController = async (req, res) => {
    let count = '';
    try {
        count = await getLaunchCount();
    } catch(e) {
        console.log(e);  
    }
    res.json(count);
};
export default countController;