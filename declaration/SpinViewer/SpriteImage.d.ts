import Component from "@egjs/component";
export declare type SpriteImageEvent = {
    load: {
        target: HTMLElement;
        bgElement: HTMLDivElement;
    };
    imageError: {
        imageUrl?: string;
    };
};
declare class SpriteImage extends Component<SpriteImageEvent> {
    static VERSION: string;
    private _el;
    private _rowCount;
    private _colCount;
    private _totalCount;
    private _width;
    private _height;
    private _autoHeight;
    private _colRow;
    private _image;
    private _bg;
    private _autoPlayReservedInfo;
    private _autoPlayTimer;
    constructor(element: HTMLElement, options?: Partial<{
        imageUrl: string;
        rowCount: number;
        colCount: number;
        width: number | string;
        height: number | string;
        autoHeight: boolean;
        colRow: number[];
        frameIndex: number;
        scale: number;
    }>);
    private static _createBgDiv;
    private static _getSizeString;
    setFrameIndex(index: number): void;
    getFrameIndex(): number;
    setColRow(col: number, row: number): void;
    getColRow(): number[];
    stop(): void;
    play({ interval, playCount }?: {
        interval: number;
        playCount: number;
    }): void;
    toColRow(frameIndex: number): number[];
}
export default SpriteImage;
