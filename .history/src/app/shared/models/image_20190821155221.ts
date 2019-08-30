import { ImagePlacementEnum } from '../enums/image-placement-enum';

  
export class News {
    id: number;
    imagePlacement: ImagePlacementEnum;
    imageBase64Src: string;
}
