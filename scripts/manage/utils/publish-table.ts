const ttyTable = require('tty-table')

const header = [{
    value: '所属分类',
    color: "white",
    align: "left",
    paddingLeft: 5,
    width: 30
}]

/**
 * 生成发布信息的表格输出到控制台
 */
export default (allPublishComponents: Array<Components.PublishInfo>)=> {
    const table = ttyTable(header, null, null, {
        borderStyle: 1,
        borderColor: 'blue',
        paddingBottom: 0,
        headerAlign: 'center',
        align: 'center',
        color: 'white'
    })

    console.log(table.render())
}