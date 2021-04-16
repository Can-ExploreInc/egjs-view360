import Component from "@egjs/component";
import FusionPoseSensor from "./FusionPoseSensor";
import { IInputTypeObserver } from "@egjs/axes/declaration/inputType/InputType";
export default class TiltMotionInput extends Component<{}> {
    element: HTMLElement;
    options: {
        scale: number;
        threshold: number;
    };
    fusionPoseSensor: FusionPoseSensor | null;
    axes: string[];
    observer: IInputTypeObserver | null;
    private _prevQuaternion;
    private _quaternion;
    constructor(el: HTMLElement, options?: Partial<{
        scale: number;
        threshold: number;
    }>);
    mapAxes(axes: string[]): void;
    connect(observer: IInputTypeObserver): this;
    disconnect(): this;
    destroy(): void;
    private _onPoseChange;
    private _attachEvent;
    private _dettachEvent;
}
