import { Request, Response } from "express";
import DB from "../helpers/db";
import {NewCreateUserRequest} from '../requests/create_user'
export async function CreateUser(req: Request, res: Response) {
  const request = NewCreateUserRequest(req)
  if (!request) {

    res.status(400).send({message: request})
  }
  const createdAt = new Date
  try {
    const id = await DB.Users().Insert({
      id: undefined,
      role: request.attributes.role,
      age:  request.attributes.age,
      name:  request.attributes.name,
      created_at: createdAt
    })
  
    res.status(201).send({
      id: id,
      type: "users",
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({message: error})
  }
  
}
