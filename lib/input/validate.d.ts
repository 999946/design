export interface ExtendValidatorStatic extends ValidatorJS.ValidatorStatic {
    notEmpty(str: string): boolean;
    len(str: string, min: number, max: number): boolean;
    isUrl(str: string): boolean;
    isIPv6(str: string): boolean;
    isIPv4(str: string): boolean;
    notIn(str: string, values: any[]): boolean;
    regex(str: string, pattern: any, modifiers: string): boolean;
    notRegex(str: string, pattern: any, modifiers: string): boolean;
    isDecimal(str: string): boolean;
    min(str: string, val: number): boolean;
    max(str: string, val: number): boolean;
    not(str: string, pattern: any, modifiers: string): boolean;
    contains(str: string, elem: string): boolean;
    notContains(str: string, elem: string): boolean;
    is(str: string, pattern: any, modifiers: string): boolean;
}
declare const extendValidator: ExtendValidatorStatic;
export default extendValidator;
