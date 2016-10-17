import {injectable} from 'inversify'
import {observable} from 'mobx'

@injectable()
export default class TiebaStore {
    /**
     * tbs
     */
    tbs: string
}