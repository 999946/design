
        declare var require: any

        const routerMap = new Map<string, any>()
        
        routerMap.set('common/button', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/button/demo/basic').default,
                            code: require('-!text!../../components/common/button/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/button/demo/group').default,
                            code: require('-!text!../../components/common/button/demo/group.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/button/button/button.type'),
                            typeCode: require('-!text!../../components/common/button/button/button.type.ts'),
                            componentName: 'Button'
                        })
                    
                        documents.push({
                            type: require('../components/common/button/button-group/button-group.type'),
                            typeCode: require('-!text!../../components/common/button/button-group/button-group.type.ts'),
                            componentName: 'ButtonGroup'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: null,
                                documents,
                                main: require('../components/common/button/index')
                            })
                        })
                    })
routerMap.set('common/tooltip', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/tooltip/demo/basic').default,
                            code: require('-!text!../../components/common/tooltip/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/tooltip/tooltip/tooltip.type'),
                            typeCode: require('-!text!../../components/common/tooltip/tooltip/tooltip.type.tsx'),
                            componentName: 'Tooltip'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/tooltip/package.json')),
                                documents,
                                main: require('../components/common/tooltip/index')
                            })
                        })
                    })
routerMap.set('wefan/resource-card', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/resource-card/demo/basic').default,
                            code: require('-!text!../../components/wefan/resource-card/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/wefan/resource-card/demo/image').default,
                            code: require('-!text!../../components/wefan/resource-card/demo/image.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/wefan/resource-card/resource-card/resource-card.type'),
                            typeCode: require('-!text!../../components/wefan/resource-card/resource-card/resource-card.type.ts'),
                            componentName: 'ResourceCard'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/wefan/resource-card/package.json')),
                                documents,
                                main: require('../components/wefan/resource-card/index')
                            })
                        })
                    })
routerMap.set('wefan/navbar', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/navbar/demo/basic').default,
                            code: require('-!text!../../components/wefan/navbar/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/wefan/navbar/navbar/navbar.type'),
                            typeCode: require('-!text!../../components/wefan/navbar/navbar/navbar.type.tsx'),
                            componentName: 'Navbar'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/wefan/navbar/package.json')),
                                documents,
                                main: require('../components/wefan/navbar/index')
                            })
                        })
                    })

    
        export default routerMap
    