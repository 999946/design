
        declare var require: any

        const routerMap = new Map<string, any>()
        
        routerMap.set('wefan/navbar', (nextState: any, callback: any) => {
                        const demoLists: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/navbar/demo/basic').default,
                            code: require('-!text!../components/wefan/navbar/demo/basic')
                        })
                    
                            callback(demoLists)
                        })
                    })

    
        export default routerMap
    