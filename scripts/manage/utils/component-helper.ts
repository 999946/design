import * as config from '../../../config'
import components from '../../../components'
import * as trimString from '../../../utils/trim-string'

export const getGit = (categoryName: string, componentName: string, trimEndGit: boolean = false)=> {
    const category = components.find(category=>category.name === categoryName)
    const component = category.components.find(component=>component.name === componentName)
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

export const getPackageName = (categoryName: string, componentName: string)=> {
    const category = components.find(category=>category.name === categoryName)
    const component = category.components.find(component=>component.name === componentName)

    if (!component.npm) {
        return `${category.prefix}-${component.name}`
    } else {
        return component.npm
    }
}