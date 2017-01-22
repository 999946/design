///<reference path="../typings/index.d.ts" />

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {ProviderContainer, browserHistory} from '../utils/provider'
import {Router} from 'react-router'
import Routes from './routes'

import './main.browser.scss'
import 'font-awesome/css/font-awesome.min.css'

import 'es6-promise'
import 'isomorphic-fetch'

const MainRouter = (
    <Router history={browserHistory}>
        {Routes}
    </Router>
)

const MainProvider = (
    <ProviderContainer>
        {MainRouter}
    </ProviderContainer>
)

ReactDOM.render(MainProvider, document.getElementById('react-dom'))