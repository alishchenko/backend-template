import { Request, Response } from 'express';
import * as resources from '../../../resources'
export async function ListUsers(req: Request, res: Response){
      const user: resources.User = {
            id: "1",
            type: "users",
            attributes: {
                  name: "John",
                  age: 32,
                  role: true,
                  createdAt: Date.now().toString()
            }
      }
      res.status(201).send(user)
};
  