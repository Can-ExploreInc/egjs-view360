declare class WebGLAnimator {
    private _callback;
    private _context;
    private _rafId;
    private _rafTimer;
    constructor();
    setCallback(callback: (...args: any[]) => any): void;
    setContext(context: any): void;
    start(): void;
    stop(): void;
    private _onLoop;
    private _onLoopNextTick;
}
export default WebGLAnimator;
