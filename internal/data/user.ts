import { User as UserResource, UserTypeEnum } from '../../resources';
export interface User {
  id?: number | undefined;
  role?: boolean;
  age?: number;
  name?: string;
  created_at?: Date;
}
export function userToResource(user: User): UserResource {
  return {
    id: user.id.toString(),
    type: UserTypeEnum.Users,
    attributes: {
      name: user.name,
      age: user.age,
      role: user.role,
      createdAt: user.created_at.toISOString(),
    },
  };
}