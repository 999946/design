///<reference path="../typings/index.d.ts" />

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'

import Routes from './routes'

import './main.browser.scss'

const MainRouter = (
    <Router history={browserHistory}>
        {Routes}
    </Router>
)

ReactDOM.render(MainRouter, document.getElementById('react-dom'))