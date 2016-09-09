
        declare var require: any

        const routerMap = new Map<string, any>()
        
        
            routerMap.set('react', (callback: any) => {
                const demoLists: any = []
                const documents: any = []
                
                require.ensure([], function (require: any) {
                    callback({
                        typings: require('-!text!../../typings/globals/react/index.d.ts')
                    })
                })
            })
        
            routerMap.set('react-dom', (callback: any) => {
                const demoLists: any = []
                const documents: any = []
                
                require.ensure([], function (require: any) {
                    callback({
                        typings: require('-!text!../../typings/globals/react-dom/index.d.ts')
                    })
                })
            })
        
            routerMap.set('react-native', (callback: any) => {
                const demoLists: any = []
                const documents: any = []
                
                require.ensure([], function (require: any) {
                    callback({
                        typings: require('-!text!../../typings/globals/react-native/index.d.ts')
                    })
                })
            })
        
    
        export default routerMap
    