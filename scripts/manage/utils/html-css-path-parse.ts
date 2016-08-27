export default (filePath: string, component: Components.ComponentConfig, category: Components.Category)=> {
    // 把路径前缀去掉
    filePath = filePath.replace(`components/${category.name}/${component.name}/lib`, '')

    return filePath
}