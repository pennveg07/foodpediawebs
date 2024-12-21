import { IsNotEmpty } from "class-validator";

export class CreateFoodDto{
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly description: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly image: string;
}