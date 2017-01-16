import { TransparentlyNativePropsPropsDefine } from 'nt-transparently-native-props'
import { gaeaHelper } from 'gaea-helper'
import * as ReactNaitve from 'react-native'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle
}

export class Props implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}