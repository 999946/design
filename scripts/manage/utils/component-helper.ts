import * as config from '../../../config'
import components from '../../../components'

export const getGit = (categoryName: string, componentName: string)=> {
    const category = components.find(category=>category.name === categoryName)
    const component = category.components.find(component=>component.name === componentName)

    if (!component.git) {
        // 如果没有指定 git，就直接用默认套路地址
        if (category.isPrivate) {
            return `${config.privateGit}/${category.name}-${component.name}.git`
        } else {
            return `${config.publicGit}/${category.name}-${component.name}.git`
        }
    } else {
        return component.git
    }
}

export const getPackageName =(categoryName: string, componentName: string)=>{
    const category = components.find(category=>category.name === categoryName)
    const component = category.components.find(component=>component.name === componentName)

    if (!component.npm){
        return `${category.prefix}-${component.name}`
    }else{
        return component.npm
    }
}