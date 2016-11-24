import * as EditorManager from '../../../gaea-editor-manager/gaea-editor-manager';
import Store from './store';
import Action from './action';
export interface PropsDefine {
    ApplicationStore?: EditorManager.ApplicationStore;
    PublishStore?: Store;
    PublishAction?: Action;
}
export declare class Props implements PropsDefine {
}
export interface StateDefine {
    show?: boolean;
    selectedVersion?: string;
}
export declare class State implements StateDefine {
    show: boolean;
}
