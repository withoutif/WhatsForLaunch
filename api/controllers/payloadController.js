import payloadBuilder from '../utils/payloadBuilder';

export const payloadController = async (req, res) => {
    let rockets = '';
    try {
        rockets = await payloadBuilder();
    } catch(e) {
        console.log(e);  
    }
    res.send(rockets);
};

export default payloadController;