///<reference path="../typings/index.d.ts" />

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {observer, Provider} from 'mobx-react'

import Routes from './routes'

import './main.browser.scss'
import 'font-awesome/css/font-awesome.min.css'

import Application from './store/application'

const MainRouter = (
    <Router history={browserHistory}>
        {Routes}
    </Router>
)

const MainProvider = (
    <Provider application={new Application()}>
        {MainRouter}
    </Provider>
)

ReactDOM.render(MainProvider, document.getElementById('react-dom'))