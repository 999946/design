import * as semver from 'semver'
import * as colors from 'colors'
const ttyTable = require('tty-table')

const header = [{
    value: '所属分类'
}, {
    value: '组件名'
}, {
    value: '发布级别',
    formatter: (value: Components.PublishLevel)=> {
        switch (value) {
            case 'major':
                return colors.bold(value)
            case 'minor':
                return value
            case 'patch':
                return value
        }
    }
}, {
    value: '当前版本号'
}, {
    value: '发布版本号',
    color: 'green'
}, {
    value: '原因',
    formatter: (value: string)=> {
        switch (value) {
            case '主动发布':
                return colors.bold(value)
            case '依赖发布':
                return colors.green(value)
        }
    }
}]

/**
 * 生成发布信息的表格输出到控制台
 */
export default (allPublishComponents: Array<Components.PublishInfo>)=> {
    const rows: Array<Array<string>> = []

    allPublishComponents.forEach(publishComponent=> {
        const row: Array<string> = []
        row.push(publishComponent.componentInfoWithDep.category.name)
        row.push(publishComponent.componentInfoWithDep.component.name)
        row.push(publishComponent.publishLevel)
        row.push(publishComponent.componentInfoWithDep.packageJson.version)
        row.push(semver.inc(publishComponent.componentInfoWithDep.packageJson.version, publishComponent.publishLevel))

        let reason: string
        if (publishComponent.isUserOperate) {
            reason = '主动发布'
        } else {
            reason = '依赖发布'
        }
        row.push(reason)

        rows.push(row)
    })

    const table = ttyTable(header, rows, null, {
        borderStyle: 1,
        paddingBottom: 0,
        headerAlign: 'center',
        align: 'center'
    })

    console.log(table.render())
}