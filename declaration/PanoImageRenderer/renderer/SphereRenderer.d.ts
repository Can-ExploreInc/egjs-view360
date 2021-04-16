import Renderer from "./Renderer";
declare class SphereRenderer extends Renderer {
    private static _VERTEX_POSITION_DATA;
    private static _TEXTURE_COORD_DATA;
    private static _INDEX_DATA;
    private _stereoFormat;
    constructor(format: SphereRenderer["_stereoFormat"]);
    render(ctx: Parameters<Renderer["render"]>[0]): void;
    getVertexPositionData(): number[];
    getIndexData(): number[];
    getTextureCoordData(): number[];
    getVertexShaderSource(): string;
    getFragmentShaderSource(): string;
    updateTexture(gl: WebGLRenderingContext, image: HTMLImageElement | HTMLVideoElement): void;
    bindTexture(gl: WebGLRenderingContext, texture: WebGLTexture, image: HTMLImageElement | HTMLVideoElement): void;
}
export default SphereRenderer;
