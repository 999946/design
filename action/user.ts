import { injectable } from 'inversify'
import { action } from 'mobx'
import UserStore from '../store/user'
import TiebaStore from '../store/tieba'
import { lazyInject } from '../utils/kernel'
import Fetch from '../utils/fetch'
import * as _ from 'lodash'

@injectable()
export default class UserAction {
    @lazyInject(Fetch) private fetch: Fetch
    @lazyInject(UserStore) private user: UserStore
    @lazyInject(TiebaStore) private tieba: TiebaStore

    @action('获取用户信息') async fetchUserData() {
        const result = await this.fetch.get<null, Http.UserProfileResponse>('/profile')
        this.user.currentUser = _.merge<Http.UserInfo>(new UserStore().currentUser, result.user)
        this.tieba.tbs = result.anti.tbs
    }
}