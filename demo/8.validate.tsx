import * as React from 'react'
import {observer} from 'mobx-react'
import {Input, ExtendValidatorStatic} from '../index'

const testValidator = (value: string, validator: ExtendValidatorStatic): any => {
    if (!validator.notEmpty(value)) {
        return {
            ok: false,
            errorMessage: '内容不能为空'
        }
    }

    if (!validator.isUrl(value)) {
        return {
            ok: false,
            errorMessage: '必须是一个url地址'
        }
    }

    if (!validator.contains(value, 'nt')) {
        return {
            ok: false,
            errorMessage: '必须含有『nt』'
        }
    }

    return { ok: true }
}

@observer
export default class Demo extends React.Component <any, any> {
    static title = '验证'
    static description = ``

    render() {
        return (
            <Input validateMiddleware={testValidator}/>
        )
    }
}
                