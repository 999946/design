declare namespace FitGaea {
    interface ComponentProps extends __React.HTMLProps<any> {
        gaeaUniqueKey: string;
        gaeaName: string;
        gaeaIcon?: string;
        gaeaEdit?: Array<ComponentPropsGaeaEdit>;
        [x: string]: any;
    }
    interface ComponentPropsOptionsArray extends ComponentPropsGaeaEdit {
        key: string;
    }
    interface ComponentPropsOptionsArrayValue {
        key: string;
        value: number | string;
    }
    interface ComponentPropsOptionsSelector {
        key: string;
        value: string;
    }
    type ComponentPropsOptionValue = number | string | boolean | Array<ComponentPropsOptionsArrayValue> | any;
    interface ComponentPropsGaeaEdit {
        field: string;
        label: string;
        editor: string;
        editable: boolean;
        array?: Array<ComponentPropsOptionsArrayValue>;
        selector?: Array<ComponentPropsOptionsSelector>;
        type?: string;
        isNull?: boolean;
        canNull?: boolean;
        notNullValue?: any;
    }
    interface SaveInfo {
        date: Date;
        pageInfo: any;
        id: string;
        isPublished?: boolean;
        publishCode?: string;
        remarks?: string;
    }
    interface SourceFile {
        type: string;
        name: string;
        order: number;
    }
    interface OnlineVersion {
        key: string;
        value: string;
    }
    interface ComboComponentInfo extends ViewportComponentFullInfo {
        name: string;
    }
}
