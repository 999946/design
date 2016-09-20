import * as React from 'react'
import {observer} from 'mobx-react'
import {Tree, TreeNode} from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '默认展开全部'
    static description = ``

    render() {
        return (
            <Tree defaultExpendAll>
                <TreeNode title="上古卷轴">
                    <TreeNode title="简介"/>
                    <TreeNode title="第一章">
                        <TreeNode title="残卷">
                            <TreeNode title="残卷1"/>
                            <TreeNode title="残卷2"/>
                        </TreeNode>
                        <TreeNode title="后记"/>
                    </TreeNode>
                </TreeNode>
            </Tree>
        )
    }
}
                