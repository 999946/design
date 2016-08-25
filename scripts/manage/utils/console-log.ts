import * as colors from 'colors'

export default (message: string, color: string)=> {
    switch (color) {
        case `red`:
            console.log(colors.red.underline(message))
            break
        case `green`:
            console.log(colors.green(message))
            break
        case `yellow`:
            console.log(colors.yellow(message))
            break
        case `grey`:
            console.log(colors.grey(message))
            break
        default:
            console.log(message)
    }
}