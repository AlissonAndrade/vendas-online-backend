import { hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUserdto: CreateUserDto): Promise<User>{

        const saltOrRounds = 10;
        const passwordHash = await hash(createUserdto.password, saltOrRounds);
        console.log('passowordHas', passwordHash);

        const user: User = {
            ...createUserdto,
            id: this.users.length + 1,
            password: passwordHash
        };

        this.users.push(user);

        return user;

        
    }
    async getAllUsers(): Promise<User[]> {
        return this.users;
    }

}
