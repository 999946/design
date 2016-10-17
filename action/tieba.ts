import {injectable} from 'inversify'
import {action} from 'mobx'
import TiebaStore from '../store/tieba'
import {lazyInject} from '../utils/kernel'

@injectable()
export default class ApplicationAction {
    @lazyInject(TiebaStore) private tieba: TiebaStore

    @action('获取tbs') getTbs() {
        this.tieba.tbs = '123'
    }
}