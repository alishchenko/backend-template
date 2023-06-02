import { Request, Response } from 'express';
import DB from '../helpers/db';
import { ListUsersRequest, NewListUsersRequest } from '../requests/listUsers';
import { UserQ, userToResource } from '../../data';

export async function ListUsers(req: Request, res: Response){
  const request = NewListUsersRequest(req);
  const users = await applyFilterUserParams(request).Select();
  const userResources = users.map((user) => userToResource(user));
  res.status(200).send(userResources);
}
  
function applyFilterUserParams(params:ListUsersRequest): UserQ {
  const query =  DB.Users().New();
  if (params) {
    if (params.id) {
      query.FilterByID(params.id);
    }
    if (params.name) {
      query.FilterByName(params.name);
    }
    if (params.age) {
      query.FilterByAge(params.age);
    }
    if (params.role) {
      query.FilterByRole(params.role);
    }
  }
  return query;
}