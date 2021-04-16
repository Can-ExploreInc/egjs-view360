import Component from "@egjs/component";
import { quat } from "gl-matrix";
import PosePredictor from "./lib/webvr-polyfill/pose-predictor";
import DeviceMotion from "./DeviceMotion";
import ComplementaryFilter from "./ComplementaryFilter";
export default class FusionPoseSensor extends Component<{
    change: {
        quaternion: quat;
    };
}> {
    deviceMotion: DeviceMotion | null;
    accelerometer: any;
    gyroscope: any;
    filter: ComplementaryFilter;
    posePredictor: PosePredictor;
    filterToWorldQ: any;
    isFirefoxAndroid: boolean;
    isIOS: boolean;
    isChromeUsingDegrees: boolean;
    inverseWorldToScreenQ: any;
    worldToScreenQ: any;
    originalPoseAdjustQ: any;
    resetQ: any;
    deviceOrientationFixQ: any;
    predictedQ: any;
    previousTimestampS: number;
    private _isEnabled;
    private _deviceOrientationQ;
    private _prevOrientation;
    private _alpha;
    constructor();
    enable(): void;
    disable(): void;
    isEnabled(): boolean;
    destroy(): void;
    getOrientation(): import("gl-matrix").mat2;
    private _triggerChange;
    private _convertFusionToPredicted;
    private _onDeviceMotionChange;
    private _onScreenOrientationChange;
    private _setScreenTransform;
}
