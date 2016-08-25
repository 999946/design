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

const getDesignSpace = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+design-space/design-space.component').default)
    })
}

const getDesigner = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+designer/designer.component').default)
    })
}

const getComponents = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+components/components.component').default)
    })
}

export default [
    <Route path="/"
           key="home"
           getComponent={getHome}/>,
    <Route path="/design-space"
           key="design-space"
           getComponent={getDesignSpace}/>,
    <Route path="/designer"
           key="designer"
           getComponent={getDesigner}/>,
    <Route path="/components"
           key="components"
           getComponent={getComponents}/>
]