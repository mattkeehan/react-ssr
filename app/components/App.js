import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import List from './List'
import Home from './Home'
export default function App(props) {

    const { wordPrediction } = props;

    return (
        <div>
            Your SSR React Router Node App initialised with data!
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/word" exact render={() => (<Redirect to="/word/rwan" />)} />
                <Route path="/word/" exact render={() => (<Redirect to="/word/rwan" />)} />
                <Route path="/word/:wordPart" render={(location) => (<List wordPrediction={wordPrediction} location={location} />)} />
            </Switch>
        </div>
    )
};