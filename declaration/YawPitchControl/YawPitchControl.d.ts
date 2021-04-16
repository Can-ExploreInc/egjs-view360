import Component from "@egjs/component";
import { quat } from "gl-matrix";
import { GYRO_MODE } from "./consts";
import { ValueOf } from "../types";
export declare type YawPitchControlOptions = {
    element: HTMLElement | null;
    yaw: number;
    pitch: number;
    fov: number;
    showPolePoint: boolean;
    useZoom: boolean;
    useKeyboard: boolean;
    gyroMode: ValueOf<typeof GYRO_MODE>;
    touchDirection: number;
    yawRange: number[];
    pitchRange: number[];
    fovRange: number[];
    aspectRatio: number;
};
declare type YawPitchControlEvents = {
    change: {
        yaw: number;
        pitch: number;
        fov: number;
        quaternion: quat | null;
        targetElement: HTMLElement;
        isTrusted: boolean;
    };
    hold: {
        isTrusted: boolean;
    };
    animationEnd: {
        isTrusted: boolean;
    };
};
declare class YawPitchControl extends Component<YawPitchControlEvents> {
    static VERSION: string;
    static CONTROL_MODE_VR: number;
    static CONTROL_MODE_YAWPITCH: number;
    static TOUCH_DIRECTION_ALL: number;
    static TOUCH_DIRECTION_YAW: number;
    static TOUCH_DIRECTION_PITCH: number;
    static TOUCH_DIRECTION_NONE: number;
    private _element;
    private _initialFov;
    private _enabled;
    private _isAnimating;
    private _deviceQuaternion;
    private axes;
    private axesPanInput;
    private axesWheelInput;
    private axesTiltMotionInput;
    private axesPinchInput;
    private axesMoveKeyInput;
    constructor(options: Partial<YawPitchControlOptions>);
    updatePanScale(param?: Partial<{
        height: number;
    }>): this;
    option(): YawPitchControlOptions;
    option<K extends keyof YawPitchControlOptions>(key: K): YawPitchControlOptions[K];
    option<K extends keyof YawPitchControlOptions>(key: K, newValue: YawPitchControlOptions[K]): YawPitchControl;
    option(newOptions: Partial<YawPitchControlOptions>): YawPitchControl;
    enable(): this;
    disable(persistOrientation?: boolean): this;
    lookAt({ yaw, pitch, fov }: {
        yaw: any;
        pitch: any;
        fov: any;
    }, duration: any): void;
    getYawPitch(): {
        yaw: number;
        pitch: number;
    };
    getFov(): number;
    getQuaternion(): import("gl-matrix").mat2;
    shouldRenderWithQuaternion(): boolean;
    destroy(): void;
    private _initAxes;
    private _getValidatedOptions;
    private _getOptions;
    private _setOptions;
    private _applyOptions;
    private _togglePinchInputByOption;
    private _enableTouch;
    private _initDeviceQuaternion;
    private _getValidYawRange;
    private _getValidPitchRange;
    private _isCircular;
    private _updateControlScale;
    private _updatePitchRange;
    private _updateYawRange;
    private _triggerChange;
    private _adjustAspectRatio;
    private _lerp;
    private _resetOrientation;
}
export default YawPitchControl;
