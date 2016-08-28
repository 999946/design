const ttyTable = require('tty-table')

const header = [{
    value: '所属分类'
}, {
    value: '组件名'
}, {
    value: '发布级别'
}, {
    value: '当前版本号'
}, {
    value: '发布版本号'
}, {
    value: '原因'
}]

/**
 * 生成发布信息的表格输出到控制台
 */
export default (allPublishComponents: Array<Components.PublishInfo>)=> {
    const table = ttyTable(header, null, null, {
        borderStyle: 1,
        paddingBottom: 0,
        headerAlign: 'center',
        align: 'center',
        color: 'white'
    })

    const rows: Array<Array<string>> = []

    allPublishComponents.forEach(publishComponent=> {
        const row: Array<string> = []
        row.push(publishComponent.componentInfoWithDep.category.name)
        row.push(publishComponent.componentInfoWithDep.component.name)

        rows.push(row)
    })

    console.log(table.render())
}