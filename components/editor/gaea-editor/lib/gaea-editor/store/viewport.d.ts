import { ObservableMap } from 'mobx';
import Application from './application';
export default class Viewport {
    private application;
    constructor(application: Application);
    components: ObservableMap<FitGaea.ViewportComponentInfo>;
    rootMapUniqueKey: string;
    createRootUniqueId(): string;
    setRootUniqueId(uniqueId: string): void;
    setComponents(mapUniqueKey: string, componentInfo: FitGaea.ViewportComponentInfo): void;
    createUniqueId(): string;
    resetComponent(mapUniqueKey: string): void;
    addComponent(parentMapUniqueKey: string, index: number): {
        mapUniqueKey: string;
        component: FitGaea.ViewportComponentFullInfo;
    };
    sortComponents(parentMapUniqueKey: string, beforeIndex: number, afterIndex: number): void;
    isMovingComponent: boolean;
    startDragging(childMapUniqueKey: string, uniqueKey: string, isNew: boolean, dragStartParentElement?: Element, dragStartIndex?: number, source?: string): void;
    endDragging(): void;
    showLayoutBorder: boolean;
    setShowLayoutBorder(isShow: boolean): void;
    currentMovingComponent: FitGaea.MovingComponent;
    viewportHoverComponentSpec: FitGaea.HoverComponentSpec;
    treeHoverComponentSpec: FitGaea.HoverComponentSpec;
    dragStartParentElement: Element;
    dragStartIndex: number;
    rootDomInstance: Element;
    setRootDomInstance(rootDomInstance: Element): void;
    viewportDomInstance: Element;
    setViewportDomInstance(viewportDomInstance: Element): void;
    sectionContainerDomInstance: Element;
    setSectionContainerDomInstance(sectionContainerDomInstance: Element): void;
    currentHoverElement: Element;
    setHoverComponent(element: Element): void;
    resetComponentOutline(): void;
    setLeaveHover(): void;
    setTreeLeaveHover(): void;
    treeDomInstance: Element;
    setTreeDomInstance(treeDomInstance: Element): void;
    setHoverTreeComponent(element: Element): void;
    currentEditComponentMapUniqueKey: string;
    setCurrentEditComponentMapUniqueKey(mapUniqueKey: string): void;
    cancelEditComponent(): void;
    findComponentPathFromRoot(mapUniqueKey: string): string[];
    updateComponentOptionsValue(editOptions: FitGaea.ComponentPropsGaeaEdit, value: FitGaea.ComponentPropsOptionValue): void;
    updateComponentValue(field: string, value: FitGaea.ComponentPropsOptionValue): void;
    prepareWriteHistory(): void;
    writeHistory(): void;
    updateComponentValueWithNoHistory(field: string, value: FitGaea.ComponentPropsOptionValue): void;
    oldProps: FitGaea.ComponentProps;
    updateComponentOptionsValueByOptions(mapUniqueKey: string, editOptions: FitGaea.ComponentPropsGaeaEdit, value: FitGaea.ComponentPropsOptionValue): void;
    getPropsByField(props: FitGaea.ComponentProps, editOptions: FitGaea.ComponentPropsGaeaEdit): any;
    getPropsByFieldWithEditor(props: FitGaea.ComponentProps, editOptions: FitGaea.ComponentPropsGaeaEdit): any;
    setPropsByField(props: FitGaea.ComponentProps, field: string, value: FitGaea.ComponentPropsOptionValue): void;
    setPropsByFieldWithEditor(props: FitGaea.ComponentProps, editOptions: FitGaea.ComponentPropsGaeaEdit, value: FitGaea.ComponentPropsOptionValue): void;
    lastSelectMapUniqueKey: string;
    setLastSelectMapUniqueKey(mapUniqueKey: string): void;
    getIncrementComponentsInfo(): any;
    addNewComponent(mapUniqueKey: string, parentMapUniqueKey: string, uniqueId: string, index: number): void;
    addToParent(mapUniqueKey: string, parentMapUniqueKey: string, index: number): void;
    addComplexComponent(parentMapUniqueKey: string, mapUniqueKey: string, index: number, componentFullInfo: FitGaea.ViewportComponentFullInfo): void;
    operates: Array<FitGaea.Diff>;
    lastOperateComponents: any;
    initLastOperateComponents(lastOperateComponents: any): void;
    nowOperateIndex: number;
    saveOperate(diff: FitGaea.Diff): void;
    deleteComponent(mapUniqueKey: string, deleteChildComponents?: {
        [mapUniqueKey: string]: FitGaea.ViewportComponentInfo;
    }): {
        [mapUniqueKey: string]: FitGaea.ViewportComponentInfo;
    };
    undo(): void;
    redo(): void;
    canUndo: boolean;
    canRedo: boolean;
    dragTargetMapUniqueKey: string;
    dragTargetIndex: number;
    setDragTarget(mapUniqueKey: string, index: number): void;
    hoveringComponentMapUniqueKey: string;
    setHoveringComponentMapUniqueKey(mapUniqueKey: string): void;
    copyComponent: FitGaea.ViewportComponentFullInfo;
    copy(mapUniqueKey: string): boolean;
    createCopyComponentWithNewUniqueKey(originComponent: FitGaea.ViewportComponentFullInfo, parentMapUniqueKey: string): FitGaea.ViewportComponentFullInfo;
    paste(parentMapUniqueKey: string): boolean;
    getComponentFullInfoByMapUniqueKey(mapUniqueKey: string): FitGaea.ViewportComponentFullInfo;
    isShowSidebarAddon: boolean;
    showSidebarAddon(): void;
    hideSidebarAddon(): void;
    isShowLeftBar: boolean;
    leftBarType: string;
    showLeftBar(leftBarType: string): void;
    hideLeftBar(): void;
    showEditorPanelShadow: boolean;
    setShowEditorPanelShadow(show: boolean): void;
}
