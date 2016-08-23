import * as React from 'react'
import {Route, IndexRoute} from 'react-router'

declare var require: any

/**
 * nodejs mock require.ensure
 */
if (typeof(require.ensure) !== 'function') {
    require.ensure = (modules: Array<string>, callback: Function) => {
        callback(require)
    }
}

const getHome = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+home/home.component').default)
    })
}

export default [
    <Route path="/"
           key="home"
           getComponent={getHome}/>
]