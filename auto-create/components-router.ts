
        declare var require: any

        const routerMap = new Map<string, any>()
        
        routerMap.set('wefan/resource-card', (nextState: any, callback: any) => {
                        const demoLists: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/resource-card/demo/basic').default,
                            code: require('-!text!../../components/wefan/resource-card/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/wefan/resource-card/demo/image').default,
                            code: require('-!text!../../components/wefan/resource-card/demo/image.tsx')
                        })
                    
                            callback(demoLists)
                        })
                    })
routerMap.set('wefan/navbar', (nextState: any, callback: any) => {
                        const demoLists: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/navbar/demo/basic').default,
                            code: require('-!text!../../components/wefan/navbar/demo/basic.tsx')
                        })
                    
                            callback(demoLists)
                        })
                    })

    
        export default routerMap
    