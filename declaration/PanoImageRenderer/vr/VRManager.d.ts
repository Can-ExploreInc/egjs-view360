declare class VRManager {
    private _vrDisplay;
    private _frameData;
    private _yawOffset;
    private _leftBounds;
    private _rightBounds;
    constructor();
    get context(): VRDisplay;
    destroy: () => void;
    canRender(): boolean;
    beforeRender(gl: WebGLRenderingContext): void;
    afterRender(): void;
    getEyeParams(gl: WebGLRenderingContext): {
        viewport: number[];
        mvMatrix: Float32Array;
        pMatrix: Float32Array;
    }[];
    isPresenting(): boolean;
    addEndCallback(callback: (evt?: Event) => any): void;
    removeEndCallback(callback: (evt?: Event) => any): void;
    requestPresent(canvas: HTMLCanvasElement): Promise<any>;
    setYawOffset(offset: number): void;
    private _setDisplay;
    private _clear;
}
export default VRManager;
