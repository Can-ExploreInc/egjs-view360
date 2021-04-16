import Component from "@egjs/component";
import { ValueOf } from "../types";
export declare type PanoViewerEvent = {
    ready: void;
    viewChange: {
        yaw: number;
        pitch: number;
        fov: number;
    };
    animationEnd: {
        isTrusted: boolean;
    };
    error: {
        type: number;
        message: string;
    };
};
declare class PanoViewer extends Component<PanoViewerEvent> {
    static VERSION: string;
    static ERROR_TYPE: {
        INVALID_DEVICE: number;
        NO_WEBGL: number;
        FAIL_IMAGE_LOAD: number;
        FAIL_BIND_TEXTURE: number;
        INVALID_RESOURCE: number;
        RENDERING_CONTEXT_LOST: number;
    };
    static EVENTS: {
        READY: "ready";
        VIEW_CHANGE: "viewChange";
        ANIMATION_END: "animationEnd";
        ERROR: "error";
    };
    static PROJECTION_TYPE: {
        EQUIRECTANGULAR: "equirectangular";
        CUBEMAP: "cubemap";
        CUBESTRIP: "cubestrip";
        PANORAMA: "panorama";
        STEREOSCOPIC_EQUI: "stereoequi";
    };
    static GYRO_MODE: {
        NONE: "none";
        YAWPITCH: "yawPitch";
        VR: "VR";
    };
    static ProjectionType: {
        EQUIRECTANGULAR: "equirectangular";
        CUBEMAP: "cubemap";
        CUBESTRIP: "cubestrip";
        PANORAMA: "panorama";
        STEREOSCOPIC_EQUI: "stereoequi";
    };
    static STEREO_FORMAT: {
        TOP_BOTTOM: "3dv";
        LEFT_RIGHT: "3dh";
        NONE: "";
    };
    static TOUCH_DIRECTION: {
        NONE: number;
        YAW: number;
        PITCH: number;
        ALL: number;
    };
    private _container;
    private _image;
    private _isVideo;
    private _projectionType;
    private _cubemapConfig;
    private _stereoFormat;
    private _width;
    private _height;
    private _yaw;
    private _pitch;
    private _fov;
    private _gyroMode;
    private _quaternion;
    private _aspectRatio;
    private _isReady;
    private _photoSphereRenderer;
    private _yawPitchControl;
    constructor(container: HTMLElement, options?: Partial<{
        image: string | HTMLElement;
        video: string | HTMLElement;
        projectionType: PanoViewer["_projectionType"];
        cubemapConfig: PanoViewer["_cubemapConfig"];
        stereoFormat: PanoViewer["_stereoFormat"];
        width: number;
        height: number;
        yaw: number;
        pitch: number;
        fov: number;
        showPolePoint: boolean;
        useZoom: boolean;
        useKeyboard: boolean;
        gyroMode: PanoViewer["_gyroMode"];
        yawRange: number[];
        pitchRange: number[];
        fovRange: number[];
        touchDirection: ValueOf<typeof PanoViewer.TOUCH_DIRECTION>;
    }>);
    static isSupported(): boolean;
    static isWebGLAvailable(): boolean;
    static isGyroSensorAvailable(callback: (isAvailable: boolean) => any): void;
    private static _isValidTouchDirection;
    getVideo(): HTMLVideoElement;
    setVideo(video: string | HTMLElement | {
        type: string;
        src: string;
    }, param?: Partial<{
        projectionType: PanoViewer["_projectionType"];
        cubemapConfig: PanoViewer["_cubemapConfig"];
        stereoFormat: PanoViewer["_stereoFormat"];
    }>): this;
    getImage(): HTMLImageElement | HTMLVideoElement | HTMLImageElement[];
    setImage(image: string | HTMLElement | {
        src: string;
        type: string;
    }, param?: Partial<{
        projectionType: PanoViewer["_projectionType"];
        cubemapConfig: PanoViewer["_cubemapConfig"];
        stereoFormat: PanoViewer["_stereoFormat"];
        isVideo: boolean;
    }>): this;
    keepUpdate(doUpdate: boolean): this;
    getProjectionType(): ValueOf<{
        EQUIRECTANGULAR: "equirectangular";
        CUBEMAP: "cubemap";
        CUBESTRIP: "cubestrip";
        PANORAMA: "panorama";
        STEREOSCOPIC_EQUI: "stereoequi";
    }>;
    enableSensor(): any;
    disableSensor(): this;
    enterVR(options?: {
        requiredFeatures?: any[];
        optionalFeatures?: any[];
        [key: string]: any;
    }): globalThis.Promise<string>;
    exitVR(): this;
    setUseZoom(useZoom: boolean): this;
    setUseKeyboard(useKeyboard: boolean): this;
    setGyroMode(gyroMode: PanoViewer["_gyroMode"]): this;
    setFovRange(range: number[]): this;
    getFovRange(): [number, number];
    updateViewportDimensions(size?: Partial<{
        width: number;
        height: number;
    }>): this;
    getFov(): number;
    getYaw(): number;
    getPitch(): number;
    getYawRange(): [number, number];
    getPitchRange(): [number, number];
    setYawRange(yawRange: number[]): this;
    setPitchRange(pitchRange: number[]): this;
    setShowPolePoint(showPolePoint: boolean): this;
    lookAt(orientation: Partial<{
        yaw: number;
        pitch: number;
        fov: number;
    }>, duration?: number): this;
    setTouchDirection(direction: number): this;
    getTouchDirection(): number;
    destroy(): this;
    private _initRenderer;
    private _updateYawPitchIfNeeded;
    private _bindRendererHandler;
    private _initYawPitchControl;
    private _activate;
    private _deactivate;
}
export default PanoViewer;
