import { User as UserResource, UserTypeEnum } from '../../resources'

export type User = {
  id?: number;
  role?: boolean;
  age?: number;
  name?: string;
  created_at?: Date;
}

// FIXME: does this function forms json-api response?

// Writing such function for each db entity is against DRY principle
// Think how to create template function that will be able to form json-api-resp
// from any object
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
  }
}