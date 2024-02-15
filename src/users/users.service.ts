import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Malitha Sandaruwan',
      email: 'malitha@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Kamal Perera',
      email: 'kamal@gmail.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Supun Lakmal',
      email: 'supun@gmail.com',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);

      if (rolesArray.length === 0) {
        throw new NotFoundException(`No users with role ${role} found`);
      }

      return rolesArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException(`User with ID ${id} not found`);

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = this.users.sort((a, b) => b.id - a.id);
    const newUserId = usersByHighestId[0].id + 1;

    const newUser = { id: newUserId, ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }
}
