import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/signup.dto';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const { email, password, username } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const payload = { sub: user.id, username: user.username };
    return {
      username: user.username,
      jwt: await this.jwtService.signAsync(payload),
    };
  }

  async signIn(signInDto: UserDto) {
    const { email, password } = signInDto;
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      username: user.username,
      jwt: await this.jwtService.signAsync(payload),
    };
  }

  async getMe(req: any) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: req.user.sub,
      },
      select: {
        email: true,
      },
    });
    return user;
  }
}
