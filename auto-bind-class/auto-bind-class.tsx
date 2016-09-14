import autoBindMethod from '../auto-bind-method/auto-bind-method'

/**
 * 类级别 自动绑定
 */
export default <T extends Function>(target: T): T => {
    let keys = Object.getOwnPropertyNames(target.prototype)

    keys.forEach(key => {
        let descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)

        if (typeof descriptor.value === 'function') {
            Object.defineProperty(target.prototype, key, autoBindMethod(target, key, descriptor))
        }
    })

    return target
}