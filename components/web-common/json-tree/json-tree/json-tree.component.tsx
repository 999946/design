import * as React from 'react'
import * as typings from './json-tree.type'
import * as classNames from 'classnames'

import {Tree, TreeNode} from 'nt-web-tree'
import {TransmitTransparently} from 'nt-transmit-transparently'

import './json-tree.scss'

const stringRender = (obj: any, key: string)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="string"> "{obj[key]}"</span>
        </div>
    )
}

const numberRender = (obj: any, key: string)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="number"> {obj[key]}</span>
        </div>
    )
}

const boolRender = (obj: any, key: string)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="bool"> {obj[key] ? `true` : `false`}</span>
        </div>
    )
}

const arrayRender = (obj: any, key: string)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="array"> Array[{obj[key].length}]</span>
        </div>
    )
}

const objectRender = (obj: Object, key: string)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="object"> Object</span>
        </div>
    )
}

const parseJson = (obj: any): Array<React.ReactElement<any>> => {
    return Object.keys(obj).map((key, index)=> {
        switch (obj[key].constructor.name) {
            case 'String':
                return (
                    <TreeNode render={stringRender.bind(this,obj,key)}
                              key={index}/>
                )
            case 'Number':
                return (
                    <TreeNode render={numberRender.bind(this,obj,key)}
                              key={index}/>
                )
            case 'Boolean':
                return (
                    <TreeNode render={boolRender.bind(this,obj,key)}
                              key={index}/>
                )
            case 'Array':
                let arrayChilds = parseJson(obj[key])
                return (
                    <TreeNode render={arrayRender.bind(this,obj,key)}
                              key={index}>
                        {arrayChilds}
                    </TreeNode>
                )
            case 'Object':
                let objChilds = parseJson(obj[key])
                return (
                    <TreeNode render={objectRender.bind(this,obj,key)}
                              key={index}>
                        {objChilds}
                    </TreeNode>
                )
        }
    })
}

@TransmitTransparently()
export default class JsonTree extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props.className]: !!this.props.className
        })

        let TreeContent: Array<React.ReactElement<any>>

        if (this.props.root) {
            TreeContent = parseJson({
                root: this.props.json
            })
        } else {
            TreeContent = parseJson(this.props.json)
        }

        return (
            <Tree className={classes} {...this.props.others}>
                {TreeContent}
            </Tree>
        )
    }
}
                