export declare type ValueOf<T> = T[keyof T];
export declare type TileConfig = {
    flipHorizontal: boolean;
    rotation: number;
};
export interface CubemapConfig {
    order: string;
    tileConfig: TileConfig | TileConfig[];
}
export declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
export declare type Mutable<T extends object> = {
    -readonly [K in keyof T]: T[K];
};
export declare type ImageCandidate = HTMLImageElement | string | (HTMLImageElement | string)[];
export declare type VideoCandidate = HTMLVideoElement | string | {
    src: string;
    type: string;
} | (string | {
    src: string;
    type: string;
})[];
