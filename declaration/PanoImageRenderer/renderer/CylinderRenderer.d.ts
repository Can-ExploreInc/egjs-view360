import Renderer from "./Renderer";
declare class CylinderRenderer extends Renderer {
    private static _VERTEX_POSITION_DATA;
    private static _TEXTURE_COORD_DATA;
    private static _INDEX_DATA;
    getVertexPositionData(): number[];
    getIndexData(): number[];
    getTextureCoordData(): number[];
    getVertexShaderSource(): string;
    getFragmentShaderSource(): string;
    updateTexture(gl: WebGLRenderingContext, image: HTMLImageElement | HTMLVideoElement): void;
    bindTexture(gl: WebGLRenderingContext, texture: WebGLTexture, image: HTMLImageElement | HTMLVideoElement): void;
    updateShaderData({ imageAspectRatio }: {
        imageAspectRatio?: number;
    }): void;
}
export default CylinderRenderer;
