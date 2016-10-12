import {injectable} from 'inversify'
import {action} from 'mobx'
import ApplicationStore from '../store/application'
import {lazyInject} from '../utils/kernel'

@injectable()
export default class ApplicationAction {
    @lazyInject(ApplicationStore) private application: ApplicationStore

    @action('设置上一次切换的url') setLastUrlPath(path: string) {
        this.application.lastUrlPath = path
    }
}