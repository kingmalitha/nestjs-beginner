import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ADMIN'], {
    message: 'Role must be either INTERN or ADMIN',
  })
  role: 'INTERN' | 'ADMIN';
}
