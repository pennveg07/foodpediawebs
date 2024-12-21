import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
