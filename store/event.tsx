/**
 * 事件系统
 */

import Event from '../utils/event-system'

export default class EventSystem extends Event {
    /**
     * 触发页面载入
     */
    sceneChange = 'sceneChange'

    /**
     * 触发页面加载完毕
     */
    sceneLoaded = 'sceneLoaded'
}