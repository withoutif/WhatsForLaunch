import express from 'express';
import React from 'react';
import transform from 'lodash.transform';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import template from './htmlTemplate';
import { getLaunchCount, getMissions } from '../services/missionDataService';

const server = express();
const port = 3000;
const host = '0.0.0.0';

server.use('/assets', express.static('assets'));
server.get('/:offset?/:limit?', async (req, res) => {
        const offset = req.params.offset ? req.params.offset : 0;
        //const countInit = await getLaunchCount();
        const limit = req.params.limit ? req.params.limit : 5;
        const missionsInit = await getMissions(offset, limit);
        const missionArray = transform(missionsInit[0], function(result, value, key) {
        if (key != "payloads" && key != "rocket") {
            (result[key] || (result[key] = [])).push(value);
        }
    }, []);
        console.log(missionArray);
        const initialState = {"missions": missionArray};//{ missionsInit, countInit, limit, offset };
        const appString = renderToString(<App {...initialState} />);
        res.send(template({
            body: appString,
            title: 'What do you want for launch?',
            initialState: JSON.stringify(initialState)
        }));
});

server.listen(port, host);

