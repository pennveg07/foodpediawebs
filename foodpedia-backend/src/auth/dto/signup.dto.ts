import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  readonly username: string;
}
