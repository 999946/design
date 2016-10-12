import {injectable} from 'inversify'
import {observable} from 'mobx'

@injectable()
export default class UserStore {
    /**
     * 当前用户信息
     */
    @observable currentUser: User.FullInfo = {
        user_id: null,
        user_name: null,
        user_sex: null,
        portrait: null,
        name_show: null,
        is_login: null,
        is_admin: null,
        can_create: null,
        can_publish: null
    }
}