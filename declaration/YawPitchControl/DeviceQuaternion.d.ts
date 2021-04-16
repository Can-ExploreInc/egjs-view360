/// <reference types="gl-matrix" />
import Component from "@egjs/component";
export default class DeviceQuaternion extends Component<{
    change: {
        isTrusted: boolean;
    };
}> {
    private _fusionPoseSensor;
    private _quaternion;
    constructor();
    getCombinedQuaternion(yaw: number): import("gl-matrix").mat2;
    destroy(): void;
}
