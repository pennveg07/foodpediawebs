import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SearchFoodDto } from './dto/searchFood.dto';

@Injectable()
export class FoodService {
  constructor(private prisma: PrismaService) {}

  async findFood() {
    const findFood = await this.prisma.food.findMany();
    return findFood;
  }

  async searchFood(searchFoodDto: SearchFoodDto) {
    const { food_name } = searchFoodDto;
    console.log(food_name);

    const searchFood = await this.prisma.food.findMany({
      where: {
        title: { contains: food_name },
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        image: true,
        gofood: true,
      },
    });
    return searchFood;
  }
}
