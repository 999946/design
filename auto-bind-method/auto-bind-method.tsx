/**
 * 成员方法级别 自动绑定
 */
export default <T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>) => {
    let fn = descriptor.value

    if (typeof fn !== 'function') {
        throw new Error(`@autobind decorator can only be applied to methods not: ${typeof fn}`)
    }

    return {
        configurable: true,

        get() {
            if (this === fn.prototype || this.hasOwnProperty(key)) {
                return fn
            }

            let boundFn = fn.bind(this)
            Object.defineProperty(this, key, {
                value: boundFn,
                configurable: true,
                writable: true
            })
            return boundFn
        },

        set(newValue: any){
            return newValue
        }
    }
}