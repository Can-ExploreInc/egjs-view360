import Renderer from "./Renderer";
import { CubemapConfig } from "../../types";
export default class CubeStripRenderer extends Renderer {
    private _vertices;
    getVertexShaderSource(): string;
    getFragmentShaderSource(): string;
    getVertexPositionData(): number[];
    getIndexData(): number[];
    getTextureCoordData(imageConfig: CubemapConfig): number[];
    updateTexture(gl: WebGLRenderingContext, image: HTMLImageElement | HTMLVideoElement): void;
    bindTexture(gl: WebGLRenderingContext, texture: WebGLTexture, image: HTMLImageElement | HTMLVideoElement): void;
    private _transformCoord;
    private _shrinkCoord;
    private _rotateCoord;
    private _flipHorizontalCoord;
}
