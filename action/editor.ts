import {injectable} from 'inversify'
import {action} from 'mobx'
import EditorStore from '../store/editor'
import {lazyInject} from '../utils/kernel'
import Fetch from '../utils/fetch'
import * as _ from 'lodash'

@injectable()
export default class EditorAction {
    @lazyInject(Fetch) private fetch: Fetch
    @lazyInject(EditorStore) private editor: EditorStore

    @action('创建应用')
    async createEditor(createInfo: Http.EditorCreateRequest) {
        return await this.fetch.post<Http.EditorCreateRequest, Http.EditorCreateResponse>('/createApp', createInfo)
    }

    @action('获取自己的编辑列表')
    async getSelfEditorList() {
        const result = await this.fetch.get<Http.EditorListRequest, Http.ListData<Http.EditorResponse>>('/getAppList', {
            pn: 1,
            rn: 20
        })
        this.editor.myEditList = []
        result.list && result.list.forEach(item => {
            this.editor.myEditList.push(item)
        })
    }

    // 管理员可以看到私有的
    @action('获取公共编辑列表')
    async getExploreEditorList() {
        const result = await this.fetch.get<Http.EditorListRequest, Http.ListData<Http.EditorResponse>>('/getAppList', {
            pn: 1,
            rn: 20,
            access_level: 2,
            user_id: '0'
        })
        this.editor.exploreEditList = []
        result.list && result.list.forEach(item => {
            this.editor.exploreEditList.push(item)
        })
    }

    @action('获取当前编辑器信息（不包括内容）')
    async getEditorById(appId: string) {
        const editorInfo = await this.fetch.get<Http.EditorGetRequest, Http.EditorResponse>('/getApp', {
            app_id: appId
        })
        this.editor.editorInfos.set(appId, editorInfo)
    }

    // 只有自己有权限读
    @action('获取编辑器草稿信息')
    async getEditorContentById(appId: string, version: string = 'draft') {
        const editorContent = await this.fetch.post<Http.EditorContentRequest, Http.EditorContentResponse>('/loadContent', {
            app_id: appId,
            version
        })
        this.editor.editorContents.set(appId, editorContent)
        return editorContent
    }

    // 所有人都有权限读
    @action('获取发布的激活版本信息')
    async getPublishActiveContent(appId: string) {
        return await this.fetch.get<Http.EditorContentRequest, Http.EditorContentResponse>('/loadContent', {
            app_id: appId
        })
    }

    @action('保存某个编辑器的内容')
    async saveContent(appId: string, content: string) {
        this.fetch.post<Http.EditorSaveContentRequest, null>('/saveContent', {
            app_id: appId,
            content
        })
    }

    @action('保存某个编辑器的信息')
    async saveInfo(appId: string, setting: string) {
        this.fetch.post<Http.EditorSaveInfoRequest, null>('/setApp', {
            app_id: appId,
            settings: setting
        })
    }

    @action('删除某个编辑器')
    async del(appId: string) {
        await this.fetch.post<Http.EditorSaveInfoRequest, {}>('/delApp', {
            app_id: appId
        })
        this.editor.myEditList = this.editor.myEditList.filter(edit=> edit.app_id !== appId)
    }

    // 只有自己和管理员能读取
    @action('获取编辑器版本列表')
    async getPublishVersionList(appId: string, page: number) {
        return await this.fetch.get<Http.EditorGetVersionListRequest,Http.ListData<Http.EditorGetVersionListResponse>>('/getVersionList', {
            app_id: appId,
            pn: page,
            rn: 10
        })
    }

    @action('发布版本')
    async publish(appId: string, version: string) {
        this.fetch.post<Http.EditorPublishRequest, {}>('/publishVersion', {
            app_id: appId,
            version: version
        })
    }

    @action('激活某个发布的版本')
    async active(appId: string, version: string) {
        await this.fetch.post<Http.EditorChangePublishVersionRequest, {}>('/activeVersion', {
            app_id: appId,
            version
        })
    }
}