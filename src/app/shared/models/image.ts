import { ImagePlacementEnum } from '../enums/image-placement-enum';

export class Image {
    id: number;
    imagePlacement: ImagePlacementEnum;
    imageBase64Src: string;
}
