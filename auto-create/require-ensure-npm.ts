declare var require: any

export const reactDropzoneComponent = () => {
    return new Promise<string>((resolve, reject) => {
        require.ensure([], function (require: any) {
            const result = require('react-dropzone-component').default
            console.log(111, result)
            resolve(result)
        })
    })
}