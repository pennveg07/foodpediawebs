import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  @UsePipes(ValidationPipe)
  async signIn(@Body() userDto: UserDto) {
    try {
      return await this.authService.signIn(userDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  @Get()
  testingApi(@Request() req: any) {
    return this.authService.getMe(req);
  }
}
