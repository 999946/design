import * as React from 'react'
import myKernel from './kernel'
import { useRouterHistory } from 'react-router'
import { Provider } from 'mobx-react'
import { createHistory } from 'history'
import Event from '../store/event'
import * as config from '../config'

import Fetch from './fetch'

import ApplicationStore from '../store/application'
import UserStore from '../store/user'
import TiebaStore from '../store/tieba'
import EditorStore from '../store/editor'

import ApplicationAction from '../action/application'
import UserAction from '../action/user'
import TiebaAction from '../action/tieba'
import EditorAction from '../action/editor'

const fetchInstance = new Fetch()

// 创建 action 和 store 的实例
const applicationStoreInstance = new ApplicationStore()
const userStoreInstance = new UserStore()
const tiebaStoreInstance = new TiebaStore()
const editorStoreInstance = new EditorStore()

const applicationActionInstance = new ApplicationAction()
const userActionInstance = new UserAction()
const tiebaActionInstance = new TiebaAction()
const editorActionInstance = new EditorAction()

/**
 * 数据流依赖注入
 */
myKernel.bind<Fetch>(Fetch).toConstantValue(fetchInstance)

myKernel.bind<ApplicationStore>(ApplicationStore).toConstantValue(applicationStoreInstance)
myKernel.bind<UserStore>(UserStore).toConstantValue(userStoreInstance)
myKernel.bind<TiebaStore>(TiebaStore).toConstantValue(tiebaStoreInstance)
myKernel.bind<EditorStore>(EditorStore).toConstantValue(editorStoreInstance)

myKernel.bind<ApplicationAction>(ApplicationAction).toConstantValue(applicationActionInstance)
myKernel.bind<UserAction>(UserAction).toConstantValue(userActionInstance)
myKernel.bind<TiebaAction>(TiebaAction).toConstantValue(tiebaActionInstance)
myKernel.bind<EditorAction>(EditorAction).toConstantValue(editorActionInstance)

/**
 * 生成 Provider
 */
export const browserHistory = useRouterHistory(createHistory)({
    basename: config.routerBasename
})

const eventInstance = new Event()
export { eventInstance as event }

export { applicationStoreInstance as application }

export class ProviderContainer extends React.Component<any, any> {
    render() {
        return (
            <Provider application={applicationStoreInstance}
                applicationAction={applicationActionInstance}
                user={userStoreInstance}
                userAction={userActionInstance}
                tieba={tiebaStoreInstance}
                tiebaAction={tiebaActionInstance}
                editor={editorStoreInstance}
                editorAction={editorActionInstance}
                event={eventInstance}>
                {this.props.children}
            </Provider>
        )
    }
}