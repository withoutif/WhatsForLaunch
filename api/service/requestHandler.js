import rp from 'request-promise';

export const getRequest = async(uri)=> {
    const options = {
        method: 'GET',
        uri: uri,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }
   return rp(options)
    .then((payload) => {
        return payload;
    })
    .catch((err) => {
        return err;
    });
}
