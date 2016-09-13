///<reference path="../typings/index.d.ts" />

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createHistory} from 'history'
import {Router, useRouterHistory} from 'react-router'
import {Provider} from 'mobx-react'
import * as config from '../config'

import Routes from './routes'

import './main.browser.scss'
import 'font-awesome/css/font-awesome.min.css'

import Application from '../store/application'

export const browserHistory = useRouterHistory(createHistory)({
    basename: config.routerBasename
})

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