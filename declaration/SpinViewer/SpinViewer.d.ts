import Component from "@egjs/component";
export declare type SpinViewerEvent = {
    load: {
        target: HTMLElement;
        bgElement: HTMLDivElement;
    };
    imageError: {
        imageUrl?: string;
    };
    change: {
        colRow: number[];
        frameIndex: number;
        angle: number;
    };
    animationEnd: {
        isTrusted: boolean;
    };
};
declare class SpinViewer extends Component<SpinViewerEvent> {
    static VERSION: string;
    private _el;
    private _sprites;
    private _axes;
    private _panInput;
    private _scale;
    private _panScale;
    private _frameCount;
    constructor(element: HTMLElement, options?: Partial<{
        imageUrl: string;
        rowCount: number;
        colCount: number;
        width: number | string;
        height: number | string;
        autoHeight: boolean;
        colRow: number[];
        scale: number;
    }>);
    setScale(scale: number): this;
    getScale(): number;
    spinBy(angle?: number, param?: {
        duration: number;
    }): this;
    spinTo(angle?: number, param?: {
        duration: number;
    }): this;
    getAngle(): number;
}
export default SpinViewer;
