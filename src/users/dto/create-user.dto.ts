import { Role } from '../../../generated/prisma/client.js';

export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  role: Role;
}
