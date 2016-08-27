export default (filePath: string, component: Components.ComponentConfig, category: Components.Category)=> {
    // 把路径前缀去掉
    filePath = filePath.replace(`components/${category.name}/${component.name}/lib/`, '')

    // 返回的前缀
    const prefix = `${category.prefix}-${component.name}`

    if (filePath.indexOf('/') === -1) {
        // 如果没有 /, 说明是第一级
        return prefix
    } else {
        filePath = filePath.replace(/-/g, '_')
        filePath = filePath.replace(/\//g, '-')
    }

    return filePath
}