
        declare var require: any

        const routerMap = new Map<string, any>()
        
        routerMap.set('web-common/button', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/button/demo/basic').default,
                            code: require('-!text!../../components/web-common/button/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/button/demo/group').default,
                            code: require('-!text!../../components/web-common/button/demo/group.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/button/button/button.type'),
                            typeCode: require('-!text!../../components/web-common/button/button/button.type.ts'),
                            typePath: 'components/web-common/button/button/button.type',
                            componentName: 'Button'
                        })
                    
                        documents.push({
                            type: require('../components/web-common/button/button-group/button-group.type'),
                            typeCode: require('-!text!../../components/web-common/button/button-group/button-group.type.ts'),
                            typePath: 'components/web-common/button/button-group/button-group.type',
                            componentName: 'ButtonGroup'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/button/package.json')),
                                documents,
                                main: require('../components/web-common/button/index')
                            })
                        })
                    })
routerMap.set('web-common/tree', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/tree/demo/basic').default,
                            code: require('-!text!../../components/web-common/tree/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/tree/tree/tree.type'),
                            typeCode: require('-!text!../../components/web-common/tree/tree/tree.type.ts'),
                            typePath: 'components/web-common/tree/tree/tree.type',
                            componentName: 'Tree'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/tree/package.json')),
                                documents,
                                main: require('../components/web-common/tree/index')
                            })
                        })
                    })
routerMap.set('web-common/tooltip', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/auto-position').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/auto-position.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/basic').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/position').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/position.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/render').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/render.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/tooltip/tooltip/tooltip.type'),
                            typeCode: require('-!text!../../components/web-common/tooltip/tooltip/tooltip.type.tsx'),
                            typePath: 'components/web-common/tooltip/tooltip/tooltip.type',
                            componentName: 'Tooltip'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/tooltip/package.json')),
                                documents,
                                main: require('../components/web-common/tooltip/index')
                            })
                        })
                    })
routerMap.set('web-common/margin-padding-editor', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/margin-padding-editor/demo/basic').default,
                            code: require('-!text!../../components/web-common/margin-padding-editor/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/margin-padding-editor/margin-padding-editor/margin-padding-editor.type'),
                            typeCode: require('-!text!../../components/web-common/margin-padding-editor/margin-padding-editor/margin-padding-editor.type.ts'),
                            typePath: 'components/web-common/margin-padding-editor/margin-padding-editor/margin-padding-editor.type',
                            componentName: 'MarginPaddingEditor'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/margin-padding-editor/package.json')),
                                documents,
                                main: require('../components/web-common/margin-padding-editor/index')
                            })
                        })
                    })
routerMap.set('web-common/badge', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/badge/demo/animate').default,
                            code: require('-!text!../../components/web-common/badge/demo/animate.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/badge/demo/basic').default,
                            code: require('-!text!../../components/web-common/badge/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/badge/demo/custom-limit').default,
                            code: require('-!text!../../components/web-common/badge/demo/custom-limit.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/badge/demo/dot').default,
                            code: require('-!text!../../components/web-common/badge/demo/dot.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/badge/demo/limit').default,
                            code: require('-!text!../../components/web-common/badge/demo/limit.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/badge/demo/stand-alone').default,
                            code: require('-!text!../../components/web-common/badge/demo/stand-alone.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/badge/badge/badge.type'),
                            typeCode: require('-!text!../../components/web-common/badge/badge/badge.type.ts'),
                            typePath: 'components/web-common/badge/badge/badge.type',
                            componentName: 'Badge'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/badge/package.json')),
                                documents,
                                main: require('../components/web-common/badge/index')
                            })
                        })
                    })
routerMap.set('web-common/image-preload', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/image-preload/demo/basic').default,
                            code: require('-!text!../../components/web-common/image-preload/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/image-preload/image-preload/image-preload.type'),
                            typeCode: require('-!text!../../components/web-common/image-preload/image-preload/image-preload.type.ts'),
                            typePath: 'components/web-common/image-preload/image-preload/image-preload.type',
                            componentName: 'ImagePreload'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: null,
                                documents,
                                main: require('../components/web-common/image-preload/index')
                            })
                        })
                    })
routerMap.set('common/image', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/image/demo/basic').default,
                            code: require('-!text!../../components/common/image/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/image/demo/click-to-reload').default,
                            code: require('-!text!../../components/common/image/demo/click-to-reload.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/image/demo/error-addon').default,
                            code: require('-!text!../../components/common/image/demo/error-addon.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/image/demo/fallback-color').default,
                            code: require('-!text!../../components/common/image/demo/fallback-color.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/image/demo/fallback').default,
                            code: require('-!text!../../components/common/image/demo/fallback.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/image/image/image.type'),
                            typeCode: require('-!text!../../components/common/image/image/image.type.ts'),
                            typePath: 'components/common/image/image/image.type',
                            componentName: 'Image'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/image/package.json')),
                                documents,
                                main: require('../components/common/image/index')
                            })
                        })
                    })
routerMap.set('common/gif', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/gif/demo/basic').default,
                            code: require('-!text!../../components/common/gif/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/gif/demo/click-to-play').default,
                            code: require('-!text!../../components/common/gif/demo/click-to-play.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/gif/gif/gif.type'),
                            typeCode: require('-!text!../../components/common/gif/gif/gif.type.ts'),
                            typePath: 'components/common/gif/gif/gif.type',
                            componentName: 'Gif'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/gif/package.json')),
                                documents,
                                main: require('../components/common/gif/index')
                            })
                        })
                    })
routerMap.set('common/image-zoom', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/image-zoom/demo/basic').default,
                            code: require('-!text!../../components/common/image-zoom/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/image-zoom/image-zoom/image-zoom.type'),
                            typeCode: require('-!text!../../components/common/image-zoom/image-zoom/image-zoom.type.ts'),
                            typePath: 'components/common/image-zoom/image-zoom/image-zoom.type',
                            componentName: 'ImageZoom'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/image-zoom/package.json')),
                                documents,
                                main: require('../components/common/image-zoom/index')
                            })
                        })
                    })
routerMap.set('common/image-viewer', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/image-viewer/demo/basic').default,
                            code: require('-!text!../../components/common/image-viewer/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/image-viewer/image-viewer/image-viewer.type'),
                            typeCode: require('-!text!../../components/common/image-viewer/image-viewer/image-viewer.type.ts'),
                            typePath: 'components/common/image-viewer/image-viewer/image-viewer.type',
                            componentName: 'ImageViewer'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/image-viewer/package.json')),
                                documents,
                                main: require('../components/common/image-viewer/index')
                            })
                        })
                    })
routerMap.set('common/transmit-transparently', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/transmit-transparently/demo/basic').default,
                            code: require('-!text!../../components/common/transmit-transparently/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/transmit-transparently/demo/ignore').default,
                            code: require('-!text!../../components/common/transmit-transparently/demo/ignore.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/transmit-transparently/transmit-transparently/transmit-transparently.type'),
                            typeCode: require('-!text!../../components/common/transmit-transparently/transmit-transparently/transmit-transparently.type.ts'),
                            typePath: 'components/common/transmit-transparently/transmit-transparently/transmit-transparently.type',
                            componentName: 'TransmitTransparently'
                        })
                    
                        documents.push({
                            type: require('../components/common/transmit-transparently/others/others.type'),
                            typeCode: require('-!text!../../components/common/transmit-transparently/others/others.type.ts'),
                            typePath: 'components/common/transmit-transparently/others/others.type',
                            componentName: 'others'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/transmit-transparently/package.json')),
                                documents,
                                main: require('../components/common/transmit-transparently/index')
                            })
                        })
                    })
routerMap.set('common/auto-bind', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/auto-bind/demo/bind-class').default,
                            code: require('-!text!../../components/common/auto-bind/demo/bind-class.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/auto-bind/demo/bind-method').default,
                            code: require('-!text!../../components/common/auto-bind/demo/bind-method.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/auto-bind/auto-bind-method/auto-bind-method.type'),
                            typeCode: require('-!text!../../components/common/auto-bind/auto-bind-method/auto-bind-method.type.ts'),
                            typePath: 'components/common/auto-bind/auto-bind-method/auto-bind-method.type',
                            componentName: 'autoBindMethod'
                        })
                    
                        documents.push({
                            type: require('../components/common/auto-bind/auto-bind-class/auto-bind-class.type'),
                            typeCode: require('-!text!../../components/common/auto-bind/auto-bind-class/auto-bind-class.type.ts'),
                            typePath: 'components/common/auto-bind/auto-bind-class/auto-bind-class.type',
                            componentName: 'autoBindClass'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/auto-bind/package.json')),
                                documents,
                                main: require('../components/common/auto-bind/index')
                            })
                        })
                    })
routerMap.set('wefan/image', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/image/demo/basic').default,
                            code: require('-!text!../../components/wefan/image/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/wefan/image/demo/click-to-play').default,
                            code: require('-!text!../../components/wefan/image/demo/click-to-play.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/wefan/image/demo/error').default,
                            code: require('-!text!../../components/wefan/image/demo/error.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/wefan/image/image/image.type'),
                            typeCode: require('-!text!../../components/wefan/image/image/image.type.ts'),
                            typePath: 'components/wefan/image/image/image.type',
                            componentName: 'Image'
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/wefan/image/package.json')),
                                documents,
                                main: require('../components/wefan/image/index')
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
                    
                        demoLists.push({
                            Class: require('../components/wefan/resource-card/demo/title').default,
                            code: require('-!text!../../components/wefan/resource-card/demo/title.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/wefan/resource-card/resource-card/resource-card.type'),
                            typeCode: require('-!text!../../components/wefan/resource-card/resource-card/resource-card.type.ts'),
                            typePath: 'components/wefan/resource-card/resource-card/resource-card.type',
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
                            typePath: 'components/wefan/navbar/navbar/navbar.type',
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
    