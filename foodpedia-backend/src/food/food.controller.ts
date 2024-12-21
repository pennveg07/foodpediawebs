import { Body, Controller, Get, Post } from '@nestjs/common';
import { FoodService } from './food.service';
import { SearchFoodDto } from './dto/searchFood.dto';
import { CreateFoodDto } from './dto/createFood.dto';

@Controller('food')
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get('/')
  async findFood() {
    return this.foodService.findFood();
  }

  @Post('/searchfood')
  async searchFood(@Body() searchFoodDto: SearchFoodDto) {
    return this.foodService.searchFood(searchFoodDto);
  }
}
