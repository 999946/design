export default (filePath: string, component: Components.ComponentConfig, category: Components.Category)=> {
    // 把路径前缀去掉
    filePath = filePath.replace(`components/${category.name}/${component.name}/lib/`, '')

    // 返回的前缀
    const prefix = `${category.prefix}-${component.name}`

    console.log(filePath)
    if (filePath.indexOf('/') === -1) {
        console.log('是第一级')
        // 如果没有 /, 说明是第一级
        return prefix
    } else {
        console.log('不是第一级')
        filePath = filePath.replace(/-/g, '_')
        filePath = filePath.replace(/\//g, '-')
    }

    return filePath
}