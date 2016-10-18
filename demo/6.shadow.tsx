import * as React from 'react'
import {observer} from 'mobx-react'
import Tooltip from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '遮罩层'
    static description = ``

    render() {
        return (
            <Tooltip type="click"
                     showShadow={true}>
                <span>点击会出现遮罩层</span>
            </Tooltip>
        )
    }
}