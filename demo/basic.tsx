import * as React from 'react'
import {observer} from 'mobx-react'
import Navbar from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <Navbar/>
        )
    }
}