import rp from 'request-promise';

export const getRequest = async(uri)=> {
    const options = {
        method: 'GET',
        uri: uri,
        json: true
    };
   return rp(options)
    .then((payload) => {
       console.log('hit the request');
        return payload;
    })
    .catch((err) => {
        return err;
    });
};
