import { TypedArray } from "../types";
export default class WebGLUtils {
    static createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader;
    static createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram;
    static initBuffer(gl: WebGLRenderingContext, target: number, data: TypedArray, itemSize: number, attr?: number): WebGLBuffer;
    static getWebglContext(canvas: HTMLCanvasElement, userContextAttributes?: WebGLContextAttributes): WebGLRenderingContext;
    static createTexture(gl: WebGLRenderingContext, textureTarget: number): WebGLTexture;
    static isWebGLAvailable(): boolean;
    static isStableWebGL(): boolean;
    static getErrorNameFromWebGLErrorCode(code: number | string): any;
    static texImage2D(gl: WebGLRenderingContext, target: number, pixels: TexImageSource): void;
    static getMaxTextureSize(gl: WebGLRenderingContext): any;
}
declare function setMaxTextureSizeForTestOnlyPurpose(size: number): void;
export { setMaxTextureSizeForTestOnlyPurpose };
