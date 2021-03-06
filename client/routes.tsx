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

const getDesignHome = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+designer-home/designer-home.component').default)
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

const getPublishWeb = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+publish-web/publish-web.component').default)
    })
}

const getPublishNative = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+publish-native/publish-native.component').default)
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

const getIcons = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+icons/icons.component').default)
    })
}

const getExplore = (nextState: any, callback: any)=> {
    require.ensure([], function (require: any) {
        callback(null, require('./routes/+explore/explore.component').default)
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

        <Route path="design"
               getComponent={getDesignHome}/>
        <Route path="design%C2%A0"
               getComponent={getDesignHome}/>

        <Route path="design/space"
               getComponent={getDesignSpace}/>
        <Route path="design/explore"
               getComponent={getExplore}/>
        <Route path="design/editor/:id"
               getComponent={getDesigner}/>

        <Route path="web/:id"
               getComponent={getPublishWeb}/>
        <Route path="native/:id"
               getComponent={getPublishNative}/>

        <Route path="icons"
               getComponent={getIcons}/>

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