import { Request, Response } from 'express';
import DB from '../helpers/db';
import { NewUserById } from '../requests/userById';
import { userToResource } from '../../data';

export async function GetUserById(req: Request, res: Response){
  const id = NewUserById(req);
  const user = await DB.Users().New().FilterByID([id]).Get();  
  if (typeof(user) === 'undefined') {    
    res.status(404).end();
    return;
  }
  res.status(200).send(userToResource(user));
}
  