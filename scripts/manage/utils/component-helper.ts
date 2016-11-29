import * as config from '../../../config'
import components from '../../../components'
import * as trimString from '../../../utils/trim-string'

// 生成一个 packageName => category component 的 map
const packageNameMap = new Map<string, {
    category: Components.Category
    component: Components.ComponentConfig
}>()

components.forEach(category => {
    category.components.forEach(component => {
        const packageName = getPackageName(category.name, component.name)
        packageNameMap.set(packageName, {
            category, component
        })
    })
})

/**
 * 获取 git 地址
 */
export function getGit(categoryName: string, componentName: string, trimEndGit: boolean = false) {
    const category = components.find(category => category.name === categoryName)
    const component = category.components.find(component => component.name === componentName)
    let gitSource = ''

    if (!component.git) {
        // 如果没有指定 git，就直接用默认套路地址
        if (category.isPrivate) {
            gitSource = `${config.privateGit}/${category.name}-${component.name}.git`
        } else {
            gitSource = `${config.publicGit}/${category.name}-${component.name}.git`
        }
    } else {
        gitSource = component.git
    }

    if (trimEndGit) {
        gitSource = trimString.trimStringEnd(gitSource, '.git')
    }

    return gitSource
}

/**
 * 获取包名
 */
export function getPackageName(categoryName: string, componentName: string) {
    const category = components.find(category => category.name === categoryName)
    const component = category.components.find(component => component.name === componentName)

    if (!component.npm) {
        return `${category.prefix}-${component.name}`
    } else {
        return component.npm
    }
}

/**
 * 判断包名是否是自定义组件的
 */
export const isCustomPackageName = (packageName: string) => {
    return packageNameMap.has(packageName)
}

/**
 * 根据包名获取组件名和分类名
 */
export const getCategoryAndComponentNameByPackageName = (packageName: string) => {
    return packageNameMap.get(packageName)
}


