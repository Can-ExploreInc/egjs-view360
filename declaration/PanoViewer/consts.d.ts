import { GYRO_MODE } from "../YawPitchControl/consts";
declare const ERROR_TYPE: {
    INVALID_DEVICE: number;
    NO_WEBGL: number;
    FAIL_IMAGE_LOAD: number;
    FAIL_BIND_TEXTURE: number;
    INVALID_RESOURCE: number;
    RENDERING_CONTEXT_LOST: number;
};
declare const EVENTS: {
    READY: "ready";
    VIEW_CHANGE: "viewChange";
    ANIMATION_END: "animationEnd";
    ERROR: "error";
};
declare const PROJECTION_TYPE: {
    EQUIRECTANGULAR: "equirectangular";
    CUBEMAP: "cubemap";
    CUBESTRIP: "cubestrip";
    PANORAMA: "panorama";
    STEREOSCOPIC_EQUI: "stereoequi";
};
declare const STEREO_FORMAT: {
    TOP_BOTTOM: "3dv";
    LEFT_RIGHT: "3dh";
    NONE: "";
};
export { GYRO_MODE, EVENTS, ERROR_TYPE, PROJECTION_TYPE, STEREO_FORMAT };
