import {IsString, IsEmail, Length} from 'class-validator';

export class CreateUserDto {
   
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(12)
    cpf: string;

    @IsString()
    password: string;

    @IsString()
    @Length(9)
    phone: string;

}