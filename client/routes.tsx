import * as React from 'react'
import {Route, IndexRoute} from 'react-router'
import Layout from './layout/layout.component'

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

const getComponentsHome = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+components/+home/home.component').default)
    })
}

const getComponentsCategory = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+components/+category/category.component').default)
    })
}

const getComponentsCategoryComponent = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+components/+category/+component/component.component').default)
    })
}

const getComponentsCategoryComponentDemo = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+components/+category/+component/+demo/demo.component').default)
    })
}

const getComponentsCategoryComponentDocument = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+components/+category/+component/+document/document.component').default)
    })
}

const getComponentsCategoryComponentDependence = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+components/+category/+component/+dependence/dependence.component').default)
    })
}

const getComponentsCategoryThirdComponents = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+components/+category/+third-components/third-components.component').default)
    })
}

export default (
    <Route path="/"
           component={Layout}>
        <IndexRoute getComponent={getHome}/>
        <Route path="design-space"
               getComponent={getDesignSpace}/>
        <Route path="designer"
               getComponent={getDesigner}/>
        <Route path="components"
               getComponent={getComponents}>
            <IndexRoute getComponent={getComponentsHome}/>
            <Route path="third-components"
                   getComponent={getComponentsCategory}>
                <Route path=":component"
                       getComponent={getComponentsCategoryThirdComponents}/>
            </Route>
            <Route path=":category"
                   getComponent={getComponentsCategory}>
                <Route path=":component"
                       getComponent={getComponentsCategoryComponent}>
                    <IndexRoute getComponent={getComponentsCategoryComponentDemo}/>
                    <Route path="demo"
                           getComponent={getComponentsCategoryComponentDemo}/>
                    <Route path="document"
                           getComponent={getComponentsCategoryComponentDocument}/>
                    <Route path="dependence"
                           getComponent={getComponentsCategoryComponentDependence}/>
                </Route>
            </Route>
        </Route>
    </Route>
)