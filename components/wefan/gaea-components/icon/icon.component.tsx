import * as React from 'react'
import * as typings from './icon.type'
import {Image} from 'react-native'

const icons: {
    [x: string]: any
} = {
    icnHomepageZfS: require('./images/icn_homepage_zf_s.png'),
    iconBackNavMineBlack: require('./images/icon_back_nav_mine_black.png'),
    iconMoreNavN: require('./images/icon_more_nav_n.png'),
    iconCloseNav: require('./images/icon_close_nav.png'),
    icnHomeTopNewb: require('./images/icn_home_top_newb.png')
}

const getIconByName = (name: string)=> {
    return icons[name]
}

export default class GaeaComponents extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Image style={this.props.style}
                   source={getIconByName(this.props.name)}/>
        )
    }
}
                