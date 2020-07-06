import { renderToString } from 'react-dom/server'
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from './routes';
import renderFullPage from './renderFullPage';
import getWord from '../services/getWord';
import App from '../components/App';

const matchedPage = url => routes.reduce((acc, route) => matchPath(url, { path: route, exact: true }) || acc, null);

export default function router(req, res) {

    const match = matchedPage(req.url);

    if (!match) {
        res.status(404).send('page not found');
        return;
    }

    const search = req.params[0].split('/').reduceRight(a => a);

    return getWord.getWord(search)
        .then(resp => {
            console.log(resp.data);
            console.log('got word..');
            const wordPrediction = resp.data;

            const context = {}
            
            const html = renderToString(
                <StaticRouter context={context} location={req.url} >
                    <App wordPrediction={wordPrediction}/>
                </StaticRouter>
            )

            res.status(200).send(renderFullPage(html, wordPrediction));
        })
        .catch(err => res.status(404).send(`${err}: Oh No! I cannot find the telepathic wordPrediction... maybe they knew we were coming!`));
};