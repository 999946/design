declare namespace FitGaea {
    interface ViewportComponentInfo {
        props: ComponentProps;
        layoutChilds?: Array<string>;
        parentMapUniqueKey: string;
    }
    interface MovingComponent {
        mapUniqueKey: string;
        isNew: boolean;
        uniqueKey: string;
    }
    interface HoverComponentSpec {
        left: number;
        top: number;
        width: number;
        height: number;
        hovering: boolean;
    }
    interface ViewportComponentFullInfo {
        mapUniqueKey: string;
        componentInfo: ViewportComponentInfo;
        childs: {
            [mapUniqueKey: string]: ViewportComponentInfo;
        };
    }
}
