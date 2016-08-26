import * as colors from 'colors'

export default{
    error: (message: string)=> {
        console.log(colors.red(message))
        process.exit(1)
    },
    warn: (message: string)=> {
        console.log(colors.yellow(message))
    },
    success: (message: string)=> {
        console.log(colors.green(message))
    },
    ignore: (message: string)=> {
        console.log(colors.grey(message))
    }
}