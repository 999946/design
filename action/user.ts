import { injectable } from 'inversify'
import { action } from 'mobx'
import UserStore from '../store/user'
import { lazyInject } from '../utils/kernel'
import * as fetch from '../utils/fetch'
import * as _ from 'lodash'

@injectable()
export default class UserAction {
    @lazyInject(UserStore) private user: UserStore

    @action('获取用户信息') async fetchUserData() {
        const result = await fetch.get<Http.UserResponse>('/rn/designer/get')
        this.user.currentUser = _.merge(new UserStore().currentUser, result)
    }
}