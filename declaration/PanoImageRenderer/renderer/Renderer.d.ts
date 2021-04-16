import Component from "@egjs/component";
import { mat4 } from "gl-matrix";
import { CubemapConfig, TileConfig } from "../../types";
declare const EVENTS: {
    ERROR: "error";
};
declare abstract class Renderer extends Component<{
    [EVENTS.ERROR]: {
        message: string;
    };
}> {
    static EVENTS: {
        ERROR: "error";
    };
    private _forceDimension;
    private _pixelCanvas;
    private _pixelContext;
    constructor();
    render({ gl, shaderProgram, indexBuffer, mvMatrix, pMatrix }: {
        gl: WebGLRenderingContext;
        shaderProgram: WebGLProgram;
        indexBuffer: WebGLBuffer;
        mvMatrix: mat4;
        pMatrix: mat4;
    }): void;
    getDimension(pixelSource: HTMLImageElement | HTMLVideoElement): {
        width: number;
        height: number;
    };
    updateShaderData(param: any): void;
    abstract getVertexPositionData(): number[];
    abstract getIndexData(): number[];
    abstract getTextureCoordData(imageConfig?: CubemapConfig): number[];
    abstract getVertexShaderSource(): string;
    abstract getFragmentShaderSource(): string;
    abstract bindTexture(gl: WebGLRenderingContext, texture: WebGLTexture, image: HTMLImageElement | HTMLVideoElement, imageConfig?: CubemapConfig): void;
    abstract updateTexture(gl: WebGLRenderingContext, image: HTMLImageElement | HTMLVideoElement, imageConfig?: CubemapConfig): void;
    protected _initPixelSource(image: HTMLImageElement | HTMLVideoElement, forceDimension?: Renderer["_forceDimension"]): void;
    protected _getPixelSource(image: HTMLImageElement | HTMLVideoElement): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    protected _extractTileConfig(imageConfig: CubemapConfig): TileConfig[];
    protected _triggerError(error: any): void;
}
export default Renderer;
