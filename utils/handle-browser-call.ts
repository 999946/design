import {browserHistory} from './provider'

export default (functionName: string, param: any)=> {
    // 响应浏览器的事件
    switch (functionName) {
        case 'back':
            browserHistory.goBack()
            break
    }
}