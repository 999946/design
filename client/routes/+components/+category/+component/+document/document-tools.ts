import * as _ from 'lodash'
import * as trimString from '../../../../../../utils/trim-string'
import * as path from 'path'
import components from '../../../../../../components'

/**
 * 根据源码找到 propsDefine 部分
 */
export const getPropsDefineBySourceCode = (sourceCode: string)=> {
    // 找到 interface PropsDefine xxxx {
    const propsDefineStartString = sourceCode.match(/interface\s+PropsDefine[^{]*\{/)[0]

    const sourceCodeStartIndex = sourceCode.indexOf(propsDefineStartString)
    if (sourceCodeStartIndex === -1) {
        return ''
    }

    // 去除了 propsDefineStartString 后的内容
    const sourceCodeAfterPropsDefineStartString = sourceCode.slice(sourceCodeStartIndex + propsDefineStartString.length)

    // 左、右边括号数量
    let leftCount = 1
    let rightCount = 0

    // propsDefine 中的内容
    let propsDefineContent = ''

    for (let character of sourceCodeAfterPropsDefineStartString) {
        switch (character) {
            case '{':
                leftCount++
                break
            case '}':
                rightCount++
                break
        }

        // 如果左边和右边数量相等, 闭合
        if (leftCount === rightCount) {
            break
        } else {
            propsDefineContent += character
        }
    }

    return _.trim(propsDefineContent)
}

/**
 * 根据源码找到 propsDefine 部分
 */
export const getPropsBySourceCode = (sourceCode: string)=> {
    const propsStartString = 'implements PropsDefine {'
    const sourceCodeStartIndex = sourceCode.indexOf(propsStartString)
    if (sourceCodeStartIndex === -1) {
        return ''
    }

    // 去除了 propsStartString 后的内容
    const sourceCodeAfterPropsDefineStartString = sourceCode.slice(sourceCodeStartIndex + propsStartString.length)

    // 左、右边括号数量
    let leftCount = 1
    let rightCount = 0

    // propsDefine 中的内容
    let propsDefineContent = ''

    for (let character of sourceCodeAfterPropsDefineStartString) {
        switch (character) {
            case '{':
                leftCount++
                break
            case '}':
                rightCount++
                break
        }

        // 如果左边和右边数量相等, 闭合
        if (leftCount === rightCount) {
            break
        } else {
            propsDefineContent += character
        }
    }

    return _.trim(propsDefineContent)
}

export interface ParamInfo {
    name: string
    type: string
    description: string
    defaultValue: string
    required: boolean
}

/**
 * 解析 propsDefine
 */
export const parsePropsDefine = (propsDefine: string)=> {
    let params: Array<ParamInfo> = []
    // 遍历步骤
    let nowStep = 'description'
    // 步骤的第多少行
    let nowStepLine = 0

    // 因为是 ts 文件, 所以按行读
    const lines = propsDefine.split('\n')

    let name = ''
    let type = ''
    let description = ''
    let required = false

    // 注释形态, 1: // 2: /**
    let descriptionType = 0

    // 类型开头种类, 找到最后闭合就算类型定义完毕
    // 1: { 2: [ 3: < 4: (
    let typeStartType = 1
    let typeLeftCount = 1
    let typeRightCount = 0

    // 当前变量特征收取完毕
    const nowParamFinish = ()=> {
        params.push({name, type, description, required, defaultValue: 'undefined'})

        // 重置各变量
        nowStep = 'description'
        name = type = description = ''
        nowStepLine = typeRightCount = 0
        typeLeftCount = 1
    }

    // 类型定义是否完结
    const isTypeFinish = (typeSourceCode: string)=> {
        for (let character of typeSourceCode) {
            let compareStartCharacter: string
            let compareEndCharacter: string
            switch (typeStartType) {
                case 1:
                    compareStartCharacter = '{'
                    compareEndCharacter = '}'
                    break
                case 2:
                    compareStartCharacter = '['
                    compareEndCharacter = ']'
                    break
                case 3:
                    compareStartCharacter = '<'
                    compareEndCharacter = '>'
                    break
                case 4:
                    compareStartCharacter = '('
                    compareEndCharacter = ')'
                    break
            }

            if (character === compareStartCharacter) {
                typeLeftCount++
            } else if (character === compareEndCharacter) {
                typeRightCount++
            }
        }

        return typeLeftCount === typeRightCount
    }

    lines.forEach(line=> {
        const lineTrim = _.trim(line)
        nowStepLine++

        if (lineTrim === '') {
            if (nowStep === 'description') {
                nowStepLine = 0
                return
            } else if (nowStep === 'name') {
                return nowParamFinish()
            }
        }

        if (nowStep === 'description') {
            if (nowStepLine === 1) {
                if (lineTrim.startsWith('//')) {
                    description += _.trim(trimString.trimStringStart(lineTrim, '//'))
                    descriptionType = 1
                    return
                } else if (lineTrim.startsWith('/**')) {
                    // 这种形态的注释, 下一行才会有内容
                    descriptionType = 2
                    return
                } else {
                    nowStep = 'name'
                    nowStepLine = 1
                }
            } else {
                switch (descriptionType) {
                    case 1:
                        if (lineTrim.startsWith('//')) {
                            description += '\n' + _.trim(trimString.trimStringStart(lineTrim, '//'))
                            return
                        } else {
                            nowStep = 'name'
                            nowStepLine = 1
                        }
                        break
                    case 2:
                        if (lineTrim.startsWith('*') && !lineTrim.endsWith('*/')) {
                            if (nowStepLine === 2) {
                                description += _.trim(trimString.trimStringStart(lineTrim, '*'))
                            } else {
                                description += '\n' + _.trim(trimString.trimStringStart(lineTrim, '*'))
                            }
                            return
                        } else if (lineTrim.endsWith('*/')) {
                            // 已经是结尾了
                            const lineOther = trimString.trimStringStart(trimString.trimStringEnd(lineTrim, '*/'), '*')
                            if (lineOther !== '') {
                                description += '\n' + lineOther
                            }
                            return
                        } else {
                            nowStep = 'name'
                            nowStepLine = 1
                        }
                        break
                }
            }
        }

        if (nowStep === 'name') {
            const specialIndex = lineTrim.indexOf(':')
            const left = lineTrim.slice(0, specialIndex)
            const right = lineTrim.slice(specialIndex + 1)
            if (nowStepLine === 1) {
                if (left.indexOf('?') > -1) {
                    required = false
                    name = _.trim(left.split('?')[0])
                } else {
                    required = true
                    name = _.trim(left)
                }

                type += _.trim(right)

                const typeIndexs = [{
                    name: 1,
                    index: type.indexOf('{')
                }, {
                    name: 2,
                    index: type.indexOf('[')
                }, {
                    name: 3,
                    index: type.indexOf('<')
                }, {
                    name: 4,
                    index: type.indexOf('(')
                }]

                const maxType = _.maxBy(typeIndexs.filter(type=> {
                    return type.index !== -1
                }), (type)=> {
                    return type.index
                })

                if (maxType === undefined) {
                    // 没有开头类型, 下面肯定没有了
                    return nowParamFinish()
                } else {
                    // 设置当前开头类型
                    typeStartType = maxType.name
                    if (isTypeFinish(type.slice(maxType.index + 1))) {
                        return nowParamFinish()
                    }
                }
            } else {
                // 不是第一行
                if (isTypeFinish(lineTrim)) {
                    // 类型定义完了
                    type += '\n' + lineTrim
                    return nowParamFinish()
                } else {
                    type += '\n' + line
                }
            }
        }
    })

    return params
}

export interface ParamValueInfo {
    name: string
    value: string
}

/**
 * 解析 props
 */
export const parseProps = (props: string)=> {
    let params: Array<ParamValueInfo> = []

    // 步骤的第多少行
    let nowStepLine = 0

    // 因为是 ts 文件, 所以按行读
    const lines = props.split('\n')

    let name = ''
    let value = ''

    // 类型开头种类, 找到最后闭合就算类型定义完毕
    // 1: { 2: [  3: (
    let typeStartType = 1
    let typeLeftCount = 1
    let typeRightCount = 0

    // 当前变量特征收取完毕
    const nowParamFinish = ()=> {
        params.push({name, value})

        // 重置各变量
        name = value = ''
        nowStepLine = typeRightCount = 0
        typeLeftCount = 1
    }

    // 函数定义是否完结
    const isFunctionFinish = (typeSourceCode: string)=> {
        for (let character of typeSourceCode) {
            let compareStartCharacter: string
            let compareEndCharacter: string
            switch (typeStartType) {
                case 1:
                    compareStartCharacter = '{'
                    compareEndCharacter = '}'
                    break
                case 2:
                    compareStartCharacter = '['
                    compareEndCharacter = ']'
                    break
                case 3:
                    compareStartCharacter = '('
                    compareEndCharacter = ')'
                    break
            }

            if (character === compareStartCharacter) {
                typeLeftCount++
            } else if (character === compareEndCharacter) {
                typeRightCount++
            }
        }

        return typeLeftCount === typeRightCount
    }

    lines.forEach(line=> {
        const lineTrim = _.trim(line)
        nowStepLine++

        const specialIndex = lineTrim.indexOf('=')
        const left = lineTrim.slice(0, specialIndex)
        const right = lineTrim.slice(specialIndex + 1)

        if (nowStepLine === 1) {
            name = _.trim(left)
            value += _.trim(right)

            const functionIndexs = [{
                name: 1,
                index: value.indexOf('{')
            }, {
                name: 2,
                index: value.indexOf('[')
            }, {
                name: 3,
                index: value.indexOf('(')
            }]

            const maxValue = _.maxBy(functionIndexs.filter(value=> {
                return value.index !== -1
            }), (value)=> {
                return value.index
            })

            if (maxValue === undefined) {
                // 没有开头类型, 下面肯定没有了
                return nowParamFinish()
            } else {
                // 设置当前开头类型
                typeStartType = maxValue.name
                if (isFunctionFinish(value.slice(maxValue.index + 1))) {
                    return nowParamFinish()
                }
            }
        } else {
            // 不是第一行
            if (isFunctionFinish(lineTrim)) {
                // 类型定义完了
                value += '\n' + lineTrim
                return nowParamFinish()
            } else {
                value += '\n' + line
            }
        }
    })

    return params
}

// TODO 将所有泛型单独抽出来展示
export const parsePropsDefineExtends = (sourceCode: string, typePath: string)=> {
    // 找出继承的对象
    const regex = /interface\s+PropsDefine\s+extends([^\{]*)/g

    // 继承对象数组
    const allExtends: Array<RouterComponentsModel.ExtendInfo> = []

    let match: Array<string>
    while ((match = regex.exec(sourceCode)) != null) {
        const extendString = match[1]
        const extendArray = extendString.split(',')
        extendArray.forEach(extend=> {
            extend = _.trim(extend)

            // 如果包含 < ，说明继承的属性含有泛型
            if (extend.indexOf('<') > -1) {
                // 找到外层，和所有内层
                const outerInterface = _.trim(extend.slice(0, extend.indexOf('<')))
                // const innerInterfaces = _.trim(extend.slice(extend.indexOf('<') + 1, extend.length - 1))
                // const innerInterfacesSplit = innerInterfaces.split(',')
                const outerFindRegex = new RegExp(`import\\s\\{?[^}]*${outerInterface}[^}]*\\}?\\s+from\\s+\\'([^\\']*)\\'`, 'g')
                let outerSourceMatch: Array<string>
                while ((outerSourceMatch = outerFindRegex.exec(sourceCode)) != null) {
                    const importSource = outerSourceMatch[1]
                    const typePathSplit = typePath.split('/')
                    typePathSplit.pop()
                    const typePathDir = typePathSplit.join('/')
                    if (importSource.startsWith('./') || importSource.startsWith('../')) {
                        const importFullPath = path.join(typePathDir, importSource)
                        const importFullPathSplit = importFullPath.split('/')
                        const category = components.find(category=>category.name === importFullPathSplit[1])
                        const component = category.components.find(component=>component.name === importFullPathSplit[2])
                        allExtends.push({
                            type: 'component',
                            category,
                            component,
                            extendName: extend
                        })
                    } else {
                        // npm 模块
                        allExtends.push({
                            type: 'npm',
                            moduleName: _.trim(importSource),
                            extendName: extend
                        })
                    }
                }
            } else {
                // 找到 extend 的文件源
                const findRegex = new RegExp(`import\\s\\{?[^}]*${extend}[^}]*\\}?\\s+from\\s+\\'([^\\']*)\\'`, 'g')
                let sourceMatch: Array<string>
                while ((sourceMatch = findRegex.exec(sourceCode)) != null) {
                    const importSource = sourceMatch[1]
                    const typePathSplit = typePath.split('/')
                    typePathSplit.pop()
                    const typePathDir = typePathSplit.join('/')
                    if (importSource.startsWith('./') || importSource.startsWith('../')) {
                        const importFullPath = path.join(typePathDir, importSource)
                        const importFullPathSplit = importFullPath.split('/')
                        const category = components.find(category=>category.name === importFullPathSplit[1])
                        const component = category.components.find(component=>component.name === importFullPathSplit[2])
                        allExtends.push({
                            type: 'component',
                            category,
                            component,
                            extendName: extend
                        })
                    } else {
                        // npm 模块
                        allExtends.push({
                            type: 'npm',
                            moduleName: _.trim(importSource),
                            extendName: extend
                        })
                    }
                }
            }
        })
    }

    return allExtends
}