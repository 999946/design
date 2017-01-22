
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
                            componentName: 'Button',
                            sourceCode: require('-!text!../../components/web-common/button/button/button.component.tsx')
                        })
                    
                        documents.push({
                            type: require('../components/web-common/button/button-group/button-group.type'),
                            typeCode: require('-!text!../../components/web-common/button/button-group/button-group.type.ts'),
                            typePath: 'components/web-common/button/button-group/button-group.type',
                            componentName: 'ButtonGroup',
                            sourceCode: require('-!text!../../components/web-common/button/button-group/button-group.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/button/package.json')),
                                documents,
                                main: require('../components/web-common/button/index')
                            })
                        })
                    })
routerMap.set('web-common/input', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/input/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/2.callback').default,
                            code: require('-!text!../../components/web-common/input/demo/2.callback.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/3.center').default,
                            code: require('-!text!../../components/web-common/input/demo/3.center.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/4.default').default,
                            code: require('-!text!../../components/web-common/input/demo/4.default.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/5.disabled').default,
                            code: require('-!text!../../components/web-common/input/demo/5.disabled.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/6.highlight').default,
                            code: require('-!text!../../components/web-common/input/demo/6.highlight.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/7.no-label').default,
                            code: require('-!text!../../components/web-common/input/demo/7.no-label.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/8.validate').default,
                            code: require('-!text!../../components/web-common/input/demo/8.validate.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/input/demo/9.normal').default,
                            code: require('-!text!../../components/web-common/input/demo/9.normal.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/input/input/input.type'),
                            typeCode: require('-!text!../../components/web-common/input/input/input.type.ts'),
                            typePath: 'components/web-common/input/input/input.type',
                            componentName: 'Input',
                            sourceCode: require('-!text!../../components/web-common/input/input/input.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/input/package.json')),
                                documents,
                                main: require('../components/web-common/input/index')
                            })
                        })
                    })
routerMap.set('web-common/number', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/number/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/number/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/number/demo/2.speed').default,
                            code: require('-!text!../../components/web-common/number/demo/2.speed.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/number/demo/3.step').default,
                            code: require('-!text!../../components/web-common/number/demo/3.step.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/number/demo/4.unit').default,
                            code: require('-!text!../../components/web-common/number/demo/4.unit.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/number/number/number.type'),
                            typeCode: require('-!text!../../components/web-common/number/number/number.type.ts'),
                            typePath: 'components/web-common/number/number/number.type',
                            componentName: 'Number',
                            sourceCode: require('-!text!../../components/web-common/number/number/number.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/number/package.json')),
                                documents,
                                main: require('../components/web-common/number/index')
                            })
                        })
                    })
routerMap.set('web-common/auto-complete', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/auto-complete/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/auto-complete/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/auto-complete/demo/2.callback').default,
                            code: require('-!text!../../components/web-common/auto-complete/demo/2.callback.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/auto-complete/demo/3.local').default,
                            code: require('-!text!../../components/web-common/auto-complete/demo/3.local.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/auto-complete/demo/4.auto-filter').default,
                            code: require('-!text!../../components/web-common/auto-complete/demo/4.auto-filter.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/auto-complete/auto-complete/auto-complete.type'),
                            typeCode: require('-!text!../../components/web-common/auto-complete/auto-complete/auto-complete.type.ts'),
                            typePath: 'components/web-common/auto-complete/auto-complete/auto-complete.type',
                            componentName: 'AutoComplete',
                            sourceCode: require('-!text!../../components/web-common/auto-complete/auto-complete/auto-complete.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/auto-complete/package.json')),
                                documents,
                                main: require('../components/web-common/auto-complete/index')
                            })
                        })
                    })
routerMap.set('web-common/switch', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/switch/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/switch/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/switch/demo/2.control').default,
                            code: require('-!text!../../components/web-common/switch/demo/2.control.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/switch/demo/3.size').default,
                            code: require('-!text!../../components/web-common/switch/demo/3.size.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/switch/demo/4.type').default,
                            code: require('-!text!../../components/web-common/switch/demo/4.type.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/switch/demo/5.disabled').default,
                            code: require('-!text!../../components/web-common/switch/demo/5.disabled.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/switch/switch/switch.type'),
                            typeCode: require('-!text!../../components/web-common/switch/switch/switch.type.ts'),
                            typePath: 'components/web-common/switch/switch/switch.type',
                            componentName: 'Switch',
                            sourceCode: require('-!text!../../components/web-common/switch/switch/switch.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/switch/package.json')),
                                documents,
                                main: require('../components/web-common/switch/index')
                            })
                        })
                    })
routerMap.set('web-common/radio', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/radio/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/radio/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/radio/demo/2.group').default,
                            code: require('-!text!../../components/web-common/radio/demo/2.group.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/radio/demo/3.button').default,
                            code: require('-!text!../../components/web-common/radio/demo/3.button.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/radio/demo/4.control').default,
                            code: require('-!text!../../components/web-common/radio/demo/4.control.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/radio/demo/5.disabled').default,
                            code: require('-!text!../../components/web-common/radio/demo/5.disabled.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/radio/demo/6.size').default,
                            code: require('-!text!../../components/web-common/radio/demo/6.size.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/radio/radio/radio.type'),
                            typeCode: require('-!text!../../components/web-common/radio/radio/radio.type.ts'),
                            typePath: 'components/web-common/radio/radio/radio.type',
                            componentName: 'Radio',
                            sourceCode: require('-!text!../../components/web-common/radio/radio/radio.component.tsx')
                        })
                    
                        documents.push({
                            type: require('../components/web-common/radio/radio-group/radio-group.type'),
                            typeCode: require('-!text!../../components/web-common/radio/radio-group/radio-group.type.ts'),
                            typePath: 'components/web-common/radio/radio-group/radio-group.type',
                            componentName: 'RadioGroup',
                            sourceCode: require('-!text!../../components/web-common/radio/radio-group/radio-group.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/radio/package.json')),
                                documents,
                                main: require('../components/web-common/radio/index')
                            })
                        })
                    })
routerMap.set('web-common/checkbox', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/checkbox/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/checkbox/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/checkbox/demo/2.disabled').default,
                            code: require('-!text!../../components/web-common/checkbox/demo/2.disabled.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/checkbox/demo/3.size').default,
                            code: require('-!text!../../components/web-common/checkbox/demo/3.size.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/checkbox/demo/4.control').default,
                            code: require('-!text!../../components/web-common/checkbox/demo/4.control.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/checkbox/checkbox/checkbox.type'),
                            typeCode: require('-!text!../../components/web-common/checkbox/checkbox/checkbox.type.ts'),
                            typePath: 'components/web-common/checkbox/checkbox/checkbox.type',
                            componentName: 'Checkbox',
                            sourceCode: require('-!text!../../components/web-common/checkbox/checkbox/checkbox.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/checkbox/package.json')),
                                documents,
                                main: require('../components/web-common/checkbox/index')
                            })
                        })
                    })
routerMap.set('web-common/select', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/select/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/select/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/select/demo/2.disabled').default,
                            code: require('-!text!../../components/web-common/select/demo/2.disabled.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/select/demo/3.option').default,
                            code: require('-!text!../../components/web-common/select/demo/3.option.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/select/demo/4.group').default,
                            code: require('-!text!../../components/web-common/select/demo/4.group.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/select/demo/5.search').default,
                            code: require('-!text!../../components/web-common/select/demo/5.search.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/select/demo/6.simple').default,
                            code: require('-!text!../../components/web-common/select/demo/6.simple.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/select/demo/7.cascader').default,
                            code: require('-!text!../../components/web-common/select/demo/7.cascader.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/select/demo/8.cascader-group').default,
                            code: require('-!text!../../components/web-common/select/demo/8.cascader-group.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/select/select/select.type'),
                            typeCode: require('-!text!../../components/web-common/select/select/select.type.ts'),
                            typePath: 'components/web-common/select/select/select.type',
                            componentName: 'Select',
                            sourceCode: require('-!text!../../components/web-common/select/select/select.component.tsx')
                        })
                    
                        documents.push({
                            type: require('../components/web-common/select/option/option.type'),
                            typeCode: require('-!text!../../components/web-common/select/option/option.type.ts'),
                            typePath: 'components/web-common/select/option/option.type',
                            componentName: 'Option',
                            sourceCode: require('-!text!../../components/web-common/select/option/option.component.tsx')
                        })
                    
                        documents.push({
                            type: require('../components/web-common/select/opt-group/opt-group.type'),
                            typeCode: require('-!text!../../components/web-common/select/opt-group/opt-group.type.ts'),
                            typePath: 'components/web-common/select/opt-group/opt-group.type',
                            componentName: 'OptGroup',
                            sourceCode: require('-!text!../../components/web-common/select/opt-group/opt-group.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/select/package.json')),
                                documents,
                                main: require('../components/web-common/select/index')
                            })
                        })
                    })
routerMap.set('web-common/collapse', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/collapse/demo/accordion').default,
                            code: require('-!text!../../components/web-common/collapse/demo/accordion.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/collapse/demo/basic').default,
                            code: require('-!text!../../components/web-common/collapse/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/collapse/collapse/collapse.type'),
                            typeCode: require('-!text!../../components/web-common/collapse/collapse/collapse.type.ts'),
                            typePath: 'components/web-common/collapse/collapse/collapse.type',
                            componentName: 'Collapse',
                            sourceCode: require('-!text!../../components/web-common/collapse/collapse/collapse.component.tsx')
                        })
                    
                        documents.push({
                            type: require('../components/web-common/collapse/coll-panel/coll-panel.type'),
                            typeCode: require('-!text!../../components/web-common/collapse/coll-panel/coll-panel.type.ts'),
                            typePath: 'components/web-common/collapse/coll-panel/coll-panel.type',
                            componentName: 'CollPanel',
                            sourceCode: require('-!text!../../components/web-common/collapse/coll-panel/coll-panel.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/collapse/package.json')),
                                documents,
                                main: require('../components/web-common/collapse/index')
                            })
                        })
                    })
routerMap.set('web-common/tooltip', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/2.render').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/2.render.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/3.position').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/3.position.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/4.auto-position').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/4.auto-position.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/5.click').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/5.click.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tooltip/demo/6.shadow').default,
                            code: require('-!text!../../components/web-common/tooltip/demo/6.shadow.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/tooltip/tooltip/tooltip.type'),
                            typeCode: require('-!text!../../components/web-common/tooltip/tooltip/tooltip.type.tsx'),
                            typePath: 'components/web-common/tooltip/tooltip/tooltip.type',
                            componentName: 'Tooltip',
                            sourceCode: require('-!text!../../components/web-common/tooltip/tooltip/tooltip.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/tooltip/package.json')),
                                documents,
                                main: require('../components/web-common/tooltip/index')
                            })
                        })
                    })
routerMap.set('web-common/message', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/message/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/message/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/message/demo/2.callback').default,
                            code: require('-!text!../../components/web-common/message/demo/2.callback.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/message/demo/3.duration').default,
                            code: require('-!text!../../components/web-common/message/demo/3.duration.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/message/demo/4.type').default,
                            code: require('-!text!../../components/web-common/message/demo/4.type.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/message/message/message.type'),
                            typeCode: require('-!text!../../components/web-common/message/message/message.type.ts'),
                            typePath: 'components/web-common/message/message/message.type',
                            componentName: 'Message',
                            sourceCode: require('-!text!../../components/web-common/message/message/message.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/message/package.json')),
                                documents,
                                main: require('../components/web-common/message/index')
                            })
                        })
                    })
routerMap.set('web-common/modal', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/modal/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/modal/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/modal/demo/2.custom').default,
                            code: require('-!text!../../components/web-common/modal/demo/2.custom.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/modal/demo/3.custom-button').default,
                            code: require('-!text!../../components/web-common/modal/demo/3.custom-button.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/modal/demo/4.size').default,
                            code: require('-!text!../../components/web-common/modal/demo/4.size.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/modal/demo/5.backdrop').default,
                            code: require('-!text!../../components/web-common/modal/demo/5.backdrop.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/modal/modal/modal.type'),
                            typeCode: require('-!text!../../components/web-common/modal/modal/modal.type.ts'),
                            typePath: 'components/web-common/modal/modal/modal.type',
                            componentName: 'Modal',
                            sourceCode: require('-!text!../../components/web-common/modal/modal/modal.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/modal/package.json')),
                                documents,
                                main: require('../components/web-common/modal/index')
                            })
                        })
                    })
routerMap.set('web-common/tabs', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/tabs/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/tabs/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tabs/demo/2.old-style').default,
                            code: require('-!text!../../components/web-common/tabs/demo/2.old-style.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/tabs/tabs/tabs.type'),
                            typeCode: require('-!text!../../components/web-common/tabs/tabs/tabs.type.ts'),
                            typePath: 'components/web-common/tabs/tabs/tabs.type',
                            componentName: 'Tabs',
                            sourceCode: require('-!text!../../components/web-common/tabs/tabs/tabs.component.tsx')
                        })
                    
                        documents.push({
                            type: require('../components/web-common/tabs/tab-panel/tab-panel.type'),
                            typeCode: require('-!text!../../components/web-common/tabs/tab-panel/tab-panel.type.ts'),
                            typePath: 'components/web-common/tabs/tab-panel/tab-panel.type',
                            componentName: 'TabPanel',
                            sourceCode: require('-!text!../../components/web-common/tabs/tab-panel/tab-panel.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/tabs/package.json')),
                                documents,
                                main: require('../components/web-common/tabs/index')
                            })
                        })
                    })
routerMap.set('web-common/tree', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/tree/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/tree/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tree/demo/2.expend-all').default,
                            code: require('-!text!../../components/web-common/tree/demo/2.expend-all.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/tree/demo/3.toggle-by-arrow').default,
                            code: require('-!text!../../components/web-common/tree/demo/3.toggle-by-arrow.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/tree/tree/tree.type'),
                            typeCode: require('-!text!../../components/web-common/tree/tree/tree.type.ts'),
                            typePath: 'components/web-common/tree/tree/tree.type',
                            componentName: 'Tree',
                            sourceCode: require('-!text!../../components/web-common/tree/tree/tree.component.tsx')
                        })
                    
                        documents.push({
                            type: require('../components/web-common/tree/tree-node/tree-node.type'),
                            typeCode: require('-!text!../../components/web-common/tree/tree-node/tree-node.type.ts'),
                            typePath: 'components/web-common/tree/tree-node/tree-node.type',
                            componentName: 'TreeNode',
                            sourceCode: require('-!text!../../components/web-common/tree/tree-node/tree-node.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/tree/package.json')),
                                documents,
                                main: require('../components/web-common/tree/index')
                            })
                        })
                    })
routerMap.set('web-common/json-tree', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/json-tree/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/json-tree/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/json-tree/demo/2.root').default,
                            code: require('-!text!../../components/web-common/json-tree/demo/2.root.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/json-tree/json-tree/json-tree.type'),
                            typeCode: require('-!text!../../components/web-common/json-tree/json-tree/json-tree.type.ts'),
                            typePath: 'components/web-common/json-tree/json-tree/json-tree.type',
                            componentName: 'JsonTree',
                            sourceCode: require('-!text!../../components/web-common/json-tree/json-tree/json-tree.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/json-tree/package.json')),
                                documents,
                                main: require('../components/web-common/json-tree/index')
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
                            componentName: 'MarginPaddingEditor',
                            sourceCode: require('-!text!../../components/web-common/margin-padding-editor/margin-padding-editor/margin-padding-editor.component.tsx')
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
                            componentName: 'Badge',
                            sourceCode: require('-!text!../../components/web-common/badge/badge/badge.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/badge/package.json')),
                                documents,
                                main: require('../components/web-common/badge/index')
                            })
                        })
                    })
routerMap.set('web-common/loading', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/loading/demo/basic').default,
                            code: require('-!text!../../components/web-common/loading/demo/basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/loading/demo/size').default,
                            code: require('-!text!../../components/web-common/loading/demo/size.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/loading/loading/loading.type'),
                            typeCode: require('-!text!../../components/web-common/loading/loading/loading.type.ts'),
                            typePath: 'components/web-common/loading/loading/loading.type',
                            componentName: 'Loading',
                            sourceCode: require('-!text!../../components/web-common/loading/loading/loading.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/loading/package.json')),
                                documents,
                                main: require('../components/web-common/loading/index')
                            })
                        })
                    })
routerMap.set('web-common/timeago', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/timeago/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/timeago/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/timeago/demo/2.chinese').default,
                            code: require('-!text!../../components/web-common/timeago/demo/2.chinese.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/web-common/timeago/demo/3.lose').default,
                            code: require('-!text!../../components/web-common/timeago/demo/3.lose.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/timeago/timeago/timeago.type'),
                            typeCode: require('-!text!../../components/web-common/timeago/timeago/timeago.type.ts'),
                            typePath: 'components/web-common/timeago/timeago/timeago.type',
                            componentName: 'Timeago',
                            sourceCode: require('-!text!../../components/web-common/timeago/timeago/timeago.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/timeago/package.json')),
                                documents,
                                main: require('../components/web-common/timeago/index')
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
                            componentName: 'ImagePreload',
                            sourceCode: require('-!text!../../components/web-common/image-preload/image-preload/image-preload.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/image-preload/package.json')),
                                documents,
                                main: require('../components/web-common/image-preload/index')
                            })
                        })
                    })
routerMap.set('web-common/render-to', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/web-common/render-to/demo/1.basic').default,
                            code: require('-!text!../../components/web-common/render-to/demo/1.basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/web-common/render-to/render-to/render-to.type'),
                            typeCode: require('-!text!../../components/web-common/render-to/render-to/render-to.type.ts'),
                            typePath: 'components/web-common/render-to/render-to/render-to.type',
                            componentName: 'RenderTo',
                            sourceCode: require('-!text!../../components/web-common/render-to/render-to/render-to.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/web-common/render-to/package.json')),
                                documents,
                                main: require('../components/web-common/render-to/index')
                            })
                        })
                    })
routerMap.set('common/button', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/button/demo/1.basic').default,
                            code: require('-!text!../../components/common/button/demo/1.basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/button/button/button.type'),
                            typeCode: require('-!text!../../components/common/button/button/button.type.ts'),
                            typePath: 'components/common/button/button/button.type',
                            componentName: 'Button',
                            sourceCode: require('-!text!../../components/common/button/button/button.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/button/package.json')),
                                documents,
                                main: require('../components/common/button/index')
                            })
                        })
                    })
routerMap.set('common/line', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/line/demo/1.basic').default,
                            code: require('-!text!../../components/common/line/demo/1.basic.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/common/line/demo/2.vertical').default,
                            code: require('-!text!../../components/common/line/demo/2.vertical.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/line/line/line.type'),
                            typeCode: require('-!text!../../components/common/line/line/line.type.ts'),
                            typePath: 'components/common/line/line/line.type',
                            componentName: 'Line',
                            sourceCode: require('-!text!../../components/common/line/line/line.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/line/package.json')),
                                documents,
                                main: require('../components/common/line/index')
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
                            componentName: 'Image',
                            sourceCode: require('-!text!../../components/common/image/image/image.component.tsx')
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
                            componentName: 'Gif',
                            sourceCode: require('-!text!../../components/common/gif/gif/gif.component.tsx')
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
                            componentName: 'ImageZoom',
                            sourceCode: require('-!text!../../components/common/image-zoom/image-zoom/image-zoom.component.tsx')
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
                            componentName: 'ImageViewer',
                            sourceCode: require('-!text!../../components/common/image-viewer/image-viewer/image-viewer.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/image-viewer/package.json')),
                                documents,
                                main: require('../components/common/image-viewer/index')
                            })
                        })
                    })
routerMap.set('common/swiper', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/swiper/demo/1.basic').default,
                            code: require('-!text!../../components/common/swiper/demo/1.basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/swiper/swiper/swiper.type'),
                            typeCode: require('-!text!../../components/common/swiper/swiper/swiper.type.ts'),
                            typePath: 'components/common/swiper/swiper/swiper.type',
                            componentName: 'Swiper',
                            sourceCode: require('-!text!../../components/common/swiper/swiper/swiper.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/swiper/package.json')),
                                documents,
                                main: require('../components/common/swiper/index')
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
                            componentName: 'TransmitTransparently',
                            sourceCode: require('-!text!../../components/common/transmit-transparently/transmit-transparently/transmit-transparently.component.tsx')
                        })
                    
                        documents.push({
                            type: require('../components/common/transmit-transparently/others/others.type'),
                            typeCode: require('-!text!../../components/common/transmit-transparently/others/others.type.ts'),
                            typePath: 'components/common/transmit-transparently/others/others.type',
                            componentName: 'others',
                            sourceCode: require('-!text!../../components/common/transmit-transparently/others/others.type.ts')
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
                            componentName: 'autoBindMethod',
                            sourceCode: require('-!text!../../components/common/auto-bind/auto-bind-method/auto-bind-method.type.ts')
                        })
                    
                        documents.push({
                            type: require('../components/common/auto-bind/auto-bind-class/auto-bind-class.type'),
                            typeCode: require('-!text!../../components/common/auto-bind/auto-bind-class/auto-bind-class.type.ts'),
                            typePath: 'components/common/auto-bind/auto-bind-class/auto-bind-class.type',
                            componentName: 'autoBindClass',
                            sourceCode: require('-!text!../../components/common/auto-bind/auto-bind-class/auto-bind-class.type.ts')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/auto-bind/package.json')),
                                documents,
                                main: require('../components/common/auto-bind/index')
                            })
                        })
                    })
routerMap.set('common/transparently-props', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/transparently-props/demo/basic').default,
                            code: require('-!text!../../components/common/transparently-props/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/transparently-props/transparently-props/transparently-props.type'),
                            typeCode: require('-!text!../../components/common/transparently-props/transparently-props/transparently-props.type.ts'),
                            typePath: 'components/common/transparently-props/transparently-props/transparently-props.type',
                            componentName: 'TransparentlyProps',
                            sourceCode: require('-!text!../../components/common/transparently-props/transparently-props/transparently-props.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/transparently-props/package.json')),
                                documents,
                                main: require('../components/common/transparently-props/index')
                            })
                        })
                    })
routerMap.set('common/transparently-native-props', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/transparently-native-props/demo/1.basic').default,
                            code: require('-!text!../../components/common/transparently-native-props/demo/1.basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/common/transparently-native-props/transparently-native-props/transparently-native-props.type'),
                            typeCode: require('-!text!../../components/common/transparently-native-props/transparently-native-props/transparently-native-props.type.ts'),
                            typePath: 'components/common/transparently-native-props/transparently-native-props/transparently-native-props.type',
                            componentName: 'TransparentlyNativeProps',
                            sourceCode: require('-!text!../../components/common/transparently-native-props/transparently-native-props/transparently-native-props.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/transparently-native-props/package.json')),
                                documents,
                                main: require('../components/common/transparently-native-props/index')
                            })
                        })
                    })
routerMap.set('common/inject-instance', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/inject-instance/demo/1.basic').default,
                            code: require('-!text!../../components/common/inject-instance/demo/1.basic.tsx')
                        })
                    
                            
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/inject-instance/package.json')),
                                documents,
                                main: require('../components/common/inject-instance/index')
                            })
                        })
                    })
routerMap.set('common/cli', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/common/cli/demo/1.basic').default,
                            code: require('-!text!../../components/common/cli/demo/1.basic.tsx')
                        })
                    
                            
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/common/cli/package.json')),
                                documents,
                                main: require('../components/common/cli/index')
                            })
                        })
                    })
routerMap.set('wefan/button', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/button/demo/1.basic').default,
                            code: require('-!text!../../components/wefan/button/demo/1.basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/wefan/button/button/button.type'),
                            typeCode: require('-!text!../../components/wefan/button/button/button.type.ts'),
                            typePath: 'components/wefan/button/button/button.type',
                            componentName: 'Button',
                            sourceCode: require('-!text!../../components/wefan/button/button/button.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/wefan/button/package.json')),
                                documents,
                                main: require('../components/wefan/button/index')
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
                            componentName: 'Image',
                            sourceCode: require('-!text!../../components/wefan/image/image/image.component.tsx')
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
                            componentName: 'ResourceCard',
                            sourceCode: require('-!text!../../components/wefan/resource-card/resource-card/resource-card.component.tsx')
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
                            componentName: 'Navbar',
                            sourceCode: require('-!text!../../components/wefan/navbar/navbar/navbar.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/wefan/navbar/package.json')),
                                documents,
                                main: require('../components/wefan/navbar/index')
                            })
                        })
                    })
routerMap.set('wefan/loading', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/loading/demo/1.basic').default,
                            code: require('-!text!../../components/wefan/loading/demo/1.basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/wefan/loading/loading/loading.type'),
                            typeCode: require('-!text!../../components/wefan/loading/loading/loading.type.ts'),
                            typePath: 'components/wefan/loading/loading/loading.type',
                            componentName: 'Loading',
                            sourceCode: require('-!text!../../components/wefan/loading/loading/loading.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/wefan/loading/package.json')),
                                documents,
                                main: require('../components/wefan/loading/index')
                            })
                        })
                    })
routerMap.set('wefan/gaea-components', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/wefan/gaea-components/demo/1.basic').default,
                            code: require('-!text!../../components/wefan/gaea-components/demo/1.basic.tsx')
                        })
                    
                            
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/wefan/gaea-components/package.json')),
                                documents,
                                main: require('../components/wefan/gaea-components/index')
                            })
                        })
                    })
routerMap.set('editor/gaea-editor', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/editor/gaea-editor/demo/1.web').default,
                            code: require('-!text!../../components/editor/gaea-editor/demo/1.web.tsx')
                        })
                    
                        demoLists.push({
                            Class: require('../components/editor/gaea-editor/demo/2.native').default,
                            code: require('-!text!../../components/editor/gaea-editor/demo/2.native.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/editor/gaea-editor/gaea-editor/gaea-editor.type'),
                            typeCode: require('-!text!../../components/editor/gaea-editor/gaea-editor/gaea-editor.type.tsx'),
                            typePath: 'components/editor/gaea-editor/gaea-editor/gaea-editor.type',
                            componentName: 'GaeaEditor',
                            sourceCode: require('-!text!../../components/editor/gaea-editor/gaea-editor/gaea-editor.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/editor/gaea-editor/package.json')),
                                documents,
                                main: require('../components/editor/gaea-editor/index')
                            })
                        })
                    })
routerMap.set('editor/gaea-preview', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/editor/gaea-preview/demo/basic').default,
                            code: require('-!text!../../components/editor/gaea-preview/demo/basic.tsx')
                        })
                    
                            
                        documents.push({
                            type: require('../components/editor/gaea-preview/gaea-preview/gaea-preview.type'),
                            typeCode: require('-!text!../../components/editor/gaea-preview/gaea-preview/gaea-preview.type.tsx'),
                            typePath: 'components/editor/gaea-preview/gaea-preview/gaea-preview.type',
                            componentName: 'GaeaPreview',
                            sourceCode: require('-!text!../../components/editor/gaea-preview/gaea-preview/gaea-preview.component.tsx')
                        })
                    
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/editor/gaea-preview/package.json')),
                                documents,
                                main: require('../components/editor/gaea-preview/index')
                            })
                        })
                    })
routerMap.set('editor/gaea-web-components', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/editor/gaea-web-components/demo/basic').default,
                            code: require('-!text!../../components/editor/gaea-web-components/demo/basic.tsx')
                        })
                    
                            
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/editor/gaea-web-components/package.json')),
                                documents,
                                main: require('../components/editor/gaea-web-components/index')
                            })
                        })
                    })
routerMap.set('editor/gaea-native-components', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/editor/gaea-native-components/demo/basic').default,
                            code: require('-!text!../../components/editor/gaea-native-components/demo/basic.tsx')
                        })
                    
                            
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/editor/gaea-native-components/package.json')),
                                documents,
                                main: require('../components/editor/gaea-native-components/index')
                            })
                        })
                    })
routerMap.set('editor/gaea-model', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/editor/gaea-model/demo/basic').default,
                            code: require('-!text!../../components/editor/gaea-model/demo/basic.tsx')
                        })
                    
                            
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/editor/gaea-model/package.json')),
                                documents,
                                main: require('../components/editor/gaea-model/index')
                            })
                        })
                    })
routerMap.set('editor/gaea-helper', (callback: any) => {
                        const demoLists: any = []
                        const documents: any = []
                        
                        require.ensure([], function (require: any) {
                            
                        demoLists.push({
                            Class: require('../components/editor/gaea-helper/demo/1.basic').default,
                            code: require('-!text!../../components/editor/gaea-helper/demo/1.basic.tsx')
                        })
                    
                            
                            
                            callback({
                                demos: demoLists,
                                packageJson: JSON.parse(require('-!text!../components/editor/gaea-helper/package.json')),
                                documents,
                                main: require('../components/editor/gaea-helper/index')
                            })
                        })
                    })

    
        export default routerMap
    