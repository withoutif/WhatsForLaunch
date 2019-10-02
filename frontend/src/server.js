import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import template from './htmlTemplate';

const server = express();
const port = 3000;
const host = '0.0.0.0';

server.use('/assets', express.static('assets'));
server.get('/:offset?/:limit?', async (req, res) => {
        const offset = req.params.offset ? req.params.offset : 0;
        const limit = req.params.limit ? req.params.limit : 5;
        const initialState = {"limit": limit, "offset": offset };
        const appString = renderToString(<App {...initialState} />);

        res.send(template({
            body: appString,
            title: 'What do you want for launch?',
            initialState: JSON.stringify(initialState)
        }));
});

const openPort = server.listen(port, host);

//In case of emergency, stop process (I tried so hard and couldn't come up with a break glass pun
process.on('SIGTERM', () => { openPort.close(() => {
    console.log('closed server');
    process.exit(0);
})});