import { PanInput } from "@egjs/axes";
import { IInputTypeObserver } from "@egjs/axes/declaration/inputType/InputType";
import { PanInputOption } from "@egjs/axes/declaration/inputType/PanInput";
export default class RotationPanInput extends PanInput {
    private _useRotation;
    private _screenRotationAngle;
    private _userDirection;
    constructor(el: HTMLElement, options?: Partial<{
        useRotation: boolean;
    } & PanInputOption>);
    setUseRotation(useRotation: boolean): void;
    connect(observer: IInputTypeObserver): import("@egjs/axes/declaration/inputType/InputType").IInputType;
    destroy(): void;
    private getOffset;
}
