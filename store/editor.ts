import {injectable} from 'inversify'
import {observable, map, ObservableMap} from 'mobx'

@injectable()
export default class EditorStore {
    /**
     * 自己的编辑项目列表
     */
    @observable myEditList: Array<Http.EditorResponse> = []

    /**
     * 浏览编辑项目列表
     */
    @observable exploreEditList: Array<Http.EditorResponse> = []

    /**
     * 编辑器信息的 map
     */
    editorInfos = new Map<string, Http.EditorResponse>()

    /**
     * 编辑器内容的 map
     * 编辑器由于内容过于庞大，和信息是分开的接口
     */
    editorContents = new Map<string, Http.EditorContentResponse>()
}