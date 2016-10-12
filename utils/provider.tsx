import * as React from 'react'
import myKernel from './kernel'
import {useRouterHistory} from 'react-router'
import {Provider} from 'mobx-react'
import {createHistory} from 'history'
import Event from '../store/event'
import * as config from '../config'

import ApplicationStore from '../store/application'
import UserStore from '../store/user'

import ApplicationAction from '../action/application'
import UserAction from '../action/user'

// 创建 action 和 store 的实例
const applicationStoreInstance = new ApplicationStore()
const userStoreInstance = new UserStore()

const applicationActionInstance = new ApplicationAction()
const userActionInstance = new UserAction()

/**
 * 数据流依赖注入
 */
myKernel.bind<ApplicationStore>(ApplicationStore).toConstantValue(applicationStoreInstance)
myKernel.bind<UserStore>(UserStore).toConstantValue(userStoreInstance)

myKernel.bind<ApplicationAction>(ApplicationAction).toConstantValue(applicationActionInstance)
myKernel.bind<UserAction>(UserAction).toConstantValue(userActionInstance)

/**
 * 生成 Provider
 */
export const browserHistory = useRouterHistory(createHistory)({
    basename: config.routerBasename
})

const eventInstance = new Event()
export {eventInstance as event}

export {applicationStoreInstance as application}

export class ProviderContainer extends React.Component<any, any> {
    render() {
        return (
            <Provider application={applicationStoreInstance}
                      applicationAction={applicationActionInstance}
                      user={userStoreInstance}
                      userAction={userActionInstance}
                      event={eventInstance}>
                {this.props.children}
            </Provider>
        )
    }
}