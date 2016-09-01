
        declare var require: any

        const packageJsonMap = new Map<string, any>()
        
        packageJsonMap.set('wefan/resource-card', (nextState: any, callback: any) => {
                    require.ensure([], function (require: any) {
                        callback(require('-!text!../components/wefan/resource-card/package.json'))
                    })
                })
packageJsonMap.set('wefan/navbar', (nextState: any, callback: any) => {
                    require.ensure([], function (require: any) {
                        callback(require('-!text!../components/wefan/navbar/package.json'))
                    })
                })

    
        export default packageJsonMap
    