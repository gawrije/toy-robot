import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { Game } from './Game';
import { BrowserRouter, Route } from "react-router-dom";


const Main = props => <BrowserRouter>
    <div>
        <Route path="/" exact component={Game} />
    </div>
</BrowserRouter>

ReactDOM.render(<Main />, document.getElementById('root'));

