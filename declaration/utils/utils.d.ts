import { ImageCandidate, VideoCandidate } from "../types";
export declare function merge(target: any, ...srcs: any[]): any;
export declare function toImageElement(image: ImageCandidate): HTMLImageElement | HTMLImageElement[];
export declare function toVideoElement(videoCandidate: VideoCandidate): HTMLVideoElement;
