import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import template from './htmlTemplate';

const server = express();
const port = 3000;
const host = '0.0.0.0';

const config = {
        uris: {
            missions: "http://localhost:3001/missions",
            count: "http://localhost:3001/count",
            singleLaunch: "http://localhost:3001/missions/singleLaunch"
        }
};

server.use('/assets', express.static('assets'));
server.get('/:offset?/:limit?', async (req, res) => {
        const offset = req.params.offset ? req.params.offset : 0;
        const limit = req.params.limit ? req.params.limit : 5;
        const initialState = {"limit": limit, "offset": offset, "config": config};
        const appString = renderToString(<App {...initialState} />);

        res.send(template({
            body: appString,
            title: 'What do you want for launch?',
            initialState: JSON.stringify(initialState)
        }));
});

server.listen(port, host);

