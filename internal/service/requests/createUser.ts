import { CreateUserFromJSONTyped, CreateUser } from '../../../resources';
import { Request } from 'express';

export function NewCreateUserRequest(r: Request): CreateUser {
  try {
    const request = CreateUserFromJSONTyped(r.body.data, true);
    return request;
        
  } catch (error) {
    return error;
  }
}
