import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const Role = z.enum(['COURIER', 'ADMIN', 'PARTNER'], {
  error: (issue) =>
    issue.input === undefined
      ? 'Role is required'
      : 'Invalid role. Must be one of: COURIER, ADMIN, PARTNER',
});

export const createUserSchema = z.object({
  email: z.email({ error: 'Please provide a valid email address' }),
  name: z
    .string({ error: 'Name is required' })
    .min(1, { error: 'Name is required' }),
  password: z
    .string({ error: 'Password is required' })
    .min(8, { error: 'Password must be at least 8 characters' }),
  role: Role,
});

export class CreateUserDto extends createZodDto(createUserSchema) {}
