import { XRFrame, XRSession, XRSessionInit } from "webxr";
interface XRSessionOptions extends XRSessionInit {
    [key: string]: any;
}
declare class XRManager {
    private _xrSession;
    private _xrLayer;
    private _xrRefSpace;
    private _options;
    private _yawOffset;
    private _presenting;
    constructor(options?: XRSessionOptions);
    get context(): XRSession;
    destroy: () => void;
    canRender(frame: XRFrame): boolean;
    beforeRender(gl: WebGLRenderingContext, frame: XRFrame): void;
    afterRender(): void;
    getEyeParams(gl: WebGLRenderingContext, frame: XRFrame): {
        viewport: number[];
        mvMatrix: Float32Array;
        pMatrix: Float32Array;
    }[];
    isPresenting(): boolean;
    addEndCallback(callback: (evt?: Event) => any): void;
    removeEndCallback(callback: (evt?: Event) => any): void;
    requestPresent(canvas: HTMLCanvasElement, gl: WebGLRenderingContext): any;
    setYawOffset(offset: number): void;
    private _setSession;
    private _clear;
}
export default XRManager;
