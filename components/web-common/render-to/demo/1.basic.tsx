import * as React from 'react'
import {observer} from 'mobx-react'
import RenderTo from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <div>
                <div className="container-box"></div>

                <RenderTo selector=".container-box">
                    <div>被渲染到了另外的地方</div>
                </RenderTo>
            </div>
        )
    }
}
                