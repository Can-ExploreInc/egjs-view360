import Component from "@egjs/component";
import { vec3 } from "gl-matrix";
export default class DeviceMotion extends Component<{
    devicemotion: {
        inputEvent: DeviceMotionEvent | {
            deviceorientation: {
                alpha: number;
                beta: number;
                gamma: number;
            };
        };
    };
}> {
    readonly isWithoutDeviceMotion: boolean;
    readonly isAndroid: boolean;
    stillGyroVec: vec3;
    rawGyroVec: vec3;
    adjustedGyroVec: vec3;
    lastDevicemotionTimestamp: number;
    private _timer;
    private _isEnabled;
    constructor();
    enable(): void;
    disable(): void;
    private _onChromeWithoutDeviceMotion;
    private _onDeviceOrientation;
    private _onDeviceMotion;
}
