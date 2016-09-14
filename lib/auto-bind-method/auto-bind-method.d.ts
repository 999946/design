declare var _default: <T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>) => {
    configurable: boolean;
    get(): any;
    set(newValue: any): any;
};
export default _default;
