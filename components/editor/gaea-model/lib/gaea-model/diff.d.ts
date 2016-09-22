declare namespace FitGaea {
    interface Diff {
        type: 'add' | 'move' | 'remove' | 'exchange' | 'update' | 'paste' | 'reset' | 'addCombo';
        mapUniqueKey: string;
        add?: {
            uniqueId: string;
            parentMapUniqueKey: string;
            index: number;
        };
        move?: {
            targetParentMapUniqueKey: string;
            sourceParentMapUniqueKey: string;
            targetIndex: number;
            sourceIndex: number;
        };
        remove?: DiffRemove;
        exchange?: {
            oldIndex: number;
            newIndex: number;
        };
        update?: {
            editOptions: ComponentPropsGaeaEdit;
            oldValue: ComponentProps;
            newValue: ComponentProps;
        };
        paste?: DiffRemove;
        reset?: {
            beforeProps: ComponentProps;
            beforeName: string;
        };
        addCombo?: {
            parentMapUniqueKey: string;
            index: number;
            componentInfo: ViewportComponentFullInfo;
        };
    }
    interface DiffRemove extends ViewportComponentFullInfo {
        parentMapUniqueKey: string;
        index: number;
    }
}
