import * as request from 'superagent'
import {injectable} from 'inversify'
import * as path from 'path'
import * as config from '../config'
import {lazyInject} from './kernel'
import TiebaStore from '../store/tieba'

@injectable()
export default class Fetch {
    @lazyInject(TiebaStore) private tieba: TiebaStore

    async post<S, T>(url: string, params?: S) {
        const result = await request.post(path.join(config.apiPrefix, url)).type('form').send(Object.assign(params || {}, {
            tbs: this.tieba.tbs,
            ie: 'utf-8'
        }))
        const body = result.body as Http.Response<T>

        // 处理错误情况
        if (!body) {
            return null as T
        }

        if (body.errno !== 0) {
            console.warn(body.errmsg)
            return null as T
        }

        return body.data as T
    }

    async get<S, T>(url: string, params?: S) {
        const result = await request.get(path.join(config.apiPrefix, url)).query(Object.assign(params || {}, {
            tbs: this.tieba.tbs,
            ie: 'utf-8'
        }))
        const body = result.body as Http.Response<T>

        // 处理错误情况
        if (!body) {
            return null as T
        }

        if (body.errno !== 0) {
            console.warn(body.errmsg)
            return null as T
        }

        return body.data as T
    }
}