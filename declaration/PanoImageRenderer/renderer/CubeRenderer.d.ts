import Renderer from "./Renderer";
import { CubemapConfig } from "../../types";
declare class CubeRenderer extends Renderer {
    private static _VERTEX_POSITION_DATA;
    private static _INDEX_DATA;
    static extractOrder(imageConfig: CubemapConfig): string;
    getVertexPositionData(): number[];
    getIndexData(): number[];
    getTextureCoordData(imageConfig: CubemapConfig): number[];
    getVertexShaderSource(): string;
    getFragmentShaderSource(): string;
    updateTexture(gl: WebGLRenderingContext, image: HTMLImageElement | HTMLVideoElement, imageConfig: CubemapConfig): void;
    bindTexture(gl: WebGLRenderingContext, texture: WebGLTexture, image: HTMLImageElement | HTMLVideoElement, imageConfig: CubemapConfig): void;
    getSourceTileSize(image: HTMLImageElement | HTMLVideoElement): any;
    extractTileFromImage(image: HTMLImageElement | HTMLVideoElement, tileIdx: number, outputTextureSize: number): HTMLCanvasElement;
    getMaxCubeMapTextureSize(gl: WebGLRenderingContext, image: HTMLImageElement | HTMLVideoElement): number;
}
export default CubeRenderer;
